/* =========================================================================
   content.js — all copy, bilingual (zh = Traditional Chinese, en = English)
   window.SITE.t(lang) returns the dictionary; shared data on window.SITE.data
   ========================================================================= */
window.SITE = {
  data: {
    priceM: "9.38",
    priceFull: "HK$9,380,000",
    psf: "≈ HK$5,684",
    sqft: "1,650",
    beds: "4",
    suites: "2",
    parking: "2",
    floors: "3",
    photos: [
      { src: "assets/photos/p2.jpg", k: "living" },
      { src: "assets/photos/p4.jpg", k: "living2" },
      { src: "assets/photos/p8.jpg", k: "kitchen" },
      { src: "assets/photos/p3.jpg", k: "room" },
      { src: "assets/photos/p0.jpg", k: "utility" },
      { src: "assets/photos/p5.jpg", k: "terrace" },
      { src: "assets/photos/p6.jpg", k: "roof" },
      { src: "assets/photos/p7.jpg", k: "exterior" }
    ],
    coins: [
      { sym: "₮", name: "USDT", net: "Tether", color: "#26A17B" },
      { sym: "$", name: "USDC", net: "USD Coin", color: "#2775CA" },
      { sym: "₿", name: "BTC", net: "Bitcoin", color: "#F7931A" },
      { sym: "Ξ", name: "ETH", net: "Ethereum", color: "#627EEA" }
    ]
  },

  zh: {
    locale: "zh-Hant",
    nav: { house:"物業", area:"周邊", location:"位置", invest:"投資", crypto:"加密貨幣", faq:"常見問題", cta:"預約睇樓" },
    langLabel: "EN",
    hero: {
      badge: "獨立村屋 · 私家天台",
      kicker: "西貢 · 北港坳 2B",
      h1: ["你的西貢", "村屋生活"],
      sub: "群山環抱、面向西貢內海的三層獨立村屋。前後花園、雙車車庫、私家天台，環境清幽。",
      priceLabel: "叫價",
      psf: "實用呎價",
      stats: [
        { b:"1,650", s:"實用呎" },
        { b:"4 房", s:"連 2 套房" },
        { b:"3 層", s:"連天台" },
        { b:"2 車", s:"私家車庫" }
      ],
      ctaPrimary: "聯絡我們",
      ctaGhost: "索取物業資料",
      scroll: "向下了解周邊環境"
    },
    surround: {
      kicker: "先講周邊",
      h2: "西貢的後花園，門前即係生活。",
      p: "北港坳位處西貢／白沙灣一帶，遠離市區密度。咖啡店、海鮮、行山徑、沙灘同碼頭，全部喺十至十五分鐘生活圈內。",
      tiles: [
        { t:"行山徑", d:"屋後直上郊野，麥理浩徑近在隔籬。", pin:"10+ 條山徑", img:"assets/area/hike.jpg" },
        { t:"隱世沙灘", d:"大浪西灣、鹹田灣，水清沙幼。", pin:"6 個海灣", img:"assets/area/bay.jpg" },
        { t:"滑浪 · 水上活動", d:"出海、浮潛、跳島，玩足一日。", pin:"划艇・直立板", img:"assets/area/surf.jpg" },
        { t:"海島跳島", d:"橋咀洲連島沙洲，地質奇觀。", pin:"橋咀洲", img:"assets/area/island.jpg" },
        { t:"特色咖啡", d:"西貢市與白沙灣文青小店。", pin:"20+ cafés", img:"assets/area/cafe.jpg" },
        { t:"海邊露營 · 燒烤", d:"沙灘營火、星空帳篧。", pin:"全年營地", img:"assets/area/camp.jpg" },
        { t:"觀星夜空", d:"低光害夜空，抬頭數星。", pin:"天文公園", img:"assets/area/stars.jpg" },
        { t:"出海 · 遊艇", d:"白沙灣遊艇會，週末出海。", pin:"15 分鐘", img:"assets/area/beach.jpg" }
      ]
    },
    vibe: {
      kicker: "西貢生活",
      h2: "每一天，都是週末。",
      p: "晨早行山看日出，午後出海跳島，黃昏在沙灘生火，入夜抬頭數星 — 這就是北港坳的日常。"
    },
    lifestyle: {
      kicker: "生活方式",
      h2: "適合一家人 — 安全、乾淨、貼近大自然。",
      items: [
        { t:"安全社區", d:"低密度村屋社區，鄰里相熟，適合小朋友成長。" },
        { t:"清新空氣", d:"被郊野公園包圍，遠離市區繁囂與空氣污染。" },
        { t:"戶外空間", d:"前後花園加私家天台，種植、燒烤、玩樂、寵物皆宜。" },
        { t:"校網便利", d:"小學 95 校網、西貢中學校網，並有校巴接駁。" }
      ]
    },
    house: {
      kicker: "再講物業",
      h2: "三層獨立屋，間隔實用、空間充裕。",
      p: "由一個年輕家庭居住、用心愛護。地下大廳貫通飯廳與廚房，樓上四房連兩套房，天台坐擁西貢與群山全景。",
      galleryCaps: {
        living: { t:"大廳 / 飯廳", d:"連貫地下大廳，自然採光充足。" },
        living2:{ t:"客廳起居", d:"實用起居空間，適合家庭聚會。" },
        kitchen:{ t:"廚房", d:"實用廚房，可按喜好升級。" },
        room:   { t:"樓梯 / 房間", d:"靈活四房間隔，自住或工作皆宜。" },
        utility:{ t:"多用途房", d:"工作室、客房或儲物皆可。" },
        terrace:{ t:"露台 / 平台", d:"戶外平台，享受西貢陽光。" },
        roof:   { t:"私家天台", d:"飽覽西貢內海與群山景致。" },
        exterior:{ t:"獨立屋外觀", d:"北港坳清幽村屋環境。" }
      }
    },
    facts: {
      kicker: "物業資料",
      h2: "關鍵數字一覽。",
      rows: [
        { k:"地址", v:"新界西貢北港坳 2B 號" },
        { k:"叫價", v:"HK$938 萬", em:true },
        { k:"實用面積", v:"約 1,650 呎" },
        { k:"實用呎價", v:"約 HK$5,684 / 呎" },
        { k:"間隔", v:"4 房（連 2 套房）" },
        { k:"物業類型", v:"西貢獨立村屋 / 洋房" },
        { k:"樓層", v:"3 層連私家天台" },
        { k:"泊車", v:"私家車庫，可泊 2 車" },
        { k:"校網", v:"小學 95；中學西貢區" },
        { k:"村 / 區", v:"北港坳 · 白沙灣 / 西貢" }
      ]
    },
    why: {
      kicker: "物業賣點",
      h2: "點解值得入手。",
      items: [
        { t:"千萬以下的大空間", d:"叫價 HK$938 萬、實用約 1,650 呎，對比市區單位呎價更具價值。" },
        { t:"西貢清幽地段", d:"北港坳環境清靜、私隱度高，遠離高密度市區生活。" },
        { t:"四房兩套實用間隔", d:"靈活間隔，適合家庭、在家工作、客房或儲物。" },
        { t:"私隱高 · 戶外空間", d:"前後花園與私家天台，戶外生活空間充足。" },
        { t:"雙車車庫易泊", d:"私家車庫可泊兩車 — 村屋買家最重視的實用優勢。" }
      ]
    },
    location: {
      kicker: "位置與交通",
      h2: "遠離煩囂，卻處處方便。",
      p: "北港坳屬西貢白沙灣一帶村屋區，近西貢公路。駕車、小巴與巴士接駁市區與港鐵，往來便捷。",
      travelTitle: "車程估算",
      busTitle: "巴士 / 小巴接駁",
      mapNote: "示意圖 — 並非按比例繪製，實際路程請自行核實。"
    },
    invest: {
      kicker: "投資角度",
      h2: "自住理想，出租同樣搶手。",
      p: "鄰近多間大學與國際學校生活圈，西貢村屋一向受教職員、外籍家庭及換樓客歡迎，出租需求穩定。",
      stats: [
        { b:"千萬以下", s:"入場呎價吸引" },
        { b:"近大學", s:"科大等生活圈" },
        { b:"獨立屋", s:"租客需求穩定" }
      ],
      note: "以上為一般市場觀察，並非投資回報保證，買家應自行評估。"
    },
    crypto: {
      kicker: "彈性付款",
      h2: "接受加密貨幣付款。",
      p: "除傳統銀行交易外，本業主歡迎以穩定幣或主流加密貨幣商討付款安排。一切以雙方律師協議及合規程序為準。",
      coinNet: "可商討",
      foot: "USDT · USDC · BTC · ETH 及其他主流幣 — 具體安排及合規（如 KYC／來源證明）須由雙方律師處理。"
    },
    process: {
      kicker: "業主直售流程",
      h2: "由睇樓到成交，五步搞掂。",
      steps: [
        { t:"提交查詢", d:"留下姓名、聯絡電話及希望睇樓時間。" },
        { t:"索取資料", d:"誠意買家可索取物業資料包。" },
        { t:"預約睇樓", d:"睇樓只接受預約，親身視察物業。" },
        { t:"盡職審查", d:"自行委託律師、測量師、銀行及按揭顧問。" },
        { t:"正式成交", d:"雙方各自委託律師，處理正式買賣流程。" }
      ],
      agent: "如買家有代理代表，請於預約睇樓前清楚說明。"
    },
    faq: {
      kicker: "常見問題",
      h2: "你可能想問。",
      items: [
        { q:"叫價多少？", a:"HK$938 萬。" },
        { q:"面積多大？", a:"公開放盤資料顯示實用面積約 1,650 呎。所有面積數字應由買家透過律師、測量師及官方紀錄核實。" },
        { q:"有幾多間房？", a:"公開放盤資料顯示為 4 房，包括 2 套房。" },
        { q:"有泊車位嗎？", a:"物業設私家車庫，可泊兩車。實際泊車安排請於睇樓時核實。" },
        { q:"可以預約睇樓嗎？", a:"可以，只接受預約。請提供姓名、聯絡電話、買家身份及希望時間。" },
        { q:"接受加密貨幣付款嗎？", a:"歡迎商討以 USDT／USDC／BTC／ETH 等付款，最終安排及合規程序以雙方律師協議為準。" }
      ]
    },
    disclosure: {
      kicker: "重要提示",
      h2: "重要提示",
      p1: "本物業以業主直售形式出售。所有資料僅供一般參考，買家應自行核實。意向買家應親身視察物業，並在出價前諮詢獨立律師、測量師、按揭顧問及其他專業人士意見。",
      p2: "物業以現狀出售，實際買賣條款以買賣雙方最終協議為準。業權、土地、建築、改動及交易相關事項，應由買家律師及相關專業人士審閱。地段參考 D.D.222 地段第 1350 號，須由律師核實。"
    },
    contact: {
      title: "聯絡我們",
      sub: "歡迎透過以下任何方式直接聯絡，預約睇樓或索取資料。",
      methods: [
        { name:"WhatsApp", val:"即時訊息 · 預約睇樓", color:"#25D366", href:"https://wa.me/85200000000" },
        { name:"WeChat 微信", val:"掃碼或搜尋 ID 聯絡", color:"#07C160", href:"#" },
        { name:"Telegram", val:"即時訊息查詢", color:"#229ED9", href:"https://t.me/" },
        { name:"電郵 Email", val:"索取物業資料包", color:"var(--ink)", href:"mailto:hello@example.com" }
      ]
    },
    sticky: { price:"HK$938 萬", meta:"北港坳 2B · 1,650 呎 · 4 房雙車库", cta:"聯絡我們" },
    foot: { tag:"西貢北港坳 2B 號", rights:"所有資料僅供參考，買家須自行核實。物業以現狀出售，詳情應由買家律師審閱。", made:"西貢 · 北港坳" }
  },

  en: {
    locale: "en",
    nav: { house:"The House", area:"Surroundings", location:"Location", invest:"Investment", crypto:"Crypto", faq:"FAQ", cta:"Book a Viewing" },
    langLabel: "中",
    hero: {
      badge: "Detached house · Private rooftop",
      kicker: "Sai Kung · Pak Kong Au 2B",
      h1: ["Your Sai Kung", "village house"],
      sub: "A detached 3-storey village house wrapped in mountains, facing the Sai Kung inner sea. Front & back gardens, two-car garage, private rooftop — quiet and private.",
      priceLabel: "Asking",
      psf: "Per sq ft",
      stats: [
        { b:"1,650", s:"SQ FT SALEABLE" },
        { b:"4 Bed", s:"INCL. 2 SUITES" },
        { b:"3 Floors", s:"PLUS ROOFTOP" },
        { b:"2 Cars", s:"PRIVATE GARAGE" }
      ],
      ctaPrimary: "Contact",
      ctaGhost: "Request Details",
      scroll: "Scroll for the neighbourhood"
    },
    surround: {
      kicker: "The Surroundings First",
      h2: "Sai Kung is your backyard.",
      p: "Pak Kong Au sits in the Pak Sha Wan / Sai Kung area, away from urban density. Cafés, seafood, hiking trails, beaches and piers all sit within a 10–15 minute lifestyle radius.",
      tiles: [
        { t:"Hiking trails", d:"Country trails out the back — MacLehose next door.", pin:"10+ trails", img:"assets/area/hike.jpg" },
        { t:"Hidden beaches", d:"Sai Wan & Ham Tin — clear water, soft sand.", pin:"6 bays", img:"assets/area/bay.jpg" },
        { t:"Surf & watersports", d:"Sail, snorkel and island-hop all day.", pin:"Kayak · SUP", img:"assets/area/surf.jpg" },
        { t:"Island hopping", d:"Sharp Island tombolo & geo-wonders.", pin:"Sharp Island", img:"assets/area/island.jpg" },
        { t:"Local cafés", d:"Indie spots in town & Pak Sha Wan.", pin:"20+ cafés", img:"assets/area/cafe.jpg" },
        { t:"Beach camping & BBQ", d:"Campfires and tents under the stars.", pin:"Year-round", img:"assets/area/camp.jpg" },
        { t:"Starry skies", d:"Low light pollution — count the stars.", pin:"Astropark", img:"assets/area/stars.jpg" },
        { t:"Boating & marina", d:"Pak Sha Wan marina — set sail on weekends.", pin:"15 min", img:"assets/area/beach.jpg" }
      ]
    },
    vibe: {
      kicker: "The Sai Kung life",
      h2: "It's the weekend. Every day.",
      p: "Sunrise hikes, afternoon island-hopping, campfires on the sand, and a sky full of stars after dark — everyday life in Pak Kong Au."
    },
    lifestyle: {
      kicker: "The Lifestyle",
      h2: "Made for families — safe, clean, close to nature.",
      items: [
        { t:"Safe community", d:"Low-density village setting where neighbours know each other — great for kids." },
        { t:"Clean air", d:"Surrounded by country park, away from urban noise and pollution." },
        { t:"Outdoor space", d:"Front & back gardens plus a private rooftop — gardening, BBQ, play, pets." },
        { t:"School net", d:"Primary 95 & Sai Kung District secondary nets, with school-bus access." }
      ]
    },
    house: {
      kicker: "Now, The House",
      h2: "A detached 3-storey home with a practical, generous layout.",
      p: "Lived in and cared for by a young family. The ground floor flows from living to dining to kitchen; four bedrooms with two suites above; and a private rooftop with full Sai Kung and mountain views.",
      galleryCaps: {
        living: { t:"Living / Dining", d:"Open ground-floor living, full of natural light." },
        living2:{ t:"Lounge", d:"Practical living space for family and guests." },
        kitchen:{ t:"Kitchen", d:"Functional kitchen with scope for upgrades." },
        room:   { t:"Stair / Room", d:"Flexible four-bedroom layout for home or work." },
        utility:{ t:"Multi-use Room", d:"Studio, guest room or storage." },
        terrace:{ t:"Terrace", d:"Outdoor platform soaking up the Sai Kung sun." },
        roof:   { t:"Private Rooftop", d:"Sweeping views over the inner sea and mountains." },
        exterior:{ t:"Detached Exterior", d:"Quiet village setting in Pak Kong Au." }
      }
    },
    facts: {
      kicker: "Property Facts",
      h2: "The key numbers at a glance.",
      rows: [
        { k:"Address", v:"No. 2B, Pak Kong Au, Sai Kung, N.T." },
        { k:"Asking price", v:"HK$9.38M", em:true },
        { k:"Saleable area", v:"≈ 1,650 sq ft" },
        { k:"Price per sq ft", v:"≈ HK$5,684 / sq ft" },
        { k:"Layout", v:"4 bedrooms (incl. 2 suites)" },
        { k:"Property type", v:"Sai Kung detached village house" },
        { k:"Floors", v:"3 storeys + private rooftop" },
        { k:"Parking", v:"Private garage, 2 cars" },
        { k:"School net", v:"Primary 95; Sec. Sai Kung Dist." },
        { k:"Village / Area", v:"Pak Kong Au · Pak Sha Wan / Sai Kung" }
      ]
    },
    why: {
      kicker: "Why This House",
      h2: "Why it stands out.",
      items: [
        { t:"Space under HK$10M", d:"HK$9.38M for ≈ 1,650 sq ft — a low price-per-foot profile versus urban flats." },
        { t:"Quiet Sai Kung setting", d:"Pak Kong Au is calm and private, away from dense city living." },
        { t:"Practical 4-bed / 2-suite", d:"Flexible layout for family, work-from-home, guests or storage." },
        { t:"Privacy & outdoor space", d:"Front & back gardens plus a private rooftop for real outdoor living." },
        { t:"Two-car garage", d:"A private garage for two cars — the advantage village buyers prize most." }
      ]
    },
    location: {
      kicker: "Location & Access",
      h2: "Tucked away, yet well connected.",
      p: "Pak Kong Au is a village-house pocket in the Pak Sha Wan / Sai Kung area, just off Hiram's Highway. Car, minibus and bus links connect you to town and the MTR.",
      travelTitle: "Drive-time estimates",
      busTitle: "Bus / minibus links",
      mapNote: "Illustrative only — not to scale. Verify all routes and times independently."
    },
    invest: {
      kicker: "The Investment Case",
      h2: "Ideal to live in — and easy to let.",
      p: "Close to several universities and international-school catchments, Sai Kung village houses are consistently sought by faculty, expat families and up-sizers, supporting steady rental demand.",
      stats: [
        { b:"Sub-$10M", s:"ATTRACTIVE ENTRY" },
        { b:"Near unis", s:"HKUST & MORE" },
        { b:"Detached", s:"STEADY DEMAND" }
      ],
      note: "General market observations only — not a guarantee of returns. Buyers should assess independently."
    },
    crypto: {
      kicker: "Flexible Payment",
      h2: "We accept crypto.",
      p: "Beyond traditional bank transfers, the owner welcomes discussing payment in stablecoins or major cryptocurrencies — all subject to both sides' solicitors and proper compliance.",
      coinNet: "Open to discuss",
      foot: "USDT · USDC · BTC · ETH and other majors — exact arrangements and compliance (KYC / source-of-funds) handled by both sides' solicitors."
    },
    process: {
      kicker: "Owner-Direct Process",
      h2: "From viewing to completion, in five steps.",
      steps: [
        { t:"Submit an enquiry", d:"Send your name, contact number and preferred viewing time." },
        { t:"Request the pack", d:"Serious buyers can request the property information pack." },
        { t:"Book a viewing", d:"Viewings by appointment only — inspect the property in person." },
        { t:"Due diligence", d:"Engage your own solicitor, surveyor, bank and mortgage adviser." },
        { t:"Complete", d:"Each side instructs solicitors and agrees the formal process." }
      ],
      agent: "Buyer agents: if you are represented, please disclose this clearly before arranging a viewing."
    },
    faq: {
      kicker: "FAQ",
      h2: "You might be wondering.",
      items: [
        { q:"What is the asking price?", a:"HK$9.38M." },
        { q:"What is the size?", a:"Public listing data shows approximately 1,650 sq ft saleable area. Buyers should verify all area figures through their solicitor, surveyor and official records." },
        { q:"How many rooms are there?", a:"Public listing data shows 4 bedrooms, including 2 suites." },
        { q:"Is parking available?", a:"The property has a private garage for two cars. Please verify the exact arrangement during viewing." },
        { q:"Can I view the property?", a:"Yes, by appointment only. Please send your name, contact number, buyer status and preferred time." },
        { q:"Do you accept crypto?", a:"We're happy to discuss USDT / USDC / BTC / ETH and others; final arrangements and compliance are settled through both sides' solicitors." }
      ]
    },
    disclosure: {
      kicker: "Important Notes",
      h2: "Important notes",
      p1: "This property is offered on an owner-direct basis. All information is provided for general reference only and should be verified by the buyer. Interested buyers should inspect the property personally and seek independent legal, surveying, mortgage and professional advice before making any offer.",
      p2: "The property is sold on an as-is basis, subject to the terms agreed between buyer and seller. Title, land, building, alteration and transaction matters should be reviewed by the buyer's solicitor. Lot reference D.D. 222 Lot No. 1350 — to be verified by solicitors."
    },
    contact: {
      title: "Contact",
      sub: "Reach out directly through any channel below to book a viewing or request details.",
      methods: [
        { name:"WhatsApp", val:"Message · book a viewing", color:"#25D366", href:"https://wa.me/85200000000" },
        { name:"WeChat", val:"Scan or search ID to chat", color:"#07C160", href:"#" },
        { name:"Telegram", val:"Message us instantly", color:"#229ED9", href:"https://t.me/" },
        { name:"Email", val:"Request the information pack", color:"var(--ink)", href:"mailto:hello@example.com" }
      ]
    },
    sticky: { price:"HK$9.38M", meta:"Pak Kong Au 2B · 1,650 sq ft · 4 bed, 2-car", cta:"Contact" },
    foot: { tag:"2B Pak Kong Au, Sai Kung", rights:"All information for reference only; buyers must verify independently. Sold as-is — to be reviewed by the buyer's solicitor.", made:"Sai Kung · Pak Kong Au" }
  },

  t(lang){ return lang === "en" ? this.en : this.zh; }
};
