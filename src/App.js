import React, {Suspense, lazy} from 'react';
import './App.css';
const Componente = lazy(()=>import('./components/Componente'));


function App() {
  return (
    <div className="App">
    <Suspense fallback={<h2>Espereme amiguito</h2>}>
     <Componente/>
    </Suspense>
    </div>
  );
}

export default App;
