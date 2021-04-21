import axios from 'axios';

const faqCompostAPI = axios.create({
  baseURL: 'https://parseapi.back4app.com/classes/FaqCompost',
  headers: {
    'X-Parse-Application-Id': 'vJSh6C1vA8dJKf02TfMLzDJcgVLlfDpts7ujVrqK',
    'X-Parse-REST-API-Key': 's1pWHmjYuNPUYjX8ynechkZRoz3B9EJRPGW2ifjl',
  },
});

export default faqCompostAPI;

