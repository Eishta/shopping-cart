const Search = ({ searchKey, setSearchKey }) => {
  return (
    <input
      className="search-field"
      value={searchKey}
      onChange={(e) => setSearchKey(e.target.value)}
    />
  );
};
export default Search;
