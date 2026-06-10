/* The Leaders Forum, RAK 2026 · interactions */
(function () {
  "use strict";

  /* ---- Navbar scroll state ---- */
  var nav = document.querySelector(".nav");
  function onScroll() {
    if (window.scrollY > 40) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- Mobile drawer ---- */
  var burger = document.querySelector(".nav__burger");
  var drawer = document.querySelector(".drawer");
  var closeBtn = document.querySelector(".drawer__close");
  function openDrawer() { drawer.classList.add("open"); document.body.style.overflow = "hidden"; }
  function closeDrawer() { drawer.classList.remove("open"); document.body.style.overflow = ""; }
  if (burger) burger.addEventListener("click", openDrawer);
  if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
  if (drawer) drawer.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", closeDrawer); });

  /* ---- Scroll reveal ---- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---- Animated counters ---- */
  function animateCount(el) {
    var target = parseFloat(el.getAttribute("data-count"));
    var suffix = el.getAttribute("data-suffix") || "";
    var prefix = el.getAttribute("data-prefix") || "";
    var dur = 1500, start = null;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      var val = Math.round(target * eased);
      el.textContent = prefix + val.toLocaleString() + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  var counters = document.querySelectorAll("[data-count]");
  if ("IntersectionObserver" in window && counters.length) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { animateCount(e.target); cio.unobserve(e.target); }
      });
    }, { threshold: 0.6 });
    counters.forEach(function (c) { cio.observe(c); });
  }

  /* ---- Form validation + delivery (Google Apps Script -> Sheet + email) ---- */
  var FORM_ENDPOINT = "https://script.google.com/macros/s/AKfycbyCkmtFsjuO-u4rjVXi8ICr-mLc-gy-ZijUQlSCe3JxvNB0yxB2lJYJYxtJ3864Ld6F/exec";
  var form = document.getElementById("applyForm");
  if (form) {
    var success = form.querySelector(".form__success");
    var fields = form.querySelectorAll("[required]");

    function validateField(input) {
      var field = input.closest(".field");
      var ok = input.value.trim() !== "";
      if (ok && input.type === "email") {
        ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim());
      }
      if (ok && input.tagName === "SELECT") {
        ok = input.value !== "";
      }
      field.classList.toggle("invalid", !ok);
      return ok;
    }

    fields.forEach(function (input) {
      input.addEventListener("blur", function () { validateField(input); });
      input.addEventListener("input", function () {
        if (input.closest(".field").classList.contains("invalid")) validateField(input);
      });
    });

    function showSuccess() {
      var grid = form.querySelector(".form__fields");
      if (grid) grid.style.display = "none";
      if (success) {
        success.classList.add("show");
        var name = (form.querySelector('[name="firstName"]') || {}).value || "";
        var nm = success.querySelector("[data-name]");
        if (nm && name) nm.textContent = name.trim() + ", thank";
      }
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var allOk = true;
      fields.forEach(function (input) { if (!validateField(input)) allOk = false; });
      if (!allOk) {
        var firstBad = form.querySelector(".field.invalid input, .field.invalid select, .field.invalid textarea");
        if (firstBad) firstBad.focus();
        return;
      }

      var btn = form.querySelector('button[type="submit"]');
      var btnHtml = btn ? btn.innerHTML : "";
      if (btn) { btn.disabled = true; btn.innerHTML = "Sending…"; }

      var get = function (n) { return ((form.querySelector('[name="' + n + '"]') || {}).value || "").trim(); };
      var extras = [];
      if (get("org")) extras.push("Organisation: " + get("org"));
      if (get("phone")) extras.push("Phone: " + get("phone"));
      var fullMessage = get("message") + (extras.length ? "\n\n" + extras.join("\n") : "");

      // Delivery 1: Google Apps Script -> Sheet row + email
      var fd = new FormData();
      fd.append("name", (get("firstName") + " " + get("lastName")).trim());
      fd.append("email", get("email"));
      fd.append("subject", get("subject"));
      fd.append("message", fullMessage);
      var sendScript = fetch(FORM_ENDPOINT, { method: "POST", body: fd })
        .then(function (r) { if (!r.ok) throw new Error("script " + r.status); });

      // Delivery 2: Netlify Forms -> dashboard capture + email notifications
      var nf = new URLSearchParams();
      nf.append("form-name", "enquiries");
      ["firstName", "lastName", "org", "email", "phone", "subject", "message"].forEach(function (n) {
        nf.append(n, get(n));
      });
      var sendNetlify = fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: nf.toString(),
      }).then(function (r) { if (!r.ok) throw new Error("netlify " + r.status); });

      // Success if EITHER channel delivers; fail only if both do.
      Promise.allSettled([sendScript, sendNetlify]).then(function (results) {
        var delivered = results.some(function (r) { return r.status === "fulfilled"; });
        if (delivered) { showSuccess(); return; }
        if (btn) { btn.disabled = false; btn.innerHTML = btnHtml; }
        alert("We could not send your message right now. Please email ao@swissdragons.com directly, or try again in a moment.");
      });
    });
  }

  /* ---- Shortcut CTAs -> prefill the form subject (data-subject) ---- */
  document.querySelectorAll('a[href="#contact"][data-subject]').forEach(function (a) {
    a.addEventListener("click", function () {
      var subject = document.querySelector('#applyForm [name="subject"]');
      if (!subject) return;
      var want = a.getAttribute("data-subject");
      var opt = Array.prototype.slice.call(subject.options).find(function (o) {
        return (o.value || o.textContent).trim() === want;
      });
      subject.value = opt ? (opt.value || opt.textContent) : want;
      var sf = subject.closest(".field");
      if (sf) sf.classList.remove("invalid");
    });
  });

  /* ---- Programme phase accordion (Morning / Midday / Afternoon / Evening) ---- */
  document.querySelectorAll(".tl__phase-head").forEach(function (head) {
    function toggle() {
      var phase = head.closest(".tl__phase");
      var open = phase.classList.toggle("open");
      head.setAttribute("aria-expanded", open ? "true" : "false");
    }
    head.addEventListener("click", toggle);
    head.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); }
    });
  });

  /* ---- Partnership intro choreography (play on scroll into view) ---- */
  var ptiersStage = document.getElementById("ptiersStage");
  if (ptiersStage) {
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      ptiersStage.classList.add("play");
    } else {
      var pso = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { ptiersStage.classList.add("play"); pso.unobserve(ptiersStage); }
        });
      }, { threshold: 0.18 });
      pso.observe(ptiersStage);
    }
  }

  /* ---- Partnership tier accordion (click / keyboard to pin open) ---- */
  document.querySelectorAll(".ptier__head").forEach(function (head) {
    function toggle() {
      var tier = head.closest(".ptier");
      var open = tier.classList.toggle("open");
      head.setAttribute("aria-expanded", open ? "true" : "false");
    }
    head.addEventListener("click", toggle);
    head.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); }
    });
  });

  /* ---- Partner CTA -> prefill contact form (subject + message) ---- */
  document.querySelectorAll(".ptier__cta").forEach(function (cta) {
    cta.addEventListener("click", function () {
      var tier = cta.closest(".ptier");
      var nameEl = tier && tier.querySelector(".ptier__name");
      var name = nameEl ? nameEl.textContent.trim() : "";
      var subject = document.querySelector('#applyForm [name="subject"]');
      var message = document.querySelector('#applyForm [name="message"]');
      if (subject) {
        var opt = Array.prototype.slice.call(subject.options).find(function (o) {
          return /sponsorship/i.test(o.textContent);
        });
        if (opt) { subject.value = opt.value || opt.textContent; }
        var sf = subject.closest(".field"); if (sf) sf.classList.remove("invalid");
      }
      if (message && name) {
        message.value = "I would like to enquire regarding the " + name + " opportunities.";
        var mf = message.closest(".field"); if (mf) mf.classList.remove("invalid");
      }
    });
  });

  /* ---- Footer year ---- */
  var y = document.getElementById("yr");
  if (y) y.textContent = new Date().getFullYear();

  /* ---- Lazy-load background videos AFTER first paint (don't block load) ---- */
  function bootVideos() {
    var vids = document.querySelectorAll("video[data-src]");
    vids.forEach(function (v) {
      if (v.dataset.src && !v.src) {
        v.src = v.dataset.src;
        v.load();
        var p = v.play();
        if (p && p.catch) p.catch(function () {});
      }
    });
  }

  /* ---- Hero video: slowed, cinematic playback ---- */
  var heroVid = document.querySelector(".hero__video");
  if (heroVid) {
    var slow = function () { heroVid.playbackRate = 0.5; };
    heroVid.addEventListener("loadedmetadata", slow);
    heroVid.addEventListener("play", slow);
  }

  if (document.readyState === "complete") {
    setTimeout(bootVideos, 60);
  } else {
    window.addEventListener("load", function () { setTimeout(bootVideos, 60); });
  }
})();
