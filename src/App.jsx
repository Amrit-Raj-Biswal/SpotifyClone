import React, { useContext } from 'react'
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Display from './components/Display'
import { PlayerContext } from './context/PlayerContext'
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';    

const App = () => {

  const {audioRef, track} = useContext(PlayerContext)

  return (
    // w-20 -- 5 rem -- 80 px
    // h-10 -- 2.5 rem -- 40 px
    // bg-neutral-500 -- {r, g, b} = {115, 115, 115}
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <Sidebar/>
        <Display/>
      </div> 
      <Player/>
      <audio ref={audioRef} preload='auto' src={track.file}></audio>
      <SpeedInsights />
      <Analytics/>
    </div>
  )
}

export default App
