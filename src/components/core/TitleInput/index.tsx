import "./styles.css";
const TitleInput = ({
  label,
  onChange,
}: {
  label: string;
  onChange: (e: any) => void;
}) => {
  return (
    <div className="title_input">
      <label>{label}:</label>
      <input
        className="title_input__input"
        type="text"
        placeholder={label}
        onChange={onChange}
      />
    </div>
  );
};

export default TitleInput;
