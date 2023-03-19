import './App.css';
import { useState } from 'react';
import Grid from './components/Grid';
import InputTable from './components/InputTable';
import TimeBars from './components/TimeBars';

function App() {
  const [squares, setSquares] = useState(30)
  const [size, setSize] = useState(16)
  const [showType, setShowType] = useState('years')
  const [visualize, setVisualize] = useState('year')
  const todayDate = new Date();
  const [firstDate, setFirstDate] = useState();
  const [secondDate, setSecondDate] = useState();
  
  return (
    <div className="App">
      <main className='pt-6 w-screen h-full '>
        {/* <div className='text-center py-6 relative px-20 shadow-2xl bg-gradient-to-b from-gray-500'> */}
        {/* <div className='text-center py-3 md:py-6 relative w-4/5 mx-auto px-6 md:px-20 shadow-2xl bg-gray-800 md:bg-transparent md:bg-gradient-to-r from-transparent via-gray-800  to-transparent'> */}
        <div className='text-center py-3 md:py-6 relative px-6 md:px-20 shadow-2xl bg-gray-800 md:bg-transparent md:bg-gradient-to-r from-gray-900 via-gray-500  to-transparent'>
          <h2 className='text-gradient fadeIn rollIn1 text-6xl font-cookie'>Memento Mori</h2>
          <h3 className='text-gradient fadeIn rollIn1 font-milonga animate-pulse font-bold text-2xl mx-auto'>“You could leave life right now. Let that determine what you do and say and think.”</h3>
        </div>

        <div className='flex flex-row gapBox justify-around w-full h-3/4 mx-auto mt-6 border border-red-500'>

          <div className=' text-white font-milonga flex flex-col gap-5 w-1/4 items-center '>
            <div className='darkBackground w-full border-2 border-gray-800 rounded-md p-2'>
              <p>Visualize:</p>
              <div className='flex gap-3 px-2 flex-col align-start mt-2'>
                <button onClick={() => {setVisualize('year')}} className={`group relative rounded-lg border-2 border-transparent hover:border-gray-500 transition-all duration-100 py-2 px-2 w-4/5 mx-auto font-milonga cursor-pointer bg-black text-md ${visualize === 'year' ? 'test' : ''}`}>
                  This year
                  <img className='absolute h-8 top-1 left-3 transform transition duration-200 group-hover:scale-110' src={process.env.PUBLIC_URL + '/rose.svg'} alt='' />
                </button>
                <button onClick={() => {setVisualize('time')}} className={`group relative rounded-lg border-2 border-transparent hover:border-gray-500 transition-all duration-100 py-2 px-2 w-4/5 mx-auto font-milonga cursor-pointer bg-black text-md ${visualize === 'time' ? 'test' : ''}`}>
                  Time between periods.
                  <img className='absolute h-8 top-1 right-3 transform transition duration-200 group-hover:scale-110' src={process.env.PUBLIC_URL + '/skull.svg'} alt='' />
                </button>
              </div>
            </div>
            <div className=' w-full box darkBackground shadow-2xl rounded-md border-4 border-gray-800 fadeIn '>
              <TimeBars />
            </div>
          </div>

          <div className='  text-white font-milonga flex flex-col gap-5 w-1/4 items-center'>
            <div className='darkBackground border-2 border-gray-800 rounded-md w-full p-2'>
              <InputTable visualize={visualize} showType={showType} setShowType={setShowType} squares={squares} size={size} />
            </div>
            <div className='box darkBackground h-full shadow-2xl rounded-md border-4 border-gray-800 fadeIn circleBox'>
              <Grid squares={squares} size={size} />
            </div>
          </div>
        </div>
        


        {/* <div className=' optionsBox text-white font-milonga flex gap-5 text-1xl mx-auto  justify-around text-center mt-3'>
          
          
        </div>

        <div className='contentBox px-2 flex justify-around items-start mt-4'>
          
          
        </div> */}

        
        
      </main>
    </div>
  );
}

export default App;
