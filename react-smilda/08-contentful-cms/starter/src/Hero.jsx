import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
            accusantium vero fugit deleniti eos ipsum a, incidunt fugiat labore
            expedita consectetur temporibus! Praesentium ducimus tenetur
            perspiciatis ullam animi repudiandae placeat?
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
