import Link from "next/link";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FaRegCalendarAlt, FaPlus } from "react-icons/fa";

function Header() {
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Navbar.Brand as={Link} href="/" style={{ cursor: "pointer" }}>
        <img
          alt="site-logo"
          src="/img/Logo.png"
          width="100"
          height="30"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link href="/" passHref>
            <Nav.Link>Home</Nav.Link>
          </Link>
          <NavDropdown title="Events" id="collasible-nav-dropdown">
            <Link href="/events" passHref>
              <NavDropdown.Item>
                <FaRegCalendarAlt /> Events
              </NavDropdown.Item>
            </Link>
            <Link href="/events/add" passHref>
              <NavDropdown.Item>
                <FaPlus /> Add Event
              </NavDropdown.Item>
            </Link>
          </NavDropdown>
          <Link href="/about" passHref>
            <Nav.Link>About</Nav.Link>
          </Link>
        </Nav>

        <Nav>
          <Link href="/auth/login" passHref>
            <Nav.Link>Login</Nav.Link>
          </Link>
          <Link href="/auth/register" passHref>
            <Nav.Link>Register</Nav.Link>
          </Link>
          <Link href="/" passHref>
            <Nav.Link>Logout</Nav.Link>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
