import { Prism, PrismProps } from '@mantine/prism'
import PrismRenderer from 'prism-react-renderer/prism'
(typeof global !== 'undefined' ? global : window).Prism = PrismRenderer


//您需要将 Prism.Js 导入您希望突出显示代码的所有页面中
//将其导入到包装整个 Web 应用程序的布局组件中：
require('prismjs/components/prism-php')
require('prismjs/components/prism-bash')

const Pre = ({ children, language, sx, ...props }: PrismProps) => {
  return (
    <Prism
      withLineNumbers
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      language={language as any}
      sx={{
        ...sx,
      }}
      styles={(theme) => ({
        lineNumber: {
          marginRight: 24,
          color: theme.colorScheme === 'dark' ? 'white' : 'black',
        },
        line: {
          '&:hover': {
            backgroundColor: 'rgba(239,68,68,.1)',
          },
        },
      })}
      {...props}
    >
      {children}
    </Prism>
  )
}

export default Pre
