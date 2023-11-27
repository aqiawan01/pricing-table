import React from 'react';
import "./Sub.css";

const Sub = ({plan, theme, price, isBasic, isPro, isMaster, yearly, onBuy}) => {
  return (
    <div className="price-box --card">
      <div className={`box --p2 ${theme}`}>
        <p className="--text-light">{plan}</p>
        <h4 className="--text-light">
          <span>$</span>
          <span className="basic">{price}</span>
        </h4>
        {yearly && (<p className="--text-light"><del>30% Off</del></p>)}
        {isPro && <p className="--text-light">Everything in Basic, plus</p>}
        {isMaster && <p className="--text-light">Everything in Pro, plus</p>}
      </div>
      <div className="features"> 
        <ul>
          {isBasic &&  <li>Unlimited Pages</li> }
          {isBasic &&  <li>Unlimited Bandwidth</li> }
          {isBasic &&  <li>500GB storage</li> }

          {isPro &&  <li>10 Backup </li> }
          {isPro &&  <li>Email Support</li> }
          {isPro &&  <li>Github Tool</li> }

          {isMaster &&  <li>20 Backup </li> }
          {isMaster &&  <li>Push Notification</li> }
          {isMaster &&  <li>priority support</li> }

        </ul>
        <button className={`btn ${theme}`} onClick={onBuy}>Buy Now</button>
      </div>
    </div>
  )
}

export default Sub