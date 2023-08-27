import Image from 'next/image'
import { Inter } from 'next/font/google'
import {useState} from "react";
import Roulette from "../components/roulette";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const [isShow, setIsShow] = useState(true)
  return (
   <>
   <h1>here is honban</h1>
       <button onClick={()=>setIsShow((prev)=>!prev)}>toggle</button>
       {
           isShow && <Roulette />
       }
   </>
  )
}
