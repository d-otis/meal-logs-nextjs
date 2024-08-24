import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { database as db } from "@/firebase/realtimeDatabase";
import { ref, child, get } from "firebase/database";
import { mealsInitialState, formatDate } from "@/util/helpers";
import { DailyMeals } from "@/types";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputForm from "../components/InputForm";

// tODO: handle nonsense dates/slugs

function DateArchive(): JSX.Element {
  const router = useRouter();
  const { date } = router.query;
  const [meals, setMeals] = useState<DailyMeals>(mealsInitialState);

  useEffect(() => {
    get(child(ref(db), `meals/${date}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const log = snapshot.val();

          setMeals(log);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error({ error });
      });
  }, [date, meals]);

  return (
    <Container className="my-3">
      <Row>
        <Col>
          <h1>
            You are editing the past{" "}
            <small className="text-body-secondary">
              {"//"} {formatDate(date as string)}
            </small>
          </h1>

          <InputForm
            dailyMeals={meals}
            date={formatDate(date as string)}
            setMeals={setMeals}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default DateArchive;
