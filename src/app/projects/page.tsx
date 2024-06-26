import ProjectCard from '@/components/ProjectCard'
import React from 'react'
import projectData from '../../data/project_data.json'

const Projects = () => {
  return (<div className='bg-black/[0.96] antialiased '>
<div className='grid sm:grid-cols-3 gap-5'>
    {projectData.projects.map((project)=>(

<ProjectCard key={project.id} {...{image: project.image, title: project.title, description: project.description,github: project.github,live: project.live}} />

))}
</div>

    </div>
  )
}

export default Projects