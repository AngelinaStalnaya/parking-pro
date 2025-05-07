import { useNavigate } from 'react-router';
import Table from './components/Table';
import type { Selection } from '@heroui/react';




function App() {
  const navigate = useNavigate();

  const handleParkingSlotSelection = (e: Selection) => {
    navigate(`/booking/${Array.from(e)[0]}`);
  }

  return (
    <>
      <Table handleParkingSlotSelection={e => handleParkingSlotSelection(e)} />
    </>
  )
}

export default App
