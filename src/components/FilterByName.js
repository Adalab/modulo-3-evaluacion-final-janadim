const FilterByName = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "name",
    });
  };
  return (
    <>
      <label htmlFor="name">Search:</label>
      <input type="text" name="name" id="name" onChange={handleChange} />
    </>
  );
};

export default FilterByName;
