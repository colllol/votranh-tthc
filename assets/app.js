(function () {
  'use strict';
  var zoneExpanded = {};
  var zones = Array.prototype.slice.call(document.querySelectorAll('.zone'));
  var searchInput = document.getElementById('searchInput');
  var clearBtn = document.getElementById('clearBtn');

  function removeTones(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/đ/gi, function (d) { return d === 'đ' ? 'd' : 'D'; }).toLowerCase();
  }
  function jumpTo(id) {
    var el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  function clearSearch() {
    if (!searchInput) return;
    searchInput.value = '';
    applyFilters();
    searchInput.focus();
  }
  function toggleZone(zoneId, btn) {
    zoneExpanded[zoneId] = !zoneExpanded[zoneId];
    btn.classList.toggle('open', zoneExpanded[zoneId]);
    var total = document.querySelectorAll('#' + zoneId + ' .card').length;
    btn.innerHTML = zoneExpanded[zoneId]
      ? 'Thu gọn <span class="chev">⌄</span>'
      : 'Xem tất cả ' + total + ' mục <span class="chev">⌄</span>';
    applyFilters();
  }
  function applyFilters() {
    var raw = searchInput ? searchInput.value.trim() : '';
    var keyword = removeTones(raw);
    if (clearBtn) clearBtn.classList.toggle('show', raw.length > 0);
    var visibleTotal = 0;

    zones.forEach(function (zone) {
      var zoneId = zone.id;
      var grid = zone.querySelector('.grid');
      var maxVisible = grid ? parseInt(grid.dataset.max || '9999', 10) : 9999;
      var cards = Array.prototype.slice.call(zone.querySelectorAll('.card'));
      var visibleInZone = 0;

      cards.forEach(function (card, idx) {
        var text = removeTones(card.textContent || '');
        var matches = !keyword || text.indexOf(keyword) !== -1;
        var show;
        if (keyword) show = matches;
        else if (!zoneExpanded[zoneId] && idx >= maxVisible) show = false;
        else show = true;
        card.classList.toggle('js-hidden', !show);
        if (show) { visibleInZone++; visibleTotal++; }
      });

      zone.classList.toggle('hidden', keyword !== '' && visibleInZone === 0);
      var toggleBtn = zone.querySelector('.toggle-btn');
      if (toggleBtn) toggleBtn.style.display = keyword ? 'none' : 'inline-flex';
    });

    var emptyState = document.getElementById('emptyState');
    if (emptyState) emptyState.classList.toggle('show', keyword !== '' && visibleTotal === 0);
    var resultCount = document.getElementById('resultCount');
    if (resultCount) resultCount.textContent = keyword ? 'Tìm thấy ' + visibleTotal + ' kết quả' : '';
  }

  if (searchInput) searchInput.addEventListener('input', applyFilters);
  if (clearBtn) clearBtn.addEventListener('click', clearSearch);
  Array.prototype.forEach.call(document.querySelectorAll('[data-jump]'), function (b) {
    b.addEventListener('click', function () { jumpTo(b.dataset.jump); });
  });
  Array.prototype.forEach.call(document.querySelectorAll('.toggle-btn'), function (b) {
    b.addEventListener('click', function () { toggleZone(b.dataset.zone, b); });
  });
  var backToTop = document.getElementById('backToTop');
  if (backToTop) backToTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  window.addEventListener('scroll', function () {
    if (backToTop) backToTop.classList.toggle('show', window.scrollY > 400);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && searchInput && searchInput.value) clearSearch();
  });

  /* kiosk idle: return to the top of the portal after 4 minutes */
  var idleTimer = null;
  function resetIdle() {
    clearTimeout(idleTimer);
    idleTimer = setTimeout(function () {
      if (searchInput) { searchInput.value = ''; applyFilters(); }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 240000);
  }
  ['click', 'touchstart', 'keydown', 'scroll'].forEach(function (ev) {
    document.addEventListener(ev, resetIdle, { passive: true });
  });
  resetIdle();

  applyFilters();
})();
