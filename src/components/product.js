import './product.css';
export default function product(props) {
    return (
        <div className="card">
            <img src={props.product.image} alt="product"></img>
            <h1>{props.product.title}</h1>
            <p>{props.product.description}</p>
            <p> <span> Price</span> {props.product.price} $</p>
            

        </div>
    )
}