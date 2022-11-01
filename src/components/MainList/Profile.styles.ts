import { createStyles } from '@mantine/core'

export default createStyles(() => ({
    profile: {
        margin: '12px auto 32px auto',
        display: 'flex',
        width: '100%',
        userSelect: 'none',
        flexDirection: 'column',
        alignItems: 'center',
    },

    avatarWrapper: {
        margin: '0 0 16px 0',
        height: 96,
        width: 96,
        '& img': {
            borderRadius: '50%',
        },
    },

    motion: {
        height: 96,
        width: 96,
    },

    name: {
        margin: '0 12px',
        textAlign: 'center',
        '& h1': {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            fontSize: 'inherit',
            margin: 0,
        },
    },

    description: {
        margin: '0 40px',
        textAlign: 'center',

        '& h2': {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            color: 'rgba(30, 30, 30, 0.6)',
            fontSize: 14,
            margin: 0,
        },
    },
}))
