import React, { createContext, useState } from "react";

interface ProviderProps {
    listArray: string[],
    id: string | null,
    setId: React.Dispatch<React.SetStateAction<string | null>>
}

export const InvestContext = createContext<ProviderProps | undefined>(undefined)

export const InvestContextProvider = ({ children }: { children: React.ReactNode}) => {
    //change setListArray to value of input dropdown box to choose between forex, crypto and indices
    const [listArray, setListArray] = useState<string[]>(
        ['EURUSD', 'GBPJPY', 'GBPUSD', 'EURJPY', 'AUDUSD', 'AUDJPY', 'NZDUSD', 'NZDJPY', 'AUDCAD', 'USDCAD', 'EURCAD', 'GBPAUD', 'GBPNZD']
    )
    const [id, setId] = useState<string | null>(null)


    const value: ProviderProps = {
        listArray,
        id,
        setId,
    }

    return (
        <InvestContext.Provider value={ value }>
            { children }
        </InvestContext.Provider>
    )
}

