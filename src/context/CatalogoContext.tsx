import Produto from "@/data/model/Produto";
import { createContext, ReactNode, useEffect, useState } from "react";
import DataProdutos from "@/data/constants/produtos";

interface CatalogoContextProps {
    produtos: Produto[]
}

const CatalogoContext = createContext<CatalogoContextProps>({
  produtos: []
})

export function CatalogoProvider({children} : {children: ReactNode}) {

    const [produtos, setProdutos] = useState<Produto[]>([])

    useEffect(()=> {
        setProdutos(DataProdutos)
    }, [])

    return (
        <CatalogoContext.Provider value={{produtos}} >
            {children}
        </CatalogoContext.Provider>
    )
}

export default CatalogoContext