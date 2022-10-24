import React from 'react'

const MembersData = ({avatar, text, number}) => {
  return (
    <div className="col-md-4">
      <div className="card shadow mb-2 bg-body rounded">
        <div className="card-body p-0">
          <div className="d-flex justify-content-evenly align-items-center">
            <div className="avatar">
              {avatar}
            </div>
            <div>
              <h4>
                <b>{number}</b> {text}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MembersData

