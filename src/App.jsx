 import { useEffect, useState } from 'react';
import Login from './Auth/Login';
import AdminDashbord from './Dashbord/AdminDashbord';
import EmployeeDashbord from './Dashbord/EmployeeDashbord'
import { setLocalStorage } from './Utils/LocalStorage';
function App() {
  // useEffect(() => {
  //   setLocalStorage()   
  // },)
   const [user, setUser] = useState(null)

   const handleLogin =(email,password)=>{
     if(email == 'admin@example.com' && password=='123')
   {    setUser('admin')}
   else if(email == 'employee@example.com' && password=='123')
   {      setUser('employee')}
      else{
    alert("invalid user")
  }
}
  return(
    <>
    {!user? <Login handleLogin={handleLogin}/> : ''}
    {user == 'admin' ? <AdminDashbord/> : <EmployeeDashbord/>}
    </>
  );
}
export default App;