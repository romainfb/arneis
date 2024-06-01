import { useState } from "react";

const SearchModal = () => {
  const [query, setQuery] = useState("");
  const [material, setMaterial] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [category, setCategory] = useState("");
  const [inStock, setInStock] = useState(false);

  const handleSearch = () => {
    console.log(query, material, minPrice, maxPrice, category, inStock);
  };

  return (
    <section className="pt-24 pb-16 relative">
      <div className="flex w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto justify-center flex-col items-center">
        <h2 className="title font-bold text-4xl leading-10 mb-8 text-center text-primary">
          Recherche
        </h2>
        <div className="w-full max-w-xl">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher par titre ou description"
            className="input"
          />
          <input
            type="text"
            value={material}
            onChange={(e) => setMaterial(e.target.value)}
            placeholder="Matériau du produit"
            className="input"
          />
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            placeholder="Prix minimum"
            className="input"
          />
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            placeholder="Prix maximum"
            className="input"
          />
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Catégorie"
            className="input"
          />
          <label>
            <input
              type="checkbox"
              checked={inStock}
              onChange={(e) => setInStock(e.target.checked)}
              className="mr-2"
            />
            Produits en stock uniquement
          </label>
          <button onClick={handleSearch} className="btn btn-primary mt-4">
            Rechercher
          </button>
        </div>
      </div>
    </section>
  );
};

export default SearchModal;
