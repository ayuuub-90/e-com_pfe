import Header from "./pages/Header.jsx";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
