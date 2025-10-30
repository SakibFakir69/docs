

import React, { useState } from "react";

function App() {
  const [db, setDB] = useState([]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    number: "",
  });

  // handel from

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    setForm((prev) => ({ ...prev, [name]: value }));
    //// copy prev value on from ( copy object)
  };

  const handleFormSubmission = (e) => {
    // target get -> target element
    // value -> get element filed value

    e.preventDefault();
    setForm(form);
    setDB((prev) => [...prev, form]);
    // copy prev data , and add new from data 

    console.log(form, "from");
  };
  console.log(db);

  return (
    <div>
      <form onSubmit={handleFormSubmission}>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <input
          name="number"
          value={form.number}
          onChange={handleChange}
          placeholder="Number"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
