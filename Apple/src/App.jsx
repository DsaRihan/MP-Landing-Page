import { Canvas } from '@react-three/fiber'
import React from 'react'
import './App.css';
import {Environment, OrbitControls, ScrollControls} from "@react-three/drei"
import MacContainer from './/MacContainer';

const App = () => {
  return (
    <div className='w-full h-screen '>
      <div className='navbar line pt-10 flex gap-8 absolute pb-3 left-1/2 -translate-x-1/2'>{[
        "iphone","ipad","services","ios","mac","macbook","Pro"
      ].map(e => (<a href='' className='text-white font-500 text-md capitalize'>{e}</a>))}</div>
      <div className='absolute flex flex-col items-center text-white top-32 left-1/2 -translate-x-1/2'>
        <h3 className='text-7xl tracking-tighter font-[700] text-gradient'>MacBook Pro</h3>
      </div>
        <Canvas camera={{fov:12,position:[0,-10,220]}}>
          {/* <OrbitControls/> */}
          <Environment files={[
            "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr",
          ]}/>
          <ScrollControls pages={3}>
            <MacContainer/>
          </ScrollControls>
        </Canvas>
    </div>
    
  )
}

export default App
