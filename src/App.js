import './App.css';
import AppRoutes from './Route';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
function App() {
  return (
  <AppRoutes/>
  );
}

export default App;
