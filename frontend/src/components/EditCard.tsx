import { Button, Card, CardBody, CardHeader } from "@heroui/react"

interface EditCardProps {
    id: string;
    onClose: () => void;
}

const EditCard = ({ id, onClose }: EditCardProps) => {

    // fetch slot data
    // const slotData = {
    //     name: string;
    //     date: string;
    //     time: string ;
    //     status: string;
    // }
    const handleDeleteBooking = () => {
        // fetch pathc with id = staatus update
        onClose()
    }

    return (
        <Card>
            <CardHeader className="text-secondary text-xl font-bold">Парковочное место №{'A-01'}</CardHeader>
            <CardHeader className='text-md font-semibold'>Адрес: {'Улица 1'}</CardHeader>
            <CardBody className='flex flex-col gap-3 items-start'>
                <h2>Дата брониварония: {'2025-05-13'}</h2>
                <h2>Время бронирования: {'10:00 - 11:00'}</h2>
                <h2>Статус бронирования: {'Забронировано'}</h2>
                <Button onPress={handleDeleteBooking} variant="flat" color='secondary'>Снять бронирование</Button>
            </CardBody>
        </Card>
    )
}

export default EditCard