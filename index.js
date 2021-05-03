require('dotenv');
const axios = require('axios').default;
const app = require('express')();

const appName = process.env.APP_NAME;

app.get('/health', (req, res) => {
  res.send({ status: `${appName}-health` });
});

app.get('/test', (req, res) => {
  res.send({ status: `${appName}-test` });
});


// app.get('/deep-health', async (req, res) => {
//   try {
//     const response = {};
//     // if (!process.env.POSTS_SERVICE_URL.includes(appName))
//     response.postsHealth = (
//       await axios.get(`${process.env.POSTS_SERVICE_URL}/health`)
//     ).data;
//     // else response.postsHealth = 'curr-app';

//     // if (!process.env.NOTIFICATIONS_SERVICE_URL.includes(appName))
//     response.notificationsHealth = (
//       await axios.get(`${process.env.NOTIFICATIONS_SERVICE_URL}/health`)
//     ).data;
//     // else response.notificationsHealth = 'curr-app';

//     // if (!process.env.VOTES_SERVICE_URL.includes(appName))
//     response.votesHealth = (
//       await axios.get(`${process.env.VOTES_SERVICE_URL}/health`)
//     ).data;
//     // else response.votesHealth = 'curr-app';

//     res.send(response);
//   } catch (error) {
//     console.log(error);
//     res.send(error);
//   }
// });

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
