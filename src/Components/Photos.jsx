import React from 'react';

export default function Photos() {
    const ImageData = [
        {
            image:
                "https://plus.unsplash.com/premium_photo-1709311452215-496c6740ca59?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            image:
                "https://images.unsplash.com/photo-1733176094174-0e06953c7700?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            image:
                "https://images.unsplash.com/photo-1733299704493-9aa9c608778a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            image:
                "https://images.unsplash.com/photo-1733285585416-8e556129f1e9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            image:
                "https://images.unsplash.com/photo-1732967377738-66c8dfb45167?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            image:
                "https://images.unsplash.com/photo-1608085575984-d61d8335340e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            image:
                "https://plus.unsplash.com/premium_photo-1731798246177-55a387026b90?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
    ];

    return (
        <div className=" mx-20  gap-3 flex items-center justify-center flex-col">
            {/* Categories */}
            <div className=" ">
                <ul className="grid grid-cols-5 text-2xl font-medium gap-4 ">
                    <li className="text-gray-900 border-b-2 border-red-800 w-fit  hover:text-[#fc6060] hover:scale-110 cursor-pointer">All</li>
                    <li className="text-gray-900  hover:text-[#fc6060] hover:scale-110 cursor-pointer">Human</li>
                    <li className="text-gray-900  hover:text-[#fc6060] hover:scale-110 cursor-pointer">Nature</li>
                    <li className="text-gray-900  hover:text-[#fc6060] hover:scale-110 cursor-pointer">Country</li>
                    <li className="text-gray-900  hover:text-[#fc6060] hover:scale-110 cursor-pointer">Videos</li>
                </ul>
            </div>

            {/* Photos */}
            <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {ImageData.map((val, i) => (
                    <div key={i} className="overflow-hidden rounded-lg shadow-lg">
                        <img
                            src={val.image}
                            alt={`Image ${i + 1}`}
                            className="w-full h-48 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                        />
                    </div>
                ))}
            </div>
            {/**Button */}
            <div className='flex justify-center'>
                <button className='mt-5 delay-75 duration-700 ease-in-out border border-[#fc6060] px-11 py-3 rounded-3xl hover:bg-[#fc6060] hover:text-white'>View More</button>
            </div>
        </div>
    );
}
