"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [ordersPerPage] = useState(8);

  useEffect(() => {
    fetchOrders();
  }, []);

  async function fetchOrders() {
    try {
      const response = await fetch("/api/orders");
      const data = await response.json();

      if (response.ok) {
        setOrders(data.orders);
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des commandes:", error);
    }
  }

  const totalOrders = orders.length;
  const totalPages = Math.ceil(totalOrders / ordersPerPage);
  const currentOrders = orders.slice(
    (currentPage - 1) * ordersPerPage,
    currentPage * ordersPerPage
  );

  return (
    <div className="w-full h-fit px-20 my-40 flex flex-col md:text-left text-center xl:px-80">
      <div className="w-full flex-col justify-start items-start lg:gap-14 md:gap-10 gap-8 inline-flex">
        <div className="w-full flex-col justify-start items-start gap-4 flex">
          <h1 className="text-primary font-black text-5xl w-full">
            Tableau de bord - Commandes
          </h1>
          <p className="text-secondary text-base font-light leading-relaxed">
            Bienvenue sur votre tableau de bord des commandes.
          </p>
        </div>
      </div>

      <div className="overflow-x-auto mt-10">
        <table className="table">
          <thead>
            <tr>
              <th>ID Client</th>
              <th>Status</th>
              <th>Date de commande</th>
            </tr>
          </thead>
          <tbody>
            {currentOrders.map((order) => (
              <tr key={order.id}>
                <td>{order.clientId}</td>
                <td>{order.status}</td>
                <td>{order.orderDate}</td>
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
