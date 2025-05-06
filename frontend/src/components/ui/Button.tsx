import { Button } from '@heroui/react';

interface ButtonProps {
    children: string | React.ReactNode;
    handleClick?: () => void;
    type?: 'button' | 'submit';
    isLoading?: boolean;
    disabled?: boolean;
}

const ButtonComponent = ({ children, handleClick, type, isLoading, disabled, }: ButtonProps) => {
    return (
        <Button
            type={type}
            color='secondary'
            onPress={handleClick}
            className=''
            isLoading={isLoading}
            disabled={disabled}
            size='md' radius='full' variant='shadow'
        >
            {children}
        </Button>
    )
}

export default ButtonComponent;

