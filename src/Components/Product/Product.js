const Product = (props) => {
  console.log(props)
  return(
    <div>
      <p>{props.name}</p>
      <p>{props.price}</p>
      {props.children}
    </div>
  );
};

export default Product