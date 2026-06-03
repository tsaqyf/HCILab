(function () {
    var btn = document.querySelector('.hamburger');
    var nav = document.getElementById('main-nav');
    if (!btn || !nav) return;
    btn.addEventListener('click', function () {
        var expanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', String(!expanded));
        btn.classList.toggle('open');
        nav.classList.toggle('open');
    });
})();
