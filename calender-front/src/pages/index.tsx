import Image from 'next/image'
import { Inter } from 'next/font/google'
import Button from '@/components/button';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
   <h1>here is honban</h1>
      <Button>TEST</Button>
   </>
  )
}
