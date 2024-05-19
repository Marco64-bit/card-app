/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";

function Home() {
    return (
        <>
            <div className="col-md-4">
                <div className="card">
                    <img src={img1} className="card-img-top w-100" alt="img1" />
                    <div className="card-body">
                        <h5 className="card-title">Card Title</h5>
                        <p className="card-text">
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>{/* card */}
            </div>
            <div className="col-md-4">
                <div className="card">
                    <img src={img2} className="card-img-top w-100" alt="img1" />
                    <div className="card-body">
                        <h5 className="card-title">Card Title</h5>
                        <p className="card-text">
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>{/* card */}
            </div>
            <div className="col-md-4">
                <div className="card">
                    <img src={img3} className="card-img-top w-100" alt="img1" />
                    <div className="card-body">
                        <h5 className="card-title">Card Title</h5>
                        <p className="card-text">
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>{/* card */}
            </div>
        </>
    );
}

export default Home;
