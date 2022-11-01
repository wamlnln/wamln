import type { NextPage } from 'next'

import useStyles from '@/components/MainList/index.styles'
import { Mathlinks } from '@/components/MainList/Main'
import Profile from '@/components/MainList/Profile'

const Home: NextPage = () => {
    const { classes } = useStyles()
    return (
        <>
            <div className={classes.wrapper}>
                <div className={classes.inner}>
                    <div className={classes.bg}></div>
                    <div className={classes.bgImage}></div>
                    <Profile />
                    <Mathlinks />
                </div>
            </div>
        </>
    )
}

export default Home
