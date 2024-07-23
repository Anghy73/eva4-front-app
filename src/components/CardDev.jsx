import { useState } from 'react'
import { useDevs } from '../hooks/useDevs'

function CardDev ({ item }) {
  const [enableEdit, setEnableEdit] = useState(true)
  const { updateDev } = useDevs()

  const handleClickEdit = () => {
    setEnableEdit(!enableEdit)
  }

  const handleClickDelete = () => {
    console.log('delete')
  }

  const handleChangeValue = (event) => {
    updateDev({ elemt: { target: event.target, value: event.target.value }, dev: item })
  }

  return (
    <div className='flex flex-col border-2 border-white p-5 rounded-md text-xl font-semibold gap-3 max-w-xl'>

      <div className='flex justify-center items-center gap-5 text-3xl'>
        <input className={!enableEdit ? 'w-56 text-white bg-transparent text-center border-2 border-white rounded outline-none' : 'w-56 text-white bg-transparent border-2 border-transparent rounded outline-none cursor-pointer text-end'} type='text' value={item.name} readOnly={enableEdit} onChange={handleChangeValue} name='name' /> <span className='text-orange-500'>||</span> <input className={!enableEdit ? 'w-56 text-white bg-transparent text-center border-2 border-white rounded' : 'w-56 text-white bg-transparent border-2 border-transparent rounded outline-none cursor-pointer text-start'} type='text' value={item.lastname} readOnly={enableEdit} onChange={handleChangeValue} name='lastname' />
      </div>

      <div className='flex justify-center items-center flex-wrap gap-5'>
        <div className='flex flex-col justify-center items-center gap-5'>
          <div className='flex flex-col justify-center items-center gap-1'>
            <label className='text-orange-500 font-bold' htmlFor='age'>Age</label>
            <input className={!enableEdit ? 'text-white bg-transparent text-center border-2 border-white rounded' : 'text-white bg-transparent text-center border-2 border-transparent rounded outline-none cursor-pointer'} type='text' value={item.age} readOnly={enableEdit} onChange={handleChangeValue} name='age' />
          </div>
          <div className='flex flex-col justify-center items-center gap-1'>
            <label className='text-orange-500 font-bold'>Area</label>
            <input className={!enableEdit ? 'text-white bg-transparent text-center border-2 border-white rounded' : 'text-white bg-transparent text-center border-2 border-transparent rounded outline-none cursor-pointer'} type='text' value={item.area} readOnly={enableEdit} onChange={handleChangeValue} name='area' />
          </div>
        </div>

        <div className='flex flex-col justify-center items-center gap-5'>
          <div className='flex flex-col justify-center items-center gap-1'>
            <label className='text-orange-500 font-bold'>Exp</label>
            <input className={!enableEdit ? 'text-white bg-transparent text-center border-2 border-white rounded' : 'text-white bg-transparent text-center border-2 border-transparent rounded outline-none cursor-pointer'} type='text' value={item.exp} readOnly={enableEdit} onChange={handleChangeValue} name='exp' />
          </div>
          <div className='flex flex-col justify-center items-center gap-1'>
            <label className='text-orange-500 font-bold'>FavL</label>
            <input className={!enableEdit ? 'text-white bg-transparent text-center border-2 border-white rounded' : 'text-white bg-transparent text-center border-2 border-transparent rounded outline-none cursor-pointer'} type='text' value={item.favL} readOnly={enableEdit} onChange={handleChangeValue} name='favL' />
          </div>
        </div>
      </div>

      <div className='flex justify-center mt-5 gap-5'>
        <button className={!enableEdit ? 'w-full border-2 border-white py-2 rounded bg-gray-800' : 'w-full border-2 border-white py-2 rounded hover:bg-gray-800'} onClick={handleClickEdit}>Edit</button>
        <button className='w-full border-2 border-white py-2 rounded hover:bg-gray-800' onClick={handleClickDelete}>Delete</button>
      </div>
    </div>
  )
}

export default CardDev
