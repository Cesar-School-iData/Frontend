import Problem from './problemCard'

function list() {
  return (
    <div className='py-44 px-14'>
      <div className="container mx-auto px-8 max-w-md h-96 bg-gray-300 rounded-3xl border border-gray-400 shadow-sm space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <Problem />
      </div>
    </div>
  )
}

export default list