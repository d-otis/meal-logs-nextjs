import { useRouter } from "next/navigation";
import { getYesterdaysDate } from "@/util/helpers";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navigation(): JSX.Element {
  const router = useRouter();
  let loggedIn = true; // TODO: pass this in dynamically from whatever handles auth/session

  return (
    <>
      <Navbar expand="md" className="bg-body-tertiary" data-testid="navbar">
        <Container fluid>
          <Navbar.Brand href="/logs/new">🍴Daily Meal Logs 🥗</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {loggedIn && (
              <Nav className="me-auto">
                <Nav.Link
                  onClick={() => router.push(`/logs/${getYesterdaysDate()}`)}
                >
                  Yesterday
                </Nav.Link>
                <Nav.Link href="/logs" target="_blank">
                  All Logs
                </Nav.Link>
                <Nav.Link href="/download-csv">Download CSV</Nav.Link>
                <Nav.Link href="/logout">Logout</Nav.Link>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
