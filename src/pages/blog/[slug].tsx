/* eslint-disable @typescript-eslint/no-explicit-any */
import { GetStaticPaths, GetStaticProps } from 'next'

import { getOgImage } from '@/lib/getOgImage'
import { formatSlug, getContentBySlug, getFileSlugs } from '@/lib/mdx'
import { BlogPostProps, PostFrontMatter } from '@/lib/types'

import Sigle from '@/components/Sigle/Sigle'

export default function Blog({ post, ogImage }: BlogPostProps) {
  return (
    <Sigle post={post} ogImage={ogImage} />
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const post = await getContentBySlug('blog', params.slug as string)
    const frontMatter = post.frontMatter as PostFrontMatter
    const ogImage = await getOgImage(
      `/blog?title=${frontMatter.title}&description=${frontMatter.summary}`
    )

    return {
      props: { post, ogImage },
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)
    return {
      notFound: true,
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getFileSlugs('blog')
  const paths = posts.map((slug) => ({
    params: {
      slug: formatSlug(slug),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}
