import product_data from "./data"
import Product from "./components/product"
import "./myStyle.css";

export default function product_list() {
    const product = product_data.map((e) => {
        return (
            <Product  key={e.id} product={e} />
        )
    })
    return <div className="product_list">
        <div className="row">
        {product}

        </div>
 
   
    </div>
    
}

