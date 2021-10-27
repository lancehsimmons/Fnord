import { Form, Button, FloatingLabel } from 'react-bootstrap'
import { useState } from 'react'
import cutup from 'cut-up-method-js'


const Tools = () => {
  const [cutup1, setCutup1] = useState('')
  const [cutup2, setCutup2] = useState('')
  const [cutupText, setCutupText] = useState('')

  const handleCutupSubmit = (ev) => {
    ev.preventDefault()
    let cutItUp = cutup([cutup1, cutup2].join(' '))
    setCutupText(cutItUp)
    console.log(cutupText)
  }


  return (
    <div>
      <h3>tools</h3>
      <Form onSubmit={handleCutupSubmit}>
        {/* <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
        </Button> */}


        <FloatingLabel controlId="floatingTextarea" label="Enter a text for cut-up">
          <Form.Control
            as="textarea"
            placeholder="cut-up"
            style={{ height: '100px' }}
            onChange={(ev) => setCutup1(ev.target.value)}
          />
        </FloatingLabel>
        <br />
        <FloatingLabel controlId="floatingTextarea2" label="Another text for cut-up">
          <Form.Control
            as="textarea"
            placeholder="cut-up"
            style={{ height: '100px' }}
            onChange={(ev) => setCutup2(ev.target.value)}
          />
        </FloatingLabel>
        <br />

        <Button variant="primary" type="submit" >
          Submit
        </Button>
      </Form>

      <p>{cutupText}</p>
    </div>
  )
}

export default Tools