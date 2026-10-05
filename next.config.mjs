/** @type {import('next').NextConfig} */
const nextConfig = {
  // The Dockerfile's runtime stage copies .next/standalone; without this the
  // image build fails at that COPY.
  output: "standalone",
  // `next dev` blocks its own dev assets (HMR, /_next) for any origin it was not
  // told about. The fleet serves this app at its own hostname and passes it in as
  // FLEET_APP_HOST. `next start` does no such check.
  allowedDevOrigins: process.env.FLEET_APP_HOST ? [process.env.FLEET_APP_HOST] : [],
};

export default nextConfig;
