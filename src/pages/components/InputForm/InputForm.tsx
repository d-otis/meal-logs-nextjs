import { useState } from "react";
import { set, ref } from "firebase/database";
import { database as db } from "@/firebase/realtimeDatabase";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";

import MealTextArea from "../MealTextArea";
import { DailyMeals } from "@/types";

type Props = {
  dailyMeals: {
    breakfast: string;
    lunch: string;
    dinner: string;
    [key: string]: string;
  };
  setMeals: React.Dispatch<React.SetStateAction<DailyMeals>>;
  date: string;
};

function InputForm({ dailyMeals, date, setMeals }: Props): JSX.Element {
  const [saving, setSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSubmit = (): void => {
    // TODO: abstract away this saving function to an external file
    setSaving(true);

    set(ref(db, "meals/" + date), {
      breakfast: dailyMeals.breakfast,
      lunch: dailyMeals.lunch,
      dinner: dailyMeals.dinner,
    });
    setShowSuccess(true);
    setShowError(false);

    setSaving(false);
  };

  return (
    <Form data-testid="form-container">
      {showSuccess && (
        <Alert
          variant="success"
          onClose={() => setShowSuccess(false)}
          dismissible
        >
          Successfully saved!
        </Alert>
      )}
      {showError && (
        <Alert variant="danger" onClose={() => setShowError(false)} dismissible>
          Error saving data! Check the console for more information.
        </Alert>
      )}
      {Object.keys(dailyMeals).map((meal) => (
        <MealTextArea
          key={meal}
          name={meal}
          content={dailyMeals[meal]}
          setMeals={setMeals}
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
