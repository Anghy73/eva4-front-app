import FormDev from './components/FormDev'
import TableDev from './components/TableDev'

function App () {
  return (
    <>
      <div className='w-full h-full bg-sky-800'>
        <h1 className='text-6xl font-bold text-center py-10'>Developer Profiles</h1>
        <main className='flex bg-sky-800 px-10 pb-10'>
          <FormDev />
          <TableDev />
        </main>
      </div>
    </>
  )
}

export default App
