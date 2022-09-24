import TYCLogo from "../assets/Images/Front IPhone X.png";
import "./styles/ConstructionPage.css";

export default function ConstructionPage() {
  return (
    <div className="Main-Container">
      {" "}
      <h1 className="Construction">Website under construction</h1>
      <div className="ltop"></div>
      <div className="lbot"></div>
      <div className="rtop"></div>
      <div className="rbot"></div>
      <div className="container">
        <div id="lside"></div>
        <div id="rside"></div>
        <div id="lwing"></div>
        <div id="rwing"></div>
      </div>
      <div className="sun">
        <img src={TYCLogo} />
      </div>
      <div className="wind">
        <div id="lw1"></div>
        <div id="lw2"></div>
        <div id="lw3"></div>
        <div id="rw1"></div>
        <div id="rw2"></div>
        <div id="rw3"></div>
        <div id="rw4"></div>
      </div>
      <h1 className="ComingSoon">Coming Soon . . .</h1>
    </div>
  );
}
