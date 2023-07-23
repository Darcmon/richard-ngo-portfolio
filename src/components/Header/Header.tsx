import React from 'react'

type Props = {}

const Header = (props: Props) => {
    return (
      <div className="p-10">
        <h2 className="text-5xl py-2 text-cyan-600 font-bold">Richard Ngo</h2>
        <h3 className="text-2xl py-2">Developer</h3>
        <p className=''>
          Curious programmer with a background in design, audio/video
          production, and mental health. My passion for problem solving and
          human-oriented thinking has led me to software engineering.
        </p>
        <p>Let's connect!</p>
      </div>
    );
}

export default Header