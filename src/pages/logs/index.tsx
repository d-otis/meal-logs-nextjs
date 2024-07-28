import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "../components/Navigation";
import NewLog from "../components/NewLog";

function Logs(): JSX.Element {
  return (
    <>
      <Navigation />
      <NewLog />
    </>
  );
}

export default Logs;
