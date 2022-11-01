import Head from 'next/head'
import Layout from "@/components/Home/Layout";

export default function Myapp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Wamlnln</title>
            </Head>
            <Layout>
                <div>
                    <Component {...pageProps} />
                </div>
            </Layout>

        </>
    )
}