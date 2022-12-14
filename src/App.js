import { Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { AuthProvider } from './context/authContext';
import { Home } from './components/home/home';
import  Juego from './components/juego/inicio/juego'
import Jugando from './components/juego/Juego/jugando';
import JuegoTerm from './components/juego/terminado/terminado';
import { CrearActiviades } from './components/admin/crear_actividades/crear_actividades';
import {InformacionPacientes} from './components/admin/inf_paciente/infPaciente';
function App() {
  return(
    <div className='bg-slate-300 h-screen text-black flex'>
      <AuthProvider>
        <Routes>
          <Route path='/home' element = {<Home/>} />
          <Route path ='/' element = {<Login/>} />
          <Route path ='/register' element = {<Register/>} />
          <Route path = '/juego' element = {<Juego/>}/>
          <Route path ='/juego/jugar' element = { <Jugando numero={1}/>}/>
          <Route path ='/juego/terminado' element = { <JuegoTerm/> }/>
          <Route path='/crear_actividades' element = { <CrearActiviades/>} />
          <Route path='/informacion_paciente/:id' element = {<InformacionPacientes/>}/>
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;
