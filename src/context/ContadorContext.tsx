import React, { createContext, ReactNode, useState } from 'react'


/*
Para criar um contexto qualquer, ele deve seguir uma estrutura dispostas de 

    - Uma interface de tudo que pretende disponibilizar

    - Inicialização e exportatação do com texto com 'createContext' definindo os valores iniciais ou usando "{} as any" 

    - um compnente que encapsula os elemento filho dentro po provedor do contexto, esse componente disponibiliza os estados e funções referentes ao contexto dentro de um objeto atravez do value do provedor. 

    Está pronto o seu contexto, pode usalo atravez do "useContext(nome do componente que disponibiliza o provedor)"

    - Não fiz para esse exemplo, mas geralmente criamos um hook que usa o useContext(...) e nos devolve o objeto, entao o chamamos de uma forma mais simples e especifica. exemplo: useContador()

*/


interface ContadorContextProps {
    numero: number
    incrementar: ()=> void
    decrementar: ()=> void
}

const ContadorContext = createContext<ContadorContextProps>({
    numero: 0,
    incrementar: () => {},
    decrementar: () => {}
})

export function ContadorProvider(props: {children: ReactNode}) {

    const [numero, setNumero] = useState(0)

    function incrementar() {
        setNumero(numero + 1)
    }

    function decrementar() {
        setNumero(numero - 1)
    }

  return (
    <ContadorContext.Provider value={{numero, incrementar, decrementar}}>{props.children}</ContadorContext.Provider>
  )
}


export default ContadorContext