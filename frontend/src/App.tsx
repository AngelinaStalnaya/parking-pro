import LogInForm from './components/LogInForm';
import SignInForm from './components/SignInForm';
// import CalendarComponent from './components/ui/Calendar';


function App() {
  return (
    <>
     {/* <CalendarComponent handleDaySelection={(e) => console.log('day clicked', e.toString())}/> */}
      <LogInForm/>
      <SignInForm/>
    </>
  )
}

export default App
