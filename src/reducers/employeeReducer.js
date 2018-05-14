import {
    RECEIVE_EMPLOYEES_LIST,
    RECEIVE_EMPLOYEES_LIST_ERROR
  } 
from "../actions/employeeAction";

export default function reducer(
    state= //Initial State
    {
      employeesList: [],
      error: null,
    }, action) {
    switch (action.type) {
      case RECEIVE_EMPLOYEES_LIST: {        
        return {
            ...state,
            employeesList: action.employeesList,
            error: null,
        }   
      }
      case RECEIVE_EMPLOYEES_LIST_ERROR: {
        return {
          ...state,
          error: action.error,
        }
      } 
      default:{
        return {
          ...state
        }
      }    
    }
    //  return state;
}