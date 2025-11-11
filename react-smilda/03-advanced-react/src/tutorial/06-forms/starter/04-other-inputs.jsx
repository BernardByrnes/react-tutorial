import { useState } from "react";
const frameworks = ["react", "angular", "vue", "svelte"];
const OtherInputs = () => {
  return (
    <div>
      <form className="form">
        <h4>Other Inputs</h4>
        {/* name */}
        <div className="form-row" style={{ textAlign: "left" }}>
          <label htmlFor="shipping"> Free Shipping </label>
        </div>
        <div className="form-row" style={{ textAlign: "left" }}>
          <label htmlFor="framework" className="form-label">
            Framework
          </label>
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  );
};
export default OtherInputs;


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>GSAP Parallax Effect</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body, html {
      height: 100%;
      overflow-x: hidden;
      font-family: sans-serif;
      background: #000;
    }

    .container {
      position: relative;
      height: 300vh; /* extra height for scroll */
    }

    section {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      overflow: hidden;
    }

    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      top: 0;
      left: 0;
    }

    .layer-bg {
      z-index: 1;
    }

    .layer-mid {
      z-index: 2;
    }

    .layer-front {
      z-index: 3;
    }

    .hero-text {
      position: absolute;
      z-index: 4;
      bottom: 10%;
      width: 100%;
      text-align: center;
      font-size: 3rem;
      color: white;
      font-weight: bold;
      text-shadow: 0 2px 10px rgba(0,0,0,0.6);
    }
  </style>
</head>
<body>
  <div class="container">
    <section>
      <img class="layer-bg" src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1170" alt="Background" />
      <img class="layer-mid" src="https://plus.unsplash.com/premium_photo-1669613233557-1676c121fe73?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1171" alt="Midground" />
      <img class="layer-front" src="https://images.unsplash.com/photo-1663011028387-76c2642f9538?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1166" alt="Foreground" />
      <h1 class="hero-text">Epic Parallax Scene</h1>
    </section>
  </div>

  <!-- GSAP + ScrollTrigger -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>

  <script>
    gsap.registerPlugin(ScrollTrigger);

    // Background moves slowest
    gsap.to(".layer-bg", {
      y: "-20%", // small movement
      ease: "none",
      scrollTrigger: {
        trigger: ".container",
        start: "top top",
        end: "bottom bottom",
        scrub: true
      }
    });

    // Midground moves faster
    gsap.to(".layer-mid", {
      y: "-40%",
      ease: "none",
      scrollTrigger: {
        trigger: ".container",
        start: "top top",
        end: "bottom bottom",
        scrub: true
      }
    });

    // Foreground moves fastest
    gsap.to(".layer-front", {
      y: "-60%",
      ease: "none",
      scrollTrigger: {
        trigger: ".container",
        start: "top top",
        end: "bottom bottom",
        scrub: true
      }
    });

    // Text fades/moves slightly
    gsap.to(".hero-text", {
      y: "-80%",
      opacity: 0,
      scrollTrigger: {
        trigger: ".container",
        start: "top center",
        end: "bottom top",
        scrub: true
      }
    });
  </script>
</body>
</html>
