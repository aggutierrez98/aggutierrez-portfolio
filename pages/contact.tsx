import Head from "next/head";
import "rodal/lib/rodal.css";
//@ts-ignore
import Rodal from "rodal";
import { useContactForm } from "../hooks/useContactForm";

const Contact = () => {
  const {
    email,
    message,
    name,
    modalVisible,
    sendEmail,
    formRef,
    onChange,
    modalData,
    closeModal,
  } = useContactForm();

  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Get in touch with aggutierrez" />
      </Head>

      <main>
        <h1>
          Get in touch sending me an email or contacting by one of my social
          media accounts
        </h1>
        <form
          ref={formRef}
          id="contact-form"
          onSubmit={sendEmail}
          method="POST"
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={name}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              name="email"
              value={email}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              className="form-control"
              value={message}
              onChange={onChange}
              rows={5}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>

        <Rodal visible={modalVisible} onClose={closeModal}>
          <div>{modalData.title}</div>
          <div>{modalData.message}</div>
        </Rodal>
      </main>
    </>
  );
};

export default Contact;
