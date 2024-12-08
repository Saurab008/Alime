import React, { useState } from 'react'

export default function Follow() {
const [index, setIndex] = useState(0)
const ImageData = [
  {
    image:
      "https://images.unsplash.com/photo-1732734042420-1fa41185ad56?q=80&w=1410&auto=format&fit=crop",
  },
  {
    image:
      "https://images.unsplash.com/photo-1733227800842-dcc9d4cfeabc?q=80&w=1528&auto=format&fit=crop",
  },
  {
    image:
      "https://images.unsplash.com/photo-1675904581137-baf52052e6ce?q=80&w=1374&auto=format&fit=crop",
  },
  {
    image:
      "https://images.unsplash.com/photo-1733235015085-fc29c17c4a16?q=80&w=1374&auto=format&fit=crop",
  },
  {
    image:
      "https://images.unsplash.com/photo-1733236915496-62fd08077a89?q=80&w=1374&auto=format&fit=crop",
  },
  {
    image:
      "https://images.unsplash.com/photo-1535579710123-3c0f261c474e?q=80&w=1374&auto=format&fit=crop",
  },
  {
    image:
      "https://images.unsplash.com/photo-1733348701960-1cbebe1a3711?q=80&w=1378&auto=format&fit=crop",
  },
];


      
  return (
    <div>

        {/*Follow Us and insta link */}
        <div className=' mt-10 text-center'>
            <h1 className='text-4xl font-bold'>Follow Instagram</h1>
            <p className='text-1xl text-gray-700 p-3'>@saurab_kunwar</p>
        </div>

        {/* Insta Images */}
        <div className='flex justify-center h-60 w-full flex-grow overflow-hidden object-cover gap-4'>
            {
                ImageData.map((val,i)=> {
                    return(
                        <img src={val.image} alt="Insta PHotos" className='shadow-lg shadow-gray-600 duration-500 ease-in-out delay-75 hover:scale-110' />
                    )
                })
            }
        </div>
    </div>
  )
}
