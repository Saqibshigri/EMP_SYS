 import '../App.css'
const Tasklist = () => {
  return (
    <div id="tasklist" className='h-[55%] w-full  overflow-x-auto flex items-start gap-2 m-5 p-2 mt-10 flex-nowrap'> 
   
<div className=" flex-shrink-0 h-full w-[250px] rounded-xl p-5 bg-yellow-400">
    <div className='flex justify-between items-center'>
        <h2 className='bg-red-600 rounded px-3 py-1 text-sm '>High</h2>
        <h3 className='text-sm'>20 oct 24</h3>
    </div>
   <div className='mt-5 text-xl font-semibold'>Make a youtube video</div>
   <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam delectus perspiciatis quia odio molestias! Laborum!</p>
 </div>
    
 <div className=" flex-shrink-0 h-full w-[250px] rounded-xl p-5 bg-red-400">
    <div className='flex justify-between items-center'>
        <h2 className='bg-red-600 rounded px-3 py-1 text-sm '>High</h2>
        <h3 className='text-sm'>20 oct 24</h3>
    </div>
   <div className='mt-5 text-xl font-semibold'>Make a youtube video</div>
   <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam delectus perspiciatis quia odio molestias! Laborum!</p>
 </div>

 <div className=" flex-shrink-0 h-full w-[250px] rounded-xl p-5 bg-blue-400">
    <div className='flex justify-between items-center'>
        <h2 className='bg-red-600 rounded px-3 py-1 text-sm '>High</h2>
        <h3 className='text-sm'>20 oct 24</h3>
    </div>
   <div className='mt-5 text-xl font-semibold'>Make a youtube video</div>
   <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam delectus perspiciatis quia odio molestias! Laborum!</p>
 </div>


 <div className=" flex-shrink-0 h-full w-[250px] rounded-xl p-5 bg-green-400">
    <div className='flex justify-between items-center'>
        <h2 className='bg-red-600 rounded px-3 py-1 text-sm '>High</h2>
        <h3 className='text-sm'>20 oct 24</h3>
    </div>
   <div className='mt-5 text-xl font-semibold'>Make a youtube video</div>
   <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam delectus perspiciatis quia odio molestias! Laborum!</p>
 </div>
</div>
         
  )
}

export default Tasklist