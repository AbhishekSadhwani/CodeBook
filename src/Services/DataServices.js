// functions for getting and posting data using API calls

// accessing the user data (token and id) from the Session Storage
const getSessionData = () => {
    const token = JSON.parse(sessionStorage.getItem("token"));
    const cbid = JSON.parse(sessionStorage.getItem("cbid"));

    return {token, cbid};    
};

// function to get details of the logged in User using the token from the session 
export async function getUser() {
    const sessionData = getSessionData();

    // data to be passed with the API request
    const requestData = {
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            Authorization: `Bearer ${sessionData.token}`
        }
    }
    const response = await fetch(`${process.env.REACT_APP_HOST}/600/users/${sessionData.cbid}`, requestData);
    if(!response.ok){
        const errorMessage = {message:response.statusText, status:response.status};
        throw errorMessage;
    }
    const data = await response.json();
    return data;
}


// function to create an order, passing the cart details along with the details of the user who places the order through API request
export async function createOrder(cartList,total,user) {
    const sessionData = getSessionData();
    // order data to be passed in API call
    const orderData = {
        cartList: cartList,
        amount: total,
        user:{
            name: user.name,
            email: user.email,
            id: user.id}
    }

    // data to be passed with the API request
    const requestData = {
        method: "POST",
        headers: {"Content-Type":"application/json", Authorization:`Bearer ${sessionData.token}`},
        body:JSON.stringify(orderData),
        payment_id: `xyz_${Math.floor(Math.random()*100000000)}`
    };

    const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders`, requestData);
    if(!response.ok){
        const errorMessage = {message:response.statusText, status:response.status};
        throw errorMessage;
    }
    const data = await response.json();

    return data;
}

// function to have API call to get all orders details on the dashboard for the logged in user
export async function getUserOrders(){
    const sessionData = getSessionData();
    const requestedData = {
        method: "GET",
        headers : {"Content-Type":"application.json", Authorization:`Bearer ${sessionData.token}`}
      };

    const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders?user.id=${sessionData.cbid}`, requestedData);
    if(!response.ok){
        const errorMessage = {message:response.statusText, status:response.status};
        throw errorMessage;
    }
    const data = await response.json();
      
    return data;

}