import React from 'react';
import  { fetcheEmployeesList } from '../actions/employeeAction';
import  * as selectors from '../selectors/employeeSelector';
import { connect } from 'react-redux';

class App extends React.Component {
  constructor(props) {    
    super(props);
    this.props.dispatch(fetcheEmployeesList()); 
  }

  componentDidMount(){
    
  }
  
  render () {
    // const {
    //   employeesList
    // } = this.props;

    let empName = this.props.employeesList.map(employee => {
       return <li key={employee.id}>{employee.name }</li>;
    })
       
    return (
      <ul>
        <h2>List of Employees:-  </h2>
        {empName !== undefined ? empName : 'Not Available' } 
      </ul>

    );
  }
}

function mapStateToProps(state) {  
    return {        
      employeesList: selectors.getEmployeesList(state),        
    }
}

export default connect(mapStateToProps)(App);

