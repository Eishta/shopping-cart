const Checkbox = ({ name, checked, onChange, label }) => {
  return (
    <label>
      <input type="checkbox" checked={checked} onChange={onChange} />
      {label}
    </label>
  );
};
export default Checkbox;
