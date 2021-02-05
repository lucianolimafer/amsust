import axios from 'axios';

const lawsAPI = axios.create({
  baseURL: 'https://parseapi.back4app.com/classes/Law',
  headers: {
    'X-Parse-Application-Id': 'vJSh6C1vA8dJKf02TfMLzDJcgVLlfDpts7ujVrqK',
    'X-Parse-REST-API-Key': 's1pWHmjYuNPUYjX8ynechkZRoz3B9EJRPGW2ifjl',
  },
});

export default lawsAPI;
