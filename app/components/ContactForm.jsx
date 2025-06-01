// /app/components/ContactForm.jsx
"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous pouvez faire un console.log ou appeler une API
    console.log({ name, email, subject, message });
    setSent(true);
  };

  if (sent) {
    return (
      <div className="p-4 rounded-md bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
        Merci, je vous répondrai sous 48 h.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block font-medium">
          Nom
        </label>
        <input
          type="text"
          id="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full rounded border-gray-300 py-2 px-3 focus:outline-none focus:ring focus:ring-indigo-200 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:focus:ring-indigo-600"
        />
      </div>

      <div>
        <label htmlFor="email" className="block font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full rounded border-gray-300 py-2 px-3 focus:outline-none focus:ring focus:ring-indigo-200 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:focus:ring-indigo-600"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block font-medium">
          Sujet
        </label>
        <input
          type="text"
          id="subject"
          required
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="mt-1 block w-full rounded border-gray-300 py-2 px-3 focus:outline-none focus:ring focus:ring-indigo-200 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:focus:ring-indigo-600"
        />
      </div>

      <div>
        <label htmlFor="message" className="block font-medium">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-1 block w-full rounded border-gray-300 py-2 px-3 focus:outline-none focus:ring focus:ring-indigo-200 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:focus:ring-indigo-600"
        />
      </div>

      <button
        type="submit"
        className="inline-block rounded bg-indigo-600 py-2 px-4 text-white hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200 dark:bg-indigo-500 dark:hover:bg-indigo-600 dark:focus:ring-indigo-600"
      >
        Envoyer
      </button>
    </form>
  );
}
