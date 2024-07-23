import FormDev from './components/FormDev'
import TableDev from './components/TableDev'

function App () {
  return (
    <>
      <div className='w-full h-screen bg-black text-white'>
        <h1 className='text-6xl font-bold text-center py-10 text-orange-500'>Developer Profiles</h1>
        <main className='flex h-full px-10 py-16 gap-10 bg-black'>
          <FormDev />
          <TableDev />
        </main>
      </div>
    </>
  )
}

export default App
