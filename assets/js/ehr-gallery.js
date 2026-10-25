// Mega-Net EHR Cloud — click-to-enlarge for the screenshot gallery.
// Used only by ehr-cloud.html. No dependencies. Without JavaScript, each
// screenshot is a plain link that opens the full-size image.

(function () {
  var links = document.querySelectorAll('a[data-lightbox]');
  if (!links.length || typeof HTMLDialogElement === 'undefined') return;

  var dlg = document.createElement('dialog');
  dlg.className = 'screen-lightbox';
  dlg.setAttribute('aria-label', 'Enlarged screenshot');
  dlg.innerHTML =
    '<button type="button" class="screen-lightbox-close" aria-label="Close enlarged view">Close &times;</button>' +
    '<p class="screen-lightbox-text"></p>' +
    '<div class="screen-lightbox-scroll"><img alt=""></div>';
  document.body.appendChild(dlg);

  var big = dlg.querySelector('img');
  var title = dlg.querySelector('.screen-lightbox-text');
  var closeBtn = dlg.querySelector('.screen-lightbox-close');
  var last = null;

  function open(a) {
    var img = a.querySelector('img');
    var cap = a.closest('figure').querySelector('figcaption strong');
    big.src = a.getAttribute('href');
    big.alt = img.alt;
    big.width = img.getAttribute('width');
    big.height = img.getAttribute('height');
    title.textContent = cap ? cap.textContent : '';
    last = a;
    dlg.showModal();
    closeBtn.focus();
  }

  links.forEach(function (a) {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      open(a);
    });
    // Enter already activates a link; also accept Space, as a button would
    a.addEventListener('keydown', function (e) {
      if (e.key === ' ') { e.preventDefault(); open(a); }
    });
  });

  // Click on the dark area or the close button closes; Esc closes natively
  dlg.addEventListener('click', function (e) {
    if (e.target === dlg || e.target.classList.contains('screen-lightbox-scroll') || e.target === closeBtn) dlg.close();
  });
  dlg.addEventListener('close', function () {
    big.removeAttribute('src');
    if (last) last.focus();
  });
})();
