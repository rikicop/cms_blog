import React from 'react'

import { getPosts, getPosDetails } from '../../services'
import {
  PostDetail,
  Categories,
  PostWidget,
  Autor,
  Comments,
  CommentsForm,
  Author,
} from '../../components'

const PostDetails = () => {
  return (
    <div className="container mx-auto mb-8 px-10">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          <PostDetail />
          <Author />
          <CommentsForm />
          <Comments />
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative top-8 lg:sticky">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostDetails

export async function getStaticProps({ params }) {
  const posts = (await getPosts()) || []
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return { props: { posts } }
}
