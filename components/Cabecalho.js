import Link from 'next/link'
import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

const Cabecalho = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/cursos">Academico</Navbar.Brand>
          <Nav className="me-auto">
              <Nav.Link href="/filmes">Cursos</Nav.Link>
              <Nav.Link href="../filmes/lancamento">Disciplinas</Nav.Link>
              <Nav.Link href="../filmes/cartaz">Alunos</Nav.Link>
              <Nav.Link href="/filmes/cartaz">Professores</Nav.Link>
              <Nav.Link href="/filmes/cartaz">Turmas</Nav.Link>
              <Nav.Link href="/filmes/cartaz">Salas</Nav.Link>
              <Nav.Link href="/filmes/cartaz">Semestres</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Cabecalho