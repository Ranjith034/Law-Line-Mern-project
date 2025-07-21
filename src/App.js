import { Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import AdminHome from './Admin/admin-home';
import Sidebar from './Admin/admin-sidebar';
import Admintop from './Admin/admin-top';
import Adminuser from './Admin/admin-user';
import Adminlog from './Admin/adminlog';
import AdminNav from './Admin/adminnav';
import Overview from './Admin/laweroverview';
import Toprated from './Admin/toprated';
import UserOverview from './Admin/useroverview';
import './App.css';
import Lawyeredite from './Lawyer/lawyeredite';
import Lawyerenter from './Lawyer/lawyerenter';
import Lawyerhome from './Lawyer/lawyerhome';
import Lawyerlog from './Lawyer/lawyerlog';
import LawyerNav from './Lawyer/lawyernav';
import Lawyerreg from './Lawyer/lawyerreg';
import Uprofile from './user-profile';
import Appoinment from './User/appoinment';
import EntNav from './User/e-nav';
import Login from './User/login';
import ProtectedRoute from './User/privaterouter';
import Register from './User/register';
import UserHome from './User/u-home';
import NavbarWithMegaMenu from './User/u-nav';
import Useredit from './User/user-eddit';
import Userenter from './User/user-enter';



function App() {
  return (
    <div>




      <Routes>


        <Route path={"/"} element={<NavbarWithMegaMenu />}>
          <Route exact path={""} element={<UserHome />} />
          <Route exact path={"reg"} element={<Register />} />
          <Route path={"login"} element={<Login />} />
          <Route path={"appoinment/:id"} element={<Appoinment />} />
          <Route path={"useredite/:_id"} element={<Useredit />} />

        </Route>
        <Route path={"/userenter/:userId"} element={<EntNav />}>

          <Route index element={<Userenter />} />
          <Route path={"/userenter/:userId/:id"} element={<Appoinment />} />
        </Route>




        <Route path={"lawyerhome"} element={<LawyerNav />}>
          <Route exact path={""} element={<Lawyerhome />} />


          <Route exact path={"lawyerreg"} element={<Lawyerreg />} />
          <Route path={"lawyerlog"} element={<Lawyerlog />} />
          <Route path={"lawyerenter/:userId"} element={<Lawyerenter />}>

            <Route exact path={"profile"} element={<Uprofile />} />

          </Route>
          <Route exact path={'lawyeredite/:_id'} element={<Lawyeredite />} />



        </Route>




        <Route path={""} element={<AdminNav />}>
          <Route exact path={"admin"} element={<AdminHome />} />
          {/* <Route exact path={"admin"} element={<Sidebar />}> */}
          <Route
            path="admin"
            element={<ProtectedRoute element={<Sidebar />} />}
          >
            <Route exact path={"lawyer"} element={<Adminlog />} />
            <Route exact path={"userdetail"} element={<Adminuser />} />
            <Route exact path={"toprated"} element={<Toprated />} />
            <Route exact path={"verifylaw"} element={<Admintop />} />




          </Route>
          <Route path={"/admin/lawyer/view/:id"} element={<Overview />} />
          <Route path={"/admin/userdetail/view/:userId"} element={<UserOverview />} />






        </Route>




        {/* <Route path={"sidebar"} element={<Sidebar/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
