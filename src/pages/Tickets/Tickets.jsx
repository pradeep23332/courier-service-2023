import { Link } from "react-router-dom";
import Sidepanel from "./sidepanel";

export default function Tickets() {
    return (
      <div className="main-body h-screen w-full bg-slate-100">
        <div className="main-body-container h-screen w-full flex flex-row">
          <Sidepanel />
          <div className="w-5/6 side-panel bg-slate-100 p-5">
            <h2 className="mb-5">All Tickets</h2>

            <div class="flex flex-col">
              <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                  <div class="overflow-hidden">
                    <table class="min-w-full text-left text-sm font-light">
                      <thead class="border-b font-medium dark:border-neutral-500">
                        <tr>
                          <th scope="col" class="px-6 py-4">#ID</th>
                          <th scope="col" class="px-6 py-4">Customer's Name</th>
                          <th scope="col" class="px-6 py-4">Customer's Mobile</th>
                          <th scope="col" class="px-6 py-4">Status</th>
                          <th scope="col" class="px-6 py-4">Mode</th>
                          <th scope="col" class="px-6 py-4">Date</th>
                          <th scope="col" class="px-6 py-4">Action</th>
                        </tr>
                      </thead>
                      <tbody>

                        
                      <tr
                          class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                          <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
                          <td class="whitespace-nowrap px-6 py-4">Srivin Prabhash</td>
                          <td class="whitespace-nowrap px-6 py-4">763 256 000</td>
                          <td class="whitespace-nowrap px-6 py-4">Open</td>
                          <td class="whitespace-nowrap px-6 py-4">Ai</td>
                          <td class="whitespace-nowrap px-6 py-4">12-03-2001</td>
                          <td class="whitespace-nowrap px-6 py-4">
                            <Link to={"/ticket/1"}>
                              <button class="group relative h-8 w-24 overflow-hidden rounded-2xl bg-green-500 text-sm font-bold text-white">
                                View Ticket
                                <div class="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                              </button>
                            </Link>
                          </td>
                        </tr>

                        <tr
                          class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                          <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
                          <td class="whitespace-nowrap px-6 py-4">Srivin Prabhash</td>
                          <td class="whitespace-nowrap px-6 py-4">763 256 000</td>
                          <td class="whitespace-nowrap px-6 py-4">Pending</td>
                          <td class="whitespace-nowrap px-6 py-4">Human</td>
                          <td class="whitespace-nowrap px-6 py-4">12-03-2001</td>
                          <td class="whitespace-nowrap px-6 py-4">
                            <Link to={"/ticket/1"}>
                              <button class="group relative h-8 w-24 overflow-hidden rounded-2xl bg-green-500 text-sm font-bold text-white">
                                View Ticket
                                <div class="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                              </button>
                            </Link>
                          </td>
                        </tr>

                        <tr
                          class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                          <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
                          <td class="whitespace-nowrap px-6 py-4">Srivin Prabhash</td>
                          <td class="whitespace-nowrap px-6 py-4">763 256 000</td>
                          <td class="whitespace-nowrap px-6 py-4">Resolved</td>
                          <td class="whitespace-nowrap px-6 py-4">Human</td>
                          <td class="whitespace-nowrap px-6 py-4">12-03-2001</td>
                          <td class="whitespace-nowrap px-6 py-4">
                            <Link to={"/ticket/1"}>
                              <button class="group relative h-8 w-24 overflow-hidden rounded-2xl bg-green-500 text-sm font-bold text-white">
                                View Ticket
                                <div class="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                              </button>
                            </Link>
                          </td>
                        </tr>


                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    );
}
