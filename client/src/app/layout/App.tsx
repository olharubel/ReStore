import { Container, CssBaseline } from "@mui/material";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { useStoreContext } from "../context/StoreContext";
import { useEffect, useState } from "react";
import { getCookie } from "../util/util";
import agent from "../api/agent";
import LoadingComponent from "./LoadingComponent";
import { useAppDispatch } from "../store/configureStore";
import { setBasket } from "../../features/baskets/basketSlice";
import { fetchCurrentUser } from "../../features/account/accountSlice";



function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const buyerId = getCookie('buyerId');
   dispatch(fetchCurrentUser());

    if(buyerId){
      agent.Basket.get()
      .then(basket => dispatch(setBasket(basket)))
      .catch(error => console.log(error))
        .finally(() => setLoading(false));
    }else{
      setLoading(false);
    }}, [dispatch])
    
  if(loading) return <LoadingComponent message="Initializing app..."/>

  return (
    <>
    <ToastContainer position="bottom-right" hideProgressBar theme="colored"/> 
      <CssBaseline />
      <Header></Header>
      <Container>
        <Outlet/>
      </Container>
    </>
  );
}

export default App;
