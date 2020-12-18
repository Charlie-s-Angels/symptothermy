const fakeFuturData = () => {
    const daysToFake = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    const date = new Date(Date.now());

    const fakeData = daysToFake.map(value => {
        const timestamp = Math.round(Date.parse(date)/1000);
        const data = {
            id: `${timestamp}`,
            temperature: Math.random() * (37 - 36) + 36,
            timestamp: timestamp,
            isDataReal: false,
        }
        console.log(date);

        date.setDate(date.getUTCDate() + 1);

        return data;
    });

    return fakeData;
};

export {
    fakeFuturData,
};