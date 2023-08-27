import Image from 'next/image'
import { Inter } from 'next/font/google'
import {useState} from "react";
import Roulette from "../components/roulette";
import LoginModel from "../components/loginmodel";
import {Roulettemodal} from "@/components/roulettemodal";

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
    const [isLoginShow,setIsLoginShow] = useState(true)
    const [isRouletteShow, setIsRouletteShow] = useState(false)


    const closeModal = () => {
        setIsLoginShow(false)
    }

  return (
   <>
   <h1>here is honban</h1>
       <button onClick={()=>setIsRouletteShow((prev)=>!prev)}>roulette</button>
       {
           isRouletteShow && <Roulettemodal />
       }
       <button onClick={()=>setIsLoginShow((prev)=>!prev)}>login</button>
       {
           isLoginShow && <LoginModel closeModal={closeModal}/>
       }
   </>
  )
}
