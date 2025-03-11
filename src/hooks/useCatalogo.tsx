import CatalogoContext from '@/context/CatalogoContext'
import  { useContext } from 'react'

export default function useCatalogo() {
  return useContext(CatalogoContext)
}
