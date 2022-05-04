import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';

interface IData 
    {
        ask: number,
        bid: number,
        mid: number,
        base_currency?: string,
        quote_currency?: string,
        instrument?: string,
    };

export const useCallApi = ({ itemToBeCalled = '' }: { itemToBeCalled: string}) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<IData>({
        ask: 0, 
        base_currency: "", 
        bid: 0, 
        mid: 0, 
        quote_currency: ""
      });
    const [error, setError] = useState<AxiosError | unknown>(null);

    const api_key = 'cyvFhWM-E0poz_s6Zpw6'; 

    const fetchData = async (param: string) => {
        try{
            const response = await axios.get(`https://marketdata.tradermade.com/api/v1/live?currency=${param}&api_key=${api_key}`)
            setData(response.data.quotes)
        } catch(err) {
            setError(err);
        } finally {
            setLoading(false)
        };
    }

    useEffect(() => {
        if (itemToBeCalled === '') return
        setLoading(true);
        fetchData(itemToBeCalled)
    }, [setLoading, itemToBeCalled]);

    return !error ? { data, loading } : { error, loading };
}