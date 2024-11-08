 import Header from '../other/Header'
import NumberofTasks from '../other/NumberofTasks'
import Tasklist from '../Tasks/Tasklist'
const EmployeeDashbord = () => {
  return (
<>
<div className='p-20 bg-[#1c1c1c] h-screen'> 
    <Header></Header>
    
    <NumberofTasks></NumberofTasks>
    <Tasklist></Tasklist>
    </div>
    
</>
  )
}

export default EmployeeDashbord