/* ============================================
   GameGuidePro - Cookie Consent Module
   GDPR-Compliant — Uses style.display + inline onclick
   ============================================ */
(function() {
  'use strict';

  var STORAGE_KEY = 'ggp_cookie_consent';
  var CONSENT_VERSION = '1.0';

  function getConsent() {
    try { var d = localStorage.getItem(STORAGE_KEY); return d ? JSON.parse(d) : null; } catch(e) { return null; }
  }

  function saveConsent(prefs) {
    try {
      prefs.version = CONSENT_VERSION;
      prefs.timestamp = new Date().toISOString();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    } catch(e) { console.warn('[CookieConsent] Save failed:', e); }
  }

  function applyConsent(prefs) {
    window.__ggp_consent = prefs;
    if (prefs.marketing) loadAds();
  }

  function loadAds() {
    var phs = document.querySelectorAll('.ad-placeholder[data-ad-client]');
    for (var i = 0; i < phs.length; i++) {
      var el = phs[i];
      var ins = document.createElement('ins');
      ins.className = 'adsbygoogle';
      ins.style.display = 'block';
      ins.setAttribute('data-ad-client', el.getAttribute('data-ad-client'));
      ins.setAttribute('data-ad-slot', el.getAttribute('data-ad-slot'));
      ins.setAttribute('data-ad-format', el.getAttribute('data-ad-format') || 'auto');
      ins.setAttribute('data-full-width-responsive', el.getAttribute('data-full-width-responsive') || 'true');
      el.innerHTML = '';
      el.appendChild(ins);
    }
  }

  // --- Display helpers using style.display (NOT hidden attribute) ---
  function show(el) { if (el) el.style.display = ''; }
  function hide(el) { if (el) el.style.display = 'none'; }

  // --- Public API (called by inline onclick) ---
  function acceptAll() {
    console.log('[CookieConsent] Accept All clicked');
    saveConsent({ functional: true, analytics: true, marketing: true, method: 'accept_all' });
    applyConsent({ functional: true, analytics: true, marketing: true });
    hideBannerAndModal();
  }

  function rejectAll() {
    console.log('[CookieConsent] Reject All clicked');
    saveConsent({ functional: true, analytics: false, marketing: false, method: 'reject_all' });
    applyConsent({ functional: true, analytics: false, marketing: false });
    hideBannerAndModal();
  }

  function savePrefs() {
    console.log('[CookieConsent] Save Preferences clicked');
    var a = document.getElementById('consent-analytics');
    var m = document.getElementById('consent-marketing');
    var analytics = a ? a.checked : false;
    var marketing = m ? m.checked : false;
    saveConsent({ functional: true, analytics: analytics, marketing: marketing, method: 'custom' });
    applyConsent({ functional: true, analytics: analytics, marketing: marketing });
    hideBannerAndModal();
  }

  function showModal() {
    console.log('[CookieConsent] Manage Preferences clicked');
    var modal = document.getElementById('cookie-modal');
    show(modal);
    document.body.style.overflow = 'hidden';
    syncCheckboxes();
  }

  function hideModal() {
    var modal = document.getElementById('cookie-modal');
    hide(modal);
    document.body.style.overflow = '';
  }

  function hideBannerAndModal() {
    hide(document.getElementById('cookie-banner'));
    hide(document.getElementById('cookie-modal'));
    document.body.style.overflow = '';
  }

  function showBanner() {
    show(document.getElementById('cookie-banner'));
  }

  function syncCheckboxes() {
    var c = getConsent();
    if (!c) return;
    var a = document.getElementById('consent-analytics');
    var m = document.getElementById('consent-marketing');
    if (a) a.checked = !!c.analytics;
    if (m) m.checked = !!c.marketing;
  }

  // --- Init ---
  function init() {
    var consent = getConsent();
    if (consent && consent.timestamp) {
      // Already consented — apply and hide everything
      applyConsent(consent);
      hideBannerAndModal();
      return;
    }
    // No consent yet — show banner
    showBanner();
  }

  // ESC key closes modal
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' || e.keyCode === 27) {
      var modal = document.getElementById('cookie-modal');
      if (modal && modal.style.display !== 'none') {
        hideModal();
      }
    }
  });

  // Expose global API for inline onclick
  window.GGPCookieConsent = {
    acceptAll: acceptAll,
    rejectAll: rejectAll,
    savePrefs: savePrefs,
    showModal: showModal,
    hideModal: hideModal,
    getConsent: getConsent,
    reset: function() { localStorage.removeItem(STORAGE_KEY); showBanner(); }
  };

  // Run init on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();