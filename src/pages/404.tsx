import {
    Button,
    Container,
    createStyles,
    Group,
    Text,
    Title,
} from '@mantine/core'
import useTranslation from 'next-translate/useTranslation'
import React from 'react'

import Link from '@/components/Link/Link'

const useStyles = createStyles((theme) => ({
    root: {
        padding: '120px 0',
    },

    label: {
        textAlign: 'center',
        fontWeight: 900,
        fontSize: 120,
        lineHeight: 1,
        marginBottom: theme.spacing.xl * 1.5,
        color:
            theme.colorScheme === 'dark'
                ? theme.colors.dark[4]
                : theme.colors.gray[2],

        [theme.fn.largerThan('sm')]: {
            fontSize: 220,
        },
    },

    title: {
        textAlign: 'center',
        fontWeight: 900,
        fontSize: 32,

        [theme.fn.largerThan('sm')]: {
            fontSize: 38,
        },
    },

    description: {
        maxWidth: 500,
        margin: 'auto',
        marginTop: theme.spacing.xl,
        marginBottom: theme.spacing.xl * 1.5,
    },
}))

export default function FourZeroFour() {
    const { classes } = useStyles()
    const { t } = useTranslation('common')

    return (

        <Container className={classes.root}>
            <div className={classes.label}>404</div>
            <Title className={classes.title}>{t('404.title')}</Title>
            <Text
                color='dimmed'
                size='lg'
                align='center'
                className={classes.description}
            >
                {t('404.description')}
            </Text>
            <Group position='center'>
                <Button
                    variant='subtle'
                    size='md'
                    component={Link}
                    href='/'
                    sx={{
                        '&:hover': {
                            textDecoration: 'none',
                        },
                    }}
                >
                    {t('404.button')}
                </Button>
            </Group>
        </Container>

    )
}
