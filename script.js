var img1 = document.getElementById('img1')
var img2 = document.getElementById('img2')
var img3 = document.getElementById("img3")

Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 0.5,
    debug: true
  });

  Shery.imageMasker("#img1" /* Element to target.*/, {
    //Parameters are optional.
    mouseFollower: true,
    text: "Shery",
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
  Shery.makeMagnet("#img2" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

  Shery.textAnimate("#text1" /* Element to target.*/, {
    //Parameters are optional.
    style: 1,
    y: 10,
    delay: 0.1,
    duration:1,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });

  Shery.hoverWithMediaCircle("#img3" /* Element to target.*/, {
    images: ["image1.jpg", "image2.jpg", "image3.jpg"] /*OR*/,
    //videos: ["video1.mp4", "video2.mp4"],
  });

//   Shery.imageEffect("#img4", {
//     style: 4, //Select Style
//     debug: true, // Debug Panel
//     config: {
//       /* Config made from debug panel */
//     },
//     preset: "./presets/wigglewobble.json",
//   });

// Shery.imageEffect("#img4", {
//     style: 1 /*OR 5 for different variant */,
//     debug: true,
//   });
Shery.imageEffect("#img4", {
    style: 3,
    // debug: true,
    config: {
    },
  });


  Shery.textAnimate("#text2" /* Element to target.*/, {
    //Parameters are optional.
    style: 2,
    y: 10,
    delay: 0.1,
    duration:1,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });
  Shery.textAnimate("#text3" /* Element to target.*/, {
    //Parameters are optional.
    style: 3,
    y: 10,
    delay: 0.1,
    duration:1,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });
  Shery.textAnimate("#text4" /* Element to target.*/, {
    //Parameters are optional.
    style: 1,
    y: 10,
    delay: 0.1,
    duration:1,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });