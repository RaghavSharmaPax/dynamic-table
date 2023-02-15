const Checkbox = ({
  label,
  onChange,
}: {
  label: string;
  onChange: (e: any) => void;
}) => {
  return (
    <div className="checkbox">
      <input className="checkbox__input" type="checkbox" onChange={onChange} />
      <label className="checkbox__label">{label}</label>
    </div>
  );
};

export default Checkbox;
