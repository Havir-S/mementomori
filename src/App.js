import './App.css';
import { useEffect, useState } from 'react';
import Grid from './components/Grid';
import InputTable from './components/InputTable';
import TimeBars from './components/TimeBars';
import InitialChoice from './components/InitialChoice';
import TimePeriodChoose from './components/TimePeriodChoose';

import getDots from './utils/getDots';
import getDayOfTheYear from './utils/getDayOfTheYear';


function App() {
  const todayDate = new Date();

  const [squares, setSquares] = useState(12)
  const [squaresFilled, setSquaresFilled] = useState(todayDate.getMonth() + 1)
  const [size, setSize] = useState(16)
  

  const [showType, setShowType] = useState('months')
  const [visualize, setVisualize] = useState('year')
  const [initialChoice, toggleInitialChoice] = useState(true);

  const [settings, handleSettings] = useState(
    {
      yearBorn: 2000,
      monthBorn: 1,
      dayBorn: 1,
      lifeYears: 80
    }
  );

  ///change dots when settings change and we show the ear
  useEffect(() => {
    if (visualize === 'time') {
      const [newSquares, newSquaresFilled] = getDots(todayDate, settings, showType)
      setSquares(newSquares)
      setSquaresFilled(newSquaresFilled)
      ///restart the dots on changing to 'year'
    } else if (visualize === 'year') {

      ///years option - can't appear when we are only looking at the current year
      if (showType === 'years') {
        setShowType('months')
        setSquares(12);
        setSquaresFilled(todayDate.getMonth() + 1)
        return;
      }

      switch (showType) {
        case 'Months':
          setSquares(12);
          setSquaresFilled(todayDate.getMonth() + 1)
        return;
        case 'Days':
            setSquares((todayDate.getFullYear() % 4) ? 365 : 364);
            setSquaresFilled(getDayOfTheYear())
        return;
        default: return;
      }
    }
  }, [showType, visualize, settings])
  
  return (
    <div className="App">
      <div className='absolute w-full h-full vignette z-0' />
      <main className='pt-6 w-screen h-full relative z-1'>
        <div className='text-center py-3 md:py-6 relative px-6 md:px-20 shadow-2xl bg-gray-800 md:bg-transparent md:bg-gradient-to-r from-gray-900 via-gray-500  to-transparent'>
          <h2 className='text-gradient fadeIn rollIn1 text-6xl font-cookie'>Memento Mori</h2>
          <h3 className='text-gradient fadeIn rollIn1 font-milonga animate-pulse font-bold text-2xl mx-auto'>“You could leave life right now. Let that determine what you do and say and think.”</h3>
        </div>
        
        {initialChoice ? (
          <InitialChoice toggleInitialChoice={toggleInitialChoice} setVisualize={setVisualize}/>
        ): (
          <div className='flex flex-row gapBox justify-around w-full h-3/4 mx-auto mt-6'>
            <div className=' text-white font-milonga flex h-full flex-col gap-5 w-1/4 items-center '>
              <div className='darkBackground fadeIn text-center w-full h-52 border-2 border-gray-800 rounded-md p-2'>
                <p>Visualize:</p>
                <div className='flex gap-3 px-2 flex-col align-start mt-2'>
                  <button onClick={() => {setVisualize('year')}} className={`group relative rounded-lg border-2 border-transparent hover:border-gray-500 transition-all duration-100 py-2 px-2 w-4/5 mx-auto font-milonga cursor-pointer bg-black text-md ${visualize === 'year' ? 'test' : ''}`}>
                    This Year
                    <img className='absolute h-8 top-1 left-3 transform transition duration-200 group-hover:scale-110' src={process.env.PUBLIC_URL + '/rose.svg'} alt='' />
                  </button>
                  <button onClick={() => {setVisualize('time')}} className={`group relative rounded-lg border-2 border-transparent hover:border-gray-500 transition-all duration-100 py-2 px-2 w-4/5 mx-auto font-milonga cursor-pointer bg-black text-md ${visualize === 'time' ? 'test' : ''}`}>
                    This Life
                    <img className='absolute h-8 top-1 right-3 transform transition duration-200 group-hover:scale-110' src={process.env.PUBLIC_URL + '/skull.svg'} alt='' />
                  </button>
                </div>
              </div>

              {visualize === 'year' ? (
                <div className='h-full w-full box darkBackground shadow-2xl rounded-md border-4 border-gray-800 fadeIn '>
                  <TimeBars />
                </div>
              ) : visualize === 'time' ? (
                <div className='h-full w-full box darkBackground shadow-2xl rounded-md border-4 border-gray-800 fadeIn '>
                  <TimePeriodChoose todayDate={todayDate} settings={settings} handleSettings={handleSettings} />
                </div>
              ) : 'a'}
              
            </div>

            <div className=' fadeIn relative text-white font-milonga flex flex-col gap-5 w-1/4 items-center'>
              <div className='darkBackground fadeIn border-2 border-gray-800 rounded-md w-full p-2'>
                <InputTable todayDate={todayDate} visualize={visualize} showType={showType} setShowType={setShowType} setSquares={setSquares} setSquaresFilled={setSquaresFilled} size={size} />
              </div>
              <div className='w-full box relative overflow-y-scroll darkBackground h-full shadow-2xl rounded-md border-4 border-gray-800 fadeIn circleBox'>
                <Grid squares={squares} squaresFilled={squaresFilled} size={size} />
                
              </div>
              <div className='absolute hover:text-white text-gray-400 cursor-pointer bg-gradient-to-t from-black via-black  to-transparent bottom-0 w-full py-3  text-3xl text-center '>Show in fullscreen </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
