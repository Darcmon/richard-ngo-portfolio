import portrait from '../../../assets/BSTN-TO-SE-Jan-2023-headshot-26-LinkedIn.jpg';
import Socials from '../Socials/Socials';

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
      <div className="flex-1">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
          <h2 className="text-4xl lg:text-5xl py-1 text-cyan-500 font-bold whitespace-nowrap">
            Richard Ngo
          </h2>
          <Socials />
        </div>
        <h3 className="text-xl lg:text-2xl py-1">Developer</h3>
        <p className="text-sm lg:text-base leading-relaxed mt-2">
          Curious programmer with a background in design, audio/video
          production, and mental health. My passion for problem solving and
          human-oriented thinking has led me to software engineering.
        </p>
      </div>
      <div className="flex-shrink-0 mt-6 md:mt-0">
        <img
          className="rounded-full w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 object-cover transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 shadow-lg"
          src={portrait}
          alt="Richard Ngo portrait"
        />
      </div>
    </div>
  );
};

export default Header;
