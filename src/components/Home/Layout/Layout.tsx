import { Container } from '@mantine/core'
import { NextSeoProps } from 'next-seo'
import React, { PropsWithChildren } from 'react'

import Header from '@/components/Home/Layout/Header'

const Layout = (props: PropsWithChildren<NextSeoProps>) => {

  return (
    <>
      <Header />
      <Container
        sx={(theme) => ({
          padding: '24px 30px',
          [theme.fn.largerThan('sm')]: {
            padding: '48px 32px',
          },
        })}
      >
        {props.children}
      </Container>

    </>
  )
}

export default Layout
