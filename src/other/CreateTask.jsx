 
const CreateTask = () => {
  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
    <form className="flex w-full flex-wrap items-start justify-between">

        <div className="w-1/2">
        <div>
    
    <h2 className="text-sm text-gray-300 mb-0.5">Task Title</h2>
    <input className="text-sm py-1 px-2 w=4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"  type="text" placeholder="What is the task?" />
  </div> 
  <div>
     
     <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
     <input  className="text-sm py-1 px-2 w=4/5 rounded outline-none bg-transparent border-[1px] border-gray-400" type="date" />
   </div>
   <div>
     <h3 className="text-sm text-gray-300 mb-0.5" >Assign to</h3>
     <input className="text-sm py-1 px-2 w=4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"  type="text" placeholder="Employee name" />
   </div>
   <div>
     <h3 className="text-sm text-gray-300 mb-0.5" >Category</h3>
     <input className="text-sm py-1 px-2 w=4/5 rounded outline-none bg-transparent border-[1px] border-gray-400" type="text" placeholder="Desgin, Dev or something else" />
   </div>
        </div>

      <div className="w-1/2 flex flex-col items-start">
        <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
        <textarea className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400" name="" id="" cols={30} rows={10}></textarea>
        <button className="bg-emerald-500 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full " >Create Tasks</button>

      </div>
      
    </form>
  </div>
  )
}

export default CreateTask