import Problem from './problemCard'

function list() {
  return (
    <div className='py-44 px-14'>
      <div className="overflow-y-scroll overflow-x-hidden container mx-auto px-8 max-w-md h-96 bg-laranja-400 rounded-3xl border border-preto-100 shadow-sm space-y-4 sm:py-6 ">
        <Problem />
      </div>
    </div>
  )
}

export default list