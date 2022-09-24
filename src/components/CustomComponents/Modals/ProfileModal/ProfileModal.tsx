import { useState } from "react";
import { IconContext } from "react-icons";
import { BsFillPlusSquareFill } from "react-icons/bs";
import {
  FaFacebookF,
  FaInstagram,
  FaLink,
  FaSnapchatGhost,
  FaTwitter,
} from "react-icons/fa";
import { MdContactPhone, MdOutlineLibraryMusic } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import ContactProfiles from "./Contact/ContactProfiles";
import MoreProfiles from "./More/MoreProfiles";
import MusicProfiles from "./Music/MusicProfiles";
import PaymentsProfiles from "./Payments/PaymentsProfiles";
import "./ProfileModal.css";
import SocialMediaProfiles from "./SocialMedia/SocialMediaProfiles";
const onSubmit = async (values) => {
  window.alert(JSON.stringify(values));
};
const ProfileModal = (props) => {
  const { className } = props;

  const [modal, setModal] = useState(false);
  const [SocialMedia, setSocialMedia] = useState(false);
  const [Contact, setContact] = useState(false);
  const [Music, setMusic] = useState(false);
  const [Payment, setPayment] = useState(false);
  const [More, setMore] = useState(false);

  const toggle = () => setModal(!modal);
  const toggleSocialMedia = () => setSocialMedia(!SocialMedia);
  const toggleContact = () => setContact(!Contact);
  const toggleMusic = () => setMusic(!Music);
  const togglePayment = () => setPayment(!Payment);
  const toggleMore = () => setMore(!More);

  return (
    <div className="ProfileModal">
      <button className="ProfileModal-AddButton" onClick={toggle}>
        <IconContext.Provider value={{ size: "100px" }}>
          <div>
            <BsFillPlusSquareFill />
          </div>
        </IconContext.Provider>
        <p className="ProfileModal-AddButton__name">Add Link</p>
      </button>

      <Modal
        isOpen={modal}
        toggle={toggle}
        className={`${className} ProfileModal-Modal`}
      >
        <ModalHeader className="ProfileModal-ModalContent" toggle={toggle}>
          Add a Profile . . .
        </ModalHeader>
        <ModalBody className="ProfileModal-ModalContent ProfileModal-ModalBody">
          <div className="ProfileModal-Modal__ButtonContainer">
            <button
              className="ProfileModal-ProfileButton ProfileModal-ProfileButton__Social"
              onClick={toggleSocialMedia}
            >
              <div className="ProfileModal-ProfileButton__SocialLogo">
                <IconContext.Provider value={{ size: "25px", color: "#fff" }}>
                  <FaFacebookF />
                </IconContext.Provider>{" "}
                <IconContext.Provider value={{ size: "25px", color: "#fff" }}>
                  <FaTwitter />
                </IconContext.Provider>{" "}
                <IconContext.Provider value={{ size: "25px", color: "#fff" }}>
                  <FaInstagram />
                </IconContext.Provider>{" "}
                <IconContext.Provider value={{ size: "25px", color: "#fff" }}>
                  <FaSnapchatGhost />
                </IconContext.Provider>
              </div>
            </button>
            <p>Social Media</p>
          </div>
          <Modal isOpen={SocialMedia} toggle={toggleSocialMedia}>
            <ModalHeader>Choose a Social Media Profile . . .</ModalHeader>
            <ModalBody className="ProfileModal-ModalBody__Groups">
              <SocialMediaProfiles type={props.type} />
            </ModalBody>
            <ModalFooter>
              <Button
                className="ProfileModal-CancelButton"
                onClick={toggleSocialMedia}
              >
                Back
              </Button>
            </ModalFooter>
          </Modal>
          <div className="ProfileModal-Modal__ButtonContainer">
            <button
              className="ProfileModal-ProfileButton ProfileModal-ProfileButton__Contact"
              onClick={toggleContact}
            >
              <IconContext.Provider value={{ size: "50px", color: "#fff" }}>
                <MdContactPhone />
              </IconContext.Provider>
            </button>{" "}
            <p>Contact</p>
          </div>
          <Modal isOpen={Contact} toggle={toggleContact}>
            <ModalHeader>Choose a Contact . . .</ModalHeader>
            <ModalBody>
              <ContactProfiles type={props.type} />
            </ModalBody>
            <ModalFooter>
              <Button
                className="ProfileModal-CancelButton"
                onClick={toggleContact}
              >
                Back
              </Button>
            </ModalFooter>
          </Modal>
          <div className="ProfileModal-Modal__ButtonContainer">
            <button
              className="ProfileModal-ProfileButton ProfileModal-ProfileButton__Music"
              onClick={toggleMusic}
            >
              {" "}
              <IconContext.Provider value={{ size: "50px", color: "#fff" }}>
                <MdOutlineLibraryMusic />
              </IconContext.Provider>
            </button>
            <p>Music</p>
          </div>
          <Modal isOpen={Music} toggle={toggleMusic}>
            <ModalHeader>Choose a Music Profile . . .</ModalHeader>
            <ModalBody>
              <MusicProfiles type={props.type} />
            </ModalBody>
            <ModalFooter>
              <Button
                className="ProfileModal-CancelButton"
                onClick={toggleMusic}
              >
                Back
              </Button>
            </ModalFooter>
          </Modal>
          <div className="ProfileModal-Modal__ButtonContainer">
            <button
              className="ProfileModal-ProfileButton ProfileModal-ProfileButton__Payment"
              onClick={togglePayment}
            >
              <IconContext.Provider value={{ size: "50px", color: "#fff" }}>
                <RiMoneyDollarCircleLine />
              </IconContext.Provider>
            </button>
            <p>Payment</p>
          </div>
          <Modal isOpen={Payment} toggle={togglePayment}>
            <ModalHeader>Choose a Payment Profile . . .</ModalHeader>
            <ModalBody>
              <PaymentsProfiles type={props.type} />
            </ModalBody>
            <ModalFooter>
              <Button
                className="ProfileModal-CancelButton"
                onClick={togglePayment}
              >
                Back
              </Button>
            </ModalFooter>
          </Modal>
          <div className="ProfileModal-Modal__ButtonContainer">
            <button
              className="ProfileModal-ProfileButton ProfileModal-ProfileButton__More"
              onClick={toggleMore}
            >
              {" "}
              <IconContext.Provider value={{ size: "50px", color: "#fff" }}>
                <FaLink />
              </IconContext.Provider>
            </button>
            <p>More</p>
          </div>
          <Modal isOpen={More} toggle={toggleMore}>
            <ModalHeader>More . . .</ModalHeader>
            <ModalBody>
              <MoreProfiles type={props.type} />
            </ModalBody>
            <ModalFooter>
              <Button
                className="ProfileModal-CancelButton"
                onClick={toggleMore}
              >
                Back
              </Button>
            </ModalFooter>
          </Modal>
        </ModalBody>
        <ModalFooter className="ProfileModal-ModalContent">
          <Button className="ProfileModal-CancelButton" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ProfileModal;
