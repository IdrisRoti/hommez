import {PaginatedBlogs} from "../latest-blog-pagination"

export default function LatestBlogs() {
  return (
    <section id="blogs" className='bg-primary mt-24 py-14 md:py-20'>
        <div className='contain text-white'>
            <h2 className="text-lg md:text-xl md:mb-2 lg:mb-4 text-center font-medium tracking-wider uppercase">WHAT’S TRENDING</h2>
            <h3 className="mb-3 md:mb-5 font-semibold text-2xl md:text-4xl text-center">Latest Blogs & Posts</h3>
            <div className="mt-8 md:mt-16">
                <PaginatedBlogs />
            </div>
        </div>
    </section>
  )
}
