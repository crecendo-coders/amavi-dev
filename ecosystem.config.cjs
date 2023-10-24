module.exports = {
  apps : [{
    name: "amavi-dev",
    script: './index.js',
    env_production: {
      "PORT": 2319
    }
  }],

  deploy : {
    production : {
      key  : 'SHA256:fveekqoC6IKAstMXZFiGfz8mm52hGPL+wlHTBO0hvM4',
      user : 'ubuntu',
      host : '35.91.77.26',
      ref  : 'origin/main',
      repo : 'git@github.com/crescendo-coders/amavi-dev',
      path : '/usr/share/caddy/amavi-dev/dist',
      'post-deploy' : 'npm install && pm2 startOrRestart ecosystem.config.js --env production'
    }
  }
};
