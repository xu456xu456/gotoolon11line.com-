<script>
/*! i18n-core.js — cookie 切语言 + ?lang/#lang + data-i18n 自动本地化 + SEO + RTL + 语言按钮
   用法：
   1) 在 <head> 里先定义 window.I18N_DICT（站点公共+各工具文本），再加载本文件；
   2) <body data-tool="unit-converter"> 指出当前工具标识；
   3) 页面元素加 data-i18n="键"，需要改属性的再加 data-i18n-attr="placeholder,title,aria-label"；
   4) 可放一个 <nav id="langbar"></nav>，没有也行，脚本会自动插在 header 右侧。
*/
(function(){
  // ===== 语言选择：URL参数/哈希 > Cookie > 浏览器语言 =====
  var LANGS = ['en','zh','ph','id','vi','bn','ng','sw','ar'];
  var MAP_BROWSER = {en:'en',tl:'ph',fil:'ph',id:'id',vi:'vi',bn:'bn',sw:'sw',ar:'ar',zh:'zh','zh-cn':'zh','zh-hans':'zh'};
  function getCookie(name){ return ('; '+document.cookie).split('; '+name+'=').pop().split(';')[0]||''; }
  function pickLang(){
    var url = new URL(location.href);
    var q = (url.searchParams.get('lang')||'').toLowerCase();
    var h = ((location.hash.match(/(?:^|[?#&])lang=([a-z-]+)/i)||[])[1]||'').toLowerCase();
    var urlLang = q || h;
    var ck = getCookie('lang');
    var nav = (navigator.language||'en').toLowerCase();
    var lang = 'en';
    if (urlLang && LANGS.includes(urlLang)) { lang = urlLang; document.cookie='lang='+lang+';path=/;max-age=31536000'; }
    else if (ck && LANGS.includes(ck)) { lang = ck; }
    else { lang = MAP_BROWSER[nav] || MAP_BROWSER[nav.split('-')[0]] || 'en'; }
    return lang;
  }
  var lang = pickLang();
  // ===== HTML lang/dir =====
  if (lang==='ar') document.documentElement.dir='rtl';
  document.documentElement.lang = (lang==='ph'?'tl':(lang==='ng'?'en':lang));

  // ===== 字典合并：站点公共 + 当前工具（通过 body[data-tool]） =====
  var tool = (document.body.getAttribute('data-tool')||'').trim();
  var dict = (window.I18N_DICT||{});
  function deepGet(obj, path){
    if (!obj) return undefined;
    var cur=obj; var parts = path.split('.');
    for (var i=0;i<parts.length;i++){ if (cur==null) return undefined; cur = cur[parts[i]]; }
    return cur;
  }
  function t(key, fallback){
    var val = deepGet(dict, lang+'.'+key);
    if (val==null) val = deepGet(dict, 'en.'+key);
    return (val!=null) ? val : (fallback||'');
  }
  function applyText(el, val, attrList){
    if (!el || val==null) return;
    if (!attrList){ el.innerHTML = val; return; }
    attrList.split(',').forEach(function(a){
      a=a.trim(); if(!a) return;
      if (a==='text') el.textContent=val;
      else el.setAttribute(a, val);
    });
  }

  // ===== 自动本地化：遍历 data-i18n =====
  function localize(){
    // 页面 title/description/OG
    var pageTitle = t('page.title') || document.title;
    var pageDesc  = t('page.desc')  || '';
    document.title = pageTitle;
    function ensureMeta(name,content){
      if(!content) return;
      var m=document.querySelector('meta[name="'+name+'"]');
      if(!m){ m=document.createElement('meta'); m.setAttribute('name',name); document.head.appendChild(m); }
      m.setAttribute('content',content);
    }
    function ensureOG(prop,content){
      if(!content) return;
      var m=document.querySelector('meta[property="og:'+prop+'"]');
      if(!m){ m=document.createElement('meta'); m.setAttribute('property','og:'+prop); document.head.appendChild(m); }
      m.setAttribute('content',content);
    }
    ensureMeta('description', pageDesc);
    ensureOG('title', pageTitle); ensureOG('description', pageDesc);

    // data-i18n 元素
    document.querySelectorAll('[data-i18n]').forEach(function(el){
      var key = el.getAttribute('data-i18n');
      var attr = el.getAttribute('data-i18n-attr'); // e.g. "placeholder,title" or "text"
      // 支持工具命名空间：优先 tool.key，其次通用 key
      var val = tool ? t('tool.'+tool+'.'+key) : null;
      if (val==null) val = t(key);
      if (val==null) return;
      applyText(el, val, attr);
    });

    // 年份
    var y=document.getElementById('y'); if(y) y.textContent=new Date().getFullYear();
  }

  // ===== 语言按钮：#langbar 若不存在，自动插到 header 末尾 =====
  function renderLangBar(){
    var bar = document.getElementById('langbar');
    if(!bar){
      var header=document.querySelector('header, .header, [role="banner"]');
      if(header){
        bar=document.createElement('nav'); bar.id='langbar';
        bar.style.display='flex'; bar.style.flexWrap='wrap'; bar.style.gap='8px'; bar.style.marginLeft='auto';
        header.appendChild(bar);
      }
    }
    if(!bar) return;
    bar.innerHTML='';
    var names = t('site.langNames') || {en:'English',zh:'简体中文',ph:'Tagalog',id:'Bahasa Indonesia',vi:'Tiếng Việt',bn:'বাংলা',ng:'English (NG)',sw:'Kiswahili',ar:'العربية'};
    LANGS.forEach(function(code){
      var a=document.createElement('a'); a.href='javascript:void(0)'; a.textContent = names[code] || code;
      a.style.cssText='padding:6px 10px;border:1px solid #24365b;background:#0f1a2f;border-radius:999px;text-decoration:none;color:inherit;font-size:14px';
      if(code===lang){ a.style.borderColor='#4fb3ff'; a.style.boxShadow='0 0 0 3px rgba(79,179,255,.18)'; }
      a.addEventListener('click', function(){ document.cookie='lang='+code+';path=/;max-age=31536000'; location.reload(); });
      bar.appendChild(a);
    });
  }

  // ===== 启动 =====
  renderLangBar();
  localize();

  // ===== 暴露个切换函数（可在控制台 setLang('zh')） =====
  window.setLang = function(code){
    if (!LANGS.includes(code)) return;
    document.cookie='lang='+code+';path=/;max-age=31536000';
    location.reload();
  };
})();
</script>
