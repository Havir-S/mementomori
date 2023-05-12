import './App.css';
import { useEffect, useState } from 'react';
import Grid from './components/Grid';
import InputTable from './components/InputTable';
import TimeBars from './components/TimeBars';
import InitialChoice from './components/InitialChoice';
import TimePeriodChoose from './components/TimePeriodChoose';

// import getDots from './utils/getDots';
// import getDayOfTheYear from './utils/getDayOfTheYear';
import LeftColumn from './components/LeftColumn/LeftColumn';
import RightColumn from './components/RightColumn/RightColumn';

import useDots from './utils/useDots'
import getYearInfo from './utils/getYearInfo';

function App() {
  const [bornDate, setBornDate] = useState(new Date())
  const [additionalYears, setAdditionalYears] = useState(10)
  const [calculatedThisYear, setCalculatedThisYear] = useState(getYearInfo())
  const [ calculatedYears, calculateYears ] = useDots({
    bornDate,
    additionalYears
  });
  const [visualize, setVisualize] = useState('time')  /// TIME / YEAR

  /// get data for the current year
  useEffect(() => {
    if (visualize === 'year') {
      const x = getYearInfo()
      setCalculatedThisYear(x)
      
    }
  }, [visualize])

  const [initialChoice, toggleInitialChoice] = useState(true);


  /// function that is gonna be called everytime values change
  const calculateNewDots = () => {
    calculateYears({
      bornDate,
      additionalYears
    })
  }

  ///trigger the hook each time the values are changed
  useEffect(() => {
    calculateNewDots()
  }, [bornDate, additionalYears])
  
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
            <LeftColumn setBornDate={setBornDate} setAdditionalYears={setAdditionalYears} calculateNewDots={calculateNewDots} setVisualize={setVisualize} visualize={visualize} />

            <RightColumn visualize={visualize} calculatedYears={visualize === 'year' ? calculatedThisYear : calculatedYears } />
            
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
