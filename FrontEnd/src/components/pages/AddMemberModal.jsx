import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import APIServices from "../APIServices";
import Swal from "sweetalert2"

export default function AddMemberModal({ validateForm, insertedMemberUpdate }) {
  // SweetAlert for Adding a new member
  const addAlert = () => {
  Swal.fire("Success!", "Profile has been added.", "success");
  };

  // SweetAlert for invalid input data
  const invalidAlert = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please fill all data!",
    });
  };

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);

  const [person, setPerson] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    age: "",
    gender: "",
    resident: "",
    occupation: "",
    mobileNumber: "",
    dateOfRegistration: "",
    dateOfBirth: "",
    maritalStatus: "",
    nameOfSpouse: "",
    phoneNumberOfSpouse: "",
    baptism: "",
    churchOfBaptism: "",
    emergencyContactPerson: "",
    emergencyContactNumber: "",
  });

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.lastName) {
      APIServices.InsertMember({
        id: null,
        first_name: person.firstName,
        middle_name: person.middleName,
        last_name: person.lastName,
        age: person.age,
        gender: person.gender,
        resident: person.resident,
        occupation: person.occupation,
        mobile_number: person.mobileNumber,
        registration_date: person.dateOfRegistration,
        date_of_birth: person.dateOfBirth,
        marital_status: person.maritalStatus,
        name_of_spouse: person.nameOfSpouse,
        phone_number_of_spouse: person.phoneNumberOfSpouse,
        baptism: person.baptism,
        church_of_baptism: person.churchOfBaptism,
        emergency_contact_person: person.emergencyContactPerson,
        emergency_contact_number: person.emergencyContactNumber,
      })
        .then((resp) => insertedMemberUpdate(resp))
        .then((resp) => addAlert());

      setPerson({
        firstName: "",
        middleName: "",
        lastName: "",
        age: "",
        gender: "",
        resident: "",
        occupation: "",
        mobileNumber: "",
        dateOfRegistration: "",
        dateOfBirth: "",
        maritalStatus: "",
        nameOfSpouse: "",
        phoneNumberOfSpouse: "",
        baptism: "",
        churchOfBaptism: "",
        emergencyContactPerson: "",
        emergencyContactNumber: "",
      });
    } else {
      invalidAlert();
    }
  };
  return (
    <>
      <Button variant="success" onClick={handleShow}>
        <FaPlus className="me-2" />
        Add member
      </Button>

      <Modal show={show} centered size="xl">
        <Modal.Header className="modalHeader">
          <Modal.Title className="modalTitle">New Member</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="mb-3">
              <Col>
                <Form.Label>
                  First Name <small>*</small>
                </Form.Label>
                <Form.Control
                  sm={12}
                  type="text"
                  placeholder="Kofi"
                  id="firstName"
                  name="firstName"
                  value={person.firstName}
                  onChange={handleOnChange}
                  pattern="^[a-zA-Z]{3,10}$"
                />
                <span>{validateForm.nameErrorMessage}</span>
              </Col>
              <Col>
                <Form.Label>Middle Name</Form.Label>
                <Form.Control
                  sm={12}
                  type="text"
                  placeholder="Optional"
                  id="middleName"
                  name="middleName"
                  value={person.middleName}
                  onChange={handleOnChange}
                  pattern="^[a-zA-Z]{3,10}$"
                />
                <span>{validateForm.nameErrorMessage}</span>
              </Col>
              <Col>
                <Form.Label>
                  Last Name <small>*</small>
                </Form.Label>
                <Form.Control
                  sm={12}
                  type="text"
                  placeholder="Frimpong"
                  id="lastName"
                  name="lastName"
                  value={person.lastName}
                  onChange={handleOnChange}
                  pattern="^[A-Za-z]{3,10}$"
                />
                <span>{validateForm.nameErrorMessage}</span>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <Form.Label>
                  Age <small>*</small>
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Age"
                  id="age"
                  name="age"
                  value={person.age}
                  onChange={handleOnChange}
                />
              </Col>
              <Col>
                <Form.Label>
                  Gender <small>*</small>
                </Form.Label>
                <Form.Select
                  type="select"
                  placeholder="Marital Status"
                  id="gender"
                  name="gender"
                  value={person.gender}
                  onChange={handleOnChange}
                >
                  <option>----------</option>
                  value={person.gender}
                  <option>Male</option>
                  value={person.gender}
                  <option>Female</option>
                  value={person.gender}
                </Form.Select>
              </Col>
              <Col>
                <Form.Label>
                  Resident <small>*</small>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Resident"
                  id="resident"
                  name="resident"
                  value={person.resident}
                  onChange={handleOnChange}
                  pattern="^[A-Za-z0-9]{1,20}$"
                />
                <span>{validateForm.residentErrorMessage}</span>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <Form.Label>
                  Occupation <small>*</small>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Eg. Doctor"
                  id="occupation"
                  name="occupation"
                  value={person.occupation}
                  onChange={handleOnChange}
                  pattern="^[A-Za-z0-9]{1,50}"
                />
                <span>{validateForm.occupationErrorMessage}</span>
              </Col>
              <Col>
                <Form.Label>
                  Mobile Number <small>*</small>
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="0544636910"
                  id="mobileNumber"
                  name="mobileNumber"
                  value={person.mobileNumber}
                  onChange={handleOnChange}
                  pattern="^[0-9]{1,10}$"
                />
                <span>{validateForm.numberErrorMessage}</span>
              </Col>
              <Col>
                <Form.Label>
                  Date of Registration <small>*</small>
                </Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Registration Date"
                  id="dateOfRegistration"
                  name="dateOfRegistration"
                  value={person.dateOfRegistration}
                  onChange={handleOnChange}
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <Form.Label>
                  Date of Birth <small>*</small>
                </Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Date of Birth"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={person.dateOfBirth}
                  onChange={handleOnChange}
                />
              </Col>
              <Col>
                <Form.Label>
                  Marital Status <small>*</small>
                </Form.Label>
                <Form.Select
                  type="select"
                  placeholder="Marital Status"
                  id="maritalStatus"
                  name="maritalStatus"
                  value={person.maritalStatus}
                  onChange={handleOnChange}
                >
                  <option>----------</option>
                  value={person.maritalStatus}
                  <option>Single</option>
                  value={person.maritalStatus}
                  <option>Married</option>
                  value={person.maritalStatus}
                  <option>Divorced</option>
                  value={person.maritalStatus}
                  <option>Widow</option>
                </Form.Select>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <Form.Label>Name of spouse, if married</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Dr/Mr/Mrs/Ms Frimpong"
                  id="nameOfSpouse"
                  name="nameOfSpouse"
                  value={person.nameOfSpouse}
                  onChange={handleOnChange}
                  pattern="^[a-zA-Z]{7,40}$"
                />
                <span>{validateForm.spouseErrorMessage}</span>
              </Col>
              <Col>
                <Form.Label>Number of spouse</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="0544636910"
                  id="phoneNumberOfSpouse"
                  name="phoneNumberOfSpouse"
                  value={person.phoneNumberOfSpouse}
                  onChange={handleOnChange}
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <Form.Label>
                  Are you Baptised ? <small>*</small>
                </Form.Label>
                <Form.Select
                  type="select"
                  placeholder="Baptised"
                  id="baptism"
                  name="baptism"
                  value={person.baptism}
                  onChange={handleOnChange}
                >
                  <option>----------</option>
                  value={person.baptism}
                  <option>Yes</option>
                  value={person.baptism}
                  <option>No</option>
                  value={person.baptism}
                </Form.Select>
              </Col>
              <Col>
                <Form.Label>Church of Baptism, if yes</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Church of Bapitsm"
                  id="churchOfBaptism"
                  name="churchOfBaptism"
                  value={person.churchOfBaptism}
                  onChange={handleOnChange}
                  pattern="^[A-Za-z]{1,30}$"
                />
                <span>{validateForm.churchErrorMessage}</span>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <Form.Label>
                  Emergency Contact Person <small>*</small>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Dr/Mr/Mrs/Ms Frimpong"
                  id="emergencyContactPerson"
                  name="emergencyContactPerson"
                  value={person.emergencyContactPerson}
                  onChange={handleOnChange}
                  pattern="^[a-zA-Z]{7,40}$"
                />
                <span>{validateForm.emergencyPersonErrorMessage}</span>
              </Col>
              <Col>
                <Form.Label>
                  Emergency Contact Number <small>*</small>
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="0544636910"
                  id="emergencyContactNumber"
                  name="emergencyContactNumber"
                  value={person.emergencyContactNumber}
                  onChange={handleOnChange}
                  pattern="^[0-9]{(1, 10)}$"
                />
                <span>{validateForm.numberErrorMessage}</span>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleSubmit}>
            Add Member
          </Button>
          <Button variant="danger" onClick={handleShow}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
