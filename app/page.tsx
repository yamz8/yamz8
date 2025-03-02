import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`To be honest, I'm not sure what to put here. I created this mostly 
        for myself to have something that will help me think more deeply. 
        If anyone finds it useful, have fun.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
