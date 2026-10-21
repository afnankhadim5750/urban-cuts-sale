// Urban Cuts — mobile nav + FAQ accordion
document.addEventListener('DOMContentLoaded', function () {
  var burger = document.querySelector('.hamburger');
  var nav = document.getElementById('mainNav');
  var scrim = document.querySelector('.nav-scrim');

  function closeNav() {
    nav.classList.remove('open');
    if (scrim) scrim.classList.remove('show');
    document.body.classList.remove('nav-open');
    burger.setAttribute('aria-expanded', 'false');
  }

  if (burger && nav) {
    burger.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      if (scrim) scrim.classList.toggle('show', open);
      document.body.classList.toggle('nav-open', open);
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    if (scrim) scrim.addEventListener('click', closeNav);
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeNav);
    });
  }

  // FAQ accordion
  document.querySelectorAll('.faq-item').forEach(function (item) {
    var q = item.querySelector('.faq-q');
    var a = item.querySelector('.faq-a');
    q.addEventListener('click', function () {
      var isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(function (other) {
        other.classList.remove('open');
        other.querySelector('.faq-a').style.maxHeight = null;
      });
      if (!isOpen) {
        item.classList.add('open');
        a.style.maxHeight = a.scrollHeight + 'px';
      }
    });
  });

  // Highlight today's hours row
  var day = new Date().getDay(); // 0=Sun
  var row = document.querySelector('.hours-table tr[data-day="' + day + '"]');
  if (row) row.classList.add('today');
});
