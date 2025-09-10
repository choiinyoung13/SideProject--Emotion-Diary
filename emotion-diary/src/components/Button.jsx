import "./Button.css";

export default function Button({ text, type, onClick, disabled }) {
  return (
    <button
      className={`Button Button_${type}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
