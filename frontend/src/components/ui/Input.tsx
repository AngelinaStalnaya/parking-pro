import { useState } from "react"

interface InputProps {
    type: string;
    name: string;
    id: string;
}

const Input = ({ type, name, id }: InputProps) => {
    const [value, setValue] = useState<string | undefined>();

    return (
        <input value={value} onChange={(e) => setValue(e.target.value)} type={type} name={name} id={id} className='' />
    )
}

export default Input