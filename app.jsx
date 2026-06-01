/* =========================================================================
   app.jsx — 2B Pak Kong Au owner-direct single-page site
   ========================================================================= */
const { useState, useEffect, useRef } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "natural",
  "accent": "default",
  "corners": "soft"
}/*EDITMODE-END*/;

const ACCENTS = {
  default: null,
  forest:  ["oklch(0.50 0.072 152)","oklch(0.36 0.07 152)","oklch(0.93 0.03 150)"],
  clay:    ["oklch(0.585 0.082 55)","oklch(0.45 0.07 50)","oklch(0.93 0.035 60)"],
  ocean:   ["oklch(0.555 0.084 232)","oklch(0.43 0.08 240)","oklch(0.93 0.035 232)"],
  bronze:  ["oklch(0.545 0.062 62)","oklch(0.42 0.06 62)","oklch(0.93 0.028 70)"]
};

/* ===================================================================== */
function App(){
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const initialLang = (()=>{ try{ const p=new URLSearchParams(location.search).get('lang'); if(p==='en'||p==='zh') return p; }catch(e){} return 'zh'; })();
  const [lang, setLang] = useState(initialLang);
  const [faq, setFaq] = useState(0);
  const [contact, setContact] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [light, setLight] = useState(null);
  const C = window.SITE.t(lang);
  const D = window.SITE.data;

  /* apply theme + accent + corners to <html> */
  useEffect(()=>{
    const r = document.documentElement;
    r.setAttribute('data-theme', t.theme || 'natural');
    r.setAttribute('data-lang', lang);
    r.lang = C.locale;
    const a = ACCENTS[t.accent];
    if(a){ r.style.setProperty('--accent',a[0]); r.style.setProperty('--accent-ink',a[1]); r.style.setProperty('--accent-soft',a[2]); }
    else { r.style.removeProperty('--accent'); r.style.removeProperty('--accent-ink'); r.style.removeProperty('--accent-soft'); }
    if(t.corners==='sharp'){ r.style.setProperty('--radius','2px'); r.style.setProperty('--radius-lg','3px'); }
    else { r.style.removeProperty('--radius'); r.style.removeProperty('--radius-lg'); }
  },[t.theme,t.accent,t.corners,lang]);

  /* sticky cta after hero */
  useEffect(()=>{
    const onScroll = ()=> setSticky(window.scrollY > 680);
    window.addEventListener('scroll', onScroll, {passive:true});
    return ()=> window.removeEventListener('scroll', onScroll);
  },[]);

  const photo = (k)=> D.photos.find(p=>p.k===k)?.src;
  const scrollTo = (id)=>{ setNavOpen(false); document.getElementById(id)?.scrollIntoView({behavior:'smooth'}); };

  return (
    <>
      <Nav C={C} lang={lang} setLang={setLang} onContact={()=>setContact(true)} scrollTo={scrollTo} navOpen={navOpen} setNavOpen={setNavOpen}/>
      <Hero C={C} D={D} onContact={()=>setContact(true)} scrollTo={scrollTo}/>
      <Surroundings C={C}/>
      <VibeLifestyle C={C}/>
      <House C={C} photo={photo} onOpen={setLight}/>
      <HouseFacts C={C} D={D}/>
      <Location C={C} lang={lang}/>
      <Invest C={C}/>
      <Crypto C={C} D={D}/>
      <Faq C={C} faq={faq} setFaq={setFaq}/>
      <Footer C={C} onContact={()=>setContact(true)}/>

      <StickyCta C={C} show={sticky && !contact} onContact={()=>setContact(true)}/>
      <ContactModal C={C} open={contact} onClose={()=>setContact(false)}/>
      <Lightbox src={light} onClose={()=>setLight(null)}/>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Aesthetic theme"/>
        <TweakRadio label="Theme" value={t.theme} options={['natural','ink','coastal']} onChange={v=>setTweak('theme',v)}/>
        <TweakSection label="Accent"/>
        <TweakRadio label="Accent" value={t.accent} options={['default','forest','clay','ocean','bronze']} onChange={v=>setTweak('accent',v)}/>
        <TweakSection label="Detail"/>
        <TweakRadio label="Corners" value={t.corners} options={['soft','sharp']} onChange={v=>setTweak('corners',v)}/>
      </TweaksPanel>
    </>
  );
}

/* ---- NAV -------------------------------------------------------------- */
function Nav({C,lang,setLang,onContact,scrollTo,navOpen,setNavOpen}){
  const links = [['area',C.nav.area],['house',C.nav.house],['location',C.nav.location],['invest',C.nav.invest],['crypto',C.nav.crypto],['faq',C.nav.faq]];
  return (
    <nav className="nav">
      <div className="nav-in">
        <div className="brand">
          <span className="mark">2B</span>
          <span><b>Pak Kong Au</b><small>{lang==='en'?'Sai Kung · Pak Kong Au':'西貢 · 北港坳'}</small></span>
        </div>
        <div className="nav-links">
          {links.map(([id,label])=> <a key={id} onClick={()=>scrollTo(id)}>{label}</a>)}
        </div>
        <div className="nav-right">
          <div className="lang-switch">
            <button className={lang==='zh'?'on':''} onClick={()=>setLang('zh')}>中</button>
            <button className={lang==='en'?'on':''} onClick={()=>setLang('en')}>EN</button>
          </div>
          <button className="btn btn-primary" style={{padding:'10px 18px'}} onClick={onContact}>{C.nav.cta}</button>
          <button className="nav-toggle" onClick={()=>setNavOpen(!navOpen)} aria-label="menu">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
          </button>
        </div>
      </div>
      {navOpen && (
        <div style={{borderTop:'1px solid var(--line)',padding:'10px var(--pad) 18px',display:'grid',gap:'2px'}}>
          {links.map(([id,label])=> <a key={id} onClick={()=>scrollTo(id)} style={{padding:'12px 4px',fontSize:'16px',borderBottom:'1px solid var(--line)'}}>{label}</a>)}
        </div>
      )}
    </nav>
  );
}

/* ---- HERO ------------------------------------------------------------- */
function Hero({C,D,onContact,scrollTo}){
  return (
    <header className="hero" id="top">
      <div className="hero-media"><HeroLandscape/></div>
      <div className="hero-in">
        <div className="hero-grid">
          <div>
            <span className="hero-badge">◆ {C.hero.badge}</span>
            <p className="kicker" style={{marginTop:'26px'}}>{C.hero.kicker}</p>
            <h1>{C.hero.h1[0]}<br/>{C.hero.h1[1]}</h1>
            <p className="sub">{C.hero.sub}</p>
            <div className="hero-scroll">
              <span className="ln"></span>{C.hero.scroll}
            </div>
          </div>
          <div className="hero-price">
            <div className="label">{C.hero.priceLabel}</div>
            <div className="amt">HK${D.priceM}M</div>
            <div className="psf">{C.hero.psf} · {D.psf} / sq ft</div>
            <div className="hero-stats">
              {C.hero.stats.map((s,i)=>(<div key={i}><b>{s.b}</b><span>{s.s}</span></div>))}
            </div>
            <div className="hero-cta">
              <button className="btn btn-primary" onClick={onContact}>{C.hero.ctaPrimary}</button>
              <button className="btn btn-ghost" onClick={onContact}>{C.hero.ctaGhost}</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

/* ---- VIBE + LIFESTYLE (combined section) ----------------------------- */
function VibeLifestyle({C}){
  const icons = ['shield','wave','sun','school'];
  return (
    <section className="vibe-section">
      <div className="vibe-banner">
        <img src="assets/area/beach.jpg" alt="Sai Kung"/>
        <div className="vibe-in wrap">
          <div className="eyebrow-row" style={{marginBottom:'6px'}}>
            <span className="kicker" style={{color:'#fff'}}>{C.vibe.kicker}</span>
            <span className="ln" style={{background:'rgba(255,255,255,.5)'}}></span>
          </div>
          <h2>{C.vibe.h2}</h2>
          <p>{C.vibe.p}</p>
        </div>
      </div>
      <div className="wrap lifestyle-cards">
        <div className="sec-head reveal" style={{maxWidth:'none',marginBottom:'34px'}}>
          <div className="eyebrow-row"><span className="kicker">{C.lifestyle.kicker}</span><span className="ln"></span></div>
          <h2>{C.lifestyle.h2}</h2>
        </div>
        <div className="cards reveal" style={{gridTemplateColumns:'repeat(auto-fit,minmax(230px,1fr))'}}>
          {C.lifestyle.items.map((it,i)=>(
            <div className="feature-card" key={i}>
              <div className="ic"><Icon name={icons[i]}/></div>
              <h3>{it.t}</h3>
              <p>{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- SURROUNDINGS ----------------------------------------------------- */
function Surroundings({C}){
  const icons = ['wave','coffee','mountain','wave'];
  return (
    <section className="section" id="area">
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="eyebrow-row"><span className="kicker">{C.surround.kicker}</span><span className="ln"></span></div>
          <h2>{C.surround.h2}</h2>
          <p>{C.surround.p}</p>
        </div>
        <div className="cards reveal tiles-2" style={{marginTop:'46px'}}>
          {C.surround.tiles.map((tile,i)=>(
            <div className="tile" key={i}>
              <img src={tile.img} alt={tile.t} loading="lazy"/>
              <div className="cap">
                <div className="pin">{tile.pin}</div>
                <div className="t">{tile.t}</div>
                <div className="d">{tile.d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- HOUSE + GALLERY -------------------------------------------------- */
const GALLERY = ['living','kitchen','room','terrace','roof','utility'];
function House({C,photo,onOpen}){
  const caps = C.house.galleryCaps;
  return (
    <section className="section" id="house">
      <div className="wrap">
        <div className="sec-head reveal" style={{marginBottom:'40px'}}>
          <div className="eyebrow-row"><span className="kicker">{C.house.kicker}</span><span className="ln"></span></div>
          <h2>{C.house.h2}</h2>
          <p>{C.house.p}</p>
        </div>
        <div className="feature-photo reveal" onClick={()=>onOpen(photo('exterior'))}>
          <img src={photo('exterior')} alt={caps.exterior.t} loading="lazy"/>
          <div className="fp-cap">
            <div className="lbl">{caps.exterior.t}</div>
            <div className="dsc">{caps.exterior.d}</div>
          </div>
        </div>
        <div className="gal-grid reveal">
          {GALLERY.map((k,i)=>(
            <figure className="gal-item" key={i} onClick={()=>onOpen(photo(k))}>
              <div className="gal-img"><img src={photo(k)} alt={caps[k].t} loading="lazy"/></div>
              <figcaption><b>{caps[k].t}</b><span>{caps[k].d}</span></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- HOUSE FACTS + WHY (combined) ------------------------------------ */
function HouseFacts({C,D}){
  return (
    <section className="section" id="facts" style={{background:'var(--bg-2)'}}>
      <div className="wrap">
        <div className="sec-head reveal" style={{marginBottom:'38px'}}>
          <div className="eyebrow-row"><span className="kicker">{C.why.kicker}</span><span className="ln"></span></div>
          <h2>{C.why.h2}</h2>
        </div>
        <div className="keynums reveal">
          <div className="kn kn-price">
            <span className="kn-label">{C.hero.priceLabel}</span>
            <b>HK${D.priceM}M</b>
            <span className="kn-sub">{D.psf} / sq ft</span>
          </div>
          {C.hero.stats.map((s,i)=>(
            <div className="kn" key={i}><b>{s.b}</b><span className="kn-sub">{s.s}</span></div>
          ))}
        </div>
        <div className="hf-grid reveal">
          <div className="why-list">
            {C.why.items.map((it,i)=>(
              <div className="why-row" key={i}>
                <span className="why-n">{String(i+1).padStart(2,'0')}</span>
                <div><h4>{it.t}</h4><p>{it.d}</p></div>
              </div>
            ))}
          </div>
          <div className="facts" style={{gridTemplateColumns:'1fr'}}>
            {C.facts.rows.map((r,i)=>(
              <div className="row" key={i}>
                <span className="k">{r.k}</span>
                <span className="v">{r.em ? <span className="em">{r.v}</span> : r.v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- LOCATION --------------------------------------------------------- */
function Location({C,lang}){
  return (
    <section className="section" id="location" style={{background:'var(--bg-2)'}}>
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="eyebrow-row"><span className="kicker">{C.location.kicker}</span><span className="ln"></span></div>
          <h2>{C.location.h2}</h2>
          <p>{C.location.p}</p>
        </div>
        <div className="reveal" style={{marginTop:'40px'}}>
          <AreaMap lang={lang}/>
          <p style={{fontFamily:'var(--font-mono)',fontSize:'11px',color:'var(--muted)',marginTop:'10px'}}>{C.location.mapNote}</p>
        </div>
        <div className="split reveal" style={{marginTop:'50px',alignItems:'start'}}>
          <div>
            <h3 style={{fontFamily:'var(--font-display)',fontWeight:'var(--disp-weight)',fontSize:'24px',marginBottom:'22px'}}>{C.location.travelTitle}</h3>
            <TravelGraphic lang={lang}/>
          </div>
          <div>
            <h3 style={{fontFamily:'var(--font-display)',fontWeight:'var(--disp-weight)',fontSize:'24px',marginBottom:'22px'}}>{C.location.busTitle}</h3>
            <BusRoutes lang={lang}/>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- INVEST ----------------------------------------------------------- */
function Invest({C}){
  return (
    <section className="section" id="invest">
      <div className="wrap">
        <div className="split">
          <div className="sec-head reveal" style={{maxWidth:'none'}}>
            <div className="eyebrow-row"><span className="kicker">{C.invest.kicker}</span><span className="ln"></span></div>
            <h2>{C.invest.h2}</h2>
            <p>{C.invest.p}</p>
            <p style={{fontFamily:'var(--font-mono)',fontSize:'11px',color:'var(--muted)',marginTop:'18px'}}>{C.invest.note}</p>
          </div>
          <div className="reveal">
            <div className="hero-stats" style={{gridTemplateColumns:'1fr',marginTop:0}}>
              {C.invest.stats.map((s,i)=>(
                <div key={i} style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'24px 26px'}}>
                  <span style={{fontFamily:'var(--font-mono)',fontSize:'12px',letterSpacing:'.06em',color:'var(--muted)'}}>{s.s}</span>
                  <b style={{fontSize:'30px'}}>{s.b}</b>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- CRYPTO ----------------------------------------------------------- */
function Crypto({C,D}){
  return (
    <section className="section" id="crypto">
      <div className="wrap">
        <div className="crypto reveal">
          <div className="inner">
            <div className="eyebrow-row" style={{marginBottom:'18px'}}>
              <span className="kicker" style={{color:'var(--clay-soft)'}}>{C.crypto.kicker}</span>
              <span className="ln" style={{background:'color-mix(in oklab,var(--bg) 30%, transparent)'}}></span>
            </div>
            <h2>{C.crypto.h2}</h2>
            <p>{C.crypto.p}</p>
            <div className="coins">
              {D.coins.map((c,i)=>(
                <div className="coin" key={i}>
                  <span className="sym" style={{background:c.color,color:'#fff'}}>{c.sym}</span>
                  <span><b>{c.name}</b><small>{c.net} · {C.crypto.coinNet}</small></span>
                </div>
              ))}
            </div>
            <p style={{fontFamily:'var(--font-mono)',fontSize:'11.5px',marginTop:'26px',color:'color-mix(in oklab,var(--bg) 60%, var(--ink))',maxWidth:'70ch'}}>{C.crypto.foot}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- PROCESS ---------------------------------------------------------- */
function Process({C}){
  return (
    <section className="section" style={{background:'var(--bg-2)'}}>
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="eyebrow-row"><span className="kicker">{C.process.kicker}</span><span className="ln"></span></div>
          <h2>{C.process.h2}</h2>
        </div>
        <div className="steps reveal" style={{marginTop:'40px'}}>
          {C.process.steps.map((s,i)=>(
            <div className="step" key={i}>
              <span className="n">{String(i+1).padStart(2,'0')}</span>
              <div><h4>{s.t}</h4><p>{s.d}</p></div>
            </div>
          ))}
        </div>
        <p className="reveal" style={{marginTop:'22px',color:'var(--muted)',fontSize:'14px'}}>※ {C.process.agent}</p>
      </div>
    </section>
  );
}

/* ---- FAQ -------------------------------------------------------------- */
function Faq({C,faq,setFaq}){
  return (
    <section className="section" id="faq">
      <div className="wrap" style={{maxWidth:'880px'}}>
        <div className="sec-head reveal" style={{margin:'0 auto',textAlign:'center'}}>
          <span className="kicker">{C.faq.kicker}</span>
          <h2>{C.faq.h2}</h2>
        </div>
        <div className="reveal" style={{marginTop:'40px'}}>
          {C.faq.items.map((it,i)=>(
            <div className={'faq-item'+(faq===i?' open':'')} key={i}>
              <button className="faq-q" onClick={()=>setFaq(faq===i?-1:i)}>
                {it.q}<span className="pm"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M12 5v14M5 12h14"/></svg></span>
              </button>
              <div className="faq-a" style={{maxHeight: faq===i?'320px':'0'}}><div className="pad">{it.a}</div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- DISCLOSURE ------------------------------------------------------- */
function Disclosure({C}){
  return (
    <section className="section" style={{paddingTop:0}}>
      <div className="wrap">
        <div className="disclosure reveal">
          <span className="kicker">{C.disclosure.kicker}</span>
          <p style={{marginTop:'14px'}}>{C.disclosure.p1}</p>
          <p>{C.disclosure.p2}</p>
        </div>
      </div>
    </section>
  );
}

/* ---- FOOTER ----------------------------------------------------------- */
function Footer({C,onContact}){
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <div className="brand" style={{marginBottom:'14px'}}>
              <span className="mark">2B</span>
              <span><b>Pak Kong Au</b></span>
            </div>
            <small>{C.foot.tag}</small>
          </div>
          <div>
            <small style={{display:'block',marginBottom:'10px'}}>{C.foot.made}</small>
            <button className="btn btn-dark" onClick={onContact}>{C.sticky.cta}</button>
          </div>
          <div style={{display:'flex',alignItems:'flex-end'}}>
            <small>{C.foot.rights}</small>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---- STICKY CTA ------------------------------------------------------- */
function StickyCta({C,show,onContact}){
  return (
    <div className={'sticky-cta'+(show?' show':'')}>
      <div className="bar">
        <div className="meta"><b>{C.sticky.price}</b><span>{C.sticky.meta}</span></div>
        <span className="grow"></span>
        <button className="btn btn-primary" onClick={onContact}>{C.sticky.cta}</button>
      </div>
    </div>
  );
}

/* ---- CONTACT MODAL ---------------------------------------------------- */
function ContactModal({C,open,onClose}){
  return (
    <div className={'modal-bg'+(open?' show':'')} onClick={onClose}>
      <div className="modal" onClick={e=>e.stopPropagation()}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:'4px'}}>
          <h3 style={{fontFamily:'var(--font-display)',fontWeight:'var(--disp-weight)',fontSize:'27px'}}>{C.contact.title}</h3>
          <button onClick={onClose} style={{background:'transparent',border:'none',color:'var(--muted)',fontSize:'22px',lineHeight:1}}>✕</button>
        </div>
        <p style={{color:'var(--muted)',fontSize:'14px',marginBottom:'8px'}}>{C.contact.sub}</p>
        {C.contact.methods.map((m,i)=>(
          <a className="contact-row" key={i} href={m.href} target="_blank" rel="noopener">
            <span className="ic" style={{background:m.color}}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 5h16v14H4z"/><path d="M4 7l8 6 8-6"/></svg>
            </span>
            <span style={{flex:1}}><b>{m.name}</b><small>{m.val}</small></span>
            <span style={{color:'var(--muted)'}}>→</span>
          </a>
        ))}
      </div>
    </div>
  );
}

/* ---- LIGHTBOX --------------------------------------------------------- */
function Lightbox({src,onClose}){
  if(!src) return null;
  return (
    <div className="modal-bg show" onClick={onClose} style={{background:'color-mix(in oklab, var(--ink) 78%, transparent)'}}>
      <img src={src} alt="" style={{maxWidth:'92vw',maxHeight:'88vh',borderRadius:'var(--radius-lg)',boxShadow:'0 30px 80px rgba(0,0,0,.5)'}}/>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
