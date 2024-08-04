import { useRouter } from "next/router";

function DateArchive() {
  const router = useRouter();
  const { date } = router.query;

  return <h1>Logs from {date}</h1>;
}

export default DateArchive;
