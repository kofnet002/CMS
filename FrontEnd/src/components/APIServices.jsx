
export default class APIServices {
  static UpdateMember(id, body) {
    return fetch(`http://localhost:8000/api/members/${id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((resp) => resp.json());
  }

  static InsertMember(body) {
    return fetch("http://localhost:8000/api/members/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((resp) => resp.json());
  }

  static DeleteMember(id) {
    return fetch(`http://localhost:8000/api/members/${id}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
