 
const NumberofTasks = () => {
  return (
    <div className='flex  mt-10 justify-between gap-5 screen'>   
    <div className='px-6 py-9 rounded-xl w-[45%] bg-red-400'> 
        <h2 className="text-2xl font-semibold">0</h2>
        <h3 className="text-2xl font-semibold">New Tasks</h3>
         </div>
         
         <div className='px-6 py-9 rounded-xl w-[45%] bg-blue-400'> 
        <h2 className="text-2xl font-semibold">0</h2>
        <h3 className="text-2xl font-semibold">Accept Tasks</h3>
         </div>

         <div className='px-6 py-9 rounded-xl w-[45%] bg-green-400'> 
        <h2 className="text-2xl font-semibold">0</h2>
        <h3 className="text-2xl font-semibold">Complete Tasks</h3>
         </div>

         <div className='px-6 py-9 rounded-xl w-[45%] bg-yellow-400'> 
        <h2 className="text-2xl font-semibold">0</h2>
        <h3 className="text-2xl font-semibold">failed Tasks</h3>
         </div>
         </div>
  )
}

export default NumberofTasks