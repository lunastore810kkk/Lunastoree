import React from 'react'
import './App.css';
import SeeShop from './SeeShop';
import Shoping from './Shoping';
function Home() {
  return (
    <>
    
    
    
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src="WhatsApp_Image_2022-08-13_at_9.07.15_PM-removebg.png"
            alt="Trendy Pants and Shoes"
            className="img-fluid rounded-start"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
          <h5 className="card-title">Sky Three Neckless</h5>
        <p className="card-text">The Sky Three Neckless it have a pink color and selver circle in middle </p>
            <p className="card-text">
              <button className="button-muted">20EGY</button>
            </p>
          </div>
        </div>
      </div>
    </div>
    
    
    <SeeShop />
    
    <Shoping/>
        </>
  )
}

export default Home