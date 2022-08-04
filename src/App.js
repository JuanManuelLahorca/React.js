import logo from './logo.svg';
import './App.css';
//import Greeting from './components/pure/greeting';
//import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import GreetingStyled from './components/pure/greetingStyled';
//import  ComponenteA from './components/container/componenteA';
//import Ejemplo1 from './hooks/Ejemplo1';
//import Ejemplo2 from './hooks/Ejemplo2';
//import MiComponenteConContexto from './hooks/Ejemplo3';
//import Ejemplo4 from './hooks/Ejemplo4';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*componente propio Greeting.jsx*/}
        {/*<GreetingF name="pana" namec="corito"></GreetingF>*/}
        {/*Componente de listado de tareas*/}
        {/*<TaskListComponent></TaskListComponent>*/}
        {/*<ComponenteA></ComponenteA>*/}
        {/*Ejemplo de uso de Hooks*/}
        {/*<Ejemplo1></Ejemplo1>*/}
        {/*<Ejemplo2></Ejemplo2>*/}
        {/*<MiComponenteConContexto></MiComponenteConContexto>*/}
        {/*<Ejemplo4 nombre="juancha">
          <h2>
              contenido con props children
          </h2>
        </Ejemplo4>*/}
        <GreetingStyled name="Juancha"></GreetingStyled>
      </header>
    </div>
  );
}

export default App;
