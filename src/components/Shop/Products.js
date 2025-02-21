import ProductItem from './ProductItem';
import classes from './Products.module.css';
const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    title: 'Brinjal',
    price: 20,
    description: 'This is a first product - amazing!',
  },
  {
    id: 'p2',
    title: 'Potato',
    price: 60,
    description: 'This is a second product - amazing!',
  },
  {
    id: 'p3',
    title: 'Onion',
    price: 90,
    description: 'This is a third product - amazing!',
  }

]
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(product => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
