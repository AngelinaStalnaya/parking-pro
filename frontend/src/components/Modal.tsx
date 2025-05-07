import {
    Modal,
    ModalContent,
    ModalBody,
} from "@heroui/react";
import SlotList from "./SlotList";

interface ModalProps {
    daySelected: string;
    isOpen: boolean | undefined;
    onOpenChange: () => void;
}

const ModalComponent = ({ daySelected, isOpen, onOpenChange }: ModalProps) => {

    const handleSlotSelectConfirm = (slot: string) => {
        // DB add
        console.log(daySelected, slot)
    }
    return (
        <>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement='center' scrollBehavior="inside" backdrop='blur'>
                <ModalContent>
                    {(onClose) => (
                        <ModalBody className="flex flex-col gap-3 items-center w-full">
                            {<SlotList daySelected={daySelected} onClose={onClose} handleSlotSelectConfirm={handleSlotSelectConfirm} />}
                        </ModalBody>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}

export default ModalComponent; 