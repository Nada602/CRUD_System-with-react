import { useState,useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";

function Bopup({show,person,onSave,onClose}) {
  const [editedData,setEditedData]=useState(person);
   

   const handleSave = () => {
     onSave(editedData);
   };
   


  return (
    <>
      <Modal show={show} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Data you want</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
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
                value={editedData.firstName}
                onChange={(e) => {
                  setEditedData({ ...editedData, firstName: e.target.value });
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
                value={editedData.lastName}
                onChange={(e) => {
                  setEditedData({ ...editedData, lastName: e.target.value });
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
                value={editedData.Age}
                onChange={(e) => {
                  setEditedData({ ...editedData, Age: e.target.value });
                }}
                type="text"
                className="form-control"
              />
            </div>
            <select
              value={editedData.country}
              onChange={(e) => {
                setEditedData({ ...editedData, country: e.target.value });
              }}
              className="mt-4 d-flex m-auto"
            >
              <option value="Egypt">Egypt</option>
              <option value="USA">USA</option>
              <option value="Turkish">Turkish</option>
            </select>

            <div className="my-3  d-flex justify-content-center">
              <input
                className="mx-3"
                type="radio"
                value="student"
                name="status"
                checked={editedData.status == "student"}
                onChange={(e) => {
                  setEditedData({ ...editedData, status: e.target.value });
                }}
              />
              student
              <input
                className="mx-3"
                type="radio"
                name="status"
                value="teacher"
                checked={editedData.status == "teacher"}
                onChange={(e) => {
                  setEditedData({ ...editedData, status: e.target.value });
                }}
              />
              teacher
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Bopup;
