import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();

app.use(cors());

const JENKINS_URL = 'http://localhost:8081';
const JOB_NAME = 'learn-jenkins-app';
const JENKINS_USER = 'ansari';
const JENKINS_TOKEN = '110bb5d63b849e023e9af681ce26b20a5d';

app.get('/', (req, res) => {
  res.send('Jenkins API backend is running');
});

app.get('/api/jenkins/latest-build', async (req, res) => {
  try {
    const response = await axios.get(
      `${JENKINS_URL}/job/${JOB_NAME}/lastBuild/api/json`,
      {
        auth: {
          username: JENKINS_USER,
          password: JENKINS_TOKEN,
        },
      }
    );

    res.json({
      buildNumber: response.data.number,
      status: response.data.result,
      duration: response.data.duration,
      timestamp: response.data.timestamp,
      url: response.data.url,
      artifact: response.data.artifacts?.[0]?.fileName || null,
    });
  } catch (error) {
    res.status(500).json({
      error: 'Could not fetch Jenkins build data',
      status: error.response?.status,
      details: error.response?.data || error.message,
    });
  }
});

app.listen(3001, () => {
  console.log('Backend running on http://localhost:3001');
});