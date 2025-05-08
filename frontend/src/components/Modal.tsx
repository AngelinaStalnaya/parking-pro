import {
    Modal,
    ModalContent,
    ModalBody,
} from "@heroui/react";
import SlotList from "./SlotList";
import EditCard from "./EditCard";

interface ModalProps {
    daySelected?: string;
    isOpen: boolean | undefined;
    onOpenChange: () => void;
    editSlotId?: string;
}

const ModalComponent = ({ daySelected, isOpen, onOpenChange, editSlotId }: ModalProps) => {

    const handleSlotSelectConfirm = (slot: string) => {
        // DB save booking
        console.log(daySelected, slot)
    }
    return (
        <>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement='center' scrollBehavior="inside" backdrop='blur'>
                <ModalContent>
                    {(onClose) => (
                        <ModalBody className="flex flex-col gap-3 items-center w-full">
                            {daySelected && <SlotList daySelected={daySelected} onClose={onClose} handleSlotSelectConfirm={handleSlotSelectConfirm} />}
                            {editSlotId && <EditCard id={editSlotId} onClose={onClose}/>}
                        </ModalBody>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}

export default ModalComponent; 