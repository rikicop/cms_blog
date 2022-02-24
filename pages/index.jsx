import Head from 'next/head'
import { PostCard, Categories, PostWidget } from './components'
import { getPosts } from '../services'

// posts will be populated at build time by getStaticProps()
export default function Home({ posts }) {
  return (
    <div className="container mx-auto mb-8 px-10">
      <Head>
        <title>CMS BLOG</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post) => (
            <div>{<PostCard post={post.node} key={post.title} />}</div>
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relatve top-8 lg:sticky">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || []
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return { props: { posts } }
}
