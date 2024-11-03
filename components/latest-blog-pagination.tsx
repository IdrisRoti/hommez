import React from 'react'
import {BlogPostCard} from './BlogPostCard'

export function PaginatedBlogs() {
  return (
    <div className='w-full overflow-hidden'>
        <div className='w-full flex flex-col md:flex-row md:gap-4 lg:gap-10'>
            <BlogPostCard />
            <BlogPostCard />
            <BlogPostCard />
        </div>
        {/* ********** CAROUSEL PAGINATION ************* */}
        <div className='md:flex justify-center gap-6 h-1 px-4 mt-20 hidden'>
          <button className='bg-white h-full rounded-full w-[4rem] lg:w-[6.25rem]'></button>
          <button className='bg-white bg-opacity-50 h-full rounded-full w-[4rem] lg:w-[6.25rem]'></button>
          <button className='bg-white bg-opacity-50 h-full rounded-full w-[4rem] lg:w-[6.25rem]'></button>
        </div>
        <button className='md:hidden text-primary bg-white font-medium rounded-full px-5 active:opacity-85 py-2'>View more blogs</button>
    </div>
  )
}
