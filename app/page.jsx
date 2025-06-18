'use client'
import { Button } from "@/components/ui/button";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";
import { useState } from "react";

const page = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 20) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });
  return (
    <div className="select-none font-mono inset-0 -z-10 h-full w-full bg-black bg-[radial-gradient(#dc2626,transparent_1px)] [background-size:16px_16px]">
      <motion.div
      variants={{
        visible: { y: 0 },
        hidden: { y: -50 }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
       className='bg-red-600 font-semibold py-2 text-center text-sm w-screen sticky top-0'>Learn More, Pay Less — Swap Instead!
       </motion.div>

       <motion.nav
        className="max-w-5xl sticky top-3 mx-auto bg-black border-2 rounded-full border-red-600 z-10 py-4 px-6"
        initial={{ y: -50, opacity: 0 }} // Start hidden
        variants={{
          hidden: { y: -50, opacity: 0 },
          visible: { y: 0, opacity: 1 }
        }}
        animate={hidden ? "visible" : "hidden"}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="container mx-auto flex justify-between items-center">
          <div className="font-bold text-red-600 text-xl">skillswap</div>
          <div className="hidden md:flex space-x-4">
            <a href="#" className="text-red-400 hover:text-red-600">Community</a>
            <a href="#" className="text-red-400 hover:text-red-600">About</a>
          </div>
        </div>
      </motion.nav>
      <div className='container mx-auto max-w-6xl md:px-0 px-3'>
        <div className='flex flex-col justify-center items-center md:pt-[20vh] pt-[15vh] space-y-6'>
          <div className='md:text-sm text-xs text-red-600 bg-black border border-red-600 rounded-full max-w-sm flex items-center justify-center py-2 px-4 text-center font-semibold'>Master Anything — Just Swap What You Know</div>
          <h1 className='font-extrabold text-red-600 md:text-7xl text-4xl text-center tracking-tighter'>Trade talents, not Cash</h1>
          <p className='text-center text-red-600 text-lg max-w-xl font-medium'>Teach coding, get guitar lessons. Share photography skills, learn baking. <span className='bg-red-600 text-black font-bold px-1'>No money? No problem!</span></p>
          <div className='pt-6'>
            {/* <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-red-600 px-6 font-semibold text-black text-lg"><span>Swap Now</span><div className="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg></div></button> */}
            <Button effect="expandIcon" icon={ArrowRightIcon} iconPlacement="right" className="rounded-full bg-red-600 hover:bg-red-600 px-6 font-semibold text-black text-lg">
              Swap Now
            </Button>
          </div>
        </div>

        <div className='py-28 container max-w-4xl mx-auto'>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4 text-red-600">
              <div className="md:col-span-2 text-center bg-black border-2 border-dashed border-red-600 h-80 rounded-xl flex flex-col justify-center items-center p-3">
                <div className="font-extrabold text-3xl">Trade Skills 1-on-1</div>
                <div className="text-lg font-semibold pt-2">&quot;You teach me X, I&apos;ll teach you Y&quot;</div>
              </div>
              <div className="text-center bg-black border-2 border-dashed border-red-600 h-80 rounded-xl flex flex-col justify-center items-center p-3">
                <div className="font-extrabold text-3xl">No Cash Needed</div>
                <div className="text-lg font-semibold pt-2">Knowledge is the only currency</div>
              </div>              
              <div className="text-center bg-black border-2 border-dashed border-red-600 h-80 rounded-xl flex flex-col justify-center items-center p-3">
                <div className="font-extrabold text-3xl">Local or Virtual Swaps</div>
                <div className="text-lg font-semibold pt-2">Meet up or exchange lessons online</div>
              </div>               
              <div className="md:col-span-2 text-center bg-black border-2 border-dashed border-red-600 h-80 rounded-xl flex flex-col justify-center items-center p-3">
                <div className="font-extrabold text-3xl">Build Your Skill Network</div>
                <div className="text-lg font-semibold pt-2">Connect, learn, and grow together</div>
              </div>          
              </div>
        </div>
      </div>
    </div>
  )
}

export default page