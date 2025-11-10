import { useState } from 'react';
const frameworks = ['react', 'angular', 'vue', 'svelte'];
const OtherInputs = () => {
  return (
    <div>
      <form className='form'>
        <h4>Other Inputs</h4>
        {/* name */}
        <div className='form-row' style={{ textAlign: 'left' }}>
          <label htmlFor='shipping'> Free Shipping </label>
        </div>
        <div className='form-row' style={{ textAlign: 'left' }}>
          <label htmlFor='framework' className='form-label'>
            Framework
          </label>
        </div>
        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </div>
  );
};
export default OtherInputs;

// 1️⃣ Ease out — starts fast, slows down
gsap.to(".box", {
  x: 300,
  duration: 2,
  ease: "power2.out"
});

// 2️⃣ Ease in — starts slow, speeds up
gsap.to(".box", {
  x: 300,
  duration: 2,
  ease: "power2.in"
});

// 3️⃣ Ease in-out — smooth both ways
gsap.to(".box", {
  x: 300,
  duration: 2,
  ease: "power2.inOut"
});

// 4️⃣ Bounce
gsap.to(".box", {
  y: 300,
  duration: 2,
  ease: "bounce.out"
});

// 5️⃣ Elastic
gsap.to(".box", {
  x: 300,
  duration: 2,
  ease: "elastic.out(1, 0.3)"
});
