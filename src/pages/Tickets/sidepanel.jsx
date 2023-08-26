import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTicket, faList } from '@fortawesome/free-solid-svg-icons'

export default function Sidepanel() {
  return(
    <div className="w-[300px] side-panel p-5 flex flex-col justify-center items-center bg-[#d7002a] ">
      <div className="sidepalen-body h-2/3 p-3 w-full justify-center">
          <div className="user-profile flex flex-row items-center space-x-5">
              <label className="text-[28px]">
                  <FontAwesomeIcon icon={faTicket} color="white" />
              </label>
              <span className="user-name text-[22px] text-white">Tickets</span>
          </div>

          <div className="nav-body w-full flex-col justify-center space-y-5 mt-10">
            <ul className="space-y-5">
              <Link to="/tickets"><li className="p-2 w-full bg-white rounded-md mb-5">
                <FontAwesomeIcon icon={faList} className="mr-5"/>All Tickets</li>
              </Link>
              <Link to="/manualTickets"><li className="p-2 w-full rounded-md mb-5">
                <FontAwesomeIcon icon={faList} className="mr-5"/>Manual Tickets</li>
              </Link>
            </ul>
          </div>
      </div>
    </div>
  );
}
