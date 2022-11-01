import { List } from '@mantine/core'
import { GetStaticProps } from 'next'
import React from 'react'
import { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';

import { getAllPosts } from "@/lib/mdx";
import { PostFrontMatter } from '@/lib/types'

import PageLayout from "@/components/AritcleList/PageLayout";
import PostsList from '@/components/AritcleList/PostsList';
// import Pagination from '@/components/Aritcle/Pagination.tsx';


export default function Blog({ posts }: { posts: PostFrontMatter[] }) {
    const [filteredPosts, setFilteredPosts] = useState(posts);

    return (
        <PageLayout
            title='Blog'
            description='blog记录学习笔记'
        >
            <List listStyleType='none'>
                {filteredPosts.map((post) => (
                    <PostsList key={post.slug} post={post} />
                ))}
            </List>
            {/* <Pagination currentPage={currentPage} totalPages={totalPages} /> */}
        </PageLayout>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const posts = getAllPosts()

    return {
        props: { posts },
    }
}
