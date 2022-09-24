import React from "react";
import { IconContext } from "react-icons";
import { FaPaypal } from "react-icons/fa";
import { IoLogoVenmo } from "react-icons/io5";
import { SiCashapp } from "react-icons/si";
import AddLinkModal from "../../ProfileAddLinkModal/AddLink";

const PaymentsProfiles = (props) => {
  return (
    <div>
      <AddLinkModal
        buttonTitle="Paypal"
        buttonLogo={
          <IconContext.Provider value={{ size: "50px", color: "#00457C" }}>
            <FaPaypal />
          </IconContext.Provider>
        }
        image="Paypal"
        icon="cc-paypal"
        name="Paypal"
        type={props.type}
      />
      <AddLinkModal
        buttonTitle="Venmo"
        buttonLogo={
          <IconContext.Provider
            value={{
              size: "45px",
              color: "#3D95CE",
            }}
          >
            <IoLogoVenmo />
          </IconContext.Provider>
        }
        image="Venmo"
        icon="vimeo-square"
        name="Venmo"
        type={props.type}
      />
      <AddLinkModal
        buttonTitle="Cash App"
        buttonLogo={
          <IconContext.Provider
            value={{
              size: "45px",
              color: "#00C244",
            }}
          >
            <SiCashapp />
          </IconContext.Provider>
        }
        image="Cashapp"
        icon="cashapp"
        name="Cash App"
        type={props.type}
      />
    </div>
  );
};

export default PaymentsProfiles;
