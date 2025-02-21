import { replaceCart } from "./CartSlice";
import { showNotification } from "./UISlice";

export function fetchCartData() {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch('https://shopwithme-57fe2-default-rtdb.firebaseio.com/cart.json');
      const data = await response.json();
      console.log('fetchData', data);
      return data;
    }
    try {
      const cartData = await fetchData(); 
      console.log('cartData', cartData);
      dispatch(replaceCart({items: cartData ? cartData.items : []}));
    } catch (error) {
      dispatch(showNotification({
        status: 'error',
        title: 'Error',
        message: 'Fetching cart data failed'
    }));
  }
  }
}

// created custom action creators here so that app.js code will be much cleaner
// This is a thunk. Thunk is a function that returns a function which eventually is a action
export function sendCartData(cart) { 
  return (dispatch) => {
    async function callApi(){
      console.log('callApi', cart);
      dispatch(showNotification({
        status: 'pending',
        title: 'Sending', 
        message: 'Sending cart data'
      }));
      const response =  await fetch('https://shopwithme-57fe2-default-rtdb.firebaseio.com/cart.json', 
        {
          method: 'PUT',
          body: JSON.stringify({items: cart.items ? cart.items : []})
        }
      );
      if (!response.ok) {
        dispatch(showNotification({
          status: 'error',
          title: 'Error',
          message: 'Sending cart data failed'
        }));
      } 
      dispatch(showNotification({
        status: 'success',
        title: 'Success',
        message: 'Sent cart data successfully'
      }));
    }
  
    callApi().catch(error => {
      dispatch(showNotification({
        status: 'error',
        title: 'Error',
        message: 'Sending cart data failed'
      }));
    });
  }
 }