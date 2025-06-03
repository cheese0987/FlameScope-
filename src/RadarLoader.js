import "./RadarLoader.css";

const RadarLoader = () => {
  const degrees = Array.from({ length: 12 }, (_, i) => i * 30); // 0° to 330°

  return (
    <div className="radar-ui-container">
      <div className="radar-dark">
        <div className="radar-sweep"></div>

        {/* Outer degree labels */}
        
        {/* Example blips */}
        <div className="blip" style={{ top: "40%", left: "70%" }}></div>
        <div className="blip" style={{ top: "65%", left: "30%" }}></div>
      </div>
    </div>
  );
};

export default RadarLoader;
