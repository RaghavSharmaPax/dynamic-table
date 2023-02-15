import { useAppDispatch, useAppSelector } from "../../../store/hooks";

import "./styles.css";

import { removeData } from "../../../store/modal/reducer";
import Button from "../Button";
import { createString } from "../../../utils/TableMaker";

const Modal = () => {
  const { title, data, display } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();

  const closeModal = () => {
    dispatch(removeData());
  };

  return display ? (
    <div className="modal_container">
      <div className="modal">
        <div className="modal__header">
          <h3>{title}</h3>
          <Button text="X" type="button" onClick={closeModal} />
        </div>
        <div className="modal__data">
          {Object.keys(data).map((key, index) => (
            <p key={"modal" + key + index}>
              {key}: {JSON.stringify(createString(data[key]))}
            </p>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Modal;
