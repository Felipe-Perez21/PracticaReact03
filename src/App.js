import './App.css';
import Header from './Folder-con-los-componentes/Header';
import Libros from './Folder-con-los-componentes/Libros';
import Lista from './Folder-con-los-componentes/Lista';
import Libreriaprovider from './Context/Libreria_context';

function App() {
  return (
    <Libreriaprovider>
    <div className="App">
      <div className="App-header">
        <Header/>
      </div>

      <div className="Containers">

      <Libros/>
      <Lista/>

      </div>
    </div>
    </Libreriaprovider>
  );
}

export default App;
