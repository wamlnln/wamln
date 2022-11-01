import { createGetInitialProps } from '@mantine/next'
import Document, { Head, Html, Main, NextScript } from 'next/document'

const getInitialProps = createGetInitialProps()

export default class _Document extends Document {
  static getInitialProps = getInitialProps

  render() {
    return (
      // lang是语言的意思=>en代表英语zh-CN代表中文
      // 但是现在可以根据浏览器网址判断翻译什么语言可以不设置
      <Html lang='zh-TW'>
        <Head>
          {/* rel判断该文档与被链接文档之间是什么关系 */}
          {/* href：是外部链接地址 */}
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="wamlnln" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
