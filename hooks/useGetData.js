import { useState, useEffect } from 'react';

import config from '../config';

const useGetData = (entity) => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        setError(null);

        fetch(`${config.API_URL}/${entity}`, {
            method: 'GET'
        })
        .then((response) => response.json())
        .then((result) => {
            setData(result);
        })
        .catch((error) => {
            setError(error.message);
        })
        .finally(() => {
            setIsLoading(false);
        });
    }, []);

    return {
        isLoading,
        data,
        error
    }
};

export default useGetData;
