import { Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Adminlog from './Admin/adminlog';
import AdminNav from './Admin/adminnav';
import Overview from './Admin/laweroverview';
import './App.css';
import Lawyerenter from './Lawyer/lawyerenter';
import Lawyerhome from './Lawyer/lawyerhome';
import Lawyerlog from './Lawyer/lawyerlog';
import LawyerNav from './Lawyer/lawyernav';
import Lawyerreg from './Lawyer/lawyerreg';
import Uprofile from './user-profile';
import Appoinment from './User/appoinment';
import EntNav from './User/e-nav';
import Login from './User/login';
import Register from './User/register';
import UserHome from './User/u-home';
import NavbarWithMegaMenu from './User/u-nav';
import Userenter from './User/user-enter';

function App() {
  return (
    <div>
      



      <Routes>
       
        
        <Route path={"/"} element={<NavbarWithMegaMenu/>}>
        <Route exact path={""} element={<UserHome/>}/>
        <Route exact path={"reg"} element={<Register/>}/>
        <Route path={"login"} element={<Login/>}/>
        <Route path={"appoinment/:id"} element={<Appoinment/>}/>
        
        </Route>
        <Route path ={"userenter/:userId"} element={<EntNav/>}>
        <Route exact path={""} element={<Userenter/>}/>
        </Route>



        <Route path={"lawyerhome"} element={<LawyerNav/>}>
        <Route exact path={""} element={<Lawyerhome/>}/>
        
        
        <Route exact path={"lawyerreg"} element={<Lawyerreg/>}/>
        <Route path={"lawyerlog"} element={<Lawyerlog/>}/>
        <Route path ={"lawyerenter/:userId"} element={<Lawyerenter/>}>
         <Route exact path={"profile"} element={<Uprofile/>}/>
        </Route>
        
        
        
        </Route>
        
        


        <Route path={"admin"} element={<AdminNav/>}>
        <Route path={""} element={<Adminlog/>}/>
        <Route path={"view/:id"} element={<Overview/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
