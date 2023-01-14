import { UserContext } from "./reactContext";
export const ModalWindowContent = () => {
  return (
    <UserContext.Consumer>
      {(value) => {
        return (
          <div>
            <h5>{value.text}</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
              perspiciatis quidem molestias tenetur nesciunt at?
            </p>
          </div>
        );
      }}
    </UserContext.Consumer>
  );
};
