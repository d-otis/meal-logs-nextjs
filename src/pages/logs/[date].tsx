import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { database as db } from "@/firebase/realtimeDatabase";
import { ref, child, get } from "firebase/database";
import dayjs from "dayjs";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputForm, { Meal } from "../components/InputForm";

// tODO: handle nonsense dates/slugs

function DateArchive(): JSX.Element {
  const router = useRouter();
  const { date } = router.query;
  const [meals, setMeals] = useState({
    breakfast: "",
    lunch: "",
    dinner: "",
  });

  useEffect(() => {
    get(child(ref(db), `meals/${date}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const log = snapshot.val();
          console.log({ log });
          setMeals(log);
          console.log({ meals });
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error({ error });
      });
  }, []);

  return (
    <Container className="my-3">
      <Row>
        <Col>
          <InputForm dailyMeals={meals} date={date as string} />
        </Col>
      </Row>
    </Container>
  );
}

export default DateArchive;
