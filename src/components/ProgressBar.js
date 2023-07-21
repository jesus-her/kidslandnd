const ProgressBar = (props) => {
  const { bgcolor, completed } = props;

  const containerStyles = {
    height: 20,
    backgroundColor: "#e0e0de",
    borderRadius: 50,
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: "inherit",
    textAlign: "right",
  };

  const labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${completed}%`}</span>
      </div>
      <div
        style={{
          justifyContent: "space-between",
          display: "flex",
          marginTop: "4px",
          fontWeight: "bold",
        }}
      >
        <p>10%</p>

        <p>50%</p>

        <p>100%</p>
      </div>
    </div>
  );
};

export default ProgressBar;
