import { fakeFuturData } from './fakeData';

const deepFreeze = require('deep-freeze');

const config = {
    MAX_TEMP: 39,
    MIN_TEMP: 35,
    API_URL: "https://strapi-sympto-api.herokuapp.com",
    FAKE_10_FUTURE_DATA: fakeFuturData(),
    WHITE: "#fff",
    BLACK: "#000",
    LIGHT_GRAY: "#eeeeee",
    DARK_GRAY: "#595959",
    BLUE: "#546de5",
    LIGHT_BLUE: "#778beb",
    ORANGE: "#f19066",
    CURACAO: "#3dc1d3",
};

export default deepFreeze(config);