import { Box, Card, Grid, Text, Title, useMantineTheme } from '@mantine/core'
import Image from 'next/image'

import { useStyles } from '@/components/Home/Hero/Hero.styles'
import Link from '@/components/Link'

export default function Hero() {
    const { classes } = useStyles()
    const { colorScheme } = useMantineTheme()
    const theme = useMantineTheme()
    const dark = colorScheme === 'dark'

    return (
        <Grid mb={96}>
            <Grid.Col span={12}>
                <Card p={32} className={classes.about} radius='lg' withBorder>
                    <Box sx={{ height: 90, width: 90 }}>
                        <Image
                            src='/static/images/logo/logo-black.png'
                            alt='Logo'
                            width={3850}
                            height={3850}
                            className={classes.logo}
                        />
                    </Box>
                    <Title order={1} sx={{ fontSize: 32, fontWeight: 700 }}>
                        Wamlnln
                    </Title>
                    <Text
                        size={20}
                        weight={500}
                        color={dark ? theme.colors.gray[6] : theme.colors.gray[8]}
                    >
                        A student who loves life
                    </Text>
                </Card>
            </Grid.Col>

            <Grid.Col span={12} md={4}>
                <Card
                    component={Link}
                    href='/blog'
                    className={classes.square}
                    sx={{
                        backgroundImage: 'url(/static/images/blog.png)',
                    }}
                    radius='lg'
                    withBorder
                    underline={false}
                >
                    <Text size={28} weight={500}>
                        Blog
                    </Text>
                </Card>
            </Grid.Col>
            <Grid.Col span={12} md={4}>
                <Card
                    component={Link}
                    href='/math'
                    className={classes.square}
                    sx={{
                        backgroundImage: 'url(/static/images/train.png)',
                    }}
                    radius='lg'
                    withBorder
                    underline={false}
                >
                    <Text size={28} weight={500}>
                        Math
                    </Text>
                </Card>
            </Grid.Col>
            <Grid.Col span={12} md={4}>
                <Card
                    component={Link}
                    href='/quant'
                    className={classes.square}
                    sx={{
                        backgroundImage: 'url(/static/images/social.png)',
                    }}
                    radius='lg'
                    withBorder
                    noIcon
                    underline={false}
                >
                    <Text size={28} weight={500}>
                        Quant
                    </Text>
                </Card>
            </Grid.Col>
        </Grid>
    )
}
