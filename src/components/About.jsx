import React from 'react'
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";

function About() {
  return (
    <div>
    <div className="col-md-12">
        <div id="carouselExample" className='carousel slide'>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={img1} className='d-block w-100' alt="img1" />
                </div>
                <div className="carousel-item">
                    <img src={img2} className='d-block w-100' alt="img2" />
                </div>
                <div className="carousel-item">
                    <img src={img3} className='d-block w-100' alt="img3" />
                </div>
            </div>
            <button className="carousel-control-prev" type='button' data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className='carousel-control-prev-icon' aria-hidden="true"></span>
                <span className='visually-hidden'>Previous</span>
            </button> 
            <button className="carousel-control-next" type='button' data-bs-target="#carouselExample" data-bs-slide="next">
                <span className='carousel-control-next-icon' aria-hidden="true"></span>
                <span className='visually-hidden'>Next</span>
            </button> 
        </div>
    </div>
    </div>
  )
}

export default About