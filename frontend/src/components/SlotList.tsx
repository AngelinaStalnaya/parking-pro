import { RadioGroup, Radio, Button } from "@heroui/react";
import { useState } from "react";

interface SlotListProps {
    daySelected: string;
    onClose: () => void;
    handleSlotSelectConfirm: (slot: string) => void;
}

const SlotList = ({ daySelected, onClose, handleSlotSelectConfirm }: SlotListProps) => {
    const [selected, setSelected] = useState<string>('');

    const getdaySlots = () => {
        // fetch parkingSlots
        console.log(daySelected)
    }
    const parkingSlots = [{ id: 1, time: '08:00 - 09:00', available: true }, { id: 2, time: '09:00 - 10:00', available: false }]

    const submitSelection = () => {
        handleSlotSelectConfirm(selected);
        onClose()
    }

    return (
        <>
            <h2>Доступные слоты на {daySelected.split('-').join('/')}</h2>
                <RadioGroup value={selected} onValueChange={setSelected}>
                    {parkingSlots.map(slot => <Radio key={slot.id} value={slot.time} isDisabled={slot.available} >{slot.time}{!!slot.available && ' (занято)'}</Radio>)}
                </RadioGroup>
                <p className="text-secondary from-semibold text-small">Selected: {selected}</p>
                <Button onPress={submitSelection}>Choose</Button>
        </>
    )
}

export default SlotList;