import { useState } from 'react'
import './App.css'
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const X_MAX = 9;
const Y_MAX = 9;

interface SudokuMatrix {
  grid: number[][];
}

interface InputButtons {
  buttons: number[];
}

function App() {
  let sudokuMatrix: SudokuMatrix = {
    grid: new Array(Y_MAX)
  };

  let inputButtons: InputButtons = {
    buttons: new Array(X_MAX)
  };

  for(let i = 0; i < Y_MAX; i++) {
    sudokuMatrix.grid[i] = new Array(X_MAX);
    inputButtons.buttons[i] = i + 1;
    for(let j = 0; j < X_MAX; j++) {
      sudokuMatrix.grid[i][j] = j + 1;
    }
  }

  console.log("sudokuMatrix: ", sudokuMatrix);

  return (
    <>
      <Container className="mt-3 border border-1 text-center">
        <Row className="">
          {
            sudokuMatrix.grid.map(subMatrix =>
              <Col className="border border-1 border-primary" xs="4">
                {
                  <Row className="">{
                    subMatrix.map(cell =>
                      <Col className="border border-1 border-success" style={{maxWidth: "auto"}} xs="4">{cell}</Col>
                    )
                  }
                  </Row>
                }
              </Col>
            )
          }
        </Row>
      </Container>
      <Container className="mt-3">
        <Row>
          <Col xs="auto">
            {inputButtons.buttons.map(button => <Button>{button}</Button>)}
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
