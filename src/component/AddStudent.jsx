import { useState } from "react";

function AddStudent({ students, setStudents }) {
  const [form, setForm] = useState({
    name: "",
    age: "",
    major: "",
    university: "",
    averageGrade: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

   
    if (
      !form.name.trim() ||
      !form.major.trim() ||
      !form.university.trim() ||
      form.age === "" ||
      form.averageGrade === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    const ageNum = Number(form.age);
    const gradeNum = Number(form.averageGrade);

    if (Number.isNaN(ageNum) || Number.isNaN(gradeNum)) {
      alert("Age and Average Grade must be numbers");
      return;
    }

   
    const nextId = Math.max(0, ...students.map((s) => s.id)) + 1;

    const newStudent = {
      id: nextId,
      name: form.name.trim(),
      age: ageNum,
      major: form.major.trim(),
      university: form.university.trim(),
      averageGrade: gradeNum,
    };

    setStudents((prev) => [...prev, newStudent]);

  
    setForm({
      name: "",
      age: "",
      major: "",
      university: "",
      averageGrade: "",
    });
  }

  return (
    <div style={{ marginTop: 20 }}>
      <h2>Add Student</h2>

      <form onSubmit={handleSubmit} style={{ display: "grid", gap: 8, maxWidth: 420 }}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          name="age"
          placeholder="Age"
          value={form.age}
          onChange={handleChange}
        />

        <input
          name="major"
          placeholder="Major"
          value={form.major}
          onChange={handleChange}
        />

        <input
          name="university"
          placeholder="University"
          value={form.university}
          onChange={handleChange}
        />

        <input
          name="averageGrade"
          placeholder="Average Grade"
          value={form.averageGrade}
          onChange={handleChange}
        />

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddStudent;
