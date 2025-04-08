import Nav from "../../components/Nav/Nav";
import Modal from "react-modal";
import { useState, useEffect } from "react";
import LogOut from "../LogOut/LogOut";
import "./LayOut.scss";

export default function LayOut({ children }) {
  // modal state
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    Modal.setAppElement("#root");
  }, []);

  return (
    <div className="home-wrapper">
      <Nav openModal={openModal} />
      
      {/*all other elements will go inside content-wrapper*/}
      <div className="content-wrapper">{children}</div>

      {/*use react modal component */}
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="LogOut Modal"
        className="logout-modal"
        overlayClassName="logout-overlay"
      >
        <LogOut closeModal={closeModal} />
      </Modal>
    </div>
  );
}
