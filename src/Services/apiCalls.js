const API_URL = "https://react-fast-pizza-api.onrender.com/api";

export async function getMenu(){
   const res = await fetch(`${API_URL}/menu`);

   if(!res.ok){
      throw new Error("Failed to get menu.");
   }

   const data = await res.json();
   return data.data;
}

export async function getOrder(id){
   const res = await fetch(`${API_URL}/order/${id}`);

   if(!res.ok){
      throw new Error(`Could not find order id: ${id}`);
   }

   const data = await res.json();
   return data.data;
}

export async function createOrder(newOrder){
   const res = await fetch(`${API_URL}/order`, {
      method: "POST",
      body: JSON.stringify(newOrder),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if(!res.ok){
      throw new Error("Error in creating a new order.");
    }
    const data = await res.json();
    return data.data;
}

