/* =========================================================================
   diagrams.jsx — generated SVG illustrations & diagrams
   Simple geometric shapes only; themed via CSS variables.
   ========================================================================= */
const { createElement: h } = React;

/* ---- Hero: real photo + generated foreground (sits behind dark tint) -- */
function HeroLandscape() {
  return (
    <div className="layers">
      <img className="hero-photo" src="assets/area/hike.jpg" alt="Sai Kung mountains and sea"/>
      <svg className="hero-fg" viewBox="0 0 1440 300" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 150 L240 70 L520 150 L820 60 L1120 140 L1440 80 L1440 300 L0 300 Z" fill="oklch(0.34 0.07 168)" opacity="0.85"/>
        <path d="M0 210 L300 130 L640 215 L980 120 L1280 200 L1440 160 L1440 300 L0 300 Z" fill="oklch(0.26 0.06 165)"/>
        <path d="M0 256 L360 200 L760 262 L1120 196 L1440 244 L1440 300 L0 300 Z" fill="var(--ink)"/>
      </svg>
    </div>
  );
}

/* ---- Rooftop panorama (for the roof-view section) --------------------- */
function RoofPanorama() {
  return (
    <div className="diagram">
      <svg viewBox="0 0 1000 460" preserveAspectRatio="xMidYMid slice" aria-hidden="true" style={{width:'100%',height:'auto'}}>
        <defs>
          <linearGradient id="rsky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="oklch(0.74 0.07 75)"/>
            <stop offset="0.5" stopColor="oklch(0.82 0.06 85)"/>
            <stop offset="1" stopColor="oklch(0.90 0.04 110)"/>
          </linearGradient>
        </defs>
        <rect width="1000" height="460" fill="url(#rsky)"/>
        <circle cx="760" cy="140" r="46" fill="oklch(0.94 0.07 85)"/>
        <path d="M0 250 L150 180 L320 240 L480 165 L640 235 L820 175 L1000 240 L1000 300 L0 300 Z" fill="oklch(0.58 0.05 175)" opacity="0.5"/>
        <path d="M0 290 L200 220 L420 285 L620 215 L820 285 L1000 235 L1000 340 L0 340 Z" fill="oklch(0.48 0.06 168)" opacity="0.7"/>
        <rect y="300" width="1000" height="60" fill="oklch(0.62 0.06 210)"/>
        <path d="M0 360 L260 290 L520 360 L760 285 L1000 350 L1000 460 L0 460 Z" fill="oklch(0.38 0.06 160)"/>
        {/* foreground railing */}
        <rect y="430" width="1000" height="30" fill="oklch(0.30 0.04 150)"/>
        {[60,180,300,420,540,660,780,900].map((x)=>(<rect key={x} x={x} y="395" width="8" height="40" fill="oklch(0.30 0.04 150)"/>))}
        <rect x="40" y="392" width="900" height="7" rx="3" fill="oklch(0.34 0.04 150)"/>
      </svg>
    </div>
  );
}

/* ---- Neighbourhood map ------------------------------------------------ */
function AreaMap({ lang }) {
  const L = lang === "en"
    ? { house:"2B Pak Kong Au", town:"Sai Kung Town", cafe:"Pak Sha Wan cafés", hike:"Hiking trailhead", beach:"Beaches · marina", hwy:"Hiram's Hwy", park:"Sai Kung Country Park", sea:"Port Shelter" }
    : { house:"本物業 2B", town:"西貢市中心", cafe:"白沙灣咖啡店", hike:"行山徑入口", beach:"沙灘 · 遊艇會", hwy:"西貢公路", park:"西貢郊野公園", sea:"牛尾海" };
  const halo = { paintOrder:"stroke", stroke:"#fff", strokeWidth:3.6, strokeLinejoin:"round" };
  const Pin = ({x,y,label,sub,main,flip}) => {
    const c = main ? "var(--accent)" : "var(--clay)";
    const s = main ? 1.4 : 1;
    const tx = flip ? -(13*s) : (13*s);
    const anc = flip ? "end" : "start";
    return (
      <g transform={`translate(${x},${y})`}>
        <ellipse cx="0" cy="3" rx={6.5*s} ry="2.5" fill="rgba(20,30,25,.20)"/>
        <g transform={`scale(${s})`}>
          <path d="M0 2 C -8 -14 -13 -20 -13 -30 A13 13 0 1 1 13 -30 C 13 -20 8 -14 0 2 Z" fill={c} stroke="#fff" strokeWidth="2.5"/>
          <circle cx="0" cy="-30" r="5" fill="#fff"/>
        </g>
        <text x={tx} y={main?-24:-19} textAnchor={anc} fontFamily="var(--font-body)" fontSize={main?"16.5":"13.5"} fontWeight="700" fill="var(--ink)" style={halo}>{label}</text>
        {sub && <text x={tx} y={main?-6:-1} textAnchor={anc} fontFamily="var(--font-mono)" fontSize="11.5" fontWeight="700" fill="var(--accent-ink)" style={halo}>{sub}</text>}
      </g>
    );
  };
  return (
    <div className="diagram">
      <svg viewBox="0 0 900 560" style={{width:'100%',height:'auto',display:'block'}}>
        <rect width="900" height="560" fill="#ecefe8"/>
        {/* country park / green */}
        <path d="M0 0 H540 C 460 70 380 70 320 140 C 250 220 130 200 0 250 Z" fill="#d0e7c2"/>
        <path d="M900 0 V270 C 800 250 770 170 825 80 C 852 35 900 45 900 0 Z" fill="#d0e7c2"/>
        <path d="M0 560 V390 C 110 372 175 462 130 560 Z" fill="#d0e7c2"/>
        {/* water */}
        <path d="M900 560 V250 C 770 268 612 356 540 560 Z" fill="#a7d3ef"/>
        <path d="M900 360 C 800 372 690 430 640 560 L590 560 C 650 416 770 320 900 300 Z" fill="#ffffff" opacity="0.28"/>
        {/* roads */}
        <g strokeLinecap="round" fill="none">
          <path d="M30 175 C 200 235 320 250 470 300 C 610 348 730 332 880 300" stroke="#d6d3c8" strokeWidth="17"/>
          <path d="M30 175 C 200 235 320 250 470 300 C 610 348 730 332 880 300" stroke="#ffffff" strokeWidth="10.5"/>
          <path d="M470 300 L560 468" stroke="#d9d8cf" strokeWidth="12"/>
          <path d="M470 300 L560 468" stroke="#ffffff" strokeWidth="6.5"/>
          <path d="M470 300 L300 362" stroke="#d9d8cf" strokeWidth="10"/>
          <path d="M470 300 L300 362" stroke="#ffffff" strokeWidth="5.5"/>
        </g>
        {/* trail */}
        <path d="M470 300 C 545 232 600 198 658 168" stroke="var(--accent)" strokeWidth="3" strokeDasharray="2 9" fill="none" strokeLinecap="round"/>
        {/* area labels */}
        <text x="120" y="86" fontFamily="var(--font-body)" fontSize="16" fontStyle="italic" fill="#5d7a4f" style={halo}>{L.park}</text>
        <text x="690" y="500" fontFamily="var(--font-body)" fontSize="16" fontStyle="italic" fill="#3d7aa2" style={halo}>{L.sea}</text>
        <text x="295" y="252" fontFamily="var(--font-mono)" fontSize="11" fill="#9c9176" transform="rotate(11 295 252)">{L.hwy}</text>
        {/* pins */}
        <Pin x={300} y={362} label={L.cafe} sub="≈ 6 min" flip/>
        <Pin x={560} y={468} label={L.town} sub="≈ 8 min"/>
        <Pin x={658} y={168} label={L.hike} sub="from door" flip/>
        <Pin x={770} y={330} label={L.beach} sub="≈ 15 min" flip/>
        <Pin x={470} y={300} label={L.house} sub="Pak Kong Au" main/>
      </svg>
    </div>
  );
}

/* ---- Drive-time bars -------------------------------------------------- */
function TravelGraphic({ lang }) {
  const rows = lang === "en"
    ? [["Sai Kung Town",8,40],["Pak Sha Wan / cafés",6,30],["Hang Hau MTR",15,68],["Choi Hung MTR",22,95],["HKUST",20,88]]
    : [["西貢市中心",8,40],["白沙灣 / 咖啡店",6,30],["坑口港鐵站",15,68],["彩虹港鐵站",22,95],["香港科技大學",20,88]];
  const unit = lang === "en" ? "min drive" : "分鐘車程";
  return (
    <div style={{display:'grid',gap:'14px'}}>
      {rows.map(([name,min,pct],i)=>(
        <div key={i}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',marginBottom:'6px'}}>
            <span style={{fontSize:'14.5px',fontWeight:600}}>{name}</span>
            <span style={{fontFamily:'var(--font-mono)',fontSize:'12px',color:'var(--muted)'}}>
              <b style={{fontFamily:'var(--font-display)',fontSize:'18px',color:'var(--ink)'}}>{min}</b> {unit}
            </span>
          </div>
          <div style={{height:'8px',borderRadius:'99px',background:'var(--bg-2)',border:'1px solid var(--line)',overflow:'hidden'}}>
            <div className="bar-fill" style={{height:'100%',width:pct+'%',background:'var(--accent)',borderRadius:'99px'}}/>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ---- Bus / minibus links --------------------------------------------- */
function BusRoutes({ lang }) {
  const rows = lang === "en"
    ? [["92","Diamond Hill MTR ↔ Sai Kung","Bus"],["792M","Tseung Kwan O ↔ Sai Kung","Bus"],["101M","Hang Hau MTR ↔ Sai Kung","Minibus"],["1A","Choi Hung ↔ Sai Kung","Minibus"]]
    : [["92","鑽石山站 ↔ 西貢","巴士"],["792M","將軍澳 ↔ 西貢","巴士"],["101M","坑口站 ↔ 西貢","小巴"],["1A","彩虹 ↔ 西貢","紅van / 專線"]];
  return (
    <div style={{display:'grid',gap:'10px'}}>
      {rows.map(([no,desc,type],i)=>(
        <div key={i} style={{display:'flex',alignItems:'center',gap:'14px',padding:'13px 16px',border:'1px solid var(--line)',borderRadius:'var(--radius)',background:'var(--surface)'}}>
          <span style={{fontFamily:'var(--font-mono)',fontWeight:700,fontSize:'15px',color:'#fff',background:'var(--accent)',borderRadius:'6px',padding:'5px 10px',minWidth:'58px',textAlign:'center'}}>{no}</span>
          <span style={{flex:1,fontSize:'14.5px'}}>{desc}</span>
          <span style={{fontFamily:'var(--font-mono)',fontSize:'11px',letterSpacing:'.08em',textTransform:'uppercase',color:'var(--muted)'}}>{type}</span>
        </div>
      ))}
    </div>
  );
}

/* ---- Feature icons (simple line glyphs) ------------------------------- */
const Icon = ({ name }) => {
  const p = { fill:"none", stroke:"currentColor", strokeWidth:1.7, strokeLinecap:"round", strokeLinejoin:"round" };
  const paths = {
    leaf: <><path {...p} d="M5 19c0-7 5-12 14-13-1 9-6 14-13 14"/><path {...p} d="M5 19c3-4 6-6 10-8"/></>,
    shield: <><path {...p} d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6z"/><path {...p} d="M9 12l2 2 4-4"/></>,
    sun: <><circle {...p} cx="12" cy="12" r="4"/><path {...p} d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19"/></>,
    school: <><path {...p} d="M3 9l9-5 9 5-9 5z"/><path {...p} d="M7 11v5c0 1 2.5 2 5 2s5-1 5-2v-5"/></>,
    car: <><path {...p} d="M3 13l2-5h14l2 5v5h-3v-2H6v2H3z"/><circle {...p} cx="7" cy="16" r="1.4"/><circle {...p} cx="17" cy="16" r="1.4"/></>,
    home: <><path {...p} d="M4 11l8-6 8 6"/><path {...p} d="M6 10v9h12v-9"/><path {...p} d="M10 19v-5h4v5"/></>,
    coin: <><circle {...p} cx="12" cy="12" r="8"/><path {...p} d="M12 8v8M9.5 9.5h3a1.5 1.5 0 010 3h-3M9.5 12.5h3.5a1.5 1.5 0 010 3h-3.5"/></>,
    mountain: <><path {...p} d="M3 19l6-11 4 6 2-3 6 8z"/></>,
    coffee: <><path {...p} d="M4 9h12v4a4 4 0 01-4 4H8a4 4 0 01-4-4z"/><path {...p} d="M16 10h2a2 2 0 010 4h-2"/><path {...p} d="M7 3v2M11 3v2"/></>,
    wave: <><path {...p} d="M3 9c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/><path {...p} d="M3 15c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/></>
  };
  return <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">{paths[name] || paths.home}</svg>;
};

Object.assign(window, { HeroLandscape, RoofPanorama, AreaMap, TravelGraphic, BusRoutes, Icon });
