import { Card, CardBody, Button, useDisclosure } from "@heroui/react"
import Table from "../components/Table";
import { useNavigate } from "react-router";
import { type Selection } from '@heroui/react';
import ModalComponent from "../components/Modal";
import { useState } from "react";


const UsersBookings = () => {
    const navigate = useNavigate();
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [slotId, setSlotId] = useState<string>('');


    const handleParkingSlotSelection = (e: Selection) => {
        let id = `${Array.from(e)[0]}`
        setSlotId(id)
        onOpen()
    }

    return (
        <Card className='flex '>
            <CardBody>
                <Button variant="flat" color='secondary' onPress={() => navigate(-1)}>Назад</Button>
                <Table label='Мои бронирования' handleParkingSlotSelection={e => handleParkingSlotSelection(e)} />
                <ModalComponent isOpen={isOpen} onOpenChange={onOpenChange} editSlotId={slotId} />
            </CardBody>
        </Card>
    )
}

export default UsersBookings;