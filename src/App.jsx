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
import Login from "./Pages/Login";
import Conductor from "./Pages/Conductor";
import Affiliate from "./Pages/Affiliate";
import Admin from "./Pages/Admin";
import Events from "./Pages/Events";
import Support from "./Pages/Support";
import Chorale from "./Pages/Chorale";
import Audition from "./Pages/Audition";
import Members from "./Pages/Members";

import ManageEvents from "./Admin/ManageEvents";
import ManageSubscribers from "./Admin/ManageSubscribers";

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
                <Route index element={<Homepage />} />
                <Route path="/members" element={<Members />} />
                <Route
                    path="/about-conductor"
                    element={<Conductor />}
                    // loader={async () => {
                    //   const res = await axios.get(`/api/conductor`);
                    //   console.log("res.data", res.data);
                    //   return { conductor: res.data };
                    // }}
                />
                <Route
                    path="/about-chorale"
                    element={<Chorale />}
                    // loader={async () => {
                    //   const res = await axios.get(`/api/conductor`);
                    //   console.log("res.data", res.data);
                    //   return { conductor: res.data };
                    // }}
                />
                <Route
                    path="/audition"
                    element={<Audition />}
                    // loader={async () => {
                    //   const res = await axios.get(`/api/conductor`);
                    //   console.log("res.data", res.data);
                    //   return { conductor: res.data };
                    // }}
                />
                <Route
                    path="/affiliates"
                    element={<Affiliate />}
                    // loader={async () => {
                    //   const res = await axios.get(`/api/affiliates/`);
                    //   console.log("res.data", res.data);
                    //   return { affiliates: res.data };
                    // }}
                />
                <Route
                    path="/admin"
                    element={<Admin />}
                    // loader={async () => {
                    //   const res = await axios.get(`/api/admin`);
                    //   return { admin: res.data };
                    // }}
                />
                <Route path="/events" element={<Events />} />
                <Route
                    path="/support"
                    element={<Support />}
                    // loader={async () => {
                    //   const res = await axios.get(`/api/admin`);
                    //   return { admin: res.data };
                    // }}
                />
                <Route
                  path='/manageEvents'
                  element={<ManageEvents/>}
                />
                <Route
                  path='/ManageSubscribers'
                  element={<ManageSubscribers/>}
                />
            </Route>
        )
    );
    return <RouterProvider router={router} />;
}

export default App;
