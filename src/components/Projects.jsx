import React from 'react'
import Data from '../utils/project'

export default function Projects() {
  return (
    <div className='relative overflow-x-auto mt-10'>
      <table className='w-full text-sm text-left rtl:text-right text-gray-500'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
          <tr>
            <th className='px-6 py-3'>S.N.</th>
            <th className='px-6 py-3'>Project Title</th>
            <th className='px-6 py-3'>Project Description</th>
            <th className='px-6 py-3'>Website & Github Link</th>
          </tr>
        </thead>
        <tbody>
          {
            Data.map((project, index) => 
              <tr key={index} className='bg-white border-b'>
                <td className='px-6 py-4'>{project.id}</td>
                <td className='px-6 py-4'>{project.title}</td>
                <td className='px-6 py-4'>{project.description}</td>
                <td className='flex px-6 py-4 text-xl gap-5'>
                  <a href={project.links.github} target='_blank'><i className="fa-brands fa-github hover:bg-sky-300 rounded-full"></i></a>
                  <a href={project.links.website} target='_blank'><i className="fa-solid fa-globe hover:bg-sky-300 rounded-full"></i></a>
                </td>
              </tr>
            )
          }  
        </tbody>
      </table>
    </div>
  )
}
