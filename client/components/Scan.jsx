import React from 'react';

const Scan = ({ getContact }) => {
  return (
   <div className="main">
      <div className="flex-container title">Please scan your ID</div>
      <div className="flex-container fa fa-id-card"></div>
      <div className="flex-container text-input">
        <form >
          <input
            name="idNum"
            type="text"
            onChange={getContact}
          />
        </form>
      </div>
  </div>
  )
};

export default Scan;