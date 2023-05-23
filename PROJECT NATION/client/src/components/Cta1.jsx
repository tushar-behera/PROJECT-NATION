import React from 'react'
import exe from '../assets/exe.png'

const Cta = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
         <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <img className="w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg" alt="dashboard image"/>
           
            <div className="mt-4 md:mt-0">
                <h2 className="mb-4 text-6xl tracking-tight font-extrabold text-gray-900 dark:text-white">EXCLUSIVE</h2>
                <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">PROJECT NATION’S EXCLUSIVE platform is a game-changer category. Here we can work under some professional People and start your journey toward your dream while earning for your pocket ..</p>
                <a href="#" className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
                    Get started
                    <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </div>
            <img className="w-full  hidden dark:block" src={exe} alt="dashboard image"/>
        </div>
    </section>
  )
}

export default Cta