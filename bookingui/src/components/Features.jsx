import React from 'react'
import Categories from '../pages/Categories'
import './Feature.scss'
const Features = () => {
  return (
    <div className='feature'>
        <div className='container'>
            <div className='listTitle'>
                <h2>依住宿類型瀏覽</h2>
            </div>
            <div className='listItems'>
                <Categories />
            </div>
        </div>
    </div>
  )
}

export default Features