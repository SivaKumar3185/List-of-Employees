import config from './app.config.json';


export function getEnvironmentVariables() { 
 // var env = process.env.NODE_ENV;  
  var env = process.env.NODE_ENV !== undefined ? process.env.NODE_ENV : 'development';  
  return config[env];
}

export function getEmployeesListUrl() { 
  var env_obj = getEnvironmentVariables(); 
  var serviceUrl = env_obj['list_of_employees_url'];        
  return serviceUrl;  
}