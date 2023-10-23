import Homepage from "./Pages/Homepage";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  useNavigate,
} from "react-router-dom";
// added
import { Auth0Provider, withAuthenticationRequired } from '@auth0/auth0-react';
import Profile from './Profile';

const ProtectedRoute = ({ component, ...args }) => {
  const Component = withAuthenticationRequired(component, args);
  return <Component />;
};
// end of added
//Pages
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

const Auth0ProviderWithRedirectCallback = ({ children, ...props }) => {
  const navigate = useNavigate();
  const onRedirectCallback = (appState) => {
    navigate((appState && appState.returnTo) || window.location.pathname);
  };
  return (
    <Auth0Provider onRedirectCallback={onRedirectCallback} {...props}>
      {children}
    </Auth0Provider>
  );
};


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
