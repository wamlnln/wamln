import useStyles from './Profile.styles'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Profile() {
    const { classes } = useStyles()

    return (
        <div className={classes.profile}>
            <div className={classes.avatarWrapper}>
                <motion.div
                    transition={{
                        duration: 0.5,
                    }}
                    whileHover={{
                        rotate: '360deg',
                    }}
                    className={classes.motion}
                >
                    <Image
                        src='/static/images/logo/logo-black.png'
                        width={3850}
                        height={3850}
                        alt='Avatar'
                    />
                </motion.div>
            </div>
            <div className={classes.name}>
                <h1>wamlnln</h1>
            </div>
            <div className={classes.description}>
                <h2>Student</h2>
            </div>
        </div>
    )
}
