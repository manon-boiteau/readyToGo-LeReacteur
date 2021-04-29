const Buttons = ({ switchy, setSwitch }) => {
  return (
    <div>
      <button
        onClick={() => {
          setSwitch(true);
        }}
        style={{
          backgroundImage: switchy
            ? "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)"
            : "linear-gradient(62deg, white 0%, white 100%)",
        }}
      >
        on
      </button>
      <button
        onClick={() => {
          setSwitch(false);
        }}
        style={{
          backgroundImage: !switchy
            ? "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)"
            : "linear-gradient(62deg, white 0%, white 100%)",
        }}
      >
        off
      </button>
    </div>
  );
};

export default Buttons;
