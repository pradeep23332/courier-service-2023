import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./routes/login";
import Dashboard from "./routes/Admindash";
import CreateDelivery from "./routes/DeliveryRoutes/createDelivery";
import Orders from "./routes/DeliveryRoutes/orders";
import RoutePlanning from "./routes/DeliveryRoutes/RoutePlanning";
import CustomerHome from "./routes/DamageDetect/CustomerHome";
import Inquiry from "./routes/DamageDetect/inquiry";
import ScanQR from "./routes/DamageDetect/ScanQR";
import PackageStatus from "./routes/DamageDetect/PackageStatus";
import InquiryStatus from "./routes/DamageDetect/InquiryStatus";
import AdminHome from "./routes/DamageDetect/AdminHome";
import PackageDispatch from "./routes/DamageDetect/PackageDispatch";

// PAGES
import Tickets from "./pages/Tickets"
import SingleOrder from "./routes/DeliveryRoutes/singleOrder";
import SingleOrderUpdate from "./routes/DeliveryRoutes/singleOrderUpdate";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Login/>}/>
          <Route path="/Dashboard" element={<Dashboard/>}/>
          <Route path="/CreateDelivery" element={<CreateDelivery/>}/>
          <Route path="/Orders" element={<Orders/>}/>
          <Route path="/RoutePlanning" element={<RoutePlanning/>}/>
          <Route path="/CustomerHome" element={<CustomerHome/>}/>
          <Route path="/Inquiry" element={<Inquiry/>}/>
          <Route path="/ScanQR" element={<ScanQR/>}/>
          <Route path="/PackageStatus" element={<PackageStatus/>}/>
          <Route path="/InquiryStatus" element={<InquiryStatus/>}/>
          <Route path="/AdminHome" element={<AdminHome/>}/>
          <Route path="/PackageDispatch" element={<PackageDispatch/>}/>
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/SingleOrder/:id" element={<SingleOrder/>}/>
          <Route path="/SingleOrderUpdate/:id" element={<SingleOrderUpdate/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}
export default App;