import React from 'react';
import { useSpring , animated } from 'react-spring';
import Gif from '../assets/gif/ice-cream-girl.gif';

export default function Home() {

  const springPropsOne = useSpring({
    from: { y: -1000 },
    to: { y: 0 },
    config: { duration: 800 },
  })

  const springPropsTwo = useSpring({
    from: { y: -1000 },
    to: { y: 0 },
    config: { duration: 600 },
  })

  const springPropsThree = useSpring({
    from: { y: -1000 },
    to: { y: 0 },
    config: { duration: 400 },
  })

  return (
    <div className='font-Urbanist uppercase h-screen w-full bg-zinc-100 flex flex-row justify-center items-center'>
      <div className='h-full w-7/12 flex flex-col justify-center items-center gap-2 pb-24'>
        <animated.h1 className='text-9xl font-extrabold text-zinc-600' style={springPropsOne}>
          Oops !
        </animated.h1>
        <animated.h1 className='text-3xl font-extrabold text-zinc-500' style={springPropsTwo}>
          404 - page not found
        </animated.h1>
        <animated.p  className='text-xl font-extrabold text-zinc-400'  style={springPropsThree}>
          the requested url badpage wes not found on this server .
        </animated.p>
      </div>
      <div className='h-full w-4/12 flex flex-row justify-start items-center'>
        <img src={Gif} />
      </div>
    </div>
  );
}
