"use client";

import { Edit, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);
  const [formData, setFormData] = useState({
    id: null,
    name: "",
    description: "",
    price: "",
    stock: "",
    categoryId: "",
    thumbnail: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchProductsAndCategories();
  }, []);

  async function fetchProductsAndCategories() {
    try {
      const [productsResponse, categoriesResponse] = await Promise.all([
        fetch("/api/products"),
        fetch("/api/categories"),
      ]);

      const productsData = await productsResponse.json();
      const categoriesData = await categoriesResponse.json();

      if (productsResponse.ok) {
        setProducts(productsData.products);
      } else {
        console.error(productsData.message);
      }

      if (categoriesResponse.ok) {
        setCategories(categoriesData.categories);
      } else {
        console.error(categoriesData.message);
      }
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des produits ou des catégories:",
        error
      );
    }
  }

  const totalProducts = products.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  const currentProducts = products.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = isEditing ? `/api/product?id=${formData.id}` : "/api/product";
    const method = isEditing ? "PUT" : "POST";

    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setFormData({
          id: null,
          name: "",
          description: "",
          price: "",
          stock: "",
          categoryId: "",
          thumbnail: "",
        });
        setIsEditing(false);
        fetchProductsAndCategories();
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error("Erreur lors de l'enregistrement du produit:", error);
    }
  };

  const handleEdit = (product) => {
    setFormData(product);
    setIsEditing(true);
  };

  const handleDelete = async (productId) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer ce produit ?")) {
      try {
        const response = await fetch(`/api/product?id=${productId}`, {
          method: "DELETE",
        });

        const data = await response.json();

        if (response.ok) {
          fetchProductsAndCategories();
        } else {
          console.error(data.message);
        }
      } catch (error) {
        console.error("Erreur lors de la suppression du produit:", error);
      }
    }
  };

  return (
    <div className="w-full h-fit px-20 my-40 flex flex-col md:text-left text-center xl:px-80">
      <div className="w-full flex-col justify-start items-start lg:gap-14 md:gap-10 gap-8 inline-flex">
        <div className="w-full flex-col justify-start items-start gap-4 flex">
          <h1 className="text-primary font-black text-5xl w-full">
            Tableau de bord - Produits
          </h1>
          <p className="text-secondary text-base font-light leading-relaxed">
            Bienvenue sur votre tableau de bord.
          </p>
        </div>
      </div>

      {/* Form to Add/Edit Product */}
      <form onSubmit={handleSubmit} className="mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Nom du produit"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="input input-bordered w-full"
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleInputChange}
            required
            className="input input-bordered w-full"
          />
          <input
            type="number"
            name="price"
            placeholder="Prix"
            value={formData.price}
            onChange={handleInputChange}
            required
            className="input input-bordered w-full"
          />
          <input
            type="number"
            name="stock"
            placeholder="Stock"
            value={formData.stock}
            onChange={handleInputChange}
            required
            className="input input-bordered w-full"
          />
          <select
            name="categoryId"
            value={formData.categoryId}
            onChange={handleInputChange}
            required
            className="select select-bordered w-full"
          >
            <option value="">Sélectionner une catégorie</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.label}
              </option>
            ))}
          </select>
          <input
            type="text"
            name="thumbnail"
            placeholder="URL de l'image"
            value={formData.thumbnail}
            onChange={handleInputChange}
            required
            className="input input-bordered w-full"
          />
        </div>
        <button type="submit" className="btn btn-primary mt-4">
          {isEditing ? "Modifier" : "Ajouter"} le produit
        </button>
        {isEditing ? (
          <button
            className="btn btn-secondary mt-4 ml-2"
            onClick={() => {
              setFormData({
                id: null,
                name: "",
                description: "",
                price: "",
                stock: "",
                categoryId: "",
                thumbnail: "",
              });
              setIsEditing(false);
            }}
          >
            Annuler
          </button>
        ) : null}
      </form>

      <div className="overflow-x-auto mt-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Nom du produit</th>
              <th>Description</th>
              <th>Prix</th>
              <th>Stock</th>
              <th>Catégories</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentProducts &&
              currentProducts.map((product) => (
                <tr key={product.id}>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={product.thumbnail} alt={product.name} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{product.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>{product.description}</td>
                  <td>{product.price}€</td>
                  <td>
                    <span className="badge badge-ghost badge-sm">
                      {product.stock}
                    </span>
                  </td>
                  <td>
                    {
                      categories.find(
                        (category) => category.id === product.categoryId
                      )?.label
                    }
                  </td>
                  <td>
                    <button
                      className="btn btn-secondary"
                      onClick={() => handleEdit(product)}
                    >
                      <Edit size={16} />
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(product.id)}
                    >
                      <X size={16} />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
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
