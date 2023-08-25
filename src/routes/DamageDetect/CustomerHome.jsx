import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import Sidepanel from "./sidepanel";
import qr from './images/qr.jpg';
import inq from './images/inq.jpg';

function CustomerHome() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="main-body h-screen w-full bg-slate-100">
      <div className="main-body-container h-screen w-full flex flex-row">
        <Sidepanel />
        <div className="w-5/6 side-panel bg-slate-100 p-5">
          <div className="common-body p-5 flex flex-col h-full items-center justify-center">
            <div className="form-body w-[80%] flex flex-row p-5 mx-auto items-center justify-center space-x-5">
              
              <Link to="/ScanQR"><div className="option-card p-5 w-[220px] border-[1px] border-gray-200 text-center rounded-md bg-white shadow-md shadow-slate-300">
                  <div className="card-body ">
                      <div className="img-box">
                        <img src={qr} alt="" srcset="" className="object-cover w-full h-full"/>
                      </div>
                      <div className="title p-3">
                            <h2 className="fonr-semibold text-gray-900">Scan QR now</h2>
                      </div>
                  </div>
              </div></Link>


              <Link to="/Inquiry"><div className="option-card p-5 w-[220px] border-[1px] border-gray-200 text-center rounded-md bg-white shadow-md shadow-slate-300">
                  <div className="card-body ">
                      <div className="img-box">
                        <img src={inq} alt="" srcset="" className="object-cover w-full h-full"/>
                      </div>
                      <div className="title p-3">
                            <h2 className="fonr-semibold text-gray-900">Inquiry</h2>
                      </div>
                  </div>
              </div></Link>



            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerHome;
