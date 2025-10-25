import React from 'react'
import categoryStyle from './category.module.css'
import { category } from '../../utils/category'

function Category() {
  return (
    <div className={categoryStyle.outerdiv}>
        <div className={categoryStyle.container}>
            {category.map(data=>(
                <div className={categoryStyle.card}
                style={{
                    backgroundImage:`url(${data.image})`,
                    backgroundSize:'cover'
                    
                }}>
                    <div className={categoryStyle.texts}>
                    <h2 className={categoryStyle.name}>{data.name}</h2>
                    <p className={categoryStyle.des}>{data.description}</p>
                    <a href="#" className={categoryStyle.links}>Shop Now</a>
                    </div>
                </div>
            ))}

        </div>
      
    </div>
  )
}

export default Category
