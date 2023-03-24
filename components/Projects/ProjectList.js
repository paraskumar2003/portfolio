import React from 'react'
import ProjectCard from './ProjectCard';
import { ProjectData } from './Data';

function ProjectList() {
  return (
    <div style={{display:'flex',justifyContent:'space-around',flexWrap:'wrap'}}>
    {ProjectData.map((item,index)=>{ return <ProjectCard key={index} item={item}/>})}
    </div>
  )
}
 
export default ProjectList;
