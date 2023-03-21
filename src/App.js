import './App.css';
import { useEffect, useState } from 'react';
import Grid from './components/Grid';
import InputTable from './components/InputTable';
import TimeBars from './components/TimeBars';
import InitialChoice from './components/InitialChoice';
import TimePeriodChoose from './components/TimePeriodChoose';

import getDots from './utils/getDots';
import getDayOfTheYear from './utils/getDayOfTheYear';
import LeftColumn from './components/LeftColumn/LeftColumn';
import RightColumn from './components/RightColumn/RightColumn';


function App() {
  const todayDate = new Date();

  const [squares, setSquares] = useState(12)
  const [squaresFilled, setSquaresFilled] = useState(todayDate.getMonth() + 1)
  const [size, setSize] = useState(16)
  

  const [showType, setShowType] = useState('Months')
  const [visualize, setVisualize] = useState('time')
  const [initialChoice, toggleInitialChoice] = useState(true);

  const [settings, handleSettings] = useState(
    {
      yearBorn: 2000,
      monthBorn: 1,
      dayBorn: 1,
      lifeYears: 80
    }
  );

  useEffect(() => {console.log(settings)}, [settings])

  ///change dots when settings change and we show the ear
  useEffect(() => {
    if (visualize === 'time') {

      /// set new dots everytime settings change
      const [newSquaresFilled, newSquares] = getDots(todayDate, settings, showType)
      setSquares(newSquares)
      setSquaresFilled(newSquaresFilled)



      ///////////////////////////////////////////////// THIS IS THE YEAR PART, DON'T TOUCH ,ALL IS WORKING WELL
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
      <main className='pt-6 w-full h-full relative z-1'>
        <div className='text-center py-3 md:py-6 relative px-6 md:px-20 shadow-2xl bg-gray-800 md:bg-transparent md:bg-gradient-to-r from-gray-900 via-gray-500  to-transparent'>
          <h2 className='text-gradient fadeIn rollIn1 text-6xl font-cookie'>Memento Mori</h2>
          <h3 className='text-gradient fadeIn rollIn1 font-milonga animate-pulse font-bold text-2xl mx-auto'>“You could leave life right now. Let that determine what you do and say and think.”</h3>
        </div>
        
        {initialChoice ? (
          <InitialChoice toggleInitialChoice={toggleInitialChoice} setVisualize={setVisualize}/>
        ): (
          <div className='flex flex-col lg:flex-row lg:gapBox lg:justify-around items-center lg:items-stretch w-5/6 h-3/4 mx-auto mt-6'>
            <LeftColumn setVisualize={setVisualize} visualize={visualize} todayDate={todayDate} settings={settings} handleSettings={handleSettings} />

            <RightColumn  squares={squares} showType={showType} setShowType={setShowType} setSquares={setSquares} setSquaresFilled={setSquaresFilled} squaresFilled={squaresFilled} size={size} setVisualize={setVisualize} visualize={visualize} todayDate={todayDate} handleSettings={handleSettings}  />
            
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
