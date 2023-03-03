import { FC } from "react"
import { IUser } from "../../types"
import Name from "../Name/Name"
import Status from "../Status/Status"
import Avatar from "../Avatar/Avatar"
interface IUserListProps {
    user: IUser
}
const UserList: FC<IUserListProps> = (props) => {
    return (
        <div className='flex flex-col justify-center items-center w-max'>
            <Name name={props.user.name} />
            <Status status={props.user.status} />
            <Avatar avatar={props.user.avatar}/>
        </div>

    )
}

export default UserList