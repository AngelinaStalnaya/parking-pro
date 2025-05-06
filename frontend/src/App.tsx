import LogInForm from './components/LogInForm';
import ButtonComponent from './components/ui/Button';
import CalendarComponent from './components/ui/Calendar';


function App() {
  return (
    <>
     <ButtonComponent handleClick={()=> console.log('click')}>Click me</ButtonComponent>
     <CalendarComponent handleDaySelection={(e) => console.log('day clicked', e.toString())}/>
      <LogInForm/>
    </>
  )
}

export default App
