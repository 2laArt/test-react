import imgPreloader from "../../../assets/images/icons/preloader.gif";
export const Preloader = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        width: "100vw",
        height: "100vh",
        background: "#000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={imgPreloader} alt="preloader" style={{ width: "30vmin" }} />
    </div>
  );
};
