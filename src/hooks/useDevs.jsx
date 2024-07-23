import { useContext } from 'react'
import { DevsContext } from '../../context/devs'

export const useDevs = () => {
  const devs = useContext(DevsContext)

  if (devs === undefined) {
    throw new Error('useDevs must be used within a DevsProvider')
  }

  return devs
}
