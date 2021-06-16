const FilterByName = (props) => {
  return (
    <>
      <label htmlFor="name">Search:</label>
      <input type="text" name="name" id="name" onChange={props.handleFilter} />
    </>
  );
};

export default FilterByName;
