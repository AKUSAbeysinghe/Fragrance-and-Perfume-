import React, { useEffect, useState } from "react";

const AdminPanel = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [filteredSubcategories, setFilteredSubcategories] = useState([]);

  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [previewImage, setPreviewImage] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    fragrance_type: "",
    tagline: "",
    top_notes: "",
    heart_notes: "",
    base_notes: "",
    price: "",
    size: "100ml",
    image: null,
    image_url: "",
    sample_available: true,
    category_id: "",
    subcategory_id: "",
  });

  // ---------------- FETCH DATA ----------------
  const fetchProducts = async () => {
    try {
      const res = await fetch("http://localhost/perfume_db/api/get_products.php");
      const data = await res.json();
      if (data.success) setProducts(data.data || []);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchCategories = async () => {
    try {
      const res = await fetch("http://localhost/perfume_db/api/get_categories.php");
      const data = await res.json();
      if (data.success) setCategories(data.data || []);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchSubcategories = async () => {
    try {
      const res = await fetch("http://localhost/perfume_db/api/get_subcategories.php");
      const data = await res.json();
      if (data.success) setSubcategories(data.data || []);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCategories();
    fetchSubcategories();
  }, []);

  // Filter subcategories when category changes
  useEffect(() => {
    if (formData.category_id) {
      const filtered = subcategories.filter(
        (sub) => sub.category_id === parseInt(formData.category_id)
      );
      setFilteredSubcategories(filtered);
    } else {
      setFilteredSubcategories([]);
    }
  }, [formData.category_id, subcategories]);

  // ---------------- HANDLE CHANGE ----------------
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "file") {
      const file = files[0];
      setFormData((prev) => ({ ...prev, image: file }));
      setPreviewImage(URL.createObjectURL(file));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // ---------------- RESET FORM ----------------
  const resetForm = () => {
    setFormData({
      name: "",
      fragrance_type: "",
      tagline: "",
      top_notes: "",
      heart_notes: "",
      base_notes: "",
      price: "",
      size: "100ml",
      image: null,
      image_url: "",
      sample_available: true,
      category_id: "",
      subcategory_id: "",
    });
    setPreviewImage(null);
    setIsEditing(false);
    setEditId(null);
    setFilteredSubcategories([]);
  };

  // ---------------- SUBMIT ----------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    Object.keys(formData).forEach((key) => {
      if (formData[key] !== null && formData[key] !== "") {
        form.append(key, formData[key]);
      }
    });

    if (isEditing) form.append("id", editId);

    const url = isEditing
      ? "http://localhost/perfume_db/api/update_product.php"
      : "http://localhost/perfume_db/api/add_product.php";

    try {
      const res = await fetch(url, { method: "POST", body: form });
      const data = await res.json();

      if (data.success) {
        setMessage(isEditing ? "Product Updated ✨" : "Perfume Added ✨");
        setShowForm(false);
        resetForm();
        fetchProducts();
      } else {
        setError(data.message || "Operation failed");
      }
    } catch (err) {
      setError("Server error");
    }
  };

  // ---------------- EDIT ----------------
  const handleEdit = (p) => {
    setFormData({
      name: p.name || "",
      fragrance_type: p.fragrance_type || "",
      tagline: p.tagline || "",
      top_notes: p.top_notes || "",
      heart_notes: p.heart_notes || "",
      base_notes: p.base_notes || "",
      price: p.price || "",
      size: p.size || "100ml",
      image: null,
      image_url: p.image_url || "",
      sample_available: Boolean(p.sample_available),
      category_id: p.category_id || "",
      subcategory_id: p.subcategory_id || "",
    });

    setPreviewImage(
      p.image_url ? `http://localhost/perfume_db/${p.image_url}` : null
    );

    setIsEditing(true);
    setEditId(p.id);
    setShowForm(true);
  };

  // ---------------- DELETE ----------------
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this perfume?")) return;

    try {
      await fetch("http://localhost/perfume_db/api/delete_product.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `id=${id}`,
      });
      fetchProducts();
    } catch (err) {
      console.error(err);
    }
  };

  // ---------------- UI ----------------
  return (
    <div className="min-h-screen bg-[#0a0908] text-[#e5d5be] p-10">
      {/* HEADER */}
      <div className="mb-10 border-b border-amber-900 pb-6">
        <h1 className="text-4xl font-serif text-amber-200">Perfume Atelier Admin</h1>
        <p className="text-sm text-amber-700">Manage luxury fragrance compositions</p>
      </div>

      <button
        onClick={() => {
          resetForm();
          setShowForm(true);
        }}
        className="mb-8 px-6 py-3 border border-amber-600 hover:bg-amber-900 text-amber-300 uppercase text-xs tracking-widest transition"
      >
        + Add New Perfume
      </button>

      {/* PRODUCTS GRID */}
      <div className="grid md:grid-cols-3 gap-6">
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-[#0d0a08] border border-amber-900/30 rounded-xl overflow-hidden hover:border-amber-700 transition"
          >
            <img
              src={
                p.image_url
                  ? `http://localhost/perfume_db/${p.image_url}`
                  : "https://via.placeholder.com/500x300/1a140f/8b6f47?text=No+Image"
              }
              className="h-52 w-full object-cover"
              alt={p.name}
            />

            <div className="p-5 space-y-2">
              <h2 className="text-xl font-serif text-amber-100">{p.name}</h2>
              <p className="text-amber-600 text-sm">{p.fragrance_type}</p>
              <p className="italic text-xs text-amber-400">"{p.tagline}"</p>

              <div className="text-xs text-gray-400 space-y-1">
                <p>Top: {p.top_notes}</p>
                <p>Heart: {p.heart_notes}</p>
                <p>Base: {p.base_notes}</p>
              </div>

              <div className="flex justify-between items-center pt-3">
                <span className="text-amber-200 font-medium">
                  €{p.price} • {p.size}
                </span>
                <span className="text-xs text-amber-600">
                  {p.sample_available ? "✓ Sample" : "No Sample"}
                </span>
              </div>

              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => handleEdit(p)}
                  className="flex-1 py-2 text-xs border border-blue-500 text-blue-300 hover:bg-blue-950 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(p.id)}
                  className="flex-1 py-2 text-xs border border-red-500 text-red-300 hover:bg-red-950 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ADD / EDIT FORM */}
      {showForm && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center p-6 z-50">
          <form
            onSubmit={handleSubmit}
            className="bg-[#0d0a08] border border-amber-900 p-8 w-full max-w-2xl rounded-xl max-h-[90vh] overflow-y-auto"
          >
            <h2 className="text-3xl font-serif text-amber-200 mb-6">
              {isEditing ? "Edit Perfume" : "New Fragrance Composition"}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="name"
                placeholder="Perfume Name *"
                value={formData.name}
                onChange={handleChange}
                required
                className="p-3 bg-black border border-amber-900 focus:border-amber-600 outline-none"
              />

              <input
                name="fragrance_type"
                placeholder="Fragrance Type (e.g. Oriental Woody)"
                value={formData.fragrance_type}
                onChange={handleChange}
                className="p-3 bg-black border border-amber-900 focus:border-amber-600 outline-none"
              />
            </div>

            <input
              name="tagline"
              placeholder="Tagline / Slogan"
              value={formData.tagline}
              onChange={handleChange}
              className="w-full mt-4 p-3 bg-black border border-amber-900 focus:border-amber-600 outline-none"
            />

            {/* Notes */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              <input
                name="top_notes"
                placeholder="Top Notes"
                value={formData.top_notes}
                onChange={handleChange}
                className="p-3 bg-black border border-amber-900 focus:border-amber-600 outline-none"
              />
              <input
                name="heart_notes"
                placeholder="Heart Notes"
                value={formData.heart_notes}
                onChange={handleChange}
                className="p-3 bg-black border border-amber-900 focus:border-amber-600 outline-none"
              />
              <input
                name="base_notes"
                placeholder="Base Notes"
                value={formData.base_notes}
                onChange={handleChange}
                className="p-3 bg-black border border-amber-900 focus:border-amber-600 outline-none"
              />
            </div>

            {/* Price & Size */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              <input
                name="price"
                type="number"
                step="0.01"
                placeholder="Price (€)"
                value={formData.price}
                onChange={handleChange}
                required
                className="p-3 bg-black border border-amber-900 focus:border-amber-600 outline-none"
              />
              <input
                name="size"
                placeholder="Size (e.g. 100ml)"
                value={formData.size}
                onChange={handleChange}
                className="p-3 bg-black border border-amber-900 focus:border-amber-600 outline-none"
              />
            </div>

            {/* Category & Subcategory */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <select
                  name="category_id"
                  value={formData.category_id}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-black border border-amber-900 focus:border-amber-600 outline-none"
                >
                  <option value="">Select Category</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <select
                  name="subcategory_id"
                  value={formData.subcategory_id}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-black border border-amber-900 focus:border-amber-600 outline-none"
                  disabled={!formData.category_id}
                >
                  <option value="">Select Subcategory</option>
                  {filteredSubcategories.map((sub) => (
                    <option key={sub.id} value={sub.id}>
                      {sub.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Image Upload */}
            <div className="mt-6">
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleChange}
                className="block w-full text-sm text-amber-400 file:mr-4 file:py-2 file:px-4 file:border file:border-amber-700 file:bg-black file:text-amber-300"
              />
              {previewImage && (
                <img
                  src={previewImage}
                  alt="Preview"
                  className="mt-4 h-40 object-cover rounded border border-amber-900"
                />
              )}
            </div>

            <label className="flex items-center gap-2 mt-6 text-amber-300">
              <input
                type="checkbox"
                name="sample_available"
                checked={formData.sample_available}
                onChange={handleChange}
              />
              Sample Available
            </label>

            <div className="flex justify-end gap-4 mt-8">
              <button
                type="button"
                onClick={() => {
                  setShowForm(false);
                  resetForm();
                }}
                className="px-6 py-3 border border-amber-800 hover:bg-amber-950"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-8 py-3 bg-amber-800 hover:bg-amber-700 text-amber-100 font-medium transition"
              >
                {isEditing ? "Update Perfume" : "Add Perfume"}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Messages */}
      {message && (
        <div className="fixed bottom-6 right-6 bg-green-900 text-green-200 px-6 py-3 rounded border border-green-700">
          {message}
        </div>
      )}
      {error && (
        <div className="fixed bottom-6 right-6 bg-red-900 text-red-200 px-6 py-3 rounded border border-red-700">
          {error}
        </div>
      )}
    </div>
  );
};

export default AdminPanel;