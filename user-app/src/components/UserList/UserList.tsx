import { User } from "../../types";
import styles from "./UserList.module.scss";

type Props = {
  users: User[];
};

const UserList = ({ users }: Props) => {
  return (
    <div className={styles.card}>
      <ul>
        {users.map(({ id, name, age }) => (
          <li key={id}>
            {name} ({age})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
