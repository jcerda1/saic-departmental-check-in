import React from 'react';
import CaseItem from './CaseItem.jsx';
import Case from '../containers/Case.js';

class CaseList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { casesActions } = this.props;
    casesActions.getCases();
  }

  render() {
    return (
      <div className="flex-container case-list">
        <div className="form-title line username">Cases</div>
        {!this.props.cases ? <div className="flex-container">Getting Cases...</div>
        :
        <table className="case-table">
          <tbody>
            <tr>
              <th>Case#</th>
              <th className="subject-column">Subject</th>
              <th>Status</th>
              <th>Date Created</th>
            </tr>
            {this.props.cases.map((caseData, i)=> {
              return <Case
                      {...caseData}
                      key={i}
                    />
            })
            }
            </tbody>
        </table>

        }

      </div>
    );
  }
}

export default CaseList;