import Slider from './Slider';

const Hero = () => {
  return (
    <section className="relative pt-10 pb-20 bg-bg-hero">
      <div className="container before:content-hero before:w-80 before:h-80 before:absolute before:top-0 before:-left-20">
        <Slider />
      </div>
    </section>
  );
};

export default Hero;
