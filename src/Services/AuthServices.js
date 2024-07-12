// Auth services => created to handle all the login or registration related API calls

// login function to handle login API call
export async function login(loginData){
  const requestData = {
    method: "POST",
    headers: {"content-Type": "application/json"},
    body: JSON.stringify(loginData)
  };

  const response = await fetch(`${process.env.REACT_APP_HOST}/login`, requestData);
  if(!response.ok){
    const errorMessage = {message:response.statusText, status:response.status};
    throw errorMessage;
  }
    
  const data = await response.json();
  
  // saving token and cbid in sessionStorage after successfull login so that it can be used later
  if(data.accessToken){
    sessionStorage.setItem("token",JSON.stringify(data.accessToken));
    sessionStorage.setItem("cbid",JSON.stringify(data.user.id));
  }
  
  return data;
};

// function to handle user registration api calls
export async function register(userRegisterData){
  const requestDetails = {
    method: "POST",
    headers: {"content-Type":"application/json"},
    body: JSON.stringify(userRegisterData)
  };

  const response = await fetch(`${process.env.REACT_APP_HOST}/register`, requestDetails);
  if(!response.ok){
    const errorMessage = {message:response.statusText, status:response.status};
    throw errorMessage;
  }
  const data = await response.json();
  
  // saving token and cbid in sessionStorage after successfull login so that it can be used later
  if(data.accessToken){
    sessionStorage.setItem("token",JSON.stringify(data.accessToken));
    sessionStorage.setItem("cbid",JSON.stringify(data.user.id));
  }

  return data;
};


// function to handle logout, clearing the sessionStorage
export async function logout(){
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("cbid");
};