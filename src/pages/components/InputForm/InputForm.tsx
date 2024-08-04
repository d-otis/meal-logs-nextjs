import { useEffect, useState } from "react";
import { database as db } from "@/firebase/realtimeDatabase";
import { ref, set, child, get } from "firebase/database";
import { formatCurrentDate } from "@/util/helpers";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import MealTextArea from "../MealTextArea";

function InputForm(): JSX.Element {
  const [breakfast, setBreakfast] = useState("");
  const [lunch, setLunch] = useState("");
  const [dinner, setDinner] = useState("");
  const [saving, setSaving] = useState(false);

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
    // TODO: display success banner/indicator
    // TODO: abstract away this saving function to an external file
    setSaving(true);

    set(ref(db, "meals/" + formatCurrentDate()), {
      breakfast,
      lunch,
      dinner,
    });

    setSaving(false);
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

      <Button onClick={handleSubmit} data-testid="submit-button">
        Save
      </Button>
      {saving && <Spinner animation="border" />}
    </Form>
  );
}

export default InputForm;
