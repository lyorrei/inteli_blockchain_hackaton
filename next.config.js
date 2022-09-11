/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['https://ipfs.io'],
    },
}

module.exports = nextConfig

// // next.config.js
// const withImages = require('next-images')
// module.exports = withImages({
//     images: {
//         disableStaticImages: true
//     }
//   webpack(config, options) {
//     return config
//   }
// })

// module.exports = {
//     images: {
//         disableStaticImages: true
//     }
// }
