import portrait from '../../../assets/BSTN-TO-SE-Jan-2023-headshot-26-LinkedIn.jpg';
import Socials from '../Socials/Socials';

const Header = () => {
  return (
    <div className="p-10 xl:max-w-7xl m-auto">
      <div>
        <div className="flex items-center gap-8">
          <h2 className="text-5xl py-2 text-cyan-600 font-bold">Richard Ngo</h2>
          <Socials />
        </div>
        <h3 className="text-2xl py-2">Developer</h3>
        <p className="md:w-3/5">
          Curious programmer with a background in design, audio/video
          production, and mental health. My passion for problem solving and
          human-oriented thinking has led me to software engineering.
        </p>
        <p className="py-8">Let's connect!</p>
      </div>
      <div className="flex justify-center">
        <img
          className="rounded-full shrink w-96 h-96 transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
          src={portrait}
          alt="richard portrait"
        />
      </div>
    </div>
  );
};

export default Header;
