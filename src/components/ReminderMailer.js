import axios from 'axios'
import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { ReminderButton } from './Buttons'
import { CardFooter } from './Card'
import CloseModalCountdown from './CloseModalCountdown'

export function ReminderMailer({ item, closeModal, mailCreds }) {
  const [startCountdown, setStartCountdown] = useState(false)
  const [state, setState] = useState({
    name: item.borrower,
    message: `Hallo ${item.borrower}, bitte denk daran, mir folgenden Gegenstand wieder
    zurück zu geben: ${item.title}`,
    email: item.contact,
    sent: false,
    buttonText: 'Erinnerung senden',
  })

  function onSend(event) {
    event.preventDefault()

    setState({
      ...state,
      sent: false,
      buttonText: '...wird gesendet',
    })

    let data = {
      name: state.name,
      email: state.email,
      message: state.message,
      host: mailCreds.host,
      port: mailCreds.port,
      user: mailCreds.user,
      pass: mailCreds.pass,
    }

    axios
      .post('/api/v1', data)
      .then((res) => {
        setStartCountdown(true)
        setState({
          ...state,
          sent: true,
          buttonText: 'Erinnerung gesendet',
        })
      })
      .catch(() => {
        console.log('Erinnerung nicht gesendet')
        setStartCountdown(true)
        setState({
          ...state,
          sent: false,
          buttonText: 'Etwas is schiefgelaufen',
        })
      })
  }

  return (
    <>
      <ReminderBody>{state.message}</ReminderBody>
      <CardFooter>
        <ReminderButton onClick={onSend}>{state.buttonText}</ReminderButton>
        {startCountdown ? (
          <CloseModalCountdown closeModal={closeModal} />
        ) : (
          <ReminderButton onClick={closeModal}>schließen</ReminderButton>
        )}
      </CardFooter>
    </>
  )
}

const ReminderBody = styled.p`
  margin: 0.4em;
  font-size: 0.9rem;
  padding: 0.5em;
  background-color: white;
  border-radius: 4px;
`
