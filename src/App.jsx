import FormDev from './components/FormDev'
import TableDev from './components/TableDev'

function App () {
  return (
    <>
      <div className='w-full h-full bg-black text-white'>
        <h1 className='text-6xl font-bold text-center py-10 text-orange-500'>Developer Profiles</h1>
        <main className='flex h-full px-10 py-16 gap-10 bg-black'>
          <FormDev />
          <TableDev />
        </main>
        <footer className='flex justify-center gap-2 text-md py-5'>Create with <img className='w-6 cursor-pointer' src='vite.svg' alt='logo de vite' /> and <img className='w-6 cursor-pointer' src='react.svg' alt='logo de react' /> by <a className='text-indigo-600 font-medium hover:text-indigo-500' href='https://github.com/anghy73' target='_blank' rel='noreferrer'>Andy</a></footer>
      </div>
    </>
  )
}

export default App
