import './App.css'
import { useState } from 'react'

import { Canvas } from '@react-three/fiber'
import Tory from './Tory'


function App() {

  return (
    <>
     <Canvas camera={{
        near:1,
        far:100,
        position:[7,7,0]
      }}>
      
        <Tory>

        </Tory>
      </Canvas>
    </>
  )
}

export default App
