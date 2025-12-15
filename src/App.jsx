import { useState } from "react";
import Dashboard from "./component/Dashboard.jsx";
import AddStudent from "./component/AddStudent.jsx";
import studentsData from "./data/students.js";
import Header from "./component/header.jsx";
import Footer from "./component/footer.jsx";
import "./App.css";


function App() {
  const [students, setStudents] = useState(studentsData);

  return (
    <>
      <Header />
      <Dashboard students={students} />
      <AddStudent students={students} setStudents={setStudents} />
      <Footer />
    </>
  );
}

export default App;
