import s from "./Contact.module.css";
import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <li className={s.listItem}>
        <div className={s.wraper}>
          <p className={s.name}>
            <FaUser className={s.iconUser} />
            {name}
          </p>
          <p className={s.name}>
            <FaPhoneAlt className={s.iconUser} />
            {number}
          </p>
        </div>

        <button type="button" className={s.deleteButton} onClick={handleDelete}>
          Delete
        </button>
      </li>
    </>
  );
};

export default Contact;
