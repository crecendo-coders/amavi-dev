
import './App.css'

function App() {
  const userId = useSelector(state => state.userId)
  console.log("userId", userId);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
        <Route
          index
          element={<Homepage />}
          loader={async () => {
            const res = await axios.get(`/api/events`);
            console.log("res.data", res.data);
            return { events: res.data};
          }}
        />
        <Route 
          path="/login" 
          element={userId? <Navigate to='/admin'/> : <Login />} />
        <Route
          path="/about-conductor"
          element={<AboutConductor />}
          loader={async () => {
            const res = await axios.get(`/api/conductor`);
            console.log("res.data", res.data);
            return { conductor: res.data };
          }}
        />
        <Route
          path="/affiliates"
          element={<Affiliate />}
          loader={async () => {
            const res = await axios.get(`/api/affiliates/`);
            console.log("res.data", res.data);
            return { affiliates: res.data };
          }}
        /> 
        <Route
          path="/admin"
          element={userId? <Admin /> : <Navigate to='/login'/>}
          loader={async () => {
            const res = await axios.get(`/api/admin`);
            return { admin: res.data };
          }}
        />
      </Route>
    )
  );
  return <RouterProvider router={router} />
}

export default App;

