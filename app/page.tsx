import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        yamz8
      </h1>
      <p className="mb-4">
        {`What I cannot build, I do not understand.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
