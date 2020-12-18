import { fakeFuturData } from './fakeData';

const deepFreeze = require('deep-freeze');

const config = {
    MAX_TEMP: 39,
    MIN_TEMP: 35,
    API_URL: "https://strapi-sympto-api.herokuapp.com",
    FAKE_10_FUTURE_DATA: fakeFuturData(),
};

export default deepFreeze(config);