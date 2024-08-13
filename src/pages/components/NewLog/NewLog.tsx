import { useEffect, useState } from "react";
import { database as db } from "@/firebase/realtimeDatabase";
import { ref, child, get } from "firebase/database";
import { formatCurrentDate } from "@/util/helpers";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputForm from "../InputForm";
import { mealsInitialState } from "@/util/helpers";

function NewLog(): JSX.Element {
  const [meals, setMeals] = useState(mealsInitialState);
  const date = formatCurrentDate();
  console.log(`date from NewLog: ${date}`);

  useEffect((): void => {
    console.log("inside useEffect");
    // TODO: abstract this away to another file that just contains Firebase RTDB concerns
    get(child(ref(db), `meals/${formatCurrentDate()}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const log = snapshot.val();

          setMeals(log);
        } else {
          // TODO: set error message/banner
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error({ error });
      });
  }, []);

  return (
    <Container className="mt-3" data-testid="new-log-container">
      <Row>
        <Col>
          <InputForm
            data-testid="input-form-container"
            dailyMeals={meals}
            date={date}
            setMeals={setMeals}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default NewLog;
