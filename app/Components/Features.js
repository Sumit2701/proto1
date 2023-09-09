import React from 'react'
import logo from '../../Assets/hero.png'
export default function Features() {
   const features=[
        {title:"Highly Secure",
        Description:"really nice thing about the feature",
        image:logo
        }, {title:"Highly Secure",
        Description:"really nice thing about the feature",
        image:logo
        }, {title:"Highly Secure",
        Description:"really nice thing about the feature",
        image:logo
        }
]
  return (
   <><>
   {/* Container for demo purpose */}
   <div className="container my-24 mx-auto md:px-6 ">
     {/* Section: Design Block */}
     <section className="mb-32">
       <div className="flex flex-wrap items-center">
         <div className="mb-6 w-full shrink-0 grow-0 basis-auto px-3 lg:mb-0 lg:w-4/12">
           <h2 className="mb-6 text-3xl font-bold">
             Why is it so
             <u className="text-primary dark:text-primary-400">great?</u>
           </h2>
           <p className="mb-12 text-neutral-500 dark:text-neutral-300">
             Nunc tincidunt vulputate elit. Mauris varius purus malesuada neque
             iaculis malesuada. Aenean gravida magna orci, non efficitur est
             porta id. Donec magna diam.
           </p>
         </div>
         <div className="mb-md-0 mb-6 w-full shrink-0 grow-0 basis-auto px-3 lg:w-8/12">
           <div className="flex flex-wrap">
           {features.map((feature) => (<div key={feature.title} className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 lg:px-3">
            <div className="flex">
                <div className="mt-0.5 shrink-0">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
                </div>
                <div className="ml-2 grow">
                <p className="mb-3 font-bold">Support 24/7</p>
                <p className="text-neutral-500 dark:text-neutral-300">
                    Pellentesque mollis, metus nec fringilla aliquam. Donec
                    consequat orci quis volutpat imperdiet.
                </p>
                </div>
            </div>
            </div>))}
           
           </div>
         </div>
       </div>
     </section>
     {/* Section: Design Block */}
   </div>
   {/* Container for demo purpose */}
 </>
 
         </>
  )
}
