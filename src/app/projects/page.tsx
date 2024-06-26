import ProjectCard from '@/components/ProjectCard'
import { Spotlight } from '@/components/ui/Spotlight'
import { Boxes } from '@/components/ui/background-boxes'
import React from 'react'

const Projects = () => {
  return (<div className='bg-black/[0.96] antialiased '>
<div className='grid sm:grid-cols-3 gap-5'>
<ProjectCard/>
<ProjectCard/>
<ProjectCard/>
<ProjectCard/>
<ProjectCard/>
<ProjectCard/>
</div>

    </div>
  )
}

export default Projects