import "./styles.css";

const Button = ({
  text,
  type,
  onClick,
}: {
  text: string;
  type: "button" | "submit" | "reset";
  onClick: (e: any) => void;
}) => {
  return (
    <button className="button" type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
