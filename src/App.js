import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { Fragment, useEffect } from 'react';
import Notification from './components/Notification/Notification';
import { fetchCartData, sendCartData } from './redux/CartActions';

let isInitial = true;
function App() {
  const dispatch = useDispatch();
  const cartIsVisible = useSelector(state => state.ui.cartIsVisible);
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification);

useEffect(() => {
  dispatch(fetchCartData());
}, [dispatch]);

  useEffect(() => {
    
    if (isInitial) {
      isInitial = false;
      return;
    } 
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }

  }, [cart, dispatch])
  
  return (
    <Fragment>
     {notification && 
     <Notification
        title={notification.title}
        status={notification.status}
        message={notification.message} />}
      <Layout>
        {cartIsVisible && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
