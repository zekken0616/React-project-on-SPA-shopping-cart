import React from 'react'
import { useState, useEffect } from 'react'
import styles from './ProductList.module.css'
import {Link} from 'react-router-dom'
import Title from './Title'
import QuantityBtn from './QuantityBtn'



export default function ProductList() {

  // const [showProduct, setShowProduct] = useState(false)
  let [productList, setProductList] = useState([])
  // let [input, setInput] = useState('')

  useEffect(
    ()=>{
      fetch('https://hoyinleung.github.io/demoapi/react-basic-product.json')
  .then(respose => respose.json())
  .then(data => setProductList(data))
    },[]
  )

  // useEffect(()=>{
  //   if(input.length>4)
  //     console.log('it is long')
  //   else
  //     console.log('it is short')
  // },
  // [input] //dependency array:

  // )

  return (
    <div>
      {/* <input type='text' onChange={e =>setInput(e.target.value) }/> */}
  {/* {showProduct && <button onClick={()=>{setShowProduct(false)}}>hide product</button>}
  {!showProduct && <button onClick={()=>{setShowProduct(true)}}>show product</button>} */}
        <Title mainTitle="Choose fruit you want to buy"/>
        <div>
            {
                // showProduct && 
                    productList.map(product=>(
                    <div className={styles.productBorder} key={product.id}>
                        {product.name}<br/>
                        {product.price}<br/>
                        <Link to={'/product/'+product.id}>
                          <img src={process.env.PUBLIC_URL+'/img/'+product.image} alt={product.name}/><br/>
                        </Link>
                        {product.description}<br/>
                        <QuantityBtn productInfo={product}/>
                    </div>       
                ))
            }
        </div>
    </div>
  )
}