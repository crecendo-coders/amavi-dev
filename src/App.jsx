import Homepage from "./Pages/Homepage";
import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import axios from "axios";
import Layout from "./Elements/Layout";
import ErrorPage from "./Pages/Error";
import Conductor from "./Pages/Conductor";
import Affiliate from "./Pages/Affiliate";
import Admin from "./Pages/Admin";
import Events from "./Pages/Events";
import Support from "./Pages/Support";
import Chorale from "./Pages/Chorale";
import Audition from "./Pages/Audition";
import Members from "./Pages/Members";
import ManageMembers from "./Admin/ManageMembers"
import ManageEvents from "./Admin/ManageEvents";
import ManageSubscribers from "./Admin/ManageSubscribers";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
        <Route index element={<Homepage />} />
        <Route path="/members" element={<Members />} />
        <Route path="/about-conductor" element={<Conductor />} />
        <Route path="/about-chorale" element={<Chorale />} />
        <Route path="/audition" element={<Audition />} />
        <Route path="/affiliates" element={<Affiliate />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/events" element={<Events />} />
        <Route path="/support" element={<Support />} />
        <Route path="/manageEvents" element={<ManageEvents />} />
        <Route path="/ManageSubscribers" element={<ManageSubscribers />} />
        <Route
                  path='/ManageMembers'
                  element={<ManageMembers/>}
                />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
