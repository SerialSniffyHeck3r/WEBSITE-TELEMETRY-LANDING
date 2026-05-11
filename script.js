const tabs = document.querySelectorAll('[data-set-lang]');
const root = document.documentElement;

function setLanguage(lang) {
  root.setAttribute('data-lang', lang);
  root.setAttribute('lang', lang === 'kr' ? 'ko' : 'en');
  tabs.forEach((tab) => {
    const active = tab.dataset.setLang === lang;
    tab.classList.toggle('active', active);
    tab.setAttribute('aria-selected', String(active));
  });
  localStorage.setItem('fieldInstrumentsLang', lang);
}

tabs.forEach((tab) => tab.addEventListener('click', () => setLanguage(tab.dataset.setLang)));
setLanguage(localStorage.getItem('fieldInstrumentsLang') || 'en');
