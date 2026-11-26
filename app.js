// Odi'Service Digital : menu mobile, langue FR/EN, formulaire de contact (WhatsApp ou e-mail, sans serveur).
const WA = '2250747640925';
const MAIL = 'odilonservice26@gmail.com';

const EN = {
  'nav.produits': 'Products', 'nav.services': 'Services', 'nav.apropos': 'About', 'nav.contact': 'Contact',
  'hero.kicker': 'Ivorian company based in Aboisso',
  'hero.title': 'Run your business and your daily life <em>from your phone</em>.',
  'hero.lead': 'Simple apps for mobile money shops, traders and families in Côte d\'Ivoire. Install them in one tap, no Play Store needed.',
  'hero.cta1': 'See our apps', 'hero.cta2': 'Talk about your project',
  'prod.title': 'Our products', 'prod.sub': 'Ready-to-use apps, downloadable right here, straight to your phone, no Play Store needed.',
  'p1.tag': 'Mobile money shop reports, done in 2 minutes', 'p1.badge': '7-day free trial',
  'p1.desc': 'For mobile money shop managers and owners: opening and closing reports take 2 minutes, the gap with the target balance is calculated automatically, and the summary goes straight to the owner\'s WhatsApp.',
  'p1.f1': 'More than 20 operators: Orange Money, Wave, MTN, Moov, Djamo, Western Union…',
  'p1.f2': 'Banknote and coin counter, named credits with WhatsApp reminders',
  'p1.f3': '"Extra zero" alert, server time that cannot be faked',
  'p1.f4': 'Works offline, several shops on one phone',
  'p1.f5': 'No link to your accounts: never asks for your PIN',
  'p1.cta': '⬇ Download Odi\'s Agence', 'p1.tuto': 'Watch the tutorials',
  'p3.tag': 'Your health and your family\'s, all in one place', 'p3.badge': '7-day free trial, then 2,000 F a month',
  'p3.desc': 'Each time you fall ill, write down how you feel, what the doctor said and the medicines you took. The notebook spots the illnesses that keep coming back and the medicines that really work for you.',
  'p3.f1': 'Log of illnesses and doctor visits, day by day',
  'p3.f2': 'Treatment tracking: which medicine, which dose, how many days',
  'p3.f3': 'Medicine review: what worked, what did nothing',
  'p3.f4': 'A clear summary sheet to show your doctor',
  'p3.f5': 'Private notebook: only you can read it. Refer friends and earn a 1,000 F bonus',
  'p3.cta': '⬇ Download the Health Notebook', 'p3.notify': 'Get notified at launch',
  'p4.tag': 'Day-to-day management for bars, maquis and drink shops', 'p4.badge': 'Coming soon',
  'p4.desc': 'For owners of maquis, bars, drink shops and kiosks: the till, the drinks stock and customer tabs tracked every day, on the phone or the computer. You know what your place really earns.',
  'p4.f1': 'Morning float and evening closing, till gap calculated automatically',
  'p4.f2': 'Drinks stock, deliveries and slow-moving products',
  'p4.f3': 'Customer tabs and supplier debts: who owes what, since when',
  'p4.f4': 'The owner approves the manager\'s entries, each with their own code',
  'p4.f5': 'Daily, weekly and monthly reports, with the margin',
  'p4.cta': 'Coming soon', 'p4.notify': 'Get notified at launch',
  'p5.tag': 'Your week at a glance, on your phone', 'p5.badge': 'Free, no subscription',
  'p5.desc': 'For anyone with a lot to do: tasks and appointments by day, week or month, with one colour per activity. Tick what is done and instantly see what is left.',
  'p5.f1': 'Day, week and month time grid, one colour per activity',
  'p5.f2': '"Today" list: one tap to mark a task as done',
  'p5.f3': 'Move to tomorrow or duplicate a task in one gesture',
  'p5.f4': 'Completion rate, late tasks shown in red',
  'p5.f5': 'No sign-up: your tasks stay on your phone',
  'p5.cta': '⬇ Download Odi\'s Planning',
  'how.t': 'How to download our apps?',
  'how.1': 'Tap <b>"Download"</b> under the app you want.',
  'how.2': 'On Android (Chrome): tap <b>"Install"</b>, or the <b>⋮</b> menu then <b>"Install app"</b>.',
  'how.3': 'On iPhone (Safari): tap <b>Share</b> then <b>"Add to Home Screen"</b>.',
  'how.note': 'The icon appears on your home screen, just like a Play Store app. Installing is free.',
  'p2.title': 'More apps are coming', 'p2.tag': 'For other everyday concerns',
  'p2.desc': 'We are building new tools, always simple and adapted to real life. Follow our WhatsApp channel to be the first to know.',
  'p2.cta': 'Follow the Odi\'Service Digital channel',
  'serv.title': 'Have a project?', 'serv.sub': 'An app idea, a website, a tool for your business: let\'s build it together.',
  's1.t': 'Custom apps', 's1.d': 'A web app you can install on any phone, designed for your trade: tracking, calculations, team, reports.',
  's2.t': 'Professional websites', 's2.d': 'A clear, fast website that presents your business, visible on Google and social media.',
  's3.t': 'Automation', 's3.d': 'Fewer repetitive tasks: WhatsApp summaries, spreadsheets, automatic reminders.',
  's4.t': 'Local support', 's4.d': 'Getting started with your tools, training your team, and a team available for you at any time.',
  'ab.title': 'Our mission',
  'ab.p1': 'Building simple digital tools that solve everyday problems, adapted to our context, our habits and our means.',
  'ab.p2': 'Odi\'Service Digital was born in Aboisso, Côte d\'Ivoire, and its tools are designed to work anywhere. We keep improving them thanks to feedback from the people who use them.',
  'ab.founder': 'Founded by Odilon TANOH.',
  'v1.t': 'Simple', 'v1.d': 'Up and running in minutes.', 'v2.t': 'Reliable', 'v2.d': 'Works even when the network drops.',
  'v3.t': 'Accessible', 'v3.d': 'On the phone you already own.', 'v4.t': 'Close to you', 'v4.d': 'Listening to you, on WhatsApp.',
  'ct.title': 'Contact', 'ct.sub': 'A question, a project, a suggestion? Write to us, we read everything.',
  'ct.addr': 'Aboisso, Côte d\'Ivoire', 'ct.chan': 'WhatsApp channel',
  'f.name': 'Your name', 'f.msg': 'Your message', 'f.wa': 'Send via WhatsApp', 'f.mail': 'Send via e-mail',
  'f.note': 'The message opens in WhatsApp or your mail app: you just have to send it.',
  'ft.tag': 'Ivorian company based in Aboisso, serving everyone, everywhere.',
  'err': 'Please enter your name and your message.', 'hello': 'Hello Odi\'Service Digital, I am', 'subject': 'Message from the website',
  'nav.cta': 'Free trial',
  'hero.t1': 'Cash report done in 2 minutes', 'hero.t2': 'Works even offline', 'hero.t3': 'Free trial to get started',
  'chip.1t': 'Summary sent', 'chip.1s': 'to the owner\'s WhatsApp', 'chip.2t': 'Report done in 2 min', 'chip.2s': 'opening and closing',
  'ops.t': 'Odi\'s Agence handles more than 20 operators',
  'st.1': 'operators handled', 'st.2': 'to do the report', 'st.3u': 'days', 'st.3': 'free trial', 'st.4': 'PIN code asked',
  'prod.eyebrow': 'Our apps', 'serv.eyebrow': 'Tailor-made', 'ab.eyebrow': 'Who we are', 'ct.eyebrow': 'Let\'s talk',
  'cta.t': 'Ready to save time every day?', 'cta.s': 'Try Odi\'s Agence free for 7 days, or tell us about your project.',
  'cta.b1': 'Start the free trial', 'cta.b2': 'Write on WhatsApp',
  'demo.note': 'Real app screens, with sample amounts.', 'demo.note2': 'Real app screens, with fictional examples.'
};
const FR_EXTRA = { 'err': 'Merci d\'indiquer votre nom et votre message.', 'hello': 'Bonjour Odi\'Service Digital, je suis', 'subject': 'Message depuis le site' };

// Mémorise les textes français d'origine
const FR = { ...FR_EXTRA };
document.querySelectorAll('[data-i18n]').forEach(el => FR[el.dataset.i18n] = el.textContent);
document.querySelectorAll('[data-i18n-html]').forEach(el => FR[el.dataset.i18nHtml] = el.innerHTML);

// Langue : choix mémorisé, sinon anglais si le téléphone est en anglais, sinon français
let saved = null;
try { saved = localStorage.getItem('odis_lang'); } catch (_) {}
let lang = (saved === 'en' || saved === 'fr') ? saved : (/^en/i.test(navigator.language || '') ? 'en' : 'fr');

function apply() {
  const T = lang === 'en' ? EN : FR;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => { if (T[el.dataset.i18n]) el.textContent = T[el.dataset.i18n]; });
  document.querySelectorAll('[data-i18n-html]').forEach(el => { if (T[el.dataset.i18nHtml]) el.innerHTML = T[el.dataset.i18nHtml]; });
  document.getElementById('lang').textContent = lang === 'en' ? 'FR' : 'EN';
}
document.getElementById('lang').addEventListener('click', () => {
  lang = lang === 'en' ? 'fr' : 'en';
  try { localStorage.setItem('odis_lang', lang); } catch (_) {}
  apply();
});

// Menu mobile
const nav = document.getElementById('nav'), burger = document.getElementById('burger');
burger.addEventListener('click', () => { const o = nav.classList.toggle('open'); burger.setAttribute('aria-expanded', o); });
nav.addEventListener('click', e => { if (e.target.tagName === 'A') { nav.classList.remove('open'); burger.setAttribute('aria-expanded', false); } });

// Formulaire : ouvre WhatsApp ou la messagerie avec le message prérempli
document.getElementById('form').addEventListener('submit', e => {
  e.preventDefault();
  const T = lang === 'en' ? EN : FR;
  const name = document.getElementById('f-name').value.trim(), msg = document.getElementById('f-msg').value.trim();
  const err = document.getElementById('f-err');
  if (!name || !msg) { err.textContent = T.err; return; }
  err.textContent = '';
  const text = `${T.hello} ${name}.\n\n${msg}`;
  const via = (e.submitter && e.submitter.dataset.via) || 'wa';
  if (via === 'mail') location.href = `mailto:${MAIL}?subject=${encodeURIComponent(T.subject)}&body=${encodeURIComponent(text)}`;
  else window.open(`https://wa.me/${WA}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
});

document.getElementById('year').textContent = new Date().getFullYear();
apply();

// En-tête : fond vitré dès qu'on quitte le haut de page
const entete = document.getElementById('top');
const onScroll = () => entete.classList.toggle('scrolled', window.scrollY > 24);
window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

const calme = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Chiffres qui comptent jusqu'à leur valeur
function compter(el) {
  const fin = +el.dataset.count;
  if (calme || fin === 0) { el.textContent = fin; return; }
  const t0 = performance.now(), d = 1400;
  const pas = t => { const p = Math.min((t - t0) / d, 1); el.textContent = Math.round(fin * (1 - Math.pow(1 - p, 4))); if (p < 1) requestAnimationFrame(pas); };
  requestAnimationFrame(pas);
}

// Apparition des blocs au défilement (sans IntersectionObserver : tout s'affiche directement)
if ('IntersectionObserver' in window) {
  document.documentElement.classList.add('js');
  const vus = new IntersectionObserver(entries => entries.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add('in');
    e.target.querySelectorAll('[data-count]').forEach(compter);
    vus.unobserve(e.target);
  }), { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => vus.observe(el));
} else {
  document.querySelectorAll('[data-count]').forEach(el => el.textContent = el.dataset.count);
}

// Halo qui suit la souris sur les cartes de services
document.querySelectorAll('.card').forEach(c => c.addEventListener('pointermove', e => {
  const r = c.getBoundingClientRect();
  c.style.setProperty('--mx', (e.clientX - r.left) + 'px');
  c.style.setProperty('--my', (e.clientY - r.top) + 'px');
}));

// Léger relief du visuel d'accueil selon la souris (ordinateur seulement)
const art = document.getElementById('heroArt');
if (art && !calme && window.matchMedia('(hover: hover)').matches) {
  window.addEventListener('pointermove', e => {
    const x = e.clientX / innerWidth - .5, y = e.clientY / innerHeight - .5;
    art.style.transform = `perspective(1000px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`;
  }, { passive: true });
}

/* ══════════ Mouvement : titres, fond, progression, profondeur ══════════ */
// Découpe un titre en mots pour les faire monter un par un
function decouper(el) {
  let n = 0;
  const marche = noeud => [...noeud.childNodes].forEach(c => {
    if (c.nodeType === 3) {
      const frag = document.createDocumentFragment();
      c.textContent.split(/(\s+)/).forEach(m => {
        if (!m) return;
        if (/^\s+$/.test(m)) { frag.appendChild(document.createTextNode(m)); return; }
        const w = document.createElement('span'); w.className = 'w';
        const s = document.createElement('span'); s.textContent = m; s.style.setProperty('--i', n++);
        w.appendChild(s); frag.appendChild(w);
      });
      c.replaceWith(frag);
    } else if (c.nodeType === 1 && !c.classList.contains('w')) marche(c);
  });
  marche(el);
}
const decouperTout = () => document.querySelectorAll('.split').forEach(decouper);
const applyBase = apply;
apply = function () { applyBase(); decouperTout(); };
decouperTout();
requestAnimationFrame(() => setTimeout(() => document.querySelector('.hero h1').classList.add('in'), 80));

// Les puces des listes arrivent l'une après l'autre
document.querySelectorAll('.ticks').forEach(ul => [...ul.children].forEach((li, i) => li.style.setProperty('--i', i)));

if ('IntersectionObserver' in window) {
  // Titres et lignes de séparation
  const io2 = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add(e.target.matches('.sec, .ligne') ? 'seen' : 'in');
    io2.unobserve(e.target);
  }), { threshold: 0.2 });
  document.querySelectorAll('.split, .sec, .ligne').forEach(el => { if (!el.closest('.hero')) io2.observe(el); });

}

/* 26/11 : défilement allégé (petit Android). Supprimé : cartes empilées (sticky + flou + assombrissement recalculés
   à chaque image), profondeur des écrans (lecture de position à chaque pas = mises en page forcées), fond qui change
   selon la section, étincelles. Reste : la barre de progression, qui ne fait que glisser. */
if (!calme) {
  const barre = document.getElementById('progress');
  let attente = false, max = 1;
  const mesurer = () => { max = Math.max(1, document.documentElement.scrollHeight - innerHeight); };
  const image = () => { attente = false; barre.style.transform = `scaleX(${Math.min(1, scrollY / max)})`; };
  addEventListener('scroll', () => { if (!attente) { attente = true; requestAnimationFrame(image); } }, { passive: true });
  addEventListener('resize', () => { mesurer(); image(); }); addEventListener('load', () => { mesurer(); image(); });
  mesurer(); image();

  // Les scènes produits s'inclinent vers la souris (ordinateur seulement, rien pendant le défilement)
  if (matchMedia('(hover: hover)').matches) document.querySelectorAll('.stage').forEach(st => {
    st.addEventListener('pointermove', e => {
      const r = st.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
      st.style.transform = `perspective(1000px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
    });
    st.addEventListener('pointerleave', () => { st.style.transform = ''; });
  });
}
