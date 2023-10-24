import Homepage from "./Pages/Homepage";
import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Layout from "./Elements/Layout";
import ErrorPage from "./Pages/Error";
import Conductor from "./Pages/Conductor";
import Affiliate from "./Pages/Affiliate";
import Events from "./Pages/Events";
import Support from "./Pages/Support";
import Chorale from "./Pages/Chorale";
import Audition from "./Pages/Audition";
import Members from "./Pages/Members";
import ManageMembers from "./Admin/ManageMembers"
import ManageEvents from "./Admin/ManageEvents";
import ManageSubscribers from "./Admin/ManageSubscribers";
import Unsubscribe from "./Pages/Unsubscribe";
import LoginButton from "./Elements/Login";
import Newsletter from "./Admin/Newsletter";
import LogoutButton from "./Elements/Logout";


function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
        <Route index element={<Homepage />} />
        <Route path="/members" element={<Members />} />
        <Route path="/about-conductor" element={<Conductor />} />
        <Route path="/about-chorale" element={<Chorale />} />
        <Route path="/audition" element={<Audition />} />
        <Route path="/affiliates" element={<Affiliate />} />
        <Route path="/events" element={<Events />} />
        <Route path="/unsubscribe/:hashedEmail" element={<Unsubscribe />} />
        <Route path="/support" element={<Support />} />
        <Route path="/manageEvents" element={isAuthenticated?<ManageEvents />:<Navigate to='/'/>} />
        <Route path="/manageSubscribers" element={isAuthenticated?<ManageSubscribers />:<Navigate to='/'/>} />
        <Route path='/manageMembers' element={isAuthenticated?<ManageMembers/>:<Navigate to='/'/>} />
        <Route path='/newsletter' element={isAuthenticated?<Newsletter/>:<Navigate to='/'/>} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
