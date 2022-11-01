import React from 'react'

import { useStyles } from '@/components/Home/Layout/Header/Left/Left.styles'
import Link from '@/components/Link'
import Logo from '@/components/Logo'

export default function Left() {
  const { classes } = useStyles()

  return (
    <Link href='/' className={classes.link}>
      <Logo width={28} height={28} fill='#c92a2a' />
      <span className={classes.text}>wamlnln</span>
    </Link>
  )
}
