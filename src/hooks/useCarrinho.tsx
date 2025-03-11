import CarrinhoContext from '@/context/CarrinhoContext'
import { useContext } from 'react'

export default function useCarrinho() {
  return useContext(CarrinhoContext)
}
