import { createStyles } from '@mantine/core'

export default createStyles(() => ({
  wrapper: {
    display: 'flex',
    height: '100%',
    width: '100%',
    flex: '1 1 0%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '24px 12px',
  },

  inner: {
    margin: '0 auto',
    height: '100%',
    width: '100%',
    maxWidth: 680,
    padding: '0 0 80px 0',
  },

  bg: {
    position: 'fixed',
    inset: 0,
    zIndex: -10,
    backgroundColor: 'white',
    backgroundSize: 'cover',
    backgroundPosition: '50%',
    backgroundRepeat: 'no-repeat',
  },

  bgImage: {
    '&:before': {
      position: 'fixed',
      inset: 0,
      zIndex: -10,
      height: '100%',
      width: '100%',
      backgroundImage: "url('/static/images/background.png')",
      backgroundSize: 'cover',
      backgroundPosition: '50%',
      backgroundRepeat: 'no-repeat',
      opacity: 0.1,
      content: '""',
    },
  },
}))
