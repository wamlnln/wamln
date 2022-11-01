import { createStyles } from '@mantine/core'

import { stylesProps } from '@/lib/types'

export default createStyles((_theme, { color }: stylesProps) => ({
  link: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    border: `4px solid ${color}`,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    padding: '16px 24px',
    textDecoration: 'none',
  },

  icon: {
    position: 'absolute',
    left: 48,
    margin: '0 16px',
    width: 40,
  },

  title: {
    userSelect: 'none',
    color: 'white',
  },
}))
