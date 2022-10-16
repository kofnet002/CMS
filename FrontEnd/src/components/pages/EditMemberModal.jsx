import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { FaUserEdit } from "react-icons/fa";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import APIServices from "../APIServices";

export default function EditMemberModal({ member, updatedMemberInformation }) {
  const [show, setShow] = useState(false);
  const [person, setPerson] = useState({
    firstName: member.first_name,
    middleName: member.middle_name,
    lastName: member.last_name,
    age: member.age,
    gender: member.gender,
    resident: member.resident,
    occupation: member.occupation,
    mobileNumber: member.mobile_number,
    dateOfRegistration: member.registration_date,
    dateOfBirth: member.date_of_birth,
    maritalStatus: member.marital_status,
    nameOfSpouse: member.name_of_spouse,
    phoneNumberOfSpouse: member.phone_number_of_spouse,
    baptism: member.baptism,
    churchOfBaptism: member.church_of_baptism,
    emergencyContactPerson: member.emergency_contact_person,
    emergencyContactNumber: member.emergency_contact_number,
  });

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...member, [name]: value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    APIServices.UpdateMember(person.id, {
      // id: person.id,
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
    .then((resp) => updatedMemberInformation(resp))
    .then((resp) => alert("Updated successfully"));
  };
  return (
    <>
      <i onClick={() => setShow(!show)}>
        <FaUserEdit />
      </i>

      <Modal show={show} centered size="xl">
        <Modal.Header className="modalHeader">
          <Modal.Title className="modalTitle">Edit Member</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <Form> */}
          <Row className="mb-3">
            <Col>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Kofi"
                id="firstName"
                name="firstName"
                defaultValue={member.first_name}
                onChange={handleOnChange}
              />
            </Col>
            <Col>
              <Form.Label>Middle Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Optional"
                id="middleName"
                name="middleName"
                defaultValue={member.middle_name}
                onChange={handleOnChange}
              />
            </Col>
            <Col>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Frimpong"
                id="lastName"
                name="lastName"
                defaultValue={member.last_name}
                onChange={handleOnChange}
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                placeholder="Age"
                id="age"
                name="age"
                defaultValue={member.age}
                onChange={handleOnChange}
              />
            </Col>
            <Col>
              <Form.Label>Gender</Form.Label>
              <Form.Select
                type="select"
                placeholder="Marital Status"
                id="gender"
                name="gender"
                defaultValue={member.gender}
                onChange={handleOnChange}
              >
                <option>----------</option>
                defaultdefaultValue={member.gender}
                <option>Male</option>
                defaultValue={member.gender}
                <option>Female</option>
                defaultValue={member.gender}
              </Form.Select>
            </Col>
            <Col>
              <Form.Label>Resident</Form.Label>
              <Form.Control
                type="text"
                placeholder="Resident"
                id="resident"
                name="resident"
                defaultValue={member.resident}
                onChange={handleOnChange}
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Form.Label>Occupation</Form.Label>
              <Form.Control
                type="text"
                placeholder="Eg. Doctor"
                id="occupation"
                name="occupation"
                defaultValue={member.occupation}
                onChange={handleOnChange}
              />
            </Col>
            <Col>
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="0544636910"
                id="mobileNumber"
                name="mobileNumber"
                defaultValue={member.mobile_number}
                onChange={handleOnChange}
              />
            </Col>
            <Col sm={8}>
              <Form.Label>Date of Registration</Form.Label>
              <Form.Control
                type="date"
                placeholder="Registration Date"
                id="dateOfRegistration"
                name="dateOfRegistration"
                defaultValue={member.registration_date}
                onChange={handleOnChange}
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                type="date"
                placeholder="Date of Birth"
                id="dateOfBirth"
                name="dateOfBirth"
                defaultValue={member.date_of_birth}
                onChange={handleOnChange}
              />
            </Col>
            <Col>
              <Form.Label>Marital Status</Form.Label>
              <Form.Select
                type="select"
                placeholder="Marital Status"
                id="maritalStatus"
                name="maritalStatus"
                defaultValue={member.marital_status}
                onChange={handleOnChange}
              >
                <option>----------</option>
                defaultValue={member.marital_status}
                <option>Single</option>
                defaultValue={member.marital_status}
                <option>Married</option>
                defaultValue={member.marital_status}
                <option>Divorced</option>
                defaultValue={member.marital_status}
                <option>Widow</option>
              </Form.Select>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Form.Label>Name of spouse</Form.Label>
              <Form.Control
                type="text"
                placeholder="Frimpong"
                id="nameOfSpouse"
                name="nameOfSpouse"
                defaultValue={member.name_of_spouse}
                onChange={handleOnChange}
              />
            </Col>
            <Col>
              <Form.Label>Number of spouse</Form.Label>
              <Form.Control
                type="number"
                placeholder="0544636910"
                id="phoneNumberOfSpouse"
                name="phoneNumberOfSpouse"
                defaultValue={member.phone_number_of_spouse}
                onChange={handleOnChange}
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Form.Label>Are you Baptised ?</Form.Label>
              <Form.Select
                type="select"
                placeholder="Baptised"
                id="baptism"
                name="baptism"
                defaultValue={member.baptism}
                onChange={handleOnChange}
              >
                <option>----------</option>
                defaultValue={member.baptism}
                <option>Yes</option>
                defaultValue={member.baptism}
                <option>No</option>
                defaultValue={member.baptism}
              </Form.Select>
            </Col>
            <Col>
              <Form.Label>Church of Baptism, if yes</Form.Label>

              <Form.Control
                type="text"
                placeholder="Church of Bapitsm"
                id="churchOfBaptism"
                name="churchOfBaptism"
                defaultValue={member.church_of_baptism}
                onChange={handleOnChange}
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Form.Label>Emergency Contact Person</Form.Label>
              <Form.Control
                type="text"
                placeholder="Frimpong"
                id="emergencyContactPerson"
                name="emergencyContactPerson"
                defaultValue={member.emergency_contact_person}
                onChange={handleOnChange}
              />
            </Col>
            <Col>
              <Form.Label>Emergency Contact Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="0544636910"
                id="emergencyContactNumber"
                name="emergencyContactNumber"
                defaultValue={member.emergency_contact_number}
                onChange={handleOnChange}
              />
            </Col>
          </Row>
          {/* </Form> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleUpdate}>
            Update
          </Button>
          <Button variant="danger" onClick={() => setShow(!show)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
