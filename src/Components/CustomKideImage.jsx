const CustomKideImage = () => {
  const styles = {
    kidecontainer: {
      display: "flex",
      widh: "100%",
      height: "100%",
    },
    blancSpace: {
      backgroundColor: "black",
      widh: "50%",
      height: "100%",
    },
    iconCanvas: {
      backgroundColor: "teal",
      widh: "50%",
      height: "100%",
    },
  };
  return (
    <div className="container-kide" style={styles.kidecontainer}>
      <div className="blanc-spase" style={styles.blancSpace}></div>
      <div className="image-canvas"></div>
      <div className="icon-canvas" style={styles.iconCanvas}></div>
    </div>
  );
};

export default CustomKideImage;
