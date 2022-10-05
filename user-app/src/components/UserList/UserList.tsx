import { User } from "../../types";
import Card from "../UI/Card/Card";
import UserListItem from "../UserListItem/UserListItem";

type Props = {
  users: User[];
};

const UserList = ({ users }: Props) => {
  return (
    <Card>
      <ul>
        {users.map((user) => (
          <UserListItem key={user.id} {...user} />
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
