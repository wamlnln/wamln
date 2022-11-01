import { Burger, Group, Paper, Transition } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

import { useStyles } from '@/components/Home/Layout/Header/Header.styles'
import Left from '@/components/Home/Layout/Header/Left'
import { rightlinks } from '@/lib/linktype'

export default function Header() {
  const { classes, cx } = useStyles()
  const [opened, toggleOpened] = useDisclosure(false)
  const { asPath } = useRouter()

  const items = ({ animation }) =>
    rightlinks.map((link, index) => (
      <Link key={index} href={link.href} passHref>
        <motion.a
          className={cx(classes.link, {
            [classes.linkActive]: asPath === link.href,
          })}
          onClick={() => {
            toggleOpened.close()
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{
            x: animation ? '-100vw' : 0,
          }}
          animate={{
            x: 0,
          }}
        >
          {link.text}
        </motion.a>
      </Link>
    ))

  return (
    <div className={classes.header}>
      <div className={classes.headerLeft}>
        <Burger
          opened={opened}
          className={classes.burger}
          size='sm'
          onClick={() => toggleOpened.toggle()}
          aria-label='Toggle navbar'
        />
        <Left />
        <Transition transition='slide-right' duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items({ animation: true })}
            </Paper>
          )}
        </Transition>
      </div>
      <div className={classes.headerRight}>
        <Group spacing={5} className={classes.links}>
          {items({ animation: false }).slice(0, 4)}
        </Group>
      </div>
    </div>
  )
}
