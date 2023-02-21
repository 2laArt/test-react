import { Loader } from "./Loader";
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
      <Loader size="30vmin" />
    </div>
  );
};
