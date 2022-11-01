/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Alert as MantineAlert,
  AlertProps,
  Blockquote,
  Box,
  Center,
  Kbd,
  Table,
  TableProps,
  Text,
} from '@mantine/core'
import Image, { ImageProps } from 'next/image'
import React from 'react'


import CustomLink from '@/components/Link'
// 代码高亮
import Pre from '@/components/Sigle/MDXContents/Pre'

// 1.页面内容的图片下加文字
const PostImage = (props: ImageProps) => (
  <Box  
    component='figure'
    sx={{
      '& img': {
        borderRadius: 12,
      },
    }}
  >
    <Center>
      <Image
        alt={props.alt}
        src={props.src}
        blurDataURL={`/_next/image?url=${props.src}&w=16&q=1`}
        placeholder='blur'
        {...props}
      />
    </Center>
    <Text
      component='figcaption'
      size='sm'
      align='center'
    >
      {props.alt}
    </Text>
  </Box>
)

const PostTable = (props: TableProps) => (
  <Table highlightOnHover>{props.children}</Table>
)

// 3.重点提示图标
const Alert = (props: AlertProps) => (
  <MantineAlert my={16} {...props}>
    {props.children}
  </MantineAlert>
)


// // 4.交互
// const Div = (props:any) => (
//   <div style={{ height: '700px', width: '600px', fontSize: '0' }}>

//   </div>
// )

// 代码高亮
const PostPre = (props: any) => {
  const matches = (props.children.props.className || '').match(
    /language-(?<lang>.*)/
  )

  return (
    <Pre
      language={
        matches && matches.groups && matches.groups.lang
          ? matches.groups.lang
          : ''
      }
      withLineNumbers={props.children.props.className ? true : false}
    >
      {props.children.props.children}
    </Pre>
  )
}

const MDXComponents = {
  Kbd,
  pre: PostPre,
  // 块引用(指定图标还有引用说明)
  Blockquote,
  Alert,
  a: CustomLink,
  table: PostTable,
  Image: PostImage,
}

export default MDXComponents
