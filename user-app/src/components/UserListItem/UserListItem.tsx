import styles from "./UserListItem.module.scss";

type Props = {
  name: string;
  age: number;
};

const UserListItem = ({ name, age }: Props): JSX.Element => {
  return (
    <li>
      {name} ({age})
    </li>
  );
};

export default UserListItem;
