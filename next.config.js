/* eslint-disable @typescript-eslint/no-var-requires */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const nextTranslate = require('next-translate')
// const { default: remarkMath } = require('remark-math')

/** @type {import('next').NextConfig} */
module.exports = nextTranslate(
  withBundleAnalyzer({
    eslint: {
      dirs: ['src'],
    },

    reactStrictMode: true,

    images: {
      domains: [
        'cdn.jsdelivr.net',
        'avatars.githubusercontent.com',
        'res.cloudinary.com',
        'cdnjs.cloudflare.com',
      ],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**.googleusercontent.com',
        },
      ],
    },

    // SVGR
    // url-loader 或 file-loader优化图片文件
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              typescript: true,
              icon: true,
            },
          },
        ],
      })

      return config
    },

    async redirects() {
      return [
        {
          source: '/youtube',
          destination:
            'https://www.youtube.com/channel/UC2hMWOaOlk9vrkvFVaGmn0Q',
          permanent: false,
        },
      ]
    },
  })
)



