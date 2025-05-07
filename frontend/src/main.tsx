import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import { HeroUIProvider } from '@heroui/react';
import './index.css';
import App from './App.tsx';
import Auth from './pages/Auth.tsx';
import Booking from './pages/Booking.tsx';
import UsersBookings from './pages/UsersBookings.tsx';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeroUIProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<App />} />
          <Route path='/auth' element={<Auth />}/>
          <Route path='/booking/:id' element={<Booking/>}/>
          <Route path='/profile/mybookings' element={<UsersBookings/>}/>
        </Routes>
      </BrowserRouter>
    </HeroUIProvider>
  </StrictMode>
)
