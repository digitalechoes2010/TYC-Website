import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { Col, Container, Row, Table } from "reactstrap";
import TransactionsAccordion from "../components/CustomComponents/Transactions-Accordion/TransactionsAccordion";
import { fetchUser } from "../store/Actions/userActionCreator";
import "./styles/transactions.css";

function Transactions(props) {
  const [data, setData] = useState([]);
  const getData = () => {
    axios.get("https://tycapi.eu-gb.mybluemix.net/orders").then((response) => {
      console.log(response);
      setData(response.data.orders);
    });
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(data);
  return (
    <Container fluid className="Transactions">
      <Helmet>
        <title>TYC - User Transactions</title>
      </Helmet>{" "}
      <Row>
        <Col xs={12} className="Transactions-Header__Title">
          <h3 className="Transactions-Header__Title">USER TRANSACTIONS PAGE</h3>
        </Col>
      </Row>
      <Table className="Transactions-Table" borderless responsive>
        <thead className="Transactions-TableHeader">
          <tr>
            <th className="Transactions-TableHeader__column">Order ID</th>
            <th className="Transactions-TableHeader__column">Payment Status</th>
            <th className="Transactions-TableHeader__column">Total amount</th>
            <th className="Transactions-TableHeader__column">Status</th>
            <th className="Transactions-TableHeader__LastColumn">Date</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((i: any) => {
              console.log(i);
              if (i.userId === props.userData.id) {
                return (
                  <tr className="Transactions-TableRow">
                    <td className="Transactions-TableRow__FirstColumn">
                      {i.id}
                    </td>
                    <td className="Transactions-TableRow__Column">
                      {i.paymentStatus}
                    </td>
                    <td className="Transactions-TableRow__Column">
                      {i.totalAmount}
                    </td>
                    <td className="Transactions-TableRow__Column">
                      {i.status}
                    </td>
                    <td className="Transactions-TableRow__LastColumn">
                      {i.createdAt.slice(0, 10)}
                    </td>
                  </tr>
                );
              }
            })}
        </tbody>
      </Table>
    </Container>
  );
}
function mapStateToProps(state: any) {
  return {
    userData: state.UserReducer,
  };
}

export default connect(mapStateToProps, null)(Transactions);
