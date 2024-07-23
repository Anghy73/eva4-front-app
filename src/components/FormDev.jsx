import { useState } from 'react'
import { useDevs } from '../hooks/useDevs'

function FormDev () {
  const valoresIniciales = {
    name: '',
    lastname: '',
    age: '',
    area: '',
    exp: '',
    favL: ''
  }

  const [valores, setValores] = useState(valoresIniciales)

  const { addDev } = useDevs()

  const { name, lastname, age, area, exp, favL } = valores

  const handleChangeInput = (e) => {
    setValores({
      ...valores,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    addDev({
      name,
      lastname,
      age,
      area,
      exp,
      favL
    })

    setValores(valoresIniciales)
  }

  const handleClickClear = () => {
    setValores(valoresIniciales)
  }

  return (
    <>
      <form className='flex flex-col bg-black text-white border-2 border-gray-300 p-10 rounded-xl font-semibold text-xl' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-3'>
          <div className='flex flex-col'>
            <label className='mb-2'>Name</label>
            <input className='py-2 px-2 outline-none text-black rounded' name='name' type='text' placeholder='Juan' value={name} onChange={handleChangeInput} required />
          </div>
          <div className='flex flex-col'>
            <label className='mb-2'>Last Name</label>
            <input className='py-2 px-2 outline-none text-black rounded' name='lastname' type='text' placeholder='Perez' value={lastname} onChange={handleChangeInput} required />
          </div>
          <div className='flex flex-col'>
            <label className='mb-2'>Age</label>
            <input className='py-2 px-2 outline-none text-black rounded' name='age' type='text' placeholder='10' value={age} onChange={handleChangeInput} required />
          </div>
          <div className='flex flex-col'>
            <label className='mb-2'>Area</label>
            <input className='py-2 px-2 outline-none text-black rounded' name='area' type='text' placeholder='Frontend' value={area} onChange={handleChangeInput} required />
          </div>
          <div className='flex flex-col'>
            <label className='mb-2'>Experience</label>
            <input className='py-2 px-2 outline-none text-black rounded' name='exp' type='text' placeholder='4 years' value={exp} onChange={handleChangeInput} required />
          </div>
          <div className='flex flex-col'>
            <label className='mb-2'>Favorite Language 🤍</label>
            <input className='py-2 px-2 outline-none text-black rounded' name='favL' type='text' placeholder='JavaScript' value={favL} onChange={handleChangeInput} required />
          </div>
        </div>

        <div className='mt-5 flex justify-around items-center gap-5'>
          <button className='w-full border-2 rounded py-2 hover:bg-gray-800' type='button' onClick={handleClickClear}>Clear</button>
          <button className='w-full border-2 rounded py-2 hover:bg-gray-800' type='submit'>Save</button>
        </div>
      </form>
    </>
  )
}

export default FormDev
