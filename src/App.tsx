import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from './components/Login/Login';
import { ApplicationRoutes } from './common/Enums';
import Desktop1 from './components/SkillAssessment/Desktop1';

function App() {

  const routes = [
    {
      label: 'Login',
      route: ApplicationRoutes.LOGIN,
      component: <LoginPage />
    },
    {
      label: 'Desktop1',
      route: ApplicationRoutes.DESKTOP1,
      component: <Desktop1/>
    },
  ]

  return (
    <React.Fragment>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">TTP Frontend Template</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {(() => {
        return (
          <>
            <Routes>
              {routes.length > 0 && (
                <Route path={ApplicationRoutes.ROOT} element={<Navigate to={ApplicationRoutes.LOGIN} />} />
              )}
              {routes.map((entry) => (
                <Route key={`route${entry.route}`} path={`${entry.route}/*`} element={entry.component} />
              ))}
            </Routes>
          </>
        );
      })()}

    </React.Fragment>
  )
}

export default App
