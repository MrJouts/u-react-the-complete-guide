import styles from "./UserList.module.scss";

type User = {
  id: number;
  name: string;
  age: number;
};

type Props = {
  users: User[];
};

const UserList = ({ users }: Props) => {
  return (
    <div className={styles.test}>
      {users.map(({ id, name, age }) => (
        <div key={id}>
          <span>{name}</span>
          <span>{age}</span>
        </div>
      ))}
    </div>
  );
};

export default UserList;
