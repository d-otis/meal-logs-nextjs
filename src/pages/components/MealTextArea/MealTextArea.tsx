import Form from "react-bootstrap/Form";
import { capitalize } from "@/util/helpers";

type Props = {
  name: string;
  content: string | "";
  setValue: (content: string) => void;
};

function MealTextArea({ name, content, setValue }: Props): JSX.Element {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{capitalize(name)}</Form.Label>
      <textarea
        data-testid={`${name}-textarea`}
        name={name}
        id={name}
        className="form-control form-control-lg"
        rows={3}
        value={content}
        onInput={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setValue(e.target.value)
        }
      ></textarea>
    </Form.Group>
  );
}

export default MealTextArea;
