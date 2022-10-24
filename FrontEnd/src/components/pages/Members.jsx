import React, { useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import MembersData from "./MembersData";
import { FaUsers } from "react-icons/fa";
import { FaMale } from "react-icons/fa";
import { FaFemale } from "react-icons/fa";
import AddMemberModal from "./AddMemberModal";
import EditMemberModal from "./EditMemberModal";
import APIServices from "../APIServices";
import Swal from "sweetalert2";

const Members = () => {
  const [members, setMembers] = React.useState([]);

  // Fetching data from the backend
  useEffect(() => {
    fetch("http://localhost:8000/api/members/", {
      method: "GET",
      headers: {
        "Content-Type": "Application/json",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setMembers(resp))
      .catch((error) => console.log(error));
  }, []);

  // Handling user data input with error messages
  const validateForm = {
    nameErrorMessage:
      "Should be at least 3-10 characters long and shouldn't contain any special characters!",
    residentErrorMessage:
      "Should be at least 20 characters long, no special characters!",
    occupationErrorMessage:
      "Should be at least 50 characters long, no special characters!",
    numberErrorMessage: "Should be 10 characters long!",
    spouseErrorMessage:
      "Should be at least 7-40 characters long and shouldn't contain any special characters!",
    churchErrorMessage: "Shouldn't contain any special characters!",
    emergencyPersonErrorMessage:
      "Should be at least 7-40 characters long and shouldn't contain any special characters!",
  };

  //  AUTOMATICALLY UPDATING THE UI
  // Updating updated information by comparing the id of the updated member with that
  //  of the fetched member data in the frontend
  const updatedMemberInformation = (updateInfo) => {
    const updatedMember = members.map((member) => {
      if (member.id === updateInfo.id) {
        return updateInfo;
      } else {
        return member;
      }
    });
    setMembers(updatedMember);
  };

  // Automatically updating members after adding a new member
  const insertedMemberUpdate = (member) => {
    const newMember = [...members, member];
    setMembers(newMember);
  };

  // Automatically updating members after deleting a member
  const deleteUpdate = (id) => {
    const deleteMember = members.filter((member) => member.id !== id);
    setMembers(deleteMember);
  };

  // SweetAlert for Deletine member
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        APIServices.DeleteMember(id)
          .then(() => deleteUpdate(id))
          .catch((error) => console.log(error));
        Swal.fire("Deleted!", "Profile has been deleted.", "success")
      }
    });
  };

  // Total number of of males
  const totalMales = members.filter((members) => members.gender === "Male")

  // Total number of females
  const totalFemales = members.filter((members) => members.gender === "Female")

  return (
    <>
      <section className="container my-4">
        <div className="row">
          <MembersData
            avatar={<FaMale />}
            number={totalMales.length}
            text="Males"
          />
          <MembersData
            avatar={<FaFemale />}
            number={totalFemales.length}
            text="Females"
          />
          <MembersData
            avatar={<FaUsers />}
            number={members.length}
            text="Members"
          />
        </div>
      </section>
      <section className="container">
        <div className="card shadow p-3 mb-5 bg-body rounded">
          <div className="card-body all-members-table">
            <div className="mb-5 d-flex justify-content-between align-items-center">
              <h2>ALL MEMBERS</h2>
              <AddMemberModal
                validateForm={validateForm}
                insertedMemberUpdate={insertedMemberUpdate}
              />
            </div>
            <table className="shadow-lg p-3 bg-body rounded table table-md table-hover table-striped table-responsive-sm">
              <thead className="table-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Middle Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Resident</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Marital Status</th>
                  <th scope="col">Emg. Cont. Person</th>
                  <th scope="col">Emg. Cont. Number</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {members.map((data) => {
                  return (
                    <tr key={data.id}>
                      <td>{data.id}</td>
                      <td>{data.first_name}</td>
                      <td>{data.middle_name}</td>
                      <td>{data.last_name}</td>
                      <td>{data.gender}</td>
                      <td>{data.resident}</td>
                      <td>0{data.mobile_number}</td>
                      <td>{data.marital_status}</td>
                      <td>{data.emergency_contact_person}</td>
                      <td>0{data.emergency_contact_number}</td>
                      <td>
                        <i className="edit">
                          <EditMemberModal
                            member={data}
                            updatedMemberInformation={updatedMemberInformation}
                          />
                        </i>
                        <i
                          className="delete"
                          onClick={() => handleDelete(data.id)}
                        >
                          <FaTrash />
                        </i>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default Members;
