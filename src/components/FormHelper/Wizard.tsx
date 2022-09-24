import PropTypes from "prop-types";
import React, { ReactElement } from "react";
import { Form } from "react-final-form";
import Stepper from "react-stepper-horizontal";
import { Col, Row } from "reactstrap";
interface IProps {
  children: ReactElement | ReactElement[];
  onSubmit: (e: any) => void;
  initialValues: {};
  title?: any;
}

interface IState {
  page: number;
  values: {};
}

class Wizard extends React.Component<IProps, IState> {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  static Page = (props: { title; children }) => props.children;

  constructor(props: IProps) {
    super(props);
    this.state = {
      page: 0,
      values: props.initialValues || {},
    };
  }
  next = (values) =>
    this.setState((state) => ({
      page: Math.min(
        state.page + 1,
        React.Children.count(this.props.children) - 1
      ),
      values,
    }));

  previous = () =>
    this.setState((state) => ({
      page: Math.max(state.page - 1, 0),
    }));

  handleSubmit = (values) => {
    const { children, onSubmit } = this.props;
    const { page } = this.state;
    const isLastPage = page === React.Children.count(children) - 1;
    if (isLastPage) {
      return onSubmit(values);
    } else {
      this.next(values);
    }
  };

  render() {
    const { children } = this.props;
    const { page, values } = this.state;
    const activePage = React.Children.toArray(children)[page];
    const isLastPage = page === React.Children.count(children) - 1;
    const pageMap = React.Children.toArray(children).map((child: any) => {
      return { title: child.props.title };
    });
    {
      console.log(pageMap);
    }
    return (
      <Form
        initialValues={values}
        mutators={{
          setValue: ([field, value], state, { changeValue }) => {
            changeValue(state, field, () => value);
          },
        }}
        onSubmit={this.handleSubmit}
      >
        {({ handleSubmit, submitting, values }) => (
          <form onSubmit={handleSubmit}>
            {console.log(page)}
            <Row className={"mb-4"}>
              <Stepper
                activeSteps={page}
                steps={pageMap}
                activeBorderColor={"green"}
                titleFontSize={16}
                defaultBorderWidth={4}
              />
            </Row>
            {activePage}
            <Row>
              {page > 0 && (
                <Col className="checkoutForm-Btn__Col" md={6}>
                  <button
                    type="button"
                    onClick={this.previous}
                    className="checkoutForm-Btn"
                  >
                    « Previous
                  </button>
                </Col>
              )}
              <Col
                className="checkoutForm-Btn__Col"
                md={page === 0 ? "12" : "6"}
              >
                {!isLastPage && (
                  <button type="submit" className="checkoutForm-Btn">
                    Next »
                  </button>
                )}
                {isLastPage && (
                  <button
                    type="submit"
                    disabled={submitting}
                    className="checkoutForm-Btn"
                  >
                    Submit
                  </button>
                )}
              </Col>
            </Row>
          </form>
        )}
      </Form>
    );
  }
}
export default Wizard;
