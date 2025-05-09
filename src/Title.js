import React from 'react'

export default function Title(props) {
  return (
    <div>
        <h1 style={{backgroundColor:'orange',borderBottom:'5px solid red', textAlign:"center"}} >{props.mainTitle}</h1>
    </div>
  )
}

// export default function Title({mainTitle, subtitle}) {
//   return (
//     <div>
//         <h1 style={{backgroundColor:'orange',borderBottom:'5px solid red'}} >
//            {mainTitle}
//            {subTitle}
//         </h1>
//     </div>
//   )
// }
