function CommonButton({ text, type, style, className }) {
  return (
    <button className={`tp-btn ${type} ${className || ''}`} style={style}>
      {text}
    </button>
  );
}

export default CommonButton;