import { useEffect, useState } from "react";

const SearchModal = () => {
  const [query, setQuery] = useState("");
  const [material, setMaterial] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [category, setCategory] = useState("");
  const [inStock, setInStock] = useState(false);

  const [materialsList, setMaterialsList] = useState([]);
  const [categoriesList, setCategoriesList] = useState([]);

  useEffect(() => {
    fetch("/api/materials")
      .then((res) => res.json())
      .then((data) => setMaterialsList(data.materials));
  }, []);

  useEffect(() => {
    fetch("/api/categories")
      .then((res) => res.json())
      .then((data) => setCategoriesList(data.categories));
  }, []);

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (query) params.append("query", query);
    if (material) params.append("material", material);
    if (minPrice) params.append("minPrice", minPrice);
    if (maxPrice) params.append("maxPrice", maxPrice);
    if (category) params.append("category", category);
    if (inStock) params.append("inStock", inStock.toString());

    window.location.href = `/products?${params.toString()}`;
  };

  return (
    <section className="pt-24 pb-16 relative">
      <div className="flex w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto justify-center flex-col items-center">
        <h2 className="title font-bold text-4xl leading-10 mb-8 text-center text-primary">
          Recherche
        </h2>
        <div className="w-full space-y-8 font-normal">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher par titre ou description"
            className="input w-full"
          />
          <select
            value={material}
            onChange={(e) => setMaterial(e.target.value)}
            className="input w-full"
          >
            <option value="">Sélectionnez un type de matériaux</option>

            {materialsList &&
              materialsList.map((material) => (
                <option key={material.id} value={material.id}>
                  {material.label}
                </option>
              ))}
          </select>
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            placeholder="Prix minimum"
            className="input w-full"
          />
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            placeholder="Prix maximum"
            className="input w-full"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="input w-full"
          >
            <option value="">Sélectionnez une catégorie</option>

            {categoriesList &&
              categoriesList.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.label}
                </option>
              ))}
          </select>

          <label className="w-full flex items-center">
            <input
              type="checkbox"
              checked={inStock}
              onChange={(e) => setInStock(e.target.checked)}
              className="mr-3 checkbox"
            />
            Produits en stock uniquement
          </label>
          <button
            onClick={handleSearch}
            className="btn btn-primary mt-4 w-full"
          >
            Rechercher
          </button>
        </div>
      </div>
    </section>
  );
};

export default SearchModal;
