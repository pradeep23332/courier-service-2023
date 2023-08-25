import {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'
import Sidepanel from "./sidepanel";
import { post } from "../../Api";
import bg from '../../images/mainbg.jpg';


function CreateDelivery()
{




    const handleSubmit = async (event) =>  {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        var postData = {
            branch_pickup:data.get('pickup'),
            vehicle: data.get('vehicle'),
            date: data.get('date'),
            destination: data.get('destination'),
            order_id: data.get('orderId'),
            status: 'Processing',
            estimated_date: data.get('date'),
            customer_id: data.get('customerId'),
            telephone_number: data.get('tp'),
            departure_date: data.get('departureDate'),
            
        };
        console.log(postData)
        try {
            const response = await post('/api/order/create', postData, {});
                if(response){
                    console.log(response)
                }
            
        } catch (error) {
            console.error(error);
        }
    };

    
   

    return(

            <div className="main-body h-screen w-full bg-slate-100">
                <img src={bg} alt="" srcset="" className="object-cover w-[100%] h-[100%]" />
                    <div className="main-body-container h-screen w-full flex flex-row absolute top-0 bg-black bg-opacity-50">
                        <Sidepanel/>
                        <div className="w-5/6 side-panel  p-5 md:ml-[300px] ml-16">
                          <div className="common-body p-5 flex flex-col h-full items-center justify-center">

                            <div className="form-body md:w-[80%] w-full flex flex-col p-5 mx-auto items-center justify-center bg-white rounded-lg ">
                                
                            <form onSubmit={handleSubmit} className="flex flex-col w-full">
                                <label htmlFor="customerId" className="mb-2 font-semibold text-gray-600">
                                    Customer ID
                                    </label>
                                    <input type="text" id="customerId" name="customerId" className="mb-4 p-2 rounded-lg border border-gray-300" />


                                    <label htmlFor="orderId" className="mb-2 font-semibold text-gray-600">
                                    Order ID
                                    </label>
                                    <input type="text" id="orderId" name="orderId" className="mb-4 p-2 rounded-lg border border-gray-300" />

                                    <label htmlFor="pickup" className="mb-2 font-semibold text-gray-600">
                                    Pickup
                                    </label>
                                    <input type="text" id="pickup" name="pickup" className="mb-4 p-2 rounded-lg border border-gray-300" />

                                    <label htmlFor="destination" className="mb-2 font-semibold text-gray-600">
                                    Destination
                                    </label>
                                    <input type="text" id="destination" name="destination" className="mb-4 p-2 rounded-lg border border-gray-300" />

                                    <label htmlFor="date" className="mb-2 font-semibold text-gray-600">
                                    Estimated Date
                                    </label>
                                    <input type="date" id="date" name="date" className="mb-4 p-2 rounded-lg border border-gray-300" />

                                    <label htmlFor="departureDate" className="mb-2 font-semibold text-gray-600">
                                    Departure Date
                                    </label>
                                    <input type="date" id="departureDate" name="departureDate" className="mb-4 p-2 rounded-lg border border-gray-300" />


                                    <label htmlFor="tp" className="mb-2 font-semibold text-gray-600">
                                    Telephone number
                                    </label>
                                    <input type="text" id="tp" name="tp" className="mb-4 p-2 rounded-lg border border-gray-300" />


                                    <label htmlFor="vehicle" className="mb-2 font-semibold text-gray-600">
                                    Vehicle
                                    </label>
                                    <select id="vehicle" name="vehicle" className="mb-4 p-2 rounded-lg border border-gray-300">
                                      <option value="car">Car</option>
                                      <option value="bike">Bike</option>
                                      <option value="truck">Truck</option>
                                    </select>

                                    <button type="submit" className="py-2 px-4 bg-gradient-to-r from-red-500 to-red-700 text-white rounded-lg">
                                    Create Delivery
                                    </button>
                                </form>





                            </div>


                          </div>
                        </div>
                        
                    </div>
            </div>

    );
}


export default CreateDelivery;