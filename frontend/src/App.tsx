import { useNavigate } from 'react-router';
import Table from './components/Table';
import { type Selection } from '@heroui/react';
import User from './components/User';
import { Link } from 'react-router';




function App() {
  const navigate = useNavigate();

  const handleParkingSlotSelection = (e: Selection) => {
    navigate(`/booking/${Array.from(e)[0]}`);
  }

  return (
    <div className='flex space-between w-full mx-5 gap-5'>
    
      <Table handleParkingSlotSelection={e => handleParkingSlotSelection(e)} label="Список парковочных мест" />
      <Link to='/profile/mybookings' variant='light' color='secondary'>{<User sex='female'/>}</Link>
    </div>
  )
}

export default App
