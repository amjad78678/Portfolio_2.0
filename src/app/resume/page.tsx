import { ContainerScroll } from '@/components/ui/container-scroll-animation'
import { Button } from '@/components/ui/moving-border'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Resume = () => {
  return (
    <div>
       <div className="flex flex-col overflow-hidden">

  <div className='flex justify-center z-20 mt-4 mb-2'>

  <Image className='rounded-full' width={150} height={150} src="https://res.cloudinary.com/dkxtgziy2/image/upload/v1719401829/important/WhatsApp_Image_2024-05-29_at_15.02.21_7ef0bb41_edynej.jpg" alt="" />

            </div>
    <div className='mx-auto inline-flex justify-center hover:cursor-pointer z-20'>
            <Link href={'/'}>
    <Button
        borderRadius="1rem"
        className="dark:cursor-pointer  dark:text-white dark:border-slate-800"
      >
         <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-8 w-8 mr-2" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" 
          />
        </svg>
      <span className="dark:text-white text-black dark:cursor-pointer font-serif text-xl"> Resume</span>
      </Button>
    </Link>
    </div>

      <ContainerScroll
        titleComponent={
          <>
 
          </>
        }
      >
        <Image
          src="https://res.cloudinary.com/dkxtgziy2/image/upload/v1719415680/important/Resume_Mohammed_Amjad_Ali-1_va38fu.png"
          alt="hero"
          width={1000}
          height={1000}
          className="mx-auto object-cover rounded-2xl h-full w-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
   
 
    </div>
  )
}

export default Resume