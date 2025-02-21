import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { toggleCart } from '../../redux/UISlice';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const product = useSelector(state => state.cart.items);
  function cartHandler() {
    dispatch(toggleCart());
  }

  return (
    <button className={classes.button} onClick={cartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{product.length}</span>
    </button>
  );
};

export default CartButton;
