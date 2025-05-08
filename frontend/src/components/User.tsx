import { Avatar } from "@heroui/react";
import male from './../assets/male-avatar.svg';
import female from './../assets/female-avatar.svg';

const UserComponent = ({ sex }: { sex: string }) => {
    return (
        <Avatar
            className="w-20 h-20 text-large"
            src={sex === 'male' ? male : female}
        />
    );
}

export default UserComponent;