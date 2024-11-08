import Alltasks from "../other/Alltasks";
import CreateTask from "../other/CreateTask";
import Header from "../other/Header";
const AdminDashbord = () => {
  return (
    <div className="h-screen w-full p-10">
      <Header></Header>
      <CreateTask></CreateTask>
      <Alltasks></Alltasks>
    </div>
  );
};

export default AdminDashbord;
