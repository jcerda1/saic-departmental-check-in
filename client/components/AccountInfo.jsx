import React from 'react';

const AccountInfo = ({ Name, Email, EMPLIDPeoplesoftKey__c }) => {
  return (
      <div className="account">
        <div className="flex-container title user-info">
          <div className="username line title">{Name}</div>
          <table>
           <tbody>
              <tr>
                <td><b>email: </b>{Email}</td>
                <td><b>ID Number: </b>{EMPLIDPeoplesoftKey__c}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
};

export default AccountInfo;