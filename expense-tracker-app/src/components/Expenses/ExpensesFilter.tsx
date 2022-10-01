import "./ExpensesFilter.css";

type Props = {
  selectedYear: string;
  onChangeFilter: Function;
};

const ExpensesFilter = ({ selectedYear, onChangeFilter }: Props) => {
  const dropdownChangeHandler = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label htmlFor="filter-year">Filter by year</label>
        <select
          id="filter-year"
          value={selectedYear}
          onChange={dropdownChangeHandler}
        >
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
