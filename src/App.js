import './App.css';
import AppRoutes from './Route';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import AOS from 'aos';
// import 'aos/dist/aos.css'; 
// AOS.init();
function App() {
  return (
    <>
    <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
  <AppRoutes/>
  </>
  );
}

export default App;
