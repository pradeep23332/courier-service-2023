import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import AdminSidepanel from "./AdminSidepanel";
import QRCode from "qrcode.react";

function PackageDispatch() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const senderName = searchParams.get("sender");
  const receiverName = searchParams.get("receiver");
  const packageId = searchParams.get("packageId");

  const handleSubmit = (event) => {
    event.preventDefault();
    
  };

  return (
    <div className="main-body h-screen w-full bg-slate-100">
      <div className="main-body-container h-screen w-full flex flex-row">
        <AdminSidepanel />
        <div className="w-5/6 side-panel bg-slate-100 p-5">
          <div className="common-body p-5 flex flex-col h-full items-center justify-center">
            <div className="form-body w-[80%] flex flex-col p-5 mx-auto items-center justify-center bg-white rounded-lg shadow-md shadow-slate-300">
              <form onSubmit={handleSubmit} className="flex flex-col w-full text-center">
                <div className="QR text-center justify-center items-center w-full p-5 flex flex-row">
                  <QRCode
                    value={`Sender: ${senderName}\nReceiver: ${receiverName}\nPackage ID: ${packageId}`}
                    size={200}
                    className="mx-auto"
                  />
                  
                </div>

                <div className="flex flex-row space-x-3 w-full">
                  <Link to="/AdminHome" className="w-full">
                    <button
                      type="submit"
                      className="py-2 px-4 bg-blue-500 text-white rounded-lg w-full"
                    >
                      Submit
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PackageDispatch;
