import { Form, Button, FloatingLabel } from 'react-bootstrap'

const Tools = () => {
  return (
    <div>
      <h3>tools</h3>
      <Form>
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
          />
        </FloatingLabel>
        <br />
        <FloatingLabel controlId="floatingTextarea2" label="Another text for cut-up">
          <Form.Control
            as="textarea"
            placeholder="cut-up"
            style={{ height: '100px' }}
          />
        </FloatingLabel>
        <br />

        <Button variant="primary" type="submit">
          Submit
        </Button>



      </Form>
    </div>
  )
}

export default Tools