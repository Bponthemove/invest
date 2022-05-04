import { useContext } from 'react';
import { InvestContext } from '../context/investContext';

const useInvestContext = () => {
    const context = useContext(InvestContext);
    if (context === undefined) {
        throw Error('data in context is undefined')
    } else
    return (
        context
    );
};

export default useInvestContext;