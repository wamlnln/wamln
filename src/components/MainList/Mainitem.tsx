import {
    Book2,
    BrandDiscord,
    BrandFacebook,
    BrandGithub,
    BrandInstagram,
    BrandStackoverflow,
    BrandTwitter,
    BrandYoutube,
} from 'tabler-icons-react'
import { motion } from 'framer-motion'

import { customItem } from "@/lib/types"
import { mainItem } from "@/lib/types"
import useStyles from '@/components/MainList/Mainitem.styles'

const bgColorList = [
    '#ff0000',
    '#ef4444',
    '#1299f5',
    '#f80067',
    '#f1f1f1',
    '#5662f6',
    '#1da1f2',
    '#e87921',
];

const bgIconList = [
    <Book2 color='#ff0000' />,
    <BrandYoutube color='#ef4444' />,
    <BrandFacebook color='#1299f5' />,
    <BrandInstagram color='#f80067' />,
    <BrandGithub color='#f1f1f1' />,
    <BrandDiscord color='#5662f6' />,
    <BrandTwitter color='#1da1f2' />,
    <BrandStackoverflow color='#e87921' />,

];

const CustomLink = (props: customItem) => {
    const {
        title,
        url,
        icon,
        color,
    } = props
    const { classes } = useStyles({ color })

    return (
        <motion.a
            transition={{
                duration: 0.3,
            }}
            whileHover={{
                scale: 1.05,
            }}
            whileTap={{
                scale: 0.95,
            }}
            href={url}
            target='_blank'
            rel='noopener, noreferrer'
            className={classes.link}
            style={{ borderColor: color }}
        >
            <div className={classes.icon}>{icon}</div>
            <span className={classes.title}>{title}</span>
        </motion.a>
    )
}

export function MainItem(props: mainItem) {
    const {
        title,
        url,
        index = 0,
    } = props
    return (
        <CustomLink
            title={title}
            url={url}
            icon={bgIconList[index]}
            color={bgColorList[index]}
            key={index}
        />
    )
}