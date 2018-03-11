const AccountInfo = (props) => {
  return (
      <div className="account">
        <div className="flex-container title user-info">
          <div className="username line title">{}</div>

          <table>
           <tbody>
              <tr>
                <td><b>email: </b>{}</td>
                <td><b>ID Number: </b>{}</td>
              </tr>
              <tr></tr>
            </tbody>
          </table>
        </div>
      </div>
    )
};

export default AccountInfo;