// /app/components/ContactForm.jsx
"use client";

import { useState } from "react";

export default function ContactForm({ isFullPage = false }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const subject = formData.get('subject') || 'Contact depuis le portfolio';
    const body = `
      Nom: ${formData.get('name')}
      Email: ${formData.get('email')}
      Message: ${formData.get('message')}
    `;
    window.location.href = `mailto:enzopaquereau@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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
    <section className={`py-16 ${isFullPage ? 'bg-white dark:bg-gray-900' : 'bg-gray-50 dark:bg-gray-900'}`}>
      <div className={`${isFullPage ? 'max-w-3xl' : 'max-w-2xl'} mx-auto px-4 sm:px-6 lg:px-8`}>
        <h2 className={`${isFullPage ? 'text-3xl font-bold mb-8' : 'text-2xl font-semibold mb-6'} text-center text-gray-900 dark:text-white`}>
          {isFullPage ? 'Envoyez-moi un message' : 'Contactez-moi'}
        </h2>
        
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 flex flex-col space-y-4"
        >
          <label className="flex flex-col">
            <span className="text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">Nom</span>
            <input
              type="text"
              name="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">Email</span>
            <input
              type="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">Sujet</span>
            <input
              type="text"
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">Message</span>
            <textarea
              name="message"
              rows={isFullPage ? "6" : "5"}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
            ></textarea>
          </label>

          <button
            type="submit"
            className="self-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md transition-colors duration-200"
          >
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
}
