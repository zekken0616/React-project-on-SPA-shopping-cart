import React, { useState, useEffect } from 'react'
import {useParams, Link} from 'react-router-dom'
import Title from './Title'
import QuantityBtn from './QuantityBtn'

export default function ProductDetail() {

let params = useParams()
let [productDetail, setProductDetail] = useState(null)

  useEffect(()=>{
      fetch('https://hoyinleung.github.io/demoapi/react-basic-product.json')
  .then(respose => respose.json())
  .then(data => {
    let productInfo = data.find((element)=>{
      return element.id === parseInt(params.id)
    })
    setProductDetail(productInfo)
  })
    },[params.id]
  )

  return (
    <div>
        {
            productDetail &&
            <div>
                <Title mainTitle={productDetail.name+'產品資料'} />
                <img src={process.env.PUBLIC_URL+'/img/'+productDetail.image} alt={productDetail.name} width="400" />
                <p>名稱 : {productDetail.name}</p>
                <p>售價 : {productDetail.price}元</p>
                <p>描述 : {productDetail.description}</p>
                <QuantityBtn productInfo={productDetail} />
            </div>
        }
    
        <Link to="/">回到產品列表</Link>
    </div>
)
}
