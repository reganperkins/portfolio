import { useState, ChangeEvent,  FormEvent } from 'react';
import { send } from 'emailjs-com';
import styles from './ContactForm.module.scss';

function ContactForm() {
  const [emailSent, setEmailSent] = useState(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);
  const [formDetails, setFormDetails] = useState({
    sender_name: '',
    email: '',
    message: '',
  });


  const handleInputUpdate = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormDetails({
      ...formDetails,
      [e.target.name]: e.target.value,
    })
  }

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitDisabled(true);
    try {
      const response = await send(process.env.REACT_APP_EMAIL_SERVICE_ID ?? '', process.env.REACT_APP_EMAIL_TEMPLATE_ID ?? '', formDetails, process.env.REACT_APP_EMAIL_USER_ID ?? '');
      console.log('success', response)
      setEmailSent(true);
    } catch (err) {
      console.warn(err)
      // add ui to show error to user
      setIsSubmitDisabled(false);
    }
  }

  let submitButton;
  if (emailSent) {
    submitButton = <div>Message Sent</div>;
  } else {
    submitButton = <button type="submit" disabled={isSubmitDisabled}>Send Message</button>;
  }

  return (
    <form className={styles.contactForm} onSubmit={sendEmail}>
      <input
        type="text"
        placeholder="Name"
        name="sender_name"
        onChange={handleInputUpdate}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        onChange={handleInputUpdate}
      />
      <textarea
        rows={5}
        placeholder="Message"
        name="message"
        onChange={handleInputUpdate}
      />
      {submitButton}
    </form>
  );
}

export default ContactForm;