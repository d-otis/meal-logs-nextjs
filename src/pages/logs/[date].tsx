import { useRouter } from "next/router";
import React from "react";

function DateArchive(): JSX.Element {
  const router = useRouter();
  const { date } = router.query;

  return <h1>Logs from {date}</h1>;
}

export default DateArchive;
