import './App.css';
import { useState } from 'react';
import Grid from './components/Grid';
import InputTable from './components/InputTable';

function App() {
  const [squares, setSquares] = useState(30)
  const [size, setSize] = useState(16)

  
  return (
    <div className="App">
      <main className='pt-24 '>
        <div className='bg-blue-200 text-center py-6 relative px-20 shadow-xl'>
          <h2 className='fadeIn rollIn1 text-6xl font-cookie'>Memento Mori</h2>
          <h3 className='fadeIn rollIn1 font-milonga animate-pulse text-xl mx-auto'>“You could leave life right now. Let that determine what you do and say and think.”</h3>
        </div>

        <div className='mt-10 w-2/5 mx-auto bg-purple-50 font-Tenor shadow-2xl rounded-md border-2 border-gray-400 fadeIn '>
          <InputTable squares={squares} size={size} />
        </div>
        
        <div className='mt-10 w-3/4 mx-auto bg-sky-50  shadow-2xl rounded-md border-2 border-gray-400 fadeIn circleBox'>
          <Grid squares={squares} size={size} />
        </div>
      </main>
    </div>
  );
}

export default App;
