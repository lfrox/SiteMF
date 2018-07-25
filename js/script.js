$('[data-fancybox]').fancybox({
  keyboard: true,
  loop: true,
  protect: true,
  buttons : [
    "zoom",
    "share",
    "slideShow",
    "fullScreen",
    "thumbs",
    "close"
  ],
  animationEffect: "zoom",
  transitionEffect: "zoom-in-out",
  transitionDuration: 466,
});


$('[data-fancybox="watermark"]').fancybox({
  protect    : true,
  slideClass : 'watermark',
  toolbar    : false,
  smallBtn   : true
});

// Preload watermark image
// Please, use your own image
(new Image()).src = "https://fancyapps.com/GJbkSPU.png";