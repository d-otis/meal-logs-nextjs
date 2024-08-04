import { useEffect, useState } from "react";
import { database as db } from "../../../../firebase";
import { ref, set, child, get } from "firebase/database";
import { formatCurrentDate } from "@/util/helpers";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import MealTextArea from "../MealTextArea";

function InputForm(): JSX.Element {
  const [breakfast, setBreakfast] = useState("");
  const [lunch, setLunch] = useState("");
  const [dinner, setDinner] = useState("");

  useEffect(() => {
    // TODO: abstract this away to another file that just contains Firebase RTDB concerns
    get(child(ref(db), `meals/${formatCurrentDate()}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const log = snapshot.val();
          setBreakfast(log.breakfast);
          setLunch(log.lunch);
          setDinner(log.dinner);
        } else {
          // TODO: set error message/banner
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error({ error });
      });
  }, []);

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
    <Form data-testid="form-container">
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
