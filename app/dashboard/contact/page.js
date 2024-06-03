"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {
  const [contacts, setContacts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [contactsPerPage] = useState(8);

  useEffect(() => {
    fetchContacts();
  }, []);

  async function fetchContacts() {
    try {
      const response = await fetch("/api/contacts");
      const data = await response.json();

      if (response.ok) {
        setContacts(data.contacts);
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des contacts:", error);
    }
  }

  async function deleteContact(id) {
    try {
      const response = await fetch(`/api/contacts?id=${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setContacts(contacts.filter((contact) => contact.id !== id));
      } else {
        const data = await response.json();
        console.error(data.message);
      }
    } catch (error) {
      console.error("Erreur lors de la suppression du contact:", error);
    }
  }

  const totalContacts = contacts.length;
  const totalPages = Math.ceil(totalContacts / contactsPerPage);
  const currentContacts = contacts.slice(
    (currentPage - 1) * contactsPerPage,
    currentPage * contactsPerPage
  );

  return (
    <div className="w-full h-fit px-20 my-40 flex flex-col md:text-left text-center xl:px-80">
      <div className="w-full flex-col justify-start items-start lg:gap-14 md:gap-10 gap-8 inline-flex">
        <div className="w-full flex-col justify-start items-start gap-4 flex">
          <h1 className="text-primary font-black text-5xl w-full">
            Tableau de bord - Contacts
          </h1>
          <p className="text-secondary text-base font-light leading-relaxed">
            Bienvenue sur votre tableau de bord des demandes de contact.
          </p>
        </div>
      </div>

      <div className="overflow-x-auto mt-10">
        <table className="table">
          <thead>
            <tr>
              <th>Email</th>
              <th>Sujet</th>
              <th>Message</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentContacts.map((contact) => (
              <tr key={contact.id}>
                <td>{contact.email}</td>
                <td>{contact.sujet}</td>
                <td>{contact.message}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteContact(contact.id)}
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="join flex justify-center items-center mt-6">
        <button
          className="join-item btn"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          «
        </button>
        <button className="join-item btn">
          {currentPage} sur {totalPages}
        </button>
        <button
          className="join-item btn"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          »
        </button>
      </div>
    </div>
  );
}
