import imgPreloader from "../../../assets/images/icons/preloader.gif";
export const Preloader = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100vh",
        background: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={imgPreloader} alt="preloader" style={{ width: "30vmin" }} />
    </div>
  );
};
