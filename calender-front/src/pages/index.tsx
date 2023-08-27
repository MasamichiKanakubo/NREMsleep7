import Image from 'next/image'
import { Inter } from 'next/font/google'
import {useState} from "react";
import Roulette from "../components/roulette";
import LoginModel from "../components/loginmodel";

const inter = Inter({ subsets: ['latin'] })



export default function Home() {
    const [isLoginShow,setIsLoginShow] = useState(true)
    const [isRouletteShow, setIsRouletteShow] = useState(false)
  return (
   <>
   <h1>here is honban</h1>
       <button onClick={()=>setIsRouletteShow((prev)=>!prev)}>roulette</button>
       {
           isRouletteShow && <Roulette />
       }
       <button onClick={()=>setIsLoginShow((prev)=>!prev)}>login</button>
       {
           isLoginShow && <LoginModel />
       }
   </>
  )
}
