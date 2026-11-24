/* v34: photo section backgrounds on the shared service detail template */
(function () {
  function enhance() {
    var crumb = document.querySelector("main .crumb");
    var hero = document.querySelector(".v32-hero");
    if (crumb && hero && !document.querySelector(".v34-hero-zone")) {
      var zone = document.createElement("div");
      zone.className = "v34-photo v34-photo--dark v34-photo--hero v34-hero-zone";
      crumb.parentNode.insertBefore(zone, crumb);
      zone.appendChild(crumb);
      zone.appendChild(hero);
    }
    var map = {
      features: "v34-photo v34-photo--dark v34-photo--features",
      effect: "v34-photo v34-photo--light v34-photo--effects",
      ops: "v34-photo v34-photo--dark v34-photo--ops",
      cases: "v34-photo v34-photo--light v34-photo--cases"
    };
    Object.keys(map).forEach(function (id) {
      var el = document.getElementById(id);
      if (el && !el.classList.contains("v34-photo")) {
        el.className = (el.className + " " + map[id]).trim();
      }
    });
    var lazy = document.querySelectorAll(".v34-photo:not(.v34-photo--hero)");
    if (!("IntersectionObserver" in window)) {
      lazy.forEach(function (el) { el.classList.add("is-photo-on"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-photo-on");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "240px 0px" });
    lazy.forEach(function (el) { io.observe(el); });
  }
  if (document.querySelector(".v32-hero")) enhance();
  else {
    var n = 0;
    var t = setInterval(function () {
      n += 1;
      if (document.querySelector(".v32-hero") || n > 40) {
        clearInterval(t);
        if (document.querySelector(".v32-hero")) enhance();
      }
    }, 50);
  }
})();
