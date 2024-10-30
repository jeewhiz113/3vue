const TextBlock = ({ text, className }) => {
  return (
    <div className={`p-3 border rounded bg-light ${className}`}>{text}</div>
  );
};

export default TextBlock;
