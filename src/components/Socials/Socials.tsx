import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai';

// const socials = [
//   {
//     name: 'Instagram',
//     href: `https://www.instagram.com/richyngo/`,
//     target: '_blank',
//     alt: 'instagram',
//   },
//   {
//     name: 'LinkedIn',
//     href: 'https://www.linkedin.com/in/richardngo-/',
//     target: '_blank',
//     alt: 'linkedin',
//   },
//   {
//     name: 'GitHub',
//     href: 'https://github.com/Darcmon',
//     target: '_blank',
//     alt: 'github',
//   },
// ];

const Socials = () => {
  return (
    <div className="flex flex-wrap center py-10 gap-8 justify-center">
      <a
        href="https://www.instagram.com/richyngo/"
        target="_blank"
        aria-label="instagram"
      >
        <AiFillInstagram className="h-12 w-12" />
      </a>
      <a
        href="https://www.linkedin.com/in/richardngo-/"
        target="_blank"
        aria-label="linkedin"
      >
        <AiFillLinkedin className="h-12 w-12" />
      </a>
      <a href="https://github.com/Darcmon" target="_blank" aria-label="github">
        <AiFillGithub className="h-12 w-12" />
      </a>
    </div>
  );
};

export default Socials;
