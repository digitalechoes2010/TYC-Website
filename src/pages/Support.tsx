import React, { Component } from "react";
import ReactPlayer from "react-player";
import { Col, Container, Row } from "reactstrap";
import FAQAccordion from "../components/CustomComponents/Support-FAQAccordion/FAQAccordion";
import oldIPhone from "../assets/Images/FAQ-oldIPhone.png";
import TYCPosition from "../assets/Images/FAQ-TYCPosition.png";
import "./styles/Support.css";
import { Link } from "react-router-dom";
import { FaArrowAltCircleRight } from "react-icons/fa";
export default class Support extends Component {
  render() {
    return (
      <Container className="Support" fluid>
        <Row>
          <Col xs={12} className="Support-Header">
            <h2>SEARCHING FOR HELP?</h2>
            <p>Sign Up for texts and support:</p>
            <p>
              Text '<span>TYC</span>' to <span>59916</span>
            </p>
            <p>Email us: support@tyc.co</p>
            <p>DM us on Instagram:@tyc </p>
          </Col>
        </Row>
        <Row className="Support-TutorialSection">
          <Col className="Support-VideoTutorial" md={3}>
            {" "}
            <ReactPlayer
              width="100%"
              height="70%"
              url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            />
            <p>How to activate your Tyc</p>
          </Col>
          <Col className="Support-VideoTutorial" md={3}>
            {" "}
            <ReactPlayer
              width="100%"
              height="70%"
              url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            />
            <p>How to pop an iPhone</p>
          </Col>
          <Col className="Support-VideoTutorial" md={3}>
            {" "}
            <ReactPlayer
              width="100%"
              height="70%"
              url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            />
            <p>How to tap an Android</p>
          </Col>
          <Col className="Support-VideoTutorial" md={3}>
            {" "}
            <ReactPlayer
              width="100%"
              height="70%"
              url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            />{" "}
            <p>Tyc Pro</p>
          </Col>
        </Row>
        <Row className="Support-FAQ">
          <Col xs={12}>
            <FAQAccordion
              title="Troubleshooting TYC"
              CardBody={
                <>
                  <FAQAccordion
                    className="Support-innerAccordion"
                    CardClassName="Support-innerAccordion__Card"
                    CardBodyClassName="Support-innerAccordion__CardBody"
                    title="Not working on iPhone"
                    CardBody={
                      <>
                        <ol>
                          <li>
                            Make sure their phone works with TYC: Compatible
                            Devices The phone model you have does not matter
                            when sharing!
                          </li>
                          <li>
                            Make sure to touch your TYC to the very top of the
                            back of their phone.On iPhones, the sweet spot for
                            reading a TYC is on the very top of the back of the
                            device. See video below.
                          </li>
                          <li>
                            A TYC CANNOT be read when:
                            <ul>
                              <li>their phone is in airplane mode</li>
                              <li>their device flashlight is on</li>
                              <li>their phone screen is off</li>
                              <li>their camera is open</li>
                            </ul>
                          </li>
                          <li>
                            Watch the video below to see the best technique for
                            tapping to compatible iPhones!
                          </li>
                        </ol>
                        <ReactPlayer
                          width="100%"
                          height="500px"
                          url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                        />
                      </>
                    }
                  />
                  <FAQAccordion
                    className="Support-innerAccordion"
                    CardClassName="Support-innerAccordion__Card"
                    CardBodyClassName="Support-innerAccordion__CardBody"
                    title="Not working on Android"
                    CardBody={
                      <>
                        <ol>
                          <li>
                            Make sure their phone works with TYC: Compatible
                            Devices
                          </li>
                          The phone model you have does not matter when sharing!
                          <li>
                            Make sure to touch your TYC to the very center of
                            the back of their phone.
                          </li>
                          For Androids, the sweet spot for reading a Popl is in
                          the center of the back of the device.
                          <li>
                            Make sure NFC is turned on in their phone settings
                          </li>
                          <li>
                            Watch the video below to see the best technique for
                            tapping to compatible iPhones!
                          </li>
                          If their phone is on the compatible devices list and
                          is still not reading your TYC, go to their phone
                          settings and search for NFC. Make sure that "NFC" is
                          turned on!
                        </ol>
                      </>
                    }
                  />
                  <FAQAccordion
                    className="Support-innerAccordion"
                    CardClassName="Support-innerAccordion__Card"
                    CardBodyClassName="Support-innerAccordion__CardBody"
                    title="How to tap your info to an older iPhone (7,8,X)"
                    CardBody={
                      <>
                        <p>
                          To tap an iPhone 7, iPhone 8or iPhone X, you must use
                          the NFC reader in their control center! See the image
                          below for how to activate this:
                        </p>
                        <img src={oldIPhone} />
                      </>
                    }
                  />
                  <FAQAccordion
                    className="Support-innerAccordion"
                    CardClassName="Support-innerAccordion__Card"
                    CardBodyClassName="Support-innerAccordion__CardBody"
                    title="My TYC taps people to the TYC Profile, not my profile"
                    CardBody={
                      <>
                        <p>
                          If your TYC pops to the TYC profile that means you
                          have not activated it to your profile yet! All TYCs
                          come preloaded to our profile.
                        </p>
                        <p>
                          To fix this, open your TYC app and tap "Activate" in
                          the main menu. Pick which TYC product you would like
                          to activate, then follow all the steps until a success
                          message appears!
                        </p>
                        <p>
                          Please send an email to{" "}
                          <span>info@tapyourchip.com</span>s if you have further
                          questions!
                        </p>
                      </>
                    }
                  />
                  <FAQAccordion
                    className="Support-innerAccordion"
                    CardClassName="Support-innerAccordion__Card"
                    CardBodyClassName="Support-innerAccordion__CardBody"
                    title="My TYC is sending me notifications constantly"
                    CardBody={
                      <>
                        <p>
                          Use the diagram below as a guide to where you should
                          place your TYC to avoid constant notifications!
                        </p>
                        <img src={TYCPosition} />
                      </>
                    }
                  />
                  <FAQAccordion
                    className="Support-innerAccordion"
                    CardClassName="Support-innerAccordion__Card"
                    CardBodyClassName="Support-innerAccordion__CardBody"
                    title="Where on my phone should I place my TYC?"
                    CardBody={
                      <>
                        <img src={TYCPosition} />
                      </>
                    }
                  />
                  <FAQAccordion
                    title="Contact Us"
                    className="Support-innerAccordion"
                    CardClassName="Support-innerAccordion__Card"
                    CardBodyClassName="Support-innerAccordion__CardBody"
                    CardBody={
                      <>
                        <p>
                          If your question is not answered on this FAQ, please
                          send an email to <span>info@tapyourchip.com</span>!
                        </p>
                      </>
                    }
                  />
                </>
              }
            />
          </Col>
          <Col xs={12}>
            <FAQAccordion
              title="General"
              CardBody={
                <>
                  <FAQAccordion
                    className="Support-innerAccordion"
                    CardClassName="Support-innerAccordion__Card"
                    CardBodyClassName="Support-innerAccordion__CardBody"
                    title="What is TYC?"
                    CardBody={
                      <>
                        <p>
                          TYC is a small tag placed on the back of your phone
                          that lets you instantly share your social media,
                          music, payment platforms and contact info just by
                          tapping your phone to a{" "}
                          <Link to="/Support/CompatibleDevices">
                            compatible smartphone!
                          </Link>
                        </p>
                        <p>
                          The other person doesn't need an app or a TYC to
                          receive your info
                        </p>
                        <p>
                          The possibilities for TYC are limitless. TYC can be
                          used by anyone in any industry to instantly share a
                          customized, all in one social profile to people they
                          meet.
                        </p>
                        <p>
                          Don't want to share your whole profile, use our new
                          patented TYC Direct feature to instantly tap someone
                          to your Instagram, LinkedIn, contact card, Snapchat,
                          etc.
                        </p>
                        <p>
                          Whether you are a student, artist, entrepreneur,
                          model, influencer, athlete or photographer, TYC can
                          help improve your networking and will leave a lasting
                          impression on everyone you meet.
                        </p>
                      </>
                    }
                  />
                  <FAQAccordion
                    className="Support-innerAccordion"
                    CardClassName="Support-innerAccordion__Card"
                    CardBodyClassName="Support-innerAccordion__CardBody"
                    title="Where do I put my TYC?"
                    CardBody={
                      <>
                        <img src={TYCPosition} />
                      </>
                    }
                  />
                  <FAQAccordion
                    className="Support-innerAccordion"
                    CardClassName="Support-innerAccordion__Card"
                    CardBodyClassName="Support-innerAccordion__CardBody"
                    title="Does the other person need a TYC or app to receive my info?"
                    CardBody={
                      <>
                        <p>
                          No! The other person does not need a TYC or app to
                          receive your TYC profile. That's the beauty of TYC
                        </p>
                        <p>
                          If their phone is on this list of{" "}
                          <Link
                            to="/Support/CompatibleDevices"
                            className="Support-Link"
                          >
                            compatible Devices
                          </Link>
                          you can tap to their phone. If it is not, just use
                          your TYC QR code on your profile to share!
                        </p>
                      </>
                    }
                  />
                  <FAQAccordion
                    className="Support-innerAccordion"
                    CardClassName="Support-innerAccordion__Card"
                    CardBodyClassName="Support-innerAccordion__CardBody"
                    title="Do I need to pay a monthly fee to use TYC?"
                    CardBody={
                      <>
                        <p>
                          TYC does NOT require a monthly fee once purchased!
                        </p>
                      </>
                    }
                  />
                  <FAQAccordion
                    className="Support-innerAccordion"
                    CardClassName="Support-innerAccordion__Card"
                    CardBodyClassName="Support-innerAccordion__CardBody"
                    title="Does TYC need to be placed on my phone?"
                    CardBody={
                      <>
                        <p>
                          No! TYC can be placed anywhere you want. You can put a
                          TYC:
                        </p>
                        <ul>
                          <li>on your laptop</li>
                          <li>in your car</li>
                          <li>on a restaurant table</li>
                          <li>in your office</li>
                          <li>in an open house</li>
                          <li>the possibilities are endless!</li>
                        </ul>
                        <p>
                          The TYC doesn't communicate to the phone it is on, it
                          communicates to the phone it is sharing info to.
                        </p>
                      </>
                    }
                  />
                  <FAQAccordion
                    className="Support-innerAccordion"
                    CardClassName="Support-innerAccordion__Card"
                    CardBodyClassName="Support-innerAccordion__CardBody"
                    title="Can I have multiple TYCs linked to 1 TYC profile?"
                    CardBody={
                      <>
                        <p>
                          Yes you can! With the TYC app, you can activate as
                          many TYCs as you want with the same account. Just log
                          into the account you want to activate your TYC with
                          and tap "Activate TYC"!
                        </p>
                        <p>
                          We've had users put Popls on their laptop, in their
                          cars, in their offices, etc.
                        </p>
                      </>
                    }
                  />
                  <FAQAccordion
                    className="Support-innerAccordion"
                    CardClassName="Support-innerAccordion__Card"
                    CardBodyClassName="Support-innerAccordion__CardBody"
                    title="Can I order custom TYCs?"
                    CardBody={
                      <>
                        <p>
                          Absolutely! Email us at{" "}
                          <span>info@tapyourchip.com</span> to start a
                          conversation with us!
                        </p>
                      </>
                    }
                  />
                  <FAQAccordion
                    className="Support-innerAccordion"
                    CardClassName="Support-innerAccordion__Card"
                    CardBodyClassName="Support-innerAccordion__CardBody"
                    title="What cases can TYC stick to?"
                    CardBody={
                      <>
                        <p>
                          TYC sticks nicely to all case materials except leather
                          and some silicone. For these types of cases, we
                          recommend either sticking the TYC underneath your case
                          (yes TYC works through most cases!).
                        </p>

                        <p>
                          For all other cases including placing directly on the
                          phone, TYC is good to go!
                        </p>
                      </>
                    }
                  />
                  <FAQAccordion
                    className="Support-innerAccordion"
                    CardClassName="Support-innerAccordion__Card"
                    CardBodyClassName="Support-innerAccordion__CardBody"
                    title="Press Inquiries"
                    CardBody={
                      <>
                        <p>
                          For all press inquiries, please contact
                          <span>info@tapyourchip.com</span>
                        </p>
                      </>
                    }
                  />
                </>
              }
            />
          </Col>
          <Col xs={12}>
            <FAQAccordion
              title="Compatibility"
              CardBody={
                <>
                  {" "}
                  <FAQAccordion
                    className="Support-innerAccordion"
                    CardClassName="Support-innerAccordion__Card"
                    CardBodyClassName="Support-innerAccordion__CardBody"
                    title="Compatible Phones"
                    CardBody={
                      <>
                        <Link
                          to="/Support/CompatibleDevices"
                          className="Support-Link"
                        >
                          Click here for TYC compatible phones!
                        </Link>
                      </>
                    }
                  />
                  <FAQAccordion
                    className="Support-innerAccordion"
                    CardClassName="Support-innerAccordion__Card"
                    CardBodyClassName="Support-innerAccordion__CardBody"
                    title="How to tap your info to an older iPhone (7,8,X)"
                    CardBody={
                      <>
                        <p>
                          To pop to an iPhone 7, iPhone 8or iPhone X, you must
                          use the NFC reader in their control center! See the
                          image below for how to activate this:
                        </p>
                        <img src={oldIPhone} />
                      </>
                    }
                  />
                  <FAQAccordion
                    className="Support-innerAccordion"
                    CardClassName="Support-innerAccordion__Card"
                    CardBodyClassName="Support-innerAccordion__CardBody"
                    title="Will TYC work under phone cases?"
                    CardBody={
                      <>
                        <p>
                          Yes! TYCs will work through 99.9% of phone cases,
                          including ones that hold credit cards. The only
                          exception would be if your case has a layer of metal.:
                        </p>
                      </>
                    }
                  />
                  <FAQAccordion
                    className="Support-innerAccordion"
                    CardClassName="Support-innerAccordion__Card"
                    CardBodyClassName="Support-innerAccordion__CardBody"
                    title="Which smartphones can I tap my TYC profile to?"
                    CardBody={
                      <>
                        <p>
                          For iPhones, the iPhone XR, XS, XS Max, 11, 11 Pro, 11
                          Pro Max, SE and all future iPhones are compatible with
                          the pop feature of TYC.
                        </p>
                        <p>
                          When reading from the TYC app, iPhone 7 and newer are
                          compatible with TYC! Just use the "Read a TYC"
                          function in the main menu.
                        </p>
                        <p>
                          Virtually all Android Smartphones are compatible with
                          the tap feature of TYC. However, please visit our
                          <Link
                            to="/Support/CompatibleDevices"
                            className="Support-Link"
                          >
                            compatible devices page
                          </Link>{" "}
                          to ensure that your smartphone is on the list.
                        </p>
                      </>
                    }
                  />
                  <FAQAccordion
                    className="Support-innerAccordion"
                    CardClassName="Support-innerAccordion__Card"
                    CardBodyClassName="Support-innerAccordion__CardBody"
                    title="How do I share with non-compatible phones?"
                    CardBody={
                      <>
                        <p>
                          iPhones as old as the iPhone 5S and almost all
                          Androids can use their camera to scan your TYC QR
                          code. Your TYC QR code can be found by tapping the QR
                          code button on the top right of your profile on
                          tapyourchip.com. You can even add your TYC Card to
                          your Apple Wallet for easy access!
                        </p>
                        <p>
                          You can also share your profile via text, airdrop,
                          email or any social network by sharing the link to
                          your TYC profile.
                        </p>
                      </>
                    }
                  />
                  <FAQAccordion
                    className="Support-innerAccordion"
                    CardClassName="Support-innerAccordion__Card"
                    CardBodyClassName="Support-innerAccordion__CardBody"
                    title="Will TYC interfer with my wireless charger?"
                    CardBody={
                      <>
                        <p>
                          No, TYCs have no effect on your phone's wireless
                          charging capabilities and will not interfere.
                        </p>
                      </>
                    }
                  />
                  <FAQAccordion
                    className="Support-innerAccordion"
                    CardClassName="Support-innerAccordion__Card"
                    CardBodyClassName="Support-innerAccordion__CardBody"
                    title="How to turn NFC on for an Android?"
                    CardBody={
                      <>
                        <p>
                          Some Android phones have NFC turned off by default!
                        </p>
                        <p>
                          If your Android is not reading TYC, go to your phone
                          settings and search for "NFC". Then make sure you have
                          this turned on!
                        </p>
                      </>
                    }
                  />
                </>
              }
            />
          </Col>
          <Col xs={12}>
            <FAQAccordion
              title="Shipping"
              CardBody={
                <>
                  <FAQAccordion
                    className="Support-innerAccordion"
                    CardClassName="Support-innerAccordion__Card"
                    CardBodyClassName="Support-innerAccordion__CardBody"
                    title="How long will it take to receive my TYC once purchased?"
                    CardBody={
                      <>
                        <p>
                          Shipping time within the USA is typically 3-5 business
                          days. We are currently experiencing delays due to
                          COVID-19 so shipping might take up to 2 weeks. We
                          thank you for your patience.
                        </p>
                        <p>
                          Shipping time outside of the USA is typically 7-21
                          business days.
                        </p>
                        <p>
                          All orders come with tracking! Please contact us at
                          <span>info@tapyourchip.com</span> if you haven't
                          received your order.
                        </p>
                      </>
                    }
                  />
                  <FAQAccordion
                    className="Support-innerAccordion"
                    CardClassName="Support-innerAccordion__Card"
                    CardBodyClassName="Support-innerAccordion__CardBody"
                    title="Do you ship worldwide?"
                    CardBody={
                      <>
                        <p>Yes we do!</p>
                      </>
                    }
                  />
                  <FAQAccordion
                    className="Support-innerAccordion"
                    CardClassName="Support-innerAccordion__Card"
                    CardBodyClassName="Support-innerAccordion__CardBody"
                    title="How can I track my order?"
                    CardBody={
                      <>
                        <p>
                          Once your TYC is on its way, you will receive an email
                          or text message with a link to your tracking
                          information!
                        </p>
                        <p>
                          If you don't receive this email, please email us at
                          <span>info@tapyourchip.com</span>
                        </p>
                      </>
                    }
                  />
                  <FAQAccordion
                    className="Support-innerAccordion"
                    CardClassName="Support-innerAccordion__Card"
                    CardBodyClassName="Support-innerAccordion__CardBody"
                    title="Shipping Info"
                    CardBody={
                      <>
                        <p>
                          Here is our{" "}
                          <Link
                            to="/Support/RefundPolicy"
                            className="Support-Link"
                          >
                            refund policy
                          </Link>{" "}
                          and
                          <Link to="/Terms&Conditions" className="Support-Link">
                            {" "}
                            terms of service
                          </Link>
                        </p>
                        <p>We currently do not accept returns.</p>
                      </>
                    }
                  />
                  <FAQAccordion
                    className="Support-innerAccordion"
                    CardClassName="Support-innerAccordion__Card"
                    CardBodyClassName="Support-innerAccordion__CardBody"
                    title="TYC not delivered?"
                    CardBody={
                      <>
                        <p>
                          If you have not received your TYCs, please try the
                          steps below:
                        </p>
                        <ol>
                          <li>
                            Check your mailbox! Many times your TYC is waiting
                            there.
                          </li>
                          <li>
                            Contact your local post office or carrier and
                            reference the tracking info.
                          </li>
                          <li>
                            There are times when your package is marked
                            delivered but doesn't arrive for another 24-48
                            hours. If your package has not arrived within this
                            time frame, please send an email to
                            <span>info@tapyourchip.com</span>
                          </li>
                        </ol>
                      </>
                    }
                  />
                </>
              }
            />
          </Col>
          <Col xs={12}>
            <FAQAccordion
              title="TYC App Help"
              CardBody={
                <>
                  <FAQAccordion
                    className="Support-innerAccordion"
                    CardClassName="Support-innerAccordion__Card"
                    CardBodyClassName="Support-innerAccordion__CardBody"
                    title="How do I get the TYC App?"
                    CardBody={
                      <>
                        <p>Right here </p>
                        <FaArrowAltCircleRight />
                        <Link
                          to="/Support/RefundPolicy"
                          className="Support-Link"
                        >
                          TYC App
                        </Link>
                      </>
                    }
                  />
                  <FAQAccordion
                    className="Support-innerAccordion"
                    CardClassName="Support-innerAccordion__Card"
                    CardBodyClassName="Support-innerAccordion__CardBody"
                    title={`I'm getting "This TYC has already been activated" when trying to activate my TYC`}
                    CardBody={
                      <>
                        <p>
                          If you are getting this message in the TYC App, that
                          means you have a TYC that is already activated!
                        </p>
                        <p>
                          Please follow the steps on the back of the TYC
                          notecard you received, no need to activate using the
                          app. Once you have followed those steps, your TYC is
                          good to go!
                        </p>
                      </>
                    }
                  />
                  <FAQAccordion
                    className="Support-innerAccordion"
                    CardClassName="Support-innerAccordion__Card"
                    CardBodyClassName="Support-innerAccordion__CardBody"
                    title="What phones can I tap to if they have the TYC App"
                    CardBody={
                      <>
                        <p>
                          With the TYC app downloaded, iPhone 7 and newer can
                          receive your profile in app! This functionality is
                          available with the "Read a TYC" option from in the TYC
                          app main menu.
                        </p>
                      </>
                    }
                  />
                  <FAQAccordion
                    className="Support-innerAccordion"
                    CardClassName="Support-innerAccordion__Card"
                    CardBodyClassName="Support-innerAccordion__CardBody"
                    title="Can I tap someone with just TYC app and no TYC?"
                    CardBody={
                      <>
                        <p>
                          Yes you can! Our app gives you a personal QR code that
                          can be used to share info just like a TYC does. Our
                          products + the app provide the full experience, but
                          you can still share with just the app!
                        </p>
                      </>
                    }
                  />
                  <FAQAccordion
                    className="Support-innerAccordion"
                    CardClassName="Support-innerAccordion__Card"
                    CardBodyClassName="Support-innerAccordion__CardBody"
                    title="How can I change my profile URL?"
                    CardBody={
                      <>
                        <p>
                          If you'd like to change your profile URL, please send
                          an email to <span>info@tapyourchip.com</span> and we
                          will do our best to get you the URL you want!
                        </p>
                      </>
                    }
                  />
                  <FAQAccordion
                    className="Support-innerAccordion"
                    CardClassName="Support-innerAccordion__Card"
                    CardBodyClassName="Support-innerAccordion__CardBody"
                    title="What is my TYC Contacts?"
                    CardBody={
                      <>
                        <p>
                          When someone pops or connects with you, the new person
                          gets added to your TYC Contacts automatically. This
                          page saves the TYC profile of everyone you meet so you
                          can make sure to never lose another important
                          connection.
                        </p>
                        <p>
                          You can also export this list of contacts to
                          Salesforce, HubSpot and a normal CSV for exporting
                          into the CRM of your choice
                        </p>
                      </>
                    }
                  />
                </>
              }
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
