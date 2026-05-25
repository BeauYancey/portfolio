import { useState } from 'react'
import type { ChangeEvent } from 'react'

interface ErrorResponse {
  msg?: string
}

function ContactForm() {
  const [name, setName] = useState('')
  const [respond, setRespond] = useState('')
  const [subject, setSubject] = useState('')
  const [body, setBody] = useState('')
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  async function sendEmail() {
    const response = await fetch('https://h8qxlmtby8.execute-api.us-east-1.amazonaws.com/prod/email', {
      method: 'post',
      body: JSON.stringify({
        name,
        respond,
        subject,
        body,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })

    if (response.ok) {
      setSent(true)
      setError('')
      return
    }

    const res = (await response.json()) as ErrorResponse
    console.log(res.msg)
    setSent(false)
    setError(res.msg ?? 'Failed to send message')
  }

  const handleInputChange = (setter: (value: string) => void) => (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setter(event.target.value)
  }

  return (
    <div className="form">
      <div className="input-group">
        <span className="input-title">Your Name</span>
        <input className="input-text" type="text" onChange={handleInputChange(setName)} />
      </div>
      <div className="input-group">
        <span className="input-title">Your Email</span>
        <input className="input-text" type="email" onChange={handleInputChange(setRespond)} />
      </div>
      <div className="input-group">
        <span className="input-title">Subject</span>
        <input className="input-text" type="text" onChange={handleInputChange(setSubject)} />
      </div>
      <div className="input-group">
        <span className="input-title">Body</span>
        <textarea className="input-text" rows={6} style={{ resize: 'none' }} onChange={handleInputChange(setBody)} />
      </div>
      {sent
        ? <button className="btn">Your message has been sent</button>
        : error
          ? <button className="btn send-error">{error}</button>
          : <button className="btn" onClick={sendEmail}>Send</button>}
    </div>
  )
}

export default ContactForm
