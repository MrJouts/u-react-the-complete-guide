type Props = {
  name: string;
  age: number;
};

const UserListItem = ({ name, age }: Props): JSX.Element => {
  return (
    <li>
      {name} ({age} years old)
    </li>
  );
};

export default UserListItem;
