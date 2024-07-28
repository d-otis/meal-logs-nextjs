import Form from "react-bootstrap/Form";
import { capitalize } from "@/util/helpers";

type Props = {
  name: string;
  content: string | "";
};

function MealTextArea({ name, content }: Props): JSX.Element {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{capitalize(name)}</Form.Label>
      <textarea
        name={name}
        id={name}
        className="form-control form-control-lg"
        rows={3}
      >
        {content}
      </textarea>
    </Form.Group>
  );
}

export default MealTextArea;
