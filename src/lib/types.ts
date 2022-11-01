import React from 'react'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { Literal, Parent } from 'unist'

// BadgeLink
export type BadgeLinkType = {
    target: string;
    badgeText: string;
    href: string;
    colorScheme?: string;
    children: React.ReactNode;
  };

// TableOfContents
export type HeadingScrollSpy = {
    id: string
    level: number
    text: string
}[]

export type TableOfContentsProps = {
    toc?: HeadingScrollSpy
    activeSection: string | null
    minLevel: number
}


//pagelayout
export type PageLayoutProps = {
    children: React.ReactNode
    title: string
    description: string
}

//slug
export type PostItems = {
    [key: string]: string
}

export type FileType = 'blog' | 'page'

// blog
export type PostFrontMatter = {
    title: string
    date: string
    modifiedTime: string
    summary: string
    image: string
    slug: string
    views?: string
}


// Main-link(主要列表类型)
// 2.定义卡片传入的参数
export type mainItem = {
    title: string
    url: string
    index?: number
}
// 1.定义CustomLink传入的参数
export type customItem = {
    title: string
    url: string
    color: string
    icon: React.ReactNode
}

export type stylesProps = {
    color: string
}
// Aritcle

export type ProjectData = {
    [key: string]: {
        title: string
        description: string
        href: string
    }[]
}

export type ImageNode = Parent & {
    url: string
    alt: string
    name: string
    attributes: (Literal & { name: string })[]
}


export type PageFrontMatter = {
    title: string
    description: string
    slug: string
}

export type PostProps = {
    source: MDXRemoteSerializeResult
    frontMatter: PostFrontMatter
}

export type BlogPostProps = {
    post: PostProps
    ogImage: string
}


// Link
export type TOCLinkProps = {
    id: string
    level: number
    minLevel: number
    text: string
    activeSection: string | null
}

export type CustomLinkProps = {
    noIcon?: boolean
}



// Header-Right-Link
export type RightType = {
    href: string
    text: string
}

