import React from 'react';

const Scan = (props) => {
  return (
   <div className="main">
      <div className="flex-container title">Please scan your ID</div>
      <div className="flex-container fa fa-id-card"></div>
      <div className="flex-container text-input">
        <form >
          <input
            name="idNum"
            type="text"
          />
        </form>
      </div>
  </div>
  )
};

export default Scan;