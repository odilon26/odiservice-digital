// Odi'Service Digital : menu mobile, langue FR/EN, formulaire de contact (WhatsApp ou e-mail, sans serveur).
const WA = '2250747640925';
const MAIL = 'odilonservice26@gmail.com';

const EN = {
  'nav.produits': 'Products', 'nav.services': 'Services', 'nav.apropos': 'About', 'nav.contact': 'Contact',
  'hero.kicker': 'Born in Aboisso, Côte d\'Ivoire',
  'hero.title': 'Simple digital tools, <em>built</em> for real life on the ground.',
  'hero.lead': 'Odi\'Service Digital builds apps that solve everyday problems, adapted to local habits and budgets.',
  'hero.cta1': 'Discover our products', 'hero.cta2': 'Talk about your project',
  'prod.title': 'Our products', 'prod.sub': 'Ready-to-use apps, on your phone, no Play Store needed.',
  'p1.tag': 'Mobile money shop reports, without the notebook', 'p1.badge': '7-day free trial',
  'p1.desc': 'For mobile money shop managers and owners: opening and closing reports take 2 minutes, the gap with the target balance is calculated automatically, and the summary goes straight to the owner\'s WhatsApp.',
  'p1.f1': 'More than 20 operators: Orange Money, Wave, MTN, Moov, Djamo, Western Union…',
  'p1.f2': 'Banknote and coin counter, named credits with WhatsApp reminders',
  'p1.f3': '"Extra zero" alert, server time that cannot be faked',
  'p1.f4': 'Works offline, several shops on one phone',
  'p1.f5': 'No link to your accounts: never asks for your PIN',
  'p1.cta': 'Try Odi\'s Agence', 'p1.tuto': 'Watch the tutorials',
  'p2.title': 'More apps are coming', 'p2.tag': 'For other everyday concerns',
  'p2.desc': 'We are building new tools, always simple and adapted to real life. Follow our WhatsApp channel to be the first to know.',
  'p2.cta': 'Follow the Odi\'Service Digital channel',
  'serv.title': 'Have a project?', 'serv.sub': 'An app idea, a website, a tool for your business: let\'s build it together.',
  's1.t': 'Custom apps', 's1.d': 'A web app you can install on any phone, designed for your trade: tracking, calculations, team, reports.',
  's2.t': 'Professional websites', 's2.d': 'A clear, fast website that presents your business, visible on Google and social media.',
  's3.t': 'Automation', 's3.d': 'Fewer notebooks and repetitive tasks: WhatsApp summaries, spreadsheets, automatic reminders.',
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
  'ft.tag': 'Born in Aboisso, Côte d\'Ivoire, designed for everyone, everywhere.',
  'err': 'Please enter your name and your message.', 'hello': 'Hello Odi\'Service Digital, I am', 'subject': 'Message from the website'
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
