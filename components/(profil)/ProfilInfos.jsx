// ProfilInfos.jsx
import React from "react";

export default function ProfilInfos({
  user,
  isEditing,
  formData,
  errors,
  handleChange,
  handleEdit,
  handleCancel,
  handleSave,
}) {
  return (
    <div className="w-full flex-col justify-start items-start gap-6 flex">
      <h4 className="text-primary text-3xl font-bold leading-loose">
        Informations personnelles
      </h4>
      <div className="w-full flex-col justify-start items-start gap-8 flex">
        <div className="w-full justify-start items-start gap-8 flex sm:flex-row flex-col">
          <div className="w-full flex-col justify-start items-start gap-1.5 flex">
            <label className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed">
              Prénom
            </label>
            <input
              type="text"
              name="firstName"
              className={`w-full focus:outline-none ${
                errors.firstName ? "border-red-500" : "bg-accent"
              } text-primary placeholder-secondary text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border ${
                errors.firstName ? "border-red-500" : "border-gray-200"
              } justify-start items-center gap-2 inline-flex`}
              value={formData.firstName}
              onChange={handleChange}
              readOnly={!isEditing}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName}</p>
            )}
          </div>
          <div className="w-full flex-col justify-start items-start gap-1.5 flex">
            <label className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed">
              Nom de famille
            </label>
            <input
              type="text"
              name="lastName"
              className={`w-full focus:outline-none ${
                errors.lastName ? "border-red-500" : "bg-accent"
              } text-primary placeholder-secondary text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border ${
                errors.lastName ? "border-red-500" : "border-gray-200"
              } justify-start items-center gap-2 inline-flex`}
              value={formData.lastName}
              onChange={handleChange}
              readOnly={!isEditing}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm">{errors.lastName}</p>
            )}
          </div>
        </div>
        <div className="w-full justify-start items-start gap-8 flex sm:flex-row flex-col">
          <div className="w-full flex-col justify-start items-start gap-1.5 flex">
            <label className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed">
              Email
            </label>
            <input
              type="email"
              name="email"
              className={`w-full focus:outline-none ${
                errors.email ? "border-red-500" : "bg-accent"
              } text-primary placeholder-secondary text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border ${
                errors.email ? "border-red-500" : "border-gray-200"
              } justify-start items-center gap-2 inline-flex`}
              value={formData.email}
              onChange={handleChange}
              readOnly={!isEditing}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          <div className="w-full flex-col justify-start items-start gap-1.5 flex">
            <label className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed">
              Adresse
            </label>
            <input
              type="text"
              name="address"
              className="w-full focus:outline-none bg-accent text-primary placeholder-secondary text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex"
              value={formData.address}
              onChange={handleChange}
              readOnly={!isEditing}
            />
          </div>
        </div>
        <div className="w-full justify-start items-start gap-8 flex sm:flex-row flex-col">
          <div className="w-full flex-col justify-start items-start gap-1.5 flex">
            <label className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed">
              Ville
            </label>
            <input
              type="text"
              name="city"
              className="w-full focus:outline-none bg-accent text-primary placeholder-secondary text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex"
              value={formData.city}
              onChange={handleChange}
              readOnly={!isEditing}
            />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-start gap-4 mt-4">
        {isEditing ? (
          <>
            <button
              className="bg-accent text-primary px-5 py-2 rounded-lg"
              onClick={handleCancel}
            >
              Annuler
            </button>
            <button
              className="bg-primary text-accent px-5 py-2 rounded-lg"
              onClick={handleSave}
            >
              Sauvegarder
            </button>
          </>
        ) : (
          <button
            className="bg-primary text-accent px-5 py-2 rounded-lg"
            onClick={handleEdit}
          >
            Modifier mon profil
          </button>
        )}
      </div>
    </div>
  );
}
