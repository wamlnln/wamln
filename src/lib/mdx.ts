import fs from 'fs'
import path from 'path'
import { s } from 'hastscript'
//使用gray-matter获取元数据
import matter from 'gray-matter'
// next-mdx-remote用于解析和渲染markdown内容
import { serialize } from 'next-mdx-remote/serialize'

// remark-external-links对markdown内的链接添加rel和target使其能在新页面打开
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeMathjax from 'rehype-mathjax'

import remarkImgToJsx from '@/lib/remark-img-to-jsx'
import { FileType, PostItems } from '@/lib/types'

// 1.posts目录路径=> A:\项目根目录\src\data
const root = process.cwd()
const FILE_PATH = path.join(root, 'src', 'data')

// 2.根据日期由大到小排序
export const dateSortDesc = (a: string, b: string) => {
  if (a > b) return -1
  if (a < b) return 1
  return 0
}


export async function mdxToHtml(source: string, data: PostItems) {
  const mdxSource = await serialize(source, {
    mdxOptions: {
      remarkPlugins: [remarkGfm, remarkImgToJsx,remarkMath],
      rehypePlugins: [
        rehypeMathjax,
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ['activeSection'],
            },
            content: [
              s(
                'svg',
                {
                  xmlns: 'http://www.w3.org/2000/svg',
                  width: 20,
                  height: 20,
                  fill: 'currentColor',
                  viewBox: '0 0 24 24',
                },
                s('path', {
                  d: 'M9.199 13.599a5.99 5.99 0 0 0 3.949 2.345 5.987 5.987 0 0 0 5.105-1.702l2.995-2.994a5.992 5.992 0 0 0 1.695-4.285 5.976 5.976 0 0 0-1.831-4.211 5.99 5.99 0 0 0-6.431-1.242 6.003 6.003 0 0 0-1.905 1.24l-1.731 1.721a.999.999 0 1 0 1.41 1.418l1.709-1.699a3.985 3.985 0 0 1 2.761-1.123 3.975 3.975 0 0 1 2.799 1.122 3.997 3.997 0 0 1 .111 5.644l-3.005 3.006a3.982 3.982 0 0 1-3.395 1.126 3.987 3.987 0 0 1-2.632-1.563A1 1 0 0 0 9.201 13.6zm5.602-3.198a5.99 5.99 0 0 0-3.949-2.345 5.987 5.987 0 0 0-5.105 1.702l-2.995 2.994a5.992 5.992 0 0 0-1.695 4.285 5.976 5.976 0 0 0 1.831 4.211 5.99 5.99 0 0 0 6.431 1.242 6.003 6.003 0 0 0 1.905-1.24l1.723-1.723a.999.999 0 1 0-1.414-1.414L9.836 19.81a3.985 3.985 0 0 1-2.761 1.123 3.975 3.975 0 0 1-2.799-1.122 3.997 3.997 0 0 1-.111-5.644l3.005-3.006a3.982 3.982 0 0 1 3.395-1.126 3.987 3.987 0 0 1 2.632 1.563 1 1 0 0 0 1.602-1.198z',
                })
              ),
            ],
          },
        ],
      ],
      format: 'mdx',
    },
    scope: data,
  })

  return mdxSource
}

//3.获取目标路径目录下所有文章名称(带后缀)
export const getFileSlugs = (type: FileType): string[] => {
  return fs.readdirSync(path.join(FILE_PATH, type))
}

//4.去除文件名.mdx后缀，使其作为文章formatSlug使用=>formatSlug('markdown.mdx')->'markdown'
export const formatSlug = (slug: string) => slug.replace(/\.mdx$/, '')

// 5.获取.mdx文章内容
export const getContentBySlug = async (
  type: FileType,
  slug: string,
) => {
  //获取.mdx文章路径->A:\项目名称\data\type\slug.mdx
  const postFilePath = path.join(
    FILE_PATH,
    type,
    `${formatSlug(slug)}.mdx`
  )
  // 返回文章内容
  const source = fs.readFileSync(postFilePath)
  // 使用matter提取.mdx文件的内容和元数据{data:{//元数据},content:'内容'}
  const { content, data } = matter(source)
  // 利用mdxToHtml处理元数据和内容
  const mdxSource = await mdxToHtml(content, data)

  const frontMatter = {
    ...data,
    slug,
  }

  return {
    source: mdxSource,
    frontMatter,
  }
}


//6.获取所有文章然后在页面中显示
export const getAllPosts = () => {
  //确定data/type下文件夹
  const slugs = getFileSlugs('blog')

  const allFrontMatter = []
  //读取文章内容
  slugs.forEach((slug) => {
    const source = fs.readFileSync(
      path.join(FILE_PATH, 'blog', slug),
      'utf-8'
    )
    //使用matter解析markdown元数据和内容
    const matterFile = matter(source)
    const frontMatter = matterFile.data

    allFrontMatter.push({
      ...frontMatter,
      slug: formatSlug(slug),
      date: new Date(frontMatter.date).toISOString(),
    })
  })

  return allFrontMatter.sort((a, b) => dateSortDesc(a.date, b.date))
}
