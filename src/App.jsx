import { useState, useEffect } from "react";

import Bopup from "./Bopup";
import "/src/App.css";
function App() {
  const [personData, setPersonData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    Age: "",
    status: "",
  });

  const [personsSheet, setPersonsSheet] = useState([]);

  function handelAddButton() {
    if (
      personData.firstName !== "" &&
      personData.lastName !== "" &&
      personData.Age !== "0" &&
      personData.country !== "" &&
      personData.status !== ""
    )
      setPersonsSheet((prev) => [
        ...prev,
        { ...personData, id: prev.length + 1 },
      ]);
    else alert("please fill the box");
  }
  
const[selectedPerson,setSelecterPerson]=useState(null)
  
  const handleShow = (person) => {
    
  setSelecterPerson(person)
  }
 const handleSaveChanges = (updatedPerson) => {
   setPersonsSheet((prev) =>
     prev.map((p) => (p.id === updatedPerson.id ? updatedPerson : p))
   );
  setSelecterPerson(null); // قفل المودال
 };  

  return (
    <div className="container ">
      <form
        className="mt-5"
        action=""
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="">
          <label htmlFor="name" className="form-label fw-bold">
            First Name
          </label>
          <input
            value={personData.firstName}
            onChange={(e) => {
              setPersonData({ ...personData, firstName: e.target.value });
            }}
            type="text"
            className="form-control"
          />
        </div>
        <div className="group-form">
          <label htmlFor="" className="form-label fw-bold">
            Last Name
          </label>
          <input
            value={personData.lastName}
            onChange={(e) => {
              setPersonData({ ...personData, lastName: e.target.value });
            }}
            type="text"
            className="form-control"
          />
        </div>
        <div className="">
          <label htmlFor="age" className="form-label fw-bold">
            Age
          </label>
          <input
            value={personData.Age}
            onChange={(e) => {
              setPersonData({ ...personData, Age: e.target.value });
            }}
            type="text"
            className="form-control"
          />
        </div>
        <select
          className="mt-4 d-flex m-auto"
          value={personData.country}
          onChange={(e) => {
            setPersonData({ ...personData, country: e.target.value });
          }}
        >
          <option value="Egypt">Egypt</option>
          <option value="USA">USA</option>
          <option value="Turkish">Turkish</option>
        </select>

        <div className="my-3  d-flex justify-content-center">
          <input
            className="mx-3"
            type="radio"
            value="studet"
            name="status"
            onChange={(e) => {
              setPersonData({ ...personData, status: e.target.value });
            }}
          />
          student
          <input
            className="mx-3"
            type="radio"
            name="status"
            value="teacher"
            checked={personData.status == "teacher"}
            onChange={(e) => {
              setPersonData({ ...personData, status: e.target.value });
            }}
          />
          teacher
        </div>

        <div class="d-grid gap-2">
          <button
            onClick={handelAddButton}
            class="btn btn-primary btn-lg"
            type="submit"
          >
            ADD New
          </button>
        </div>
      </form>

      <div className="container-fluid">
        <table className="container mt-5 table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>status</th>
              <th>county</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {  personsSheet !== " " &&
              personsSheet.map((person) => (
                <tr key={person.id}>
                  <td>
                    {person.firstName} {person.lastName}
                  </td>
                  <td>{person.Age}</td>
                  <td>{person.status}</td>
                  <td>{person.country}</td>
                  <td>
                    <button
                      type="button"
                      onClick={()=>{handleShow(person)}}
                      className="btn m-2 btn-success btn-sm"
                    >
                      Edit
                    </button>
                    {selectedPerson && (
                      <Bopup
                        show={true}
                        person={selectedPerson}
                        onSave={handleSaveChanges}
                        onClose={() => setSelecterPerson(null)}
                      />
                    )}
                    <button
                      onClick={() => {
                        setPersonsSheet((prev) =>
                          prev.filter((user) => user.id !== person.id)
                        );
                      }}
                      className="btn m-2 btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
