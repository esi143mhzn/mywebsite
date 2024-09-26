import React from 'react'
import profileImage from '../assets/profile.jpg'

export default function About() {
  return (
    <div className="flex justify-center flex-wrap sm:flex-wrap md:flex-nowrap lg:flex-nowrap font-serif lg:ml-40 lg:mt-10 md:ml-40 md:mt-10 mt-20">
        <div className='flex'>
            <img className='max-w-56 md:w-48 lg:w-48' src={profileImage} alt="profile-image" loading='lazy' />
        </div>
        <div className="flex flex-wrap justify-around md:justify-normal lg:justify-normal p-6">
            <h1 className='flex-auto text-center text-lg md:text-2xl lg:text-4xl font-semibold text-slate-900 lg:text-justify md:text-justify sm:text-center'>Hi! 
                <br /> I'm Pramish Maharjan.
            </h1>
            <p className='flex-none text-center w-full text-sm font-medium text-slate-700 mt-5 lg:text-justify md:text-justify'>
                I am a Full Stack Web developer with 6 years of experience specializing in front end and backend development.
            </p>
            <a href="https://pramishmhrjn.com.np" target='_blank' className="flex mt-3 p-1.5 bg-gray-200 rounded-lg hover:bg-sky-200">View Portfolio</a>
        </div>
    </div>
  )
}
