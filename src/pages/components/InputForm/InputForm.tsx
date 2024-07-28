import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import MealTextArea from "../MealTextArea";

function InputForm(): JSX.Element {
  const meals = [
    {
      name: "breakfast",
      content: "",
    },
    {
      name: "lunch",
      content: "",
    },
    {
      name: "dinner",
      content: "",
    },
  ];

  return (
    <Form>
      {meals.map((meal) => (
        <MealTextArea key={meal.name} name={meal.name} content={meal.content} />
      ))}
      <Button type="submit">Save</Button>
    </Form>
  );
}

export default InputForm;
