import { Component } from "react";
import { Field, Form } from "react-final-form";
import { Col, Container, Row } from "reactstrap";
import countries from "../../utils/countries.json";
import "./styles/MessageForm.css";
interface IProps {}
interface IState {}
class MessageForm extends Component<IProps, IState> {
  render() {
    function sendMail(values) {
      var link =
        "mailto:info@tapyourchip.com" +
        "?subject=" +
        encodeURIComponent(values.CompanyName) +
        "&body=" +
        encodeURIComponent(`${values.Message}
        Email: ${values.Email}
        Website: ${values.Website}
        Country: ${values.Country}
        PhoneNumber: ${values.PhoneNumber}`);
      window.location.href = link;
    }
    return (
      <Container className="Form">
        <h3 className="Form-Title">JOIN OUR GROUP OF DISTRIBUTORS TODAY.</h3>
        <Form
          onSubmit={(values) => {
            console.log(values);
            sendMail(values);
          }}
          validate={(values: any) => {
            const errors: any = {};
            if (values.Email !== values.ConfirmEmail) {
              errors.Email = "Emails doesn't match please check again";
            }
            return errors;
          }}
        >
          {({ handleSubmit, submitting }) => (
            <form onSubmit={handleSubmit}>
              <Row>
                <Col md="6">
                  <Field<string> name="CompanyName" placeholder="Company Name">
                    {({ input, placeholder }) => (
                      <input
                        {...input}
                        type="text"
                        placeholder={placeholder}
                        className="Form-Input"
                      />
                    )}
                  </Field>
                </Col>

                <Col md="6">
                  <Field<string> name="Website" placeholder="Website">
                    {({ input, placeholder }) => (
                      <input
                        {...input}
                        type="text"
                        placeholder={placeholder}
                        className="Form-Input"
                      />
                    )}
                  </Field>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <Field<string> name="Country">
                    {({ input }) => (
                      <select {...input} className="Form-Input">
                        <option value="" disabled selected>
                          Country
                        </option>
                        {countries.map((c: any) => (
                          <option value={c.name}>{c.name}</option>
                        ))}
                      </select>
                    )}
                  </Field>
                </Col>

                <Col md="6">
                  <Field<number> name="PhoneNumber" placeholder="PhoneNumber">
                    {({ input, placeholder }) => (
                      <input
                        type="text"
                        {...input}
                        placeholder={placeholder}
                        className="Form-Input"
                      />
                    )}
                  </Field>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <Field<string> name="Email" placeholder="Email">
                    {({ input, meta, placeholder }) => (
                      <div>
                        <input
                          {...input}
                          type="Email"
                          placeholder={placeholder}
                          className="Form-Email"
                        />
                        {meta.error && meta.touched && (
                          <span className="Form-Email__Error">
                            {meta.error}
                          </span>
                        )}
                      </div>
                    )}
                  </Field>
                </Col>

                <Col md="6">
                  <Field<string>
                    name="ConfirmEmail"
                    placeholder="Confirm Email"
                  >
                    {({ input, meta, placeholder }) => (
                      <div>
                        <input
                          {...input}
                          type="Email"
                          placeholder={placeholder}
                          className="Form-Email"
                        />
                        {meta.error && meta.touched && (
                          <span className="Form-Email__Error">
                            {meta.error}
                          </span>
                        )}
                      </div>
                    )}
                  </Field>
                </Col>
              </Row>
              <Row>
                <Col md="12">
                  <Field<string>
                    name="Message"
                    placeholder="Write your message here"
                  >
                    {({ input, placeholder }) => (
                      <textarea
                        {...input}
                        placeholder={placeholder}
                        className="Form-Input__TextArea"
                      />
                    )}
                  </Field>
                </Col>
              </Row>
              <Row>
                <Col className="Form-Btn__Col" md="12">
                  <button
                    className="Form-Btn"
                    type="submit"
                    disabled={submitting}
                  >
                    Send Message
                  </button>
                </Col>
              </Row>
            </form>
          )}
        </Form>
      </Container>
    );
  }
}

export default MessageForm;
