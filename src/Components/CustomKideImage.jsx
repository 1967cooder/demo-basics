const CustomKideImage = ({ image }) => {
  const iconPattern = `data:image/svg+xml,${encodeURIComponent(
    '<svg width="48" height="48" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="rgba(255,255,255,0.4)" transform="translate(12,12)"/></svg>'
  )}`;

  const styles = {
    container: {
      display: "flex",
      width: "100%",
      height: "100%",
      minHeight: "400px",
      position: "relative",
    },
    blankSpace: {
      backgroundColor: "black",
      width: "40%",
      height: "100%",
    },
    iconCanvas: {
      backgroundColor: "teal",
      width: "40%",
      height: "100%",
      backgroundImage: `url("${iconPattern}"), url("${iconPattern}")`,
      backgroundRepeat: "repeat, repeat",
      backgroundSize: "48px 48px",
      backgroundPosition: "0 0, 24px 24px", // вторият слой е изместен диа
    },
    image: {
      position: "absolute",
      width: "300px",
      height: "auto",
      objectFit: "contain",
      top: "10%",
      left: "40%",
    },
  };

  return (
    <div className="container" style={styles.container}>
      <div style={styles.blankSpace}></div>
      <img src={image} alt="Hands typing on laptop" style={styles.image} />
      <div className="icon-canvas" style={styles.iconCanvas}></div>
    </div>
  );
};

export default CustomKideImage;
