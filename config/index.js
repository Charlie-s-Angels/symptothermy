const deepFreeze = require('deep-freeze');

const config = {
    MAX_TEMP: 39,
    MIN_TEMP: 35,
};

export default deepFreeze(config);