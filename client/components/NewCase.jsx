import React from 'react';
import axios from 'axios';
import '../css/loading.gif';

const NewCase = ({ subject, handleEdit, loading, createNew }) => {
    return (
      <div className="flex-container new-case">
        <div className="form-title username line">New Case</div>
        <div className="flex-row">
          <div>Subject:</div>
          <div>
            <input
              className="case-subject"
              name="case-subject"
              type="text"
              value={subject}
              onChange={handleEdit}
            />
          </div>
          {loading ?
            <img src="assets/loading.gif"
              alt="Image not found"
              height="35"
              className="create"
            />
            :
            <div className="btn" onClick={createNew}>Create Case</div>
          }
        </div>
      </div>
    );
}

export default NewCase;