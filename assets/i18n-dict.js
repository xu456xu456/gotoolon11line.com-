<script>
// ============== /assets/i18n-dict.js — 全站多语言字典（9种语言） ==============
// 说明：
// 1) 公共文案：site/page/home，其中 home.* 供首页使用；
// 2) 工具命名空间：tool['工具slug']，每个至少提供 page.title/desc + 基本文案；
// 3) 没翻译的键会自动回落到英文（i18n-core.js 已处理）；随时可补充；
// 4) 语言列表：en, zh, ph(他加禄), id, vi, bn, ng(English-Nigeria), sw, ar。

window.I18N_DICT = {

  // ================= 公共：站点层（所有页面可用） =================
  en: {
    site: {
      brand: "GoToolOnline",
      langNames: {en:"English", zh:"简体中文", ph:"Tagalog", id:"Bahasa Indonesia", vi:"Tiếng Việt", bn:"বাংলা", ng:"English (NG)", sw:"Kiswahili", ar:"العربية"}
    },
    page: {
      title: "GoToolOnline — Free Online Tools",
      desc:  "Fast, free tools. Many work offline."
    },
    home: {
      hero: "All Tools — One Page (30+)",
      tip:  "Type to filter instantly. Click a chip to filter by category. More tools coming soon.",
      chips: {all:"All", cal:"Calculators", conv:"Converters", time:"Time", calend:"Calendars", utils:"Utilities", write:"Writing", dev:"Dev"},
      headings:{cal:"Calculators", conv:"Converters", time:"Time", calend:"Calendars", utils:"Utilities", write:"Writing", dev:"Developer"},
      quickLinks: ["Online Unit Converter","Free Currency Converter","World Time by Country/City","Countdown Timer","Stopwatch","JSON Formatter"],
      faq: {
        title:"FAQ",
        q1:"Are these tools free to use?", a1:"Yes. Tools are free with no sign-up.",
        q2:"Do they work offline?",       a2:"Most run locally in your browser. Currency converter supports manual rates offline.",
        q3:"How is my privacy protected?",a3:"Most inputs stay in your browser. See Privacy Policy.",
        q4:"Can I bookmark tools I use often?", a4:"Yes. Bookmark any tool page."
      },
      foot:"Free online tools for everyone",
      siteDesc:"30+ fast, free tools: calculators, unit & currency converters, world time, countdowns and stopwatches, printable calendars, writing and developer utilities. Many work offline."
    }
  },

  zh: {
    site: {
      brand: "GoToolOnline",
      langNames: {en:"English", zh:"简体中文", ph:"他加禄语", id:"印尼语", vi:"越南语", bn:"孟加拉语", ng:"英语(尼日利亚)", sw:"斯瓦西里语", ar:"العربية"}
    },
    page: {
      title: "GoToolOnline · 免费在线工具",
      desc:  "免费、小巧，加载后可离线。"
    },
    home: {
      hero: "全部工具 — 一页搞定（30+）",
      tip:  "提示：输入即可实时筛选；点击上方芯片按分类过滤。",
      chips: {all:"全部", cal:"计算器", conv:"换算", time:"时间", calend:"日历", utils:"工具", write:"写作", dev:"开发"},
      headings:{cal:"计算器", conv:"换算", time:"时间", calend:"日历", utils:"常用工具", write:"写作", dev:"开发者"},
      quickLinks: ["单位换算","货币换算","世界时间","倒计时","秒表","JSON 格式化"],
      faq: {
        title:"常见问题",
        q1:"这些工具免费吗？", a1:"免费，无需登录。",
        q2:"离线可用吗？",    a2:"页面加载后，多数工具可离线使用；货币换算可手动汇率。",
        q3:"隐私如何保障？",  a3:"通常在浏览器本地处理数据，详见隐私政策。",
        q4:"能收藏常用工具吗？", a4:"可以，把工具页加入浏览器书签即可。"
      },
      foot:"免费、实用、对隐私友好",
      siteDesc:"收纳 30+ 常用工具：计算器、单位/货币换算、世界时间、倒计时/秒表、可打印日历、写作与开发小工具。多数工具加载后离线可用。"
    }
  },

  ph: {
    site:{ brand:"GoToolOnline", langNames:{en:"English", zh:"简体中文", ph:"Tagalog", id:"Bahasa Indonesia", vi:"Tiếng Việt", bn:"বাংলা", ng:"English (NG)", sw:"Kiswahili", ar:"العربية"} },
    page:{ title:"GoToolOnline · Mga Libreng Tool", desc:"Mabilis, libre, at maraming offline." },
    home:{
      hero:"Lahat ng Tool — Isang Pahina",
      tip:"Mag-type para agad ma-filter. I-click ang chip ayon sa kategorya.",
      chips:{all:"Lahat", cal:"Kalkulador", conv:"Converter", time:"Oras", calend:"Kalendaryo", utils:"Utilities", write:"Pagsusulat", dev:"Dev"},
      headings:{cal:"Kalkulador", conv:"Converter", time:"Oras", calend:"Kalendaryo", utils:"Utilities", write:"Pagsusulat", dev:"Developer"},
      quickLinks:["Online Unit Converter","Libreng Currency Converter","World Time","Countdown Timer","Stopwatch","JSON Formatter"],
      faq:{ title:"FAQ",
        q1:"Libre ba?", a1:"Oo, walang sign-up.",
        q2:"Offline?",   a2:"Karamihan ay gumagana sa browser pagkatapos ma-load.",
        q3:"Privacy?",   a3:"Input ay nananatili sa browser.",
        q4:"Bookmark?",  a4:"Oo, i-bookmark lang ang pahina ng tool."
      },
      foot:"Libreng mga online na tool para sa lahat",
      siteDesc:"30+ mabilis at libreng tool: kalkulador, converter, oras, kalendaryo, pagsusulat at dev utilities."
    }
  },

  id: {
    site:{ brand:"GoToolOnline", langNames:{en:"English", zh:"简体中文", ph:"Tagalog", id:"Bahasa Indonesia", vi:"Tiếng Việt", bn:"বাংলা", ng:"English (NG)", sw:"Kiswahili", ar:"العربية"} },
    page:{ title:"GoToolOnline · Alat Online Gratis", desc:"Cepat, gratis, banyak yang offline." },
    home:{
      hero:"Semua Alat — Satu Halaman",
      tip:"Ketik untuk memfilter. Klik chip berdasarkan kategori.",
      chips:{all:"Semua", cal:"Kalkulator", conv:"Konverter", time:"Waktu", calend:"Kalender", utils:"Utilitas", write:"Penulisan", dev:"Dev"},
      headings:{cal:"Kalkulator", conv:"Konverter", time:"Waktu", calend:"Kalender", utils:"Utilitas", write:"Penulisan", dev:"Pengembang"},
      quickLinks:["Konverter Satuan","Konverter Mata Uang","Waktu Dunia","Hitung Mundur","Stopwatch","Formatter JSON"],
      faq:{ title:"FAQ",
        q1:"Gratis?", a1:"Ya, tanpa pendaftaran.",
        q2:"Offline?", a2:"Kebanyakan berjalan lokal setelah halaman dimuat.",
        q3:"Privasi?", a3:"Input tetap di browser.",
        q4:"Bookmark?", a4:"Ya, tandai halaman alat."
      },
      foot:"Alat online gratis untuk semua",
      siteDesc:"30+ alat cepat dan gratis: kalkulator, konverter, waktu, kalender, utilitas menulis & dev."
    }
  },

  vi: {
    site:{ brand:"GoToolOnline", langNames:{en:"English", zh:"简体中文", ph:"Tagalog", id:"Bahasa Indonesia", vi:"Tiếng Việt", bn:"বাংলা", ng:"English (NG)", sw:"Kiswahili", ar:"العربية"} },
    page:{ title:"GoToolOnline · Công cụ trực tuyến miễn phí", desc:"Nhanh, miễn phí, nhiều công cụ chạy offline." },
    home:{
      hero:"Tất cả công cụ — Một trang",
      tip:"Gõ để lọc ngay. Bấm chip theo nhóm.",
      chips:{all:"Tất cả", cal:"Máy tính", conv:"Chuyển đổi", time:"Thời gian", calend:"Lịch", utils:"Tiện ích", write:"Viết", dev:"Dev"},
      headings:{cal:"Máy tính", conv:"Chuyển đổi", time:"Thời gian", calend:"Lịch", utils:"Tiện ích", write:"Viết", dev:"Lập trình"},
      quickLinks:["Đổi đơn vị","Đổi tiền tệ","Giờ thế giới","Đếm ngược","Bấm giờ","Định dạng JSON"],
      faq:{ title:"FAQ",
        q1:"Miễn phí?", a1:"Có, không cần đăng nhập.",
        q2:"Offline?", a2:"Đa số chạy cục bộ sau khi tải trang.",
        q3:"Riêng tư?", a3:"Dữ liệu ở lại trình duyệt.",
        q4:"Bookmark?", a4:"Có, lưu trang công cụ."
      },
      foot:"Công cụ miễn phí cho mọi người",
      siteDesc:"Hơn 30 công cụ nhanh, miễn phí: máy tính, chuyển đổi, thời gian, lịch, viết & dev."
    }
  },

  bn: {
    site:{ brand:"GoToolOnline", langNames:{en:"English", zh:"简体中文", ph:"Tagalog", id:"Bahasa Indonesia", vi:"Tiếng Việt", bn:"বাংলা", ng:"English (NG)", sw:"Kiswahili", ar:"العربية"} },
    page:{ title:"GoToolOnline · ফ্রি অনলাইন টুলস", desc:"দ্রুত, ফ্রি, অনেক টুল অফলাইনে চলে।" },
    home:{
      hero:"সব টুল — এক পাতা",
      tip:"টাইপ করলেই ফিল্টার হবে; চিপে ক্লিক করে ক্যাটেগরি ফিল্টার করুন।",
      chips:{all:"সব", cal:"ক্যালকুলেটর", conv:"কনভার্টার", time:"সময়", calend:"ক্যালেন্ডার", utils:"ইউটিলিটি", write:"রাইটিং", dev:"ডেভ"},
      headings:{cal:"ক্যালকুলেটর", conv:"কনভার্টার", time:"সময়", calend:"ক্যালেন্ডার", utils:"ইউটিলিটি", write:"রাইটিং", dev:"ডেভেলপার"},
      quickLinks:["ইউনিট কনভার্টার","কারেন্সি কনভার্টার","বিশ্ব সময়","কাউন্টডাউন","স্টপওয়াচ","JSON ফরম্যাটার"],
      faq:{ title:"FAQ",
        q1:"ফ্রি?", a1:"হ্যাঁ, সাইন-আপ লাগবে না।",
        q2:"অফলাইন?", a2:"পেজ লোডের পর বেশিরভাগ টুল অফলাইনে চলে।",
        q3:"প্রাইভেসি?", a3:"ইনপুট ব্রাউজারেই থাকে।",
        q4:"বুকমার্ক?", a4:"হ্যাঁ, টুল পেজ বুকমার্ক করুন।"
      },
      foot:"সবার জন্য ফ্রি অনলাইন টুলস",
      siteDesc:"৩০+ দ্রুত ও ফ্রি টুলস: ক্যালকুলেটর, কনভার্টার, সময়, ক্যালেন্ডার, রাইটিং ও ডেভ ইউটিলিটি।"
    }
  },

  ng: { // English (Nigeria)
    site:{ brand:"GoToolOnline", langNames:{en:"English", zh:"简体中文", ph:"Tagalog", id:"Bahasa Indonesia", vi:"Tiếng Việt", bn:"বাংলা", ng:"English (NG)", sw:"Kiswahili", ar:"العربية"} },
    page:{ title:"GoToolOnline — Free Tools (Nigeria)", desc:"Fast, free tools for Nigeria & beyond." },
    home:{
      hero:"All Tools — One Page",
      tip:"Type to filter. Click a chip to filter by category.",
      chips:{all:"All", cal:"Calculators", conv:"Converters", time:"Time", calend:"Calendars", utils:"Utilities", write:"Writing", dev:"Dev"},
      headings:{cal:"Calculators", conv:"Converters", time:"Time", calend:"Calendars", utils:"Utilities", write:"Writing", dev:"Developer"},
      quickLinks:["Online Unit Converter","Free Currency Converter","World Time","Countdown Timer","Stopwatch","JSON Formatter"],
      faq:{ title:"FAQ",
        q1:"Free?", a1:"Yes, no sign-up.",
        q2:"Offline?", a2:"Most work after first load.",
        q3:"Privacy?", a3:"Inputs stay in your browser.",
        q4:"Bookmark?", a4:"Yes, bookmark tool pages."
      },
      foot:"Free tools for everyone",
      siteDesc:"30+ fast, free tools: calculators, converters, time, calendars, writing & dev utilities."
    }
  },

  sw: {
    site:{ brand:"GoToolOnline", langNames:{en:"English", zh:"简体中文", ph:"Tagalog", id:"Bahasa Indonesia", vi:"Tiếng Việt", bn:"বাংলা", ng:"English (NG)", sw:"Kiswahili", ar:"العربية"} },
    page:{ title:"GoToolOnline · Zana Mtandaoni Bure", desc:"Haraka, bure; nyingi hufanya kazi bila mtandao." },
    home:{
      hero:"Zana Zote — Ukurasa Mmoja",
      tip:"Andika ili kuchuja mara moja. Bofya chip kwa kundi.",
      chips:{all:"Zote", cal:"Kalkuleta", conv:"Vigeuzi", time:"Muda", calend:"Kalenda", utils:"Zana", write:"Uandishi", dev:"Dev"},
      headings:{cal:"Kalkuleta", conv:"Vigeuzi", time:"Muda", calend:"Kalenda", utils:"Zana", write:"Uandishi", dev:"Msanidi"},
      quickLinks:["Kigeuzi cha Vitengo","Kigeuzi cha Sarafu","Saa za Dunia","Kipima Muda","Stopwatch","Mpangilia JSON"],
      faq:{ title:"Maswali",
        q1:"Bure?", a1:"Ndiyo, bila kujiandikisha.",
        q2:"Offline?", a2:"Nyingi hufanya kazi baada ya kupakia ukurasa.",
        q3:"Faragha?", a3:"Ingizo hubaki kwenye kivinjari.",
        q4:"Alamisho?", a4:"Ndiyo, weka alamisho kwa ukurasa wa zana."
      },
      foot:"Zana za mtandaoni bure kwa wote",
      siteDesc:"Zana 30+ za haraka na bure: kalkuleta, vigeuzi, muda, kalenda, uandishi na zana za msanidi."
    }
  },

  ar: {
    site:{ brand:"GoToolOnline", langNames:{en:"English", zh:"简体中文", ph:"Tagalog", id:"Bahasa Indonesia", vi:"Tiếng Việt", bn:"বাংলা", ng:"English (NG)", sw:"Kiswahili", ar:"العربية"} },
    page:{ title:"GoToolOnline · أدوات مجانية على الإنترنت", desc:"سريعة ومجانية، وكثير منها يعمل دون اتصال." },
    home:{
      hero:"كل الأدوات — صفحة واحدة",
      tip:"اكتب للتصفية فورًا. انقر على الشارة حسب الفئة.",
      chips:{all:"الكل", cal:"حاسبات", conv:"محولات", time:"الوقت", calend:"تقويمات", utils:"أدوات", write:"كتابة", dev:"للمطور"},
      headings:{cal:"حاسبات", conv:"محولات", time:"الوقت", calend:"تقويمات", utils:"أدوات", write:"كتابة", dev:"للمطور"},
      quickLinks:["محوّل الوحدات","محوّل العملات","الوقت حول العالم","مؤقت العد التنازلي","ساعة الإيقاف","منسّق JSON"],
      faq:{ title:"الأسئلة الشائعة",
        q1:"مجاني؟", a1:"نعم، بدون تسجيل.",
        q2:"دون اتصال؟", a2:"تعمل معظم الأدوات محليًا بعد التحميل الأول.",
        q3:"الخصوصية؟", a3:"تبقى المدخلات داخل المتصفح.",
        q4:"الإشارات المرجعية؟", a4:"نعم، أضف صفحة الأداة للمفضلة."
      },
      foot:"أدوات مجانية للجميع",
      siteDesc:"أكثر من 30 أداة سريعة ومجانية: حاسبات، محولات، الوقت، التقويمات، الكتابة وأدوات المطور."
    }
  },

  // ================= 工具命名空间（按 slug；只要你页面 body 写 data-tool="slug" 即可） =================
  // 提供最常用 15 个作为起步；其余可以照格式自增。只要写了 page.title/desc，就能先拿到 SEO 本地化。
  en: { tool: {
    'unit-converter': {
      page:{ title:'Unit Converter · GoToolOnline', desc:'Convert units across 18 categories and 300+ units. Works offline.' },
      title:'Unit Converter', intro:'Convert units across 18 categories and 300+ units. Works offline in your browser.',
      from:'From', to:'To', btnRun:'Swap', search:'Search units…',
      faqTitle:'FAQ', q1:'Is the converter free?', a1:'Yes, it runs locally.', q2:'Offline?', a2:'Works after first load.'
    },
    'currency-converter': {
      page:{ title:'Currency Converter · GoToolOnline', desc:'Live FX and manual rates. Works offline with manual rates.' },
      title:'Currency Converter', intro:'Live FX when online; manual rates offline. No data leaves your browser.',
      amount:'Amount', from:'From', to:'To', btnConvert:'Convert'
    },
    'timezone-converter': {
      page:{ title:'World Time (by Country) · GoToolOnline', desc:'See local time across countries and cities.' },
      title:'World Time (by Country)', intro:'Check local time quickly by country or city.'
    },
    'countdown-timer': {
      page:{ title:'Countdown Timer · GoToolOnline', desc:'Simple online countdown timer.' },
      title:'Countdown Timer', intro:'Start a quick countdown in your browser.'
    },
    'stopwatch': {
      page:{ title:'Stopwatch · GoToolOnline', desc:'Online stopwatch with millisecond precision.' },
      title:'Stopwatch', intro:'Measure elapsed time, laps & splits.'
    },
    'week-number-finder': {
      page:{ title:'Week Number Finder · GoToolOnline', desc:'Find ISO week number from a date.' },
      title:'Week Number Finder', intro:'Get ISO week for any date.'
    },
    'printable-2026-calendar': {
      page:{ title:'Printable Calendar · GoToolOnline', desc:'PDF-ready monthly pages.' },
      title:'Printable Calendar', intro:'Neat monthly pages ready for print/PDF.'
    },
    'unix-timestamp': {
      page:{ title:'Unix Timestamp Converter · GoToolOnline', desc:'Convert epoch time to local/UTC and back.' },
      title:'Unix Timestamp Converter', intro:'Epoch ↔ Local / UTC.'
    },
    'password-generator': {
      page:{ title:'Password Generator · GoToolOnline', desc:'Create strong random passwords.' },
      title:'Password Generator', intro:'Generate secure passwords locally.'
    },
    'ip-lookup': {
      page:{ title:'IP Address Lookup · GoToolOnline', desc:'Show your public IP address.' },
      title:'IP Address Lookup', intro:'See your public IP quickly.'
    },
    'random-number-generator': {
      page:{ title:'Random Number Generator · GoToolOnline', desc:'Generate random numbers securely when available.' },
      title:'Random Number Generator', intro:'Use secure RNG when available.'
    },
    'qr-code-generator': {
      page:{ title:'QR Code Generator · GoToolOnline', desc:'Create QR codes in your browser.' },
      title:'QR Code Generator', intro:'Generate QR from text or links.'
    },
    'color-picker': {
      page:{ title:'Color Picker · GoToolOnline', desc:'Pick and copy hex color codes.' },
      title:'Color Picker', intro:'Pick & copy HEX/RGB quickly.'
    },
    'qr-code-scanner': {
      page:{ title:'QR Code Scanner · GoToolOnline', desc:'Scan QR via camera or image.' },
      title:'QR Code Scanner', intro:'Scan using camera or upload.'
    },
    'palette-extractor': {
      page:{ title:'Palette from Image · GoToolOnline', desc:'Extract dominant colors from an image.' },
      title:'Palette from Image', intro:'Grab colors from images.'
    },
    'lottery-number-generator': {
      page:{ title:'Lottery Number Generator · GoToolOnline', desc:'For entertainment only.' },
      title:'Lottery Number Generator', intro:'Random picks (entertainment only).'
    },
    'word-counter': {
      page:{ title:'Word Counter · GoToolOnline', desc:'Count words and characters.' },
      title:'Word Counter', intro:'Words & characters counter.'
    },
    'character-counter': {
      page:{ title:'Character Counter · GoToolOnline', desc:'Counts all characters.' },
      title:'Character Counter', intro:'Count all characters instantly.'
    },
    'text-case-converter': {
      page:{ title:'Text Case Converter · GoToolOnline', desc:'UPPER / lower / Title case.' },
      title:'Text Case Converter', intro:'Switch between common cases.'
    },
    'url-encoder-decoder': {
      page:{ title:'URL Encoder / Decoder · GoToolOnline', desc:'Encode / decode URLs locally.' },
      title:'URL Encoder / Decoder', intro:'Safely encode and decode URL strings.'
    },
    'json-formatter': {
      page:{ title:'JSON Formatter · GoToolOnline', desc:'Validate & pretty-print JSON locally.' },
      title:'JSON Formatter / Validator', intro:'Validate and pretty-print JSON.',
      placeholderInput:'Paste JSON here…', btnFormat:'Format'
    },
    'html-minifier': {
      page:{ title:'HTML Minifier (Basic) · GoToolOnline', desc:'Collapse whitespace in HTML.' },
      title:'HTML Minifier (Basic)', intro:'Minify basic HTML safely.'
    },
    'base64-encoder': {
      page:{ title:'Base64 Encoder / Decoder · GoToolOnline', desc:'Convert text ⇄ Base64 locally.' },
      title:'Base64 Encoder / Decoder', intro:'Encode/Decode Base64 in browser.'
    },
    'hash-generator': {
      page:{ title:'SHA-256 Hash Generator · GoToolOnline', desc:'Generate SHA-256 hashes with WebCrypto.' },
      title:'SHA-256 Hash Generator', intro:'Compute hashes using WebCrypto.'
    },
    'jwt-decoder': {
      page:{ title:'JWT Decoder · GoToolOnline', desc:'Decode JSON Web Tokens locally.' },
      title:'JWT Decoder', intro:'Decode header & payload locally.'
    }
  }},

  zh: { tool: {
    'unit-converter': {
      page:{ title:'单位换算器 · GoToolOnline', desc:'覆盖 18 类、300+ 单位。页面加载后离线可用。' },
      title:'单位换算器', intro:'覆盖 18 类、300+ 单位；在浏览器本地运行。',
      from:'从', to:'到', btnRun:'交换', search:'搜索单位…',
      faqTitle:'常见问题', q1:'免费吗？', a1:'免费，且本地运行。', q2:'离线可用吗？', a2:'首次加载后可离线。'
    },
    'currency-converter': {
      page:{ title:'货币换算 · GoToolOnline', desc:'在线汇率 + 手动汇率；离线也能用（手动）。' },
      title:'货币换算', intro:'联网用实时汇率；离线可手动输入汇率。'
    },
    'timezone-converter': {
      page:{ title:'世界时间（按国家）· GoToolOnline', desc:'快速查看各国/城市当地时间。' },
      title:'世界时间（按国家）', intro:'按国家或城市快速查看当地时间。'
    },
    'countdown-timer': {
      page:{ title:'倒计时 · GoToolOnline', desc:'简单好用的在线倒计时。' },
      title:'倒计时', intro:'在浏览器里快速开始倒计时。'
    },
    'stopwatch': {
      page:{ title:'秒表 · GoToolOnline', desc:'在线秒表，支持圈/段。' },
      title:'秒表', intro:'测量用时，支持圈数与分段。'
    },
    'week-number-finder': {
      page:{ title:'周数查询 · GoToolOnline', desc:'从日期查询 ISO 周序号。' },
      title:'周数查询', intro:'任意日期的 ISO 周。'
    },
    'printable-2026-calendar': {
      page:{ title:'可打印日历 · GoToolOnline', desc:'适合 PDF/打印的月历页面。' },
      title:'可打印日历', intro:'简洁月历，打印/PDF 友好。'
    },
    'unix-timestamp': {
      page:{ title:'Unix 时间戳转换 · GoToolOnline', desc:'Epoch 与 本地/UTC 互转。' },
      title:'Unix 时间戳转换', intro:'Epoch ↔ 本地 / UTC。'
    },
    'password-generator': {
      page:{ title:'密码生成器 · GoToolOnline', desc:'生成强随机密码。' },
      title:'密码生成器', intro:'在本地生成安全密码。'
    },
    'ip-lookup': {
      page:{ title:'IP 查询 · GoToolOnline', desc:'查看你的公网 IP。' },
      title:'IP 查询', intro:'快速查看公网 IP。'
    },
    'random-number-generator': {
      page:{ title:'随机数生成器 · GoToolOnline', desc:'在可用时使用安全 RNG。' },
      title:'随机数生成器', intro:'有安全 RNG 时自动启用。'
    },
    'qr-code-generator': {
      page:{ title:'二维码生成 · GoToolOnline', desc:'在浏览器内创建二维码。' },
      title:'二维码生成', intro:'文本/链接一键生成二维码。'
    },
    'color-picker': {
      page:{ title:'取色器 · GoToolOnline', desc:'选择并复制 HEX 颜色。' },
      title:'取色器', intro:'快速拾取并复制 HEX/RGB。'
    },
    'qr-code-scanner': {
      page:{ title:'二维码识别 · GoToolOnline', desc:'摄像头或图片扫码。' },
      title:'二维码识别', intro:'用摄像头扫描或上传识别。'
    },
    'palette-extractor': {
      page:{ title:'图片取色板 · GoToolOnline', desc:'提取图像主色。' },
      title:'图片取色板', intro:'从图片中提取主色调。'
    },
    'lottery-number-generator': {
      page:{ title:'乐透号码生成 · GoToolOnline', desc:'仅供娱乐。' },
      title:'乐透号码生成', intro:'随机号码（仅供娱乐）。'
    },
    'word-counter': {
      page:{ title:'字数统计 · GoToolOnline', desc:'统计词数与字符数。' },
      title:'字数统计', intro:'快速统计文本长度。'
    },
    'character-counter': {
      page:{ title:'字符统计 · GoToolOnline', desc:'统计所有字符。' },
      title:'字符统计', intro:'实时统计全部字符。'
    },
    'text-case-converter': {
      page:{ title:'大小写转换 · GoToolOnline', desc:'UPPER / lower / Title。' },
      title:'大小写转换', intro:'常见大小写间快速切换。'
    },
    'url-encoder-decoder': {
      page:{ title:'URL 编解码 · GoToolOnline', desc:'本地对 URL 进行编码/解码。' },
      title:'URL 编解码', intro:'安全地处理 URL 字符串。'
    },
    'json-formatter': {
      page:{ title:'JSON 格式化器 · GoToolOnline', desc:'本地校验并美化 JSON。' },
      title:'JSON 格式化 / 校验', intro:'在浏览器本地校验与美化 JSON。',
      placeholderInput:'把 JSON 粘贴到这里…', btnFormat:'格式化'
    },
    'html-minifier': {
      page:{ title:'HTML 压缩 · GoToolOnline', desc:'折叠空白，基础安全压缩。' },
      title:'HTML 压缩（基础）', intro:'安全压缩基础 HTML。'
    },
    'base64-encoder': {
      page:{ title:'Base64 编解码 · GoToolOnline', desc:'文本 ⇄ Base64 本地转换。' },
      title:'Base64 编解码', intro:'无需上传，直接本地转换。'
    },
    'hash-generator': {
      page:{ title:'SHA-256 摘要 · GoToolOnline', desc:'使用 WebCrypto 计算摘要。' },
      title:'SHA-256 摘要', intro:'在浏览器本地计算哈希。'
    },
    'jwt-decoder': {
      page:{ title:'JWT 解析 · GoToolOnline', desc:'本地解析 JSON Web Token。' },
      title:'JWT 解析', intro:'解析 header 与 payload（本地）。'
    }
  }},

  // 其余语言（ph/id/vi/bn/ng/sw/ar）下的 tool.* 如果暂时缺失，会自动回落到英文；
  // 你可以按需逐步把常用工具复制过去翻译，格式完全照 en/zh 的写法。

};
</script>
