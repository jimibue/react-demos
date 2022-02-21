const HighlightedArray = ({ array, highlightIndex }) => {
  const renderArray = () => {
    return array.map((s, i) => (
      <span
        style={{
          padding: "20px",
          border: "1px solid",
          fontSize: "18px",
          backgroundColor: i === highlightIndex ? "green" : "#ddd",
        }}
      >
        {s}
      </span>
    ));
  };
  return <div style={{margin:'30px'}}>{renderArray()}</div>;
};
export default HighlightedArray;
