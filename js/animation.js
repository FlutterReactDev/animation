var CIGlobal = {
  init: function (e) {
    this.pageTransitions(e);
  },

  pageTransitions: function (e) {
    barba.init({
      views: [
        {
          namespace: "home",
          afterEnter: function (e) {
            setTimeout(function () {
              CIHomepage.Init();
            }, 100);
          },
        },
      ],
    });
  },
};
var CIHomepage = {
  Init: function () {
    this.Scroll();
    this.Splash();
    this.Content();
  },

  Splash: function () {
    setTimeout(function () {
      $("#js-home").addClass("is-splash-postload");
      ScrollTrigger.create({
        start: "top top",
        end: "bottom bottom",
        trigger: "body",
        onUpdate: ({ progress: e }) => {
          e > 0.99 && $("#js-home").addClass("is-footer"),
            e < 0.99 && $("#js-home").removeClass("is-footer");
        },
      });
    }, 1300),
      setTimeout(function () {
        gsap.globalTimeline.play();
      }, 2300);
  },
  Scroll: function () {
    const e = document.querySelectorAll("div.js-home-item");
    function t(e, t) {
      return Math.random() * (t - e) + e + "%";
    }
    for (let o = 0; o < e.length; o++) {
      gsap
        .timeline({
          repeat: -1,
          repeatRefresh: !0,
        })
        .fromTo(
          e[o],
          {
            x: "100vw",
            top: () =>
              o % 2 == 0
                ? $(window).width() < 800
                  ? t(-2.5, 20)
                  : t(-5, 15)
                : $(window).width() < 800
                ? t(50, 75)
                : t(50, 70),
            width: () => {
              return (
                (e = 10),
                (t = 20),
                $(window).width() < 768
                  ? ((e += 12.5), (t += 12.5))
                  : $(window).width() >= 768 &&
                    $(window).width() <= 992 &&
                    ((e += 10), (t += 10)),
                Math.random() * (t - e) + e + "%"
              );
              var e, t;
            },
          },
          {
            duration: o % 2 == 0 ? 30 : 40,
            x: $(window).width() < 800 ? "-40vw" : "-25vw",
            ease: "none",
          }
        )
        .progress(o / 8 + 0.2);
    }
    setTimeout(function () {
      gsap.globalTimeline.pause();
    }, 100),
      $(" div.js-home-item").on({
        mouseenter: function () {
          gsap.globalTimeline.timeScale(0.5);
        },
        mouseleave: function () {
          gsap.globalTimeline.timeScale(1);
        },
      });
  },
  Content: function () {
    ScrollTrigger.create({
      start: "top top",
      end: "bottom bottom",
      trigger: "body",
      onUpdate: ({ progress: e }) => {
        e > 0.01
          ? (gsap.globalTimeline.pause(),
            $("#js-home").hasClass("is-content") ||
              $("#js-home").addClass("is-content"),
            $(".header").hasClass("is-content") ||
              $(".header").addClass("is-content"))
          : (gsap.globalTimeline.play(),
            $("#js-home").hasClass("is-content") &&
              $("#js-home").removeClass("is-content"),
              $(".header").hasClass("is-content") &&
              $(".header").removeClass("is-content"));
      },
    });
  },
};




