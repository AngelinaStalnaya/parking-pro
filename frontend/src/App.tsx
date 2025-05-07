
import Table from './components/Table';




function App() {
  return (
    <>   
      <Table handleParkingSlotSelection={()=> console.log('redirect to calendar')}/>
    </>
  )
}

export default App
