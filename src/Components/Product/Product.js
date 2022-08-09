import styles from "./product.module.css";

const Product = (props) => {
  console.log(props)
  return(
    <div className={styles.product} onClick={props.click}>
      <p>product name : {props.name} course</p>
      <p>product price : {props.price}</p>
      {props.children}
      <button onClick={props.onDelete}>delete</button>
    </div>
  );
};

export default Product