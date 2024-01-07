import CircleBtn from '../common/CircleBtn';

function HeroText() {
  return (
    <div className="hero-content">
      <h5 className="mb-2 text-brand_color text-2xl animate-fade-up animate-delay-[0.5s] animate-duration-1000 animate-fill-both">
        We Provide The Best
      </h5>
      <h1 className="mb-[10px] text-white font-bold animate-fade-up animate-delay-[1s] animate-duration-1000 animate-fill-both">
        {/* FIXME: the {} should be placed in nex line */}
        Security Service
        {' '}
      </h1>
      <p className="mb-4 text-white max-w-[570px] animate-fade-up animate-delay-[1.5s] animate-duration-1000 animate-fill-both">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="mt-[25px] animate-fade-up animate-delay-[2s] animate-duration-1000 animate-fill-both">
        <CircleBtn text="get appointment" link="#" />
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero_section">
      <div className="flex items-center bg-center bg-no-repeat bg-cover bg-hero h-hero_size">
        <div className="container md:px-12">
          <div className="flex">
            <div className="px-3 lg:w-8/12">
              <HeroText />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
