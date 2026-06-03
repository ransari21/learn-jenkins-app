export const pipelineStages = [
  {
    name: 'Checkout',
    status: 'Passed',
    description: 'Pulls the latest code from GitHub after a webhook trigger.',
  },
  {
    name: 'Install',
    status: 'Passed',
    description: 'Installs project dependencies using npm install.',
  },
  {
    name: 'Test',
    status: 'Passed',
    description: 'Runs automated unit tests before deployment.',
  },
  {
    name: 'Build',
    status: 'Passed',
    description: 'Creates a production-ready React build artifact.',
  },
  {
    name: 'Dockerize',
    status: 'Passed',
    description: 'Builds a Docker image for a consistent deployment environment.',
  },
  {
    name: 'Deploy',
    status: 'Manual Approval',
    description: 'Deploys to staging or production using AWS Elastic Beanstalk.',
  },
];

export const environmentStats = {
  appName: 'learn-jenkins-app',
  provider: 'AWS Elastic Beanstalk',
  artifactStorage: 'Amazon S3',
  deploymentType: 'Docker',
  pipelineOwner: 'DevOps Team',
};
