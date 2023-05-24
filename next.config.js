/** @type {import('next').NextConfig} */
// const defaultRuntimeCaching = require("next-pwa/cache");

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  cacheOnFrontEndNav: true,
  scope: "/",
  disable: process.env.NODE_ENV === "development",
  // mode: "production",
  // runtimeCaching: [
  //   {
  //     urlPattern: /\.(?:js)$/i,
  //     handler: 'StaleWhileRevalidate',
  //     options: {
  //       cacheableResponse: {
  //         statuses: [200, 404],
  //       },
  //       cacheName: 'static-js-assets',
  //       expiration: {
  //         maxEntries: 32,
  //         maxAgeSeconds: 24 * 60 * 60 // 24 hours
  //       }
  //     }
  //   },
  //   ...defaultRuntimeCaching,
  // ],
});

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withPWA(
  withBundleAnalyzer({
    poweredByHeader: false,
    images: {
      domains: ["res.cloudinary.com"],
    },
    reactStrictMode: true,
    trailingSlash: true,
    swcMinify: true,
    output: "standalone",
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      });
      return config;
    },
  })
);
