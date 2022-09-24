import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Col, Container, Row } from "reactstrap";
import "./styles/CompatibleDevices.css";

export default class TermsConditions extends Component {
  render() {
    return (
      <Container fluid className="CompatibleDevices">
        <Helmet>
          <title>TYC - Compatible Devices</title>
        </Helmet>
        <Row>
          <Col xs={12}>
            <h1>Compatible Devices</h1>
            <p className="CompatibleDevices-text">
              <span>MUST READ:</span> Anyone can have a TYC on their phone, no
              matter what phone! So even if you don't have a phone on this list,
              you can still activate and use your TYC!
            </p>
            <p className="CompatibleDevices-text">
              <span>Note:</span> Some Androids are compatible but have NFC
              turned off in phone settings!
            </p>
            <p className="CompatibleDevices-Title">iPhones:</p>
            <p className="CompatibleDevices-text">
              <ul>
                <li>
                  iPhone 7 (only with iOS 14 NFC widget in control center){" "}
                </li>
                <li>
                  iPhone 8 (only with iOS 14 NFC widget in control center){" "}
                </li>
                <li>
                  iPhone X (only with iOS 14 NFC widget in control center){" "}
                </li>
                <li>iPhone XR </li>
                <li>iPhone XS</li>
                <li>iPhone XS Max </li>
                <li>iPhone 11 iPhone 11 Pro</li>
                <li>iPhone 11 Pro Max </li>
                <li>iPhone 12</li>
                <li>iPhone 12 Pro </li>
                <li>iPhone 12 Pro Max </li>
                <li>iPhone SE (2nd Generation)</li>
                <li>
                  <span>all future iPhones</span>
                </li>
              </ul>
            </p>
            <p className="CompatibleDevices-Title">Pixels: </p>
            <p className="CompatibleDevices-text">
              <ul>
                <li>Pixel </li>
                <li>Pixel XL </li>
                <li>Pixel 2 </li>
                <li>Pixel 2XL </li>
                <li>Pixel 3 </li>
                <li>Pixel 3XL </li>
                <li>Pixel 3A</li>
                <li>Pixel 3aXL </li>
                <li>Pixel 4 </li>
                <li>
                  <span>all future Pixels</span>
                </li>
              </ul>
            </p>
            <p className="CompatibleDevices-Title">Galaxy: </p>
            <p className="CompatibleDevices-text">
              <ul>
                <li>SIII</li>
                <li>S4</li>
                <li>S5</li>
                <li>S6</li>
                <li>S6 Edge</li>
                <li>S6 Edge+</li>
                <li>S7</li>
                <li>S7Edge</li>
                <li>S8</li>
                <li>S8+</li>
                <li>S9</li>
                <li>S9+</li>
                <li>S10</li>
                <li>S10 5G</li>
                <li>S10+</li>
                <li>S20</li>
                <li>S20+</li>
                <li>A20</li>
                <li>A20e</li>
                <li>A30</li>
                <li>A50</li>
                <li>A51</li>
                <li>Galaxy Fold</li>
                <li>Galaxy Fold 2</li>
                <li>
                  <span>all future Galaxies</span>
                </li>
              </ul>
            </p>
            <p className="CompatibleDevices-Title">Samsung: </p>
            <p className="CompatibleDevices-text">
              <ul>
                <li>Note 8</li>
                <li>Note 9</li>
                <li>Note 10</li>
                <li>Note 10+</li>
                <li>Note 20</li>
                <li>Note 20 Ultra</li>
                <li>Note 20 Ultra Plus</li>
                <li>
                  <span>all future Samsungs</span>
                </li>
              </ul>
            </p>
            <p className="CompatibleDevices-Title">HTC: </p>
            <p className="CompatibleDevices-text">
              <ul>
                <li>One M9</li>
                <li>Desire 10 Pro</li>
                <li>Exodus 1</li>
                <li>U11/Life/+</li>
                <li>Desire 12/12+</li>
                <li>U11 Eyes</li>
                <li>U12 Life</li>
                <li>U12+</li>
                <li>U19e</li>
                <li>19+</li>
                <li>
                  <span>all future HTC phones</span>
                </li>
              </ul>
            </p>
            <p className="CompatibleDevices-Title">Huawei: </p>
            <p className="CompatibleDevices-text">
              <ul>
                <li>P10 </li>
                <li>P10 Plus </li>
                <li>P10 Lite </li>
                <li>P20 </li>
                <li>P20 Pro </li>
                <li>P20 Lite </li>
                <li>P30 </li>
                <li>P30 Pro </li>
                <li>P30 Lite </li>
                <li>
                  <span>all future Huawei models</span>{" "}
                </li>
              </ul>
            </p>
            <p className="CompatibleDevices-Title">LG: </p>
            <p className="CompatibleDevices-text">
              <ul>
                <li>G3</li>
                <li>Nexus 5X</li>
                <li>V10</li>
                <li>G4</li>
                <li>K10</li>
                <li>V20</li>
                <li>G5</li>
                <li>G6</li>
                <li>V30</li>
                <li>V35 ThinQ</li>
                <li>Q Stylus</li>
                <li>Q Stylo 4</li>
                <li>Stylo 5</li>
                <li>V40 ThinQ</li>
                <li>V50 ThinQ 5G</li>
                <li>Q8</li>
                <li>Q7</li>
                <li>G7 ThinQ</li>
                <li>G8</li>
                <li>G8s ThinQ</li>
                <li>Q9</li>
                <li>One</li>
                <li>
                  <span>all future LG phones</span>
                </li>
              </ul>
            </p>
            <p className="CompatibleDevices-Title">Xiaomi: </p>
            <p className="CompatibleDevices-text">
              <ul>
                <li>Mi Mix</li>
                <li>Mi Mix2</li>
                <li>Mi Mix 2S</li>
                <li>Mi Mix 3</li>
                <li>Mi5</li>
                <li>Mi5s</li>
                <li>Mi5 Plus</li>
                <li>Mi6/X</li>
                <li>Mi6</li>
                <li>Mi8</li>
                <li>Mi8 Lite</li>
                <li>Mi8 Pro</li>
                <li>Mi9</li>
                <li>Mi9 SE</li>
                <li>
                  <span>all future Xiaomi phones</span>
                </li>
              </ul>
            </p>
            <p className="CompatibleDevices-Title">Nokia: </p>
            <p className="CompatibleDevices-text">
              <ul>
                <li>3 </li>
                <li>5 </li>
                <li>6 </li>
                <li>8 </li>
                <li>8.1 </li>
                <li>6.1 </li>
                <li>8 Sirocco </li>
                <li>7 Plus </li>
                <li>5.1 </li>
                <li>9 PureView </li>
                <li>
                  <span>all future Nokias</span>
                </li>
              </ul>
            </p>
            <p className="CompatibleDevices-Title">OnePlus: </p>
            <p className="CompatibleDevices-text">
              One, 3, 3T, 5, 5T, 6, 6T, 7, 7 Pro, 7 Pro 5G,{" "}
              <span>all future OnePlus phones</span>
            </p>
            <p className="CompatibleDevices-Title">Motorolla: </p>
            <p className="CompatibleDevices-text">
              Moto P50, Moto X4, Moto Z3, Moto Z3 Play,{" "}
              <span>all future Motorolla phones</span>
            </p>
            <p className="CompatibleDevices-Title">Sony: </p>
            <p className="CompatibleDevices-text">
              Xperia XZ1/Compact, Xperia 1, 10/Plus, Xperia XA1/Ultra/Plus,
              Xperia XZ2/Compact/Premium, Xperia XA2/Ultra/Plus, Xperia XZ3,{" "}
              <span>all future Sony phones</span>
            </p>
            <p className="CompatibleDevices-Title">Essential: </p>
            <p className="CompatibleDevices-text">
              PH, PH-1, <span>all future Essential phones</span>
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}
