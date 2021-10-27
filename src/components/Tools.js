import { Form, Button } from 'react-bootstrap'
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
      <h3>Tools</h3>
      <p>Fnord provides the basic functionality of the cut-up technique for your own creative endeavors.</p>
      <p>Simply add a text to each of following fields and click "Submit."</p>
      <p>Your new intermingled text will appear below</p>
      <hr/>

      <Form onSubmit={handleCutupSubmit}>

        {/* <FloatingLabel controlId="floatingTextarea" label="Enter a text for cut-up"> */}
        <Form.Label>Enter a text to cut-up</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="cut-up"
            style={{ height: '170px' }}
            onChange={(ev) => setCutup1(ev.target.value)}
          />
        {/* </FloatingLabel> */}
        <br />

        <Form.Label>Enter another text to cut-up</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="cut-up"
            style={{ height: '170px' }}
            onChange={(ev) => setCutup2(ev.target.value)}
          />
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