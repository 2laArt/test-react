export const Modal = ({ title, children }) => {
  return (
    <div className="modal">
      <div className="modal_container">
        <h3 className="modal_title">{title}</h3>
        {children}
      </div>
    </div>
  );
};
