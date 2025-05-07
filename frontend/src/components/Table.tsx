import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    getKeyValue,
    Spinner,
} from "@heroui/react";
import type { Selection } from "@heroui/react";
import { useState } from "react";

const rows = [
    {
        key: "gvrgbhrtb",
        slot: "A-01",
        address: "Улица 1",
    },
    {
        key: "ersbdrb",
        slot: "A-02",
        address: "Улица 1",
    },
    {
        key: "rbrbt",
        slot: "A-03",
        address: "Улица 1",
    },

];

const columns = [
    {
        key: "slot",
        label: "Парковочное место",
    },
    {
        key: "address",
        label: "Адрес",
    },
];

interface TableProps {
    handleParkingSlotSelection: (e: Selection) => void;
}

const TableComponent = ({handleParkingSlotSelection}: TableProps) => {
    const [selectedSlot, setSelectedSlot] = useState<Selection | string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleSlotSelection = (e: Selection) => {
        setSelectedSlot(e)
        handleParkingSlotSelection(e)
    }

    return (
        <div className="flex flex-col">
            <h2 className="text-2xl text-secondary-800 font-bold">Список парковочных мест</h2>
            <Table aria-label="Список парковочных мест" color='secondary' selectionMode='single' selectedKeys={selectedSlot} onSelectionChange={e => handleSlotSelection(e)}>
                <TableHeader columns={columns}>
                    {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                </TableHeader>
                <TableBody items={rows} loadingContent={<Spinner label='Loading...'/>} isLoading={isLoading}>
                    {(item) => (
                        <TableRow key={item.key}>
                            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
}

export default TableComponent;