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
  }


  return (
    <div>
      <h3>tools</h3>
      <Form onSubmit={handleCutupSubmit}>

        <FloatingLabel controlId="floatingTextarea" label="Enter a text for cut-up">
          <Form.Control
            as="textarea"
            placeholder="cut-up"
            style={{ height: '170px' }}
            onChange={(ev) => setCutup1(ev.target.value)}
          />
        </FloatingLabel>
        <br />
        <FloatingLabel controlId="floatingTextarea2" label="Another text for cut-up">
          <Form.Control
            as="textarea"
            placeholder="cut-up"
            style={{ height: '170px' }}
            onChange={(ev) => setCutup2(ev.target.value)}
          />
        </FloatingLabel>
        <br />

        <Button variant="primary" type="submit" >
          Submit
        </Button>
      </Form>
      <hr/>

      <p>{cutupText}</p>
    </div>
  )
}

export default Tools