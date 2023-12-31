'use client'
import {motion as m} from "framer-motion"

export default function Home() {
  return (
    <m.div
    initial = {{y:"100%"}}
    animate={{y:"0%"}}
    transition={{duration:.75, ease:"easeOut"}}
    exit={{opacity:1}}
    className=" text-gray-900 absolute top-0 left-0 w-full min-h-screen bg-orange-100 lg:px-48 px-16">
    <main>
     <div className="my-96 p-1 overflow-hidden">
      <m.h1 
      animate={{y:0}}
      initial={{y:"100%"}}
      transition={{delay:.5,duration:.5,}}
      className='text-6xl text-center lg:text-right lg:text-9xl'>Happy pickle</m.h1>
     </div>
     <div className='flex justify-between'>
      <div>
        <h2>Design</h2>
        <h2>Company</h2>
        <h2>2022</h2>
      </div>
      <div>
        <h3>This pickle gonna make you smile</h3>
        <h3>Scottish designs to make you happy</h3>
        <h3>Click contact for cool transition</h3>
      </div>
     </div>
    </main>
    </m.div>
  )
}
