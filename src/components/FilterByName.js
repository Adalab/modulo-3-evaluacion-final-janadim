const FilterByName = (props) => {
  const handleForm = (ev) => {
    ev.preventDefault();
  };

  return (
    <form onSubmit={handleForm}>
      <label htmlFor="name">Search:</label>
      <input
        type="text"
        value={props.filterName}
        name="name"
        id="name"
        onChange={props.handleFilter}
      />
    </form>
  );
};

export default FilterByName;
