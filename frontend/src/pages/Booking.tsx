import { Button, Card, CardBody, CardHeader, Divider, useDisclosure } from "@heroui/react"
import Logo from "../components/Logo"
import Calendar from "../components/Calendar";
import { useNavigate, useParams } from "react-router";
import ModalComponent from "../components/Modal";
import { type DateValue } from "@internationalized/date";
import { useState } from "react";


const Booking = () => {
    let params = useParams();
    const navigate = useNavigate();
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [day, setDay] = useState<string>('')
 

    const handleBooking = (e: DateValue) => {
        setDay(e.toString())
        onOpen();
        // fetch day slots data
    }


    let data = {
        slot: 'A-02',
        address: 'г. Минск, ул. Центрaльная, 1',
    }

    return (
        <Card className='border-2 rounded-2xl border-secondary flex w-full'>
            <CardHeader><Logo /></CardHeader>
            <Divider />
            <CardBody className="flex p-2">
                <Button variant="flat" color='secondary' onPress={() => navigate(-1)}>Назад</Button>
                <h2 className="font-medium text-xl">Бронирование места {data.slot}</h2>
                <p className="text-secondary mb-3">{data.address}</p>
                <Divider className="mb-2" />
                <Calendar handleDaySelection={handleBooking} />
                <ModalComponent isOpen={isOpen} onOpenChange={onOpenChange} daySelected={day}/>
            </CardBody>
        </Card>
    )
}

export default Booking