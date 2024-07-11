export async function login(loginData){
  const requestData = {
    method: "POST",
    headers: {"content-Type": "application/json"},
    body: JSON.stringify(loginData)
  };

  const response = await fetch(`${process.env.REACT_APP_HOST}/login`, requestData);
  if(!response.ok){
    throw {message:response.statusText, status:response.status};
  }
    
  const data = await response.json();

  if(data.accessToken){
    sessionStorage.setItem("token",JSON.stringify(data.accessToken));
    sessionStorage.setItem("cbid",JSON.stringify(data.user.id));
  }
  
  return data;
};

export async function register(userRegisterData){
  const requestDetails = {
    method: "POST",
    headers: {"content-Type":"application/json"},
    body: JSON.stringify(userRegisterData)
  };

  const response = await fetch(`${process.env.REACT_APP_HOST}/register`, requestDetails);
  if(!response.ok){
    throw {message:response.statusText, status:response.status};
  }
  const data = await response.json();
  
  if(data.accessToken){
    sessionStorage.setItem("token",JSON.stringify(data.accessToken));
    sessionStorage.setItem("cbid",JSON.stringify(data.user.id));
  }

  return data;
};


export async function logout(){
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("cbid");
};