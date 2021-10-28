import { Form, Button } from 'react-bootstrap'
import { useState } from 'react'
import cutup from 'cut-up-method-js'
import './Tools.css'


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
      <p>Fnord provides the basic functionality of the cut-up technique for use in your own creative endeavors.</p>
      <p>Simply add text to each of following fields and click "Submit."</p>
      <p>Your new intermingled text will appear below</p>
      <hr />

      <Form onSubmit={handleCutupSubmit}>


        <Form.Label>Enter a text to cut-up</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="cut-up"
          style={{ height: '170px' }}
          onChange={(ev) => setCutup1(ev.target.value)}
        />
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
      <hr />

      <p>{cutupText}</p>
      <hr />
      <div id='main-fold-div'>
          <div id='fold-div-1'>
          <div id='fold-p-1'>
            <p >When Hypoc was through meditating with St. Gulik, he went there into the kitchen where he busied himself with preparing the feast and in his endeavor, he found that there was some old tea in a pan left standing from the night before, when he had in his weakness forgot about its making and had let it sit steeping for 24 hours. It was dark and murky and it was Hypoc's intention to use this old tea by diluting it with water. And again in his weakness, chose without further consideration and plunged into the physical labor of the preparations. It was then when deeply immersed in the pleasure of that trip, he had a sudden loud clear voice in his head saying "it is bitter tea that involves you so." Hypoc heard the voice, but the struggle inside intensified, and the pattern, previously established with the physical laboring and the muscle messages coordinated and unified or perhaps coded, continued to exert their influence and Hypoc succummed to the pressure and he denied the voice.</p>
            <p id='fold-block-1'>When Hypoc was through meditating with St. Gulik, he went there into the kitchen where he busied himself with preparing the feast and in his endeavor, he found that there was some old tea in a pan left standing from the night before, when he had in his weakness forgot about its making and had let it sit steeping for 24 hours. It was dark and murky and it was Hypoc's intention to use this old tea by diluting it with water. And again in his weakness, chose without further consideration and plunged into the physical labor of the preparations. It was then when deeply immersed in the pleasure of that trip, he had a sudden loud clear voice in his head saying "it is bitter tea that involves you so." Hypoc heard the voice, but the struggle inside intensified, and the pattern, previously established with the physical laboring and the muscle messages coordinated and unified or perhaps coded, continued to exert their influence and Hypoc succummed to the pressure and he denied the voice.</p>
            <div >
           
          </div>
            </div>

          </div>
        

      </div>

      {/* <div id='fold-div-2'>
        <div id='fold-block-2'><p>The Romans left a likeness of Her for posterity--She was shown as a grotesque woman with a pale and ghastly look, Her eyes afire, Her garment ripped and torn, and as concealing a dagger in Her Bosom. Actually, most women look pale and ghastly when concealing a chilly dagger in their bosoms.
            Her geneology is from the Greeks and is utterly confused. Either She was the twin of Ares and the daughter of Zeus and Hera; or She was the daughter of Nyx, goddess of night (who was either the daughter or wife of Chaos, or both), and Nyx's brother, Erebus, and whose brothers and sisters include Death, Doom, Mockery, and Friendship. And that She begat Forgetfullness, Quarrels, Lies, and a bunch of gods and goddesses like that.

            One day Mal-2 consulted his Pineal Gland* and asked Eris if She really created all of those terrible things. She told him that She had always liked the Old Greeks, but that they cannot be trusted with historic matters. "They were," She added, "victims of indigestion, you know."</p></div>
          <p id='fold-p-2'>The Romans left a likeness of Her for posterity--She was shown as a grotesque woman with a pale and ghastly look, Her eyes afire, Her garment ripped and torn, and as concealing a dagger in Her Bosom. Actually, most women look pale and ghastly when concealing a chilly dagger in their bosoms.
            Her geneology is from the Greeks and is utterly confused. Either She was the twin of Ares and the daughter of Zeus and Hera; or She was the daughter of Nyx, goddess of night (who was either the daughter or wife of Chaos, or both), and Nyx's brother, Erebus, and whose brothers and sisters include Death, Doom, Mockery, and Friendship. And that She begat Forgetfullness, Quarrels, Lies, and a bunch of gods and goddesses like that.

            One day Mal-2 consulted his Pineal Gland* and asked Eris if She really created all of those terrible things. She told him that She had always liked the Old Greeks, but that they cannot be trusted with historic matters. "They were," She added, "victims of indigestion, you know."
          </p>
          </div> */}

    </div>
  )
}

export default Tools