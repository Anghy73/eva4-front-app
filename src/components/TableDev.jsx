import CardDev from './CardDev'
import { useDevs } from '../hooks/useDevs'

function TableDev () {
  const { devs } = useDevs()

  return (
    <>
      <div className='flex justify-center items-center flex-wrap gap-5 bg-black w-screen rounded-xl'>
        {
          devs.map((item) => <CardDev key={item.id} item={item} />)
        }
      </div>
    </>
  )
}

export default TableDev
