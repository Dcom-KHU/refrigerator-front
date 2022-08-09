/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: false,
    compiler: {
        styledComponents: true,
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        return config;
    },
    experimental: {
        images: {
            allowFutureImage: true,
        },
    },
};

module.exports = nextConfig;
