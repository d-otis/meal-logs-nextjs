import Form from "react-bootstrap/Form";
import { DailyMeals } from "@/types";
import { capitalize } from "@/util/helpers";

type Props = {
  name: string;
  content: string | "";
  setMeals: (prevMeals: DailyMeals) => void;
};

function MealTextArea({ name, content, setMeals }: Props): JSX.Element {
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
        onChange={(e) => {
          setMeals((prevMeals) => ({
            ...prevMeals,
            [name]: e.target.value,
          }));
        }}
      ></textarea>
    </Form.Group>
  );
}

export default MealTextArea;
