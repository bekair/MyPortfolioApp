module.exports = {
  apps: [
    {
      name: "bcb-portfolio-app",
      script: "./node_modules/next/dist/bin/next",
      args: "start",
      watch: false,
      autorestart: true,
    },
  ],
}; 