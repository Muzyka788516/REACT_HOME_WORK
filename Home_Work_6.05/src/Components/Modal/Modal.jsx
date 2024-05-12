import { users } from "../../config/users";
import cls from "../Modal/Modal.module.css";
import CustomButton from "../UI/CustomButton";
import ModalText from "./ModalText";

function Modal(props) {
  return (
    <div className={cls.modal}>
      <div className={cls.modal_content}>
        <h3>Fetch posts</h3>
        {users.map((item, title) => (
          <ModalText
            idValue={item.id}
            nameValue={item.userName}
            emailValue={item.email}
            telefinValue={item.telefon}
            key={title}
          />
        ))}
        <CustomButton text="close" onHandleClick={props.onHandleClick} />
      </div>
    </div>
  );
}
export default Modal;
