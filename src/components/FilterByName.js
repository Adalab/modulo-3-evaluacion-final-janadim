const FilterByName = (props) => {
  return (
    <form>
      <label htmlFor="name">Search:</label>
      <input type="text" name="name" id="name" onChange={props.handleFilter} />
    </form>
  );
};

export default FilterByName;
