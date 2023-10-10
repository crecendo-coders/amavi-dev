
import { useSelector } from 'react-redux';
import './App.css'
import Homepage from './Pages/Homepage';
import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Elements/Layouts';
import ErrorPage from './Pages/Error';
import Login from './Pages/Login';
import Conductor from './Pages/Conductor';
import Affiliate from './Pages/Affiliate';
import Admin from './Pages/Admin';
import Events from './Pages/Events';
import Support from './Pages/Support';
import Chorale from './Pages/Chorale';
import Artists from './Pages/Artists';
import Audition from './Pages/Audition';

function App() {
  const userId = useSelector(state => state.userId)
  console.log("userId", userId);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
        <Route
          index
          element={<Homepage />}
          // loader={async () => {
          //   const res = await axios.get(`/api/events`);
          //   console.log("res.data", res.data);
          //   return { events: res.data};
          // }}
        />
        <Route 
          path="/login" 
          element={userId? <Navigate to='/admin'/> : <Login />} />
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
          path="/about-artists"
          element={<Artists />}
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
          element={userId? <Admin /> : <Navigate to='/login'/>}
          // loader={async () => {
          //   const res = await axios.get(`/api/admin`);
          //   return { admin: res.data };
          // }}
        />
        <Route
          path="/events"
          element={<Events/>}
          // loader={async () => {
          //   const res = await axios.get(`/api/admin`);
          //   return { admin: res.data };
          // }}
        />
        <Route
          path="/support"
          element={<Support/>}
          // loader={async () => {
          //   const res = await axios.get(`/api/admin`);
          //   return { admin: res.data };
          // }}
        />
      </Route>
    )
  );
  return <RouterProvider router={router} />
}

export default App;

