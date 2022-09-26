import React, { useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import { MembersData } from "./MembersData";
import AddMemberModal from "./AddMemberModal";
import EditMemberModal from "./EditMemberModal";
import APIServices from "../APIServices";

const Members = () => {
  const [members, setMembers] = React.useState([]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure ?")) {
      APIServices.DeleteMember(id);
      alert("Deleted successfully");
    }
  };

  useEffect(() => {
    fetch("/api/members/", {
      method: "GET",
      headers: {
        "Content-Type": "Application/json",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setMembers(resp))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <section className="container my-3">
        <div className="row">
          {MembersData.map((data) => {
            const { avatar, text, number } = data;
            return (
              <>
                <div className="col-md-3">
                  <div className="card shadow mb-2 bg-body rounded">
                    <div className="card-body p-0">
                      <div className="d-flex justify-content-evenly align-items-center">
                        <div className="avatar">{avatar}</div>
                        <div>
                          <h4>{text}</h4>
                          <h4>{number}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>

      <section className="container">
        <div className="card shadow p-3 mb-5 bg-body rounded">
          <div className="card-body all-members-table">
            <div className="mb-5 d-flex justify-content-between align-items-center">
              <h2>ALL MEMBERS</h2>
              <AddMemberModal />
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
                {members.map((data, index) => {
                  return (
                    <tr key={index}>
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
                        {/* <i onClick={() => handleUpdate(data)}>
                          <EditMemberModal member={data} />
                        </i> */}
                        <i className="edit">
                          <EditMemberModal member={data} />
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
