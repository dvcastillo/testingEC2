module.exports = {
  apps: [{
    name: 'testingEC2',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-3-19-71-180.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/dvcProductReviews.pem',
      ref: 'origin/master',
      repo: 'https://github.com/dvcastillo/testingEC2.git',
      path: '/home/ubuntu/testingEC2',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}