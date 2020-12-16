const deepFreeze = require('deep-freeze');

const config = {
    MAX_TEMP: 39,
    MIN_TEMP: 35,
    FAKE_CYCLE_DATA: [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            temp: 39,
            timestamp: 1606723200,
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            temp: 35,
            timestamp: 1606811400,
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            temp: 36.5,
            timestamp: 1606897800,
        },
        {
            id: '58694a0f-3da1-471f-bd96-drtyufugyhi',
            temp: 36.4,
            timestamp: 1606984200,
        },
        {
            id: '58694a0f-3da1-471f-bd96-kujyhtgerdtcf',
            temp: 33,
            timestamp: 1607070600,
        },
        {
            id: '58694a0f-3da1-471f-bd96-lygezjhrbgxdf',
            temp: 40,
            timestamp: 1607166780,
        },
        {
            id: '58694a0f-3da1-471f-bd96-hjyfjhgcnjuyf',
            temp: 36.5,
            timestamp: 1607254140,
        },
        {
            id: '58694a0f-3da1-471f-bd96-mlhazekhzedsfgd',
            temp: 36.5,
            timestamp: 1607328000,
        },
        {
            id: '58694a0f-3da1-471f-bd96-eryuyukjnbv',
            temp: 36.5,
            timestamp: 1607414400,
        },
        {
            id: '58694a0f-3da1-471f-bd96-xcfghjhnbvcd',
            temp: 36.5,
            timestamp: 1607500800,
        },
        {
            id: '58694a0f-3da1-471f-bd96-azerfvcdser',
            temp: 36.5,
            timestamp: 1607587200,
        },
        {
            id: '58694a0f-3da1-471f-bd96kliuh',
            temp: 36.5,
            timestamp: 1607673600,
        },
        {
            id: '58694a0f-3da1-471f-regfdxhydtredghftjyutr',
            temp: 36.5,
            timestamp: 1607760000,
        },
    ]
};

export default deepFreeze(config);