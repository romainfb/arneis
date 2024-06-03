"use client";

import { useEffect, useState } from "react";

export default function PaymentMethods() {
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [newPaymentMethod, setNewPaymentMethod] = useState({
    cardType: "",
    cardHolderName: "",
    cardNumber: "",
    expirationDate: "",
  });
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [methodsPerPage] = useState(4);

  useEffect(() => {
    fetchPaymentMethods();
  }, []);

  async function fetchPaymentMethods() {
    try {
      const response = await fetch("/api/checkout");
      const data = await response.json();

      if (response.ok) {
        setPaymentMethods(data.user.checkoutMethods);
      } else {
        setError(data.error);
      }
    } catch (error) {
      setError("Erreur lors de la récupération des méthodes de paiement");
    }
  }

  const totalMethods = paymentMethods.length;
  const totalPages = Math.ceil(totalMethods / methodsPerPage);
  const currentMethods = paymentMethods.slice(
    (currentPage - 1) * methodsPerPage,
    currentPage * methodsPerPage
  );

  const handleAdd = async () => {
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPaymentMethod),
      });
      const data = await response.json();
      if (response.ok) {
        setPaymentMethods([...paymentMethods, data.paymentMethod]);
        setNewPaymentMethod({
          cardType: "",
          cardHolderName: "",
          cardNumber: "",
          expirationDate: "",
        });
      } else {
        setError(data.error);
      }
    } catch (error) {
      setError("Erreur lors de l'ajout de la méthode de paiement");
    }
  };

  const handleDelete = async (cardNumber) => {
    try {
      const response = await fetch("/api/checkout", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cardNumber }),
      });
      if (response.ok) {
        setPaymentMethods(
          paymentMethods.filter((method) => method.cardNumber !== cardNumber)
        );
      } else {
        const data = await response.json();
        setError(data.error);
      }
    } catch (error) {
      setError("Erreur lors de la suppression de la méthode de paiement");
    }
  };

  return (
    <div className="w-full h-fit">
      <div className="w-full flex-col justify-start items-start lg:gap-14 md:gap-10 gap-8 inline-flex">
        <div className="w-full flex-col justify-start items-start gap-4 flex">
          <h1 className="text-primary font-black text-5xl w-full">
            Méthodes de Paiement
          </h1>
          <p className="text-secondary text-base font-light leading-relaxed">
            Gérez vos méthodes de paiement ici.
          </p>
        </div>
      </div>

      <div className="overflow-x-auto mt-10">
        <table className="table">
          <thead>
            <tr>
              <th>Type de Carte</th>
              <th>Nom du Titulaire</th>
              <th>Numéro de Carte</th>
              <th>Date d'Expiration</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentMethods.map((method) => (
              <tr key={method.cardNumber}>
                <td>{method.cardType}</td>
                <td>{method.cardHolderName}</td>
                <td>{method.cardNumber}</td>
                <td>{method.expirationDate}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(method.cardNumber)}
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

      <div className="w-full flex-col justify-start items-start gap-4 flex mt-10">
        <h2 className="text-primary font-black text-3xl">
          Ajouter une méthode de paiement
        </h2>
        <input
          type="text"
          className="input"
          placeholder="Type de Carte"
          value={newPaymentMethod.cardType}
          onChange={(e) =>
            setNewPaymentMethod({
              ...newPaymentMethod,
              cardType: e.target.value,
            })
          }
        />
        <input
          type="text"
          className="input"
          placeholder="Nom du Titulaire"
          value={newPaymentMethod.cardHolderName}
          onChange={(e) =>
            setNewPaymentMethod({
              ...newPaymentMethod,
              cardHolderName: e.target.value,
            })
          }
        />
        <input
          type="text"
          className="input"
          placeholder="Numéro de Carte"
          value={newPaymentMethod.cardNumber}
          onChange={(e) =>
            setNewPaymentMethod({
              ...newPaymentMethod,
              cardNumber: e.target.value,
            })
          }
        />
        <input
          type="date"
          className="input"
          placeholder="Date d'Expiration"
          value={newPaymentMethod.expirationDate}
          onChange={(e) =>
            setNewPaymentMethod({
              ...newPaymentMethod,
              expirationDate: e.target.value,
            })
          }
        />
        <button className="btn btn-primary" onClick={handleAdd}>
          Ajouter
        </button>
      </div>
    </div>
  );
}
