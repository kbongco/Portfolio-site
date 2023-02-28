import { useState } from "react";
export default function ContactMe() {
  const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

  const [name, setName] = useState('');
  const  [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const submitForm = () => {
    alert('you submitted something!');
    setName('');
    setEmail('');
    setMessage('');
  }

  return (
    <div id='contact-me'>
           <h1 class='text-xl text-center'>Contact Me</h1>
      <p className="py-6 px-8 flex justify-center">
        Like what you see so far? Want to chat a bit about how I can help? Fill
        out the form below and I'll get back to you :)
      </p>
      <div class='flex justify-center'>
      <div class="form-control w-full max-w-xs">
        <label class="label">
          <span class="label-text">Name</span>
        </label>
        <input
          type="text"
          placeholder="Insert your name here"
          class="input input-bordered w-full max-w-xs"
        />
        <label class="label">
          <span class="label-text">Email</span>
        </label>
        <input
          type="text"
          placeholder="Insert your email here"
          class="input input-bordered w-full max-w-xs"
        />
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your message</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-40"
            placeholder="Insert creative message here"
          ></textarea>
          </div>
          </div>
      </div>
      <div class='flex justify-center mt-8'>
        <button className="btn btn-primary">Send</button>
      </div>
    </div>
  );
}
