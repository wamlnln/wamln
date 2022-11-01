
import { Stack } from '@mantine/core'
import { MainItem } from "@/components/MainList/Mainitem"
import { blogsArr, mathsArr, quantsArr } from "@/lib/linktype"

export function Bloglinks() {
    return (
        <Stack spacing={16} my={44}>
            {blogsArr.map((item, index) => (
                <MainItem
                    title={item.title}
                    url={item.url}
                    key={index}
                    index={index}
                />
            ))}
        </Stack>
    )
}
export function Mathlinks() {
    return (
        <Stack spacing={16} my={44}>
            {mathsArr.map((item, index) => (
                <MainItem
                    title={item.title}
                    url={item.url}
                    key={index}
                    index={index}
                />
            ))}
        </Stack>
    )
}
export function Quantlinks() {
    return (
        <Stack spacing={16} my={44}>
            {quantsArr.map((item, index) => (
                <MainItem
                    title={item.title}
                    url={item.url}
                    key={index}
                    index={index}
                />
            ))}
        </Stack>
    )
}