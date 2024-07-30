import { useState } from "react";
import { database as db } from "../../../../firebase";
import { ref, set } from "firebase/database";
import { formatCurrentDate } from "@/util/helpers";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import MealTextArea from "../MealTextArea";

function InputForm(): JSX.Element {
  const [breakfast, setBreakfast] = useState("");
  const [lunch, setLunch] = useState("");
  const [dinner, setDinner] = useState("");

  const meals = [
    {
      name: "breakfast",
      content: breakfast,
      setValue: setBreakfast,
    },
    {
      name: "lunch",
      content: lunch,
      setValue: setLunch,
    },
    {
      name: "dinner",
      content: dinner,
      setValue: setDinner,
    },
  ];

  const handleSubmit = () => {
    console.log({ breakfast, lunch, dinner });
    set(ref(db, "meals/" + formatCurrentDate()), {
      breakfast,
      lunch,
      dinner,
    });
  };

  return (
    <Form>
      {meals.map((meal) => (
        <MealTextArea
          key={meal.name}
          name={meal.name}
          content={meal.content}
          setValue={meal.setValue}
        />
      ))}
      <Button onClick={handleSubmit}>Save</Button>
    </Form>
  );
}

export default InputForm;
