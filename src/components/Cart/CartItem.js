import { useDispatch } from 'react-redux';
import classes from './CartItem.module.css';
import { addItem, removeItem } from '../../redux/CartSlice';

const CartItem = (props) => {
  const { title, quantity, price, id } = props.item;
  const dispatch = useDispatch();
  const total = quantity * price;

  function onRemoveHandler(){
    dispatch(removeItem(props.item));
  }

  function onAddHandler(){
    dispatch(addItem(props.item));
  }

  return (
    <li className={classes.item} key={id}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={onRemoveHandler}>-</button>
          <button onClick={onAddHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
