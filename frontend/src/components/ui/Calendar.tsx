import type { DateValue } from "@react-types/calendar"
import { Calendar } from "@heroui/react";
import { useState } from "react";
import { CalendarDate, getLocalTimeZone, parseDate, today } from "@internationalized/date";
import { I18nProvider } from "@react-aria/i18n";

interface CalendarProps {
    handleDaySelection: (e: DateValue) => void;
    disabledDates?: Array<string>;
}

const CalendarComponent = ({ handleDaySelection, disabledDates=['2025-05-13'] }: CalendarProps) => {
    const [value, setValue] = useState<DateValue | null>(null);

    const handleChangeValue = (e: DateValue) => {
        setValue(e);
        handleDaySelection(e);
    }


    let propsDidsabledDates = disabledDates?.map(item => parseDate(item))


    const isDateUnavailable = (date: { compare: (arg0: CalendarDate) => number; }) =>
        propsDidsabledDates.some(
            (disabledDate) => date.compare(disabledDate) == 0,
        );


    return (
        <I18nProvider locale='ru-RU'>
            <Calendar
                aria-label="Date (Controlled)"
                value={value}
                onChange={(e) => handleChangeValue(e)}
                minValue={today(getLocalTimeZone())}
                firstDayOfWeek="mon"
                isDateUnavailable={isDateUnavailable} />
        </I18nProvider>
    )
}

export default CalendarComponent;