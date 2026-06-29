/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // Emit a trailing-slash directory layout (e.g. /add/ -> add/index.html),
  // which GitHub Pages serves more reliably than bare .html files.
  trailingSlash: true,
};

module.exports = nextConfig;
