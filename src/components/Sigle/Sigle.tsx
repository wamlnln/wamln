import {
  Box,
  Divider,
  Title,
} from '@mantine/core'
import { useWindowEvent } from '@mantine/hooks'
import { useRouter } from 'next/router'
import React, { PropsWithChildren } from 'react'
import { MDXRemote } from 'next-mdx-remote'

import formatDate from '@/lib/formatDate'
import { BlogPostProps } from '@/lib/types'
import useScrollSpy from '@/hooks/useScrollspy'

//阅读进度
import ReadingProgressBar from '@/components/Sigle/ReadingProgressBar'
//回到顶部
import ScrollTop from '@/components/Sigle/ScrollTop'
//目录
import TableOfContents from '@/components/Sigle/TableOfContents'
import { HeadingScrollSpy } from '@/lib/types'

// 页面内容
import MDXContents from '@/components/Sigle/MDXContents'
// 修饰内容
import Typography from '@/components/Sigle/Typography'

import { useStyles } from '@/components/Sigle/Sigle.styles'

export default function Sigle({
  post,
}: PropsWithChildren<BlogPostProps>) {
  const { date, title } = post.frontMatter
  const { locale } = useRouter()
  const [totalCommentCount, setTotalCommentCount] = React.useState<number>(0)
  const { classes } = useStyles()
  const activeSection = useScrollSpy()
  const [toc, setToc] = React.useState<HeadingScrollSpy>()
  const minLevel =
    toc?.reduce((min, item) => (item.level < min ? item.level : min), 10) ?? 0


  const ISOPublishedTime = new Date(date).toISOString()

  React.useEffect(() => {
    const headings = document.querySelectorAll(
      '#blog-content h2, #blog-content h3'
    )

    const headingArr: HeadingScrollSpy = []
    headings.forEach((heading) => {
      const id = heading.id
      const level = +heading.tagName.replace('H', '')
      const text = heading.textContent

      headingArr.push({ id, level, text })
    })

    setToc(headingArr)
  }, [locale])

  useWindowEvent('message', (event) => {
    if (event.origin !== 'https://giscus.app') return
    if (!(typeof event.data === 'object' && event.data.giscus)) return

    const giscusData = event.data.giscus.discussion

    giscusData &&
      setTotalCommentCount(
        giscusData.totalCommentCount + giscusData.totalReplyCount
      )
  })

  return (
    <>
      <ScrollTop />
      {/* 1.标题 */}
      <Title order={1} mb={16}>
        {title}
      </Title>
      {/* 2.时间 */}
      <time dateTime={ISOPublishedTime}>
        {formatDate(new Date(ISOPublishedTime), locale)}
      </time>
      {/* 3.横线 */}
      <Divider />
      {/* 4.正题 */}
      <Box mt={32} className={classes.contentWrapper}>
        {/* 内容 */}
        <article id='blog-content'>
          <Typography>
            <MDXRemote
              {...post.source}
              components={
                {
                  ...MDXContents,
                } as any
              }
            />
          </Typography>
        </article>
        {/* 目录 */}
        <TableOfContents
          toc={toc}
          minLevel={minLevel}
          activeSection={activeSection}
        />
      </Box>
      {/* 5.阅读进度 */}
      <ReadingProgressBar />
      <ScrollTop />
    </>
  )
}
