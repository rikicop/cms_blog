import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import moment from 'moment'

import { getRecentPosts, getSimilarPosts } from '../services'

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([])
  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPosts(result)
      )
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result))
    }
  }, [slug])

  /* console.log(relatedPosts) */

  return (
    <div className="mb-8 rounded-lg bg-white p-8 shadow-lg">
      <h3 className="mb-8 border-b pb-4 text-lg font-semibold">
        {slug ? 'Releated Posts' : 'Recent Posts'}
      </h3>
      {relatedPosts.map((post) => (
        <div key={post.title} className="mb-4 flex w-full items-center">
          <div className="w-16 flex-none">
            <img
              src={post.featuredImage.url}
              alt={post.title}
              width="60px"
              height="60px"
              className="rounded-full align-middle"
            />
          </div>
          <div className="ml-4 flex-grow">
            <p className="text-xs text-gray-500">
              {moment(post.createdAt).format('MMM DD, YYYY')}
            </p>
            <Link
              href={`/post/${post.slug}`}
              key={post.title}
              className="text-md"
            >
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostWidget
