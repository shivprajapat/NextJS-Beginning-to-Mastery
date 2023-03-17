
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: "/about",
        destination: "/",
        permanent: true, // Status Code: 308 Permanent Redirect
        // permanent: false, // Status Code: 307 Temporary Redirect

      }
    ]
  }
}

module.exports = nextConfig
