import { Container, CssBaseline } from "@mui/material";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

function App() {
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
