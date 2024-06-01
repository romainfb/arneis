// MonCompte.jsx
"use client";

import { useEffect, useState } from "react";
import AccountSkeleton from "../../components/(account)/AccountSkeleton";
import OrderInfos from "../../components/(order)/OrderInfos";
import ProfilInfos from "../../components/(profil)/ProfilInfos";

export default function MonCompte() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [orders, setOrders] = useState([]);
  const [ordersLoading, setOrdersLoading] = useState(true);

  useEffect(() => {
    fetchUser();
    fetchOrders();
  }, []);

  async function fetchUser() {
    try {
      const response = await fetch("/api/account");
      const data = await response.json();
      if (response.ok) {
        setUser(data.user);
        setFormData(data.user);
      } else {
        console.error(data.error);
      }
      setLoading(false);
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des données utilisateur:",
        error
      );
      setLoading(false);
    }
  }

  async function fetchOrders() {
    try {
      const response = await fetch("/api/orders");
      const data = await response.json();
      if (response.ok) {
        const ordersWithDetails = await Promise.all(
          data.orders.map(async (order) => {
            const articleDetails = await Promise.all(
              order.ArticleOrder.map(async (item) => {
                const productResponse = await fetch(
                  `/api/product?id=${item.productId}`
                );
                const productData = await productResponse.json();
                console.log(productData, "PRODUCTDATA");
                return {
                  ...item,
                  name: productData.product.name,
                  thumbnail: productData.product.thumbnail,
                };
              })
            );
            return { ...order, details: articleDetails };
          })
        );
        setOrders(ordersWithDetails);
        console.log(ordersWithDetails, "ORDERSDETAILS");
      } else {
        console.error(data.error);
      }
      setOrdersLoading(false);
    } catch (error) {
      console.error("Erreur lors de la récupération des commandes:", error);
      setOrdersLoading(false);
    }
  }

  function handleEdit() {
    setIsEditing(true);
  }

  function handleCancel() {
    setIsEditing(false);
    setFormData(user);
    setErrors({});
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  function validateForm() {
    let valid = true;
    let errors = {};

    if (!formData.firstName) {
      errors.firstName = "Le prénom est requis.";
      valid = false;
    }

    if (!formData.lastName) {
      errors.lastName = "Le nom de famille est requis.";
      valid = false;
    }

    if (!formData.email) {
      errors.email = "L'email est requis.";
      valid = false;
    } else if (!validateEmail(formData.email)) {
      errors.email = "L'email n'est pas valide.";
      valid = false;
    }

    setErrors(errors);
    return valid;
  }

  async function handleSave() {
    if (!validateForm()) return;

    try {
      const response = await fetch("/api/account", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        setUser(data.user);
        setIsEditing(false);
      } else {
        console.error(data.error);
      }
    } catch (error) {
      console.error(
        "Erreur lors de la mise à jour des données utilisateur:",
        error
      );
    }
  }

  return (
    <section className="w-full h-fit px-20 my-40 flex flex-row md:flex-row md:text-left text-center gap-12 xl:px-80 flex-wrap">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-start lg:gap-14 md:gap-10 gap-8 inline-flex">
          <div className="w-full flex-col justify-start items-start gap-4 flex">
            <h1 className="text-primary font-black text-5xl w-full">
              Mon compte
            </h1>
            <p className="text-secondary text-base font-light leading-relaxed">
              Retrouvez et modifiez vos informations personnelles. Vous pouvez
              également consulter vos commandes.
            </p>
          </div>
          {loading && <AccountSkeleton />}
          {!loading && user && (
            <ProfilInfos
              user={user}
              isEditing={isEditing}
              formData={formData}
              errors={errors}
              handleChange={handleChange}
              handleEdit={handleEdit}
              handleCancel={handleCancel}
              handleSave={handleSave}
            />
          )}
        </div>
      </div>
      <OrderInfos orders={orders} ordersLoading={ordersLoading} />
    </section>
  );
}
