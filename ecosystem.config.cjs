/** PM2 config — run from repo root: pm2 startOrReload ecosystem.config.cjs */
module.exports = {
  apps: [
    {
      name: "demo-backend",
      cwd: __dirname,
      script: "dist/server.js",
      env: {
        NODE_ENV: "production",
      },
      autorestart: true,
      max_restarts: 10,
      min_uptime: "10s",
    },
  ],
};
