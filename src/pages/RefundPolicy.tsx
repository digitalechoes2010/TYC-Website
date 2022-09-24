import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import "./styles/RefundPolicy.css";
import { Helmet } from "react-helmet";

export default class RefundPolicy extends Component {
  render() {
    return (
      <Container fluid className="RefundPolicy">
        <Helmet>
          <title>TYC - Refund Policy</title>
        </Helmet>
        <Row>
          <Col xs={12}>
            <h1>Refund Policy</h1>
            <p className="RefundPolicy-text">
              {" "}
              This Refund Policy describes how we manage refunds.
            </p>
            <p className="RefundPolicy-Title">Returns</p>
            <p className="RefundPolicy-text">
              We do not take returns. To be eligible for a refund, we require a
              receipt or proof of purchase in the form of an order number and
              your order must have not been delivered per carrier tracking info
            </p>
            <p className="RefundPolicy-Title">Refunds (if applicable)</p>
            <p className="RefundPolicy-text">
              If your TYC is scratched or damaged, you may be eligible for a
              replacement. We offer replacements for damaged TYC with photo
              proof within 48 hours of delivery.
            </p>
            <p className="RefundPolicy-text">
              In the case that a TYC does not adhere well to a case or phone,
              you may be eligible for a replacement TYC, not a refund.
            </p>
            <p className="RefundPolicy-text">
              If you are having trouble activating your TYC or popping to
              compatible phones and you would like to request a refund or
              replacement, please contact our team{" "}
              <span>info@tapyourchip.com</span>
              Typically, all issues can be resolved with some helpful tips from
              the team!
            </p>
            <p className="RefundPolicy-text">
              If you have successfully activated your TYC and are experiencing
              issues popping to a compatible device after you’ve contacted{" "}
              <span>info@tapyourchip.com</span>, you may be eligible for a
              replacement TYC. If you have successfully activated your
              replacement TYC and are still experiencing issues popping to a
              compatible device, you may be eligible for a refund.
            </p>
            <p className="RefundPolicy-text">
              If you request a refund and our team cannot confirm the potential
              defect, you may be eligible for a partial refund on your order.
            </p>
            <p className="RefundPolicy-text">
              Once approved for a refund, we will send you an email notifying
              you that we have refunded your purchase. Your refund will then be
              processed, and a credit will automatically be applied to your
              credit card or original method of payment, within 2-4 days.
            </p>
            <p className="RefundPolicy-Title">Warranty</p>
            <p className="RefundPolicy-text">
              If your TYC is damaged or loses its adhesive within the first 30
              days of your order being marked as delivered, you are eligible for
              a free placement. If your TYC becomes damaged after 30 days of
              your order being marked as delivered, you may be eligible for a
              replacement/discount code. Please speak to a customer service
              representative at <span>info@tapyourchip.com</span> to determine
              your eligibility.
            </p>
            <p className="RefundPolicy-text">
              If your Popl loses its adhesive between 31 and 90 days of your
              order being marked as delivered, you are eligible for a 100% off
              code to purchase a replacement. Between 90 days and 6 months of
              your order being marked as delivered, you are eligible to receive
              a 70% off code to purchase a replacement. Between 6 months and 1
              year, you are eligible for 50% off a new order.
            </p>
            <p className="RefundPolicy-Title">Sale Items</p>
            <p className="RefundPolicy-text">
              Only regular priced items may be refunded (if applicable),
              unfortunately sale items cannot be refunded.
            </p>
            <p className="RefundPolicy-Title">Exchanges</p>
            <p className="RefundPolicy-text">We do not accept exchanges.</p>
            <p className="RefundPolicy-Title">Shipping</p>
            <p className="RefundPolicy-text">
              We do not accept returns, so no shipping info is required.{" "}
            </p>
            <p className="RefundPolicy-Title">Contact us</p>
            <p className="RefundPolicy-text">
              For more information about our privacy practices, if you have
              questions, or if you would like to make a complaint, please
              contact us by email at <span>info@tapyourchip.com</span>
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}
