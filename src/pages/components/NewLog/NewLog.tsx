import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputForm from "../InputForm";

function NewLog(): JSX.Element {
  return (
    <Container className="mt-3" data-testid="new-log-container">
      <Row>
        <Col>
          <InputForm data-testid="input-form-container" />
        </Col>
      </Row>
    </Container>
  );
}

export default NewLog;
