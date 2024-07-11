import React from 'react'
import './Footer.css'
import { cities ,popularSearches} from '../../Data/data'

const Footer = () => {
const products = popularSearches.products
console.log(products)
  return (
    <div className='footer-con'>
      {/* <div className='horizontal_line'>
        <hr/>
        <img src='https://www.licious.in/image/rebranding/png/logo-homepage.png' alt='logo-homepage'/>
      </div> */}
      <div className='value-component-container'>
          <div className='value-component-content-container'>
              <div>
                <h3></h3>
              </div>
          </div>
      </div>
      <div className='cities'>
      <h1>Cities we serve</h1>
            <ul>
            
                {
                    cities.map((eachCity)=>
                        <li key ={eachCity}>{eachCity}</li>
                    )
                }
            </ul>
      </div>
      <div className='popular-searches-con'>
              <div className='popular-searches-content-con'>
                {
                  popularSearches.forEach((each_search) => 
                    each_search.products.map((each_search_item) =>
                      <h4>{each_search_item.category}</h4>
                     
                    )
                  )
                 
                }
              </div>
      </div>
      <div className='copy-right-con'>
                <div className='copy-right-content-con'>
                    <p className='copy-right-heading'>© 2021 Delightful Gourmet Pvt Ltd. All Rights Reserved.</p>
                    <p>Licious is your one-stop fresh meat delivery shop. In here, 
                      you get nothing but the freshest meat & seafood, delivered straight to your doorstep. 
                      Now you can buy meat online anytime at your convenience. Indulge in our diverse selection: Chicken, Mutton, Seafood (Fish, Prawns, Crabs), Marinades & Cold Cuts. All our products are completely natural and healthy. Once you`'`ve experienced Licious, you`'
                      `ll never go back to the old way of buying meat and seafood.</p>
                </div>
      </div>
    </div>
  )
}

export default Footer

