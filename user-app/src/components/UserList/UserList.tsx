import { User } from "../../types";
import UserListItem from "../UserListItem/UserListItem";
import styles from "./UserList.module.scss";

type Props = {
  users: User[];
};

const UserList = ({ users }: Props) => {
  return (
    <div className={styles.card}>
      <ul>
        {users.map((user) => (
          <UserListItem key={user.id} {...user} />
        ))}
      </ul>
    </div>
  );
};

export default UserList;
