import React from 'react'
import { CardBody,CardContainer, CardItem } from './ui/3d-card'
import Image from 'next/image'
import Link from 'next/link'

const ProjectCard = ({image,title,description,github,live}:{image:string,title:string,description:string,github:string,live:string}) => {
  return (
    <div>
 <CardContainer className="inter-var w-5/6">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
       
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={image}
            height="300"
            width="300"
            className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
         {description.substring(0, 150)+'...'}
        </CardItem>
        <div className="flex justify-between items-center mt-4">
          <CardItem
            translateZ={20}
            as={Link}
            href={live}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
              as={Link}
            href={github}
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
           GitHub
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
    </div>
  )
}

export default ProjectCard