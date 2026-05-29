import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";

import Home from "./pages/Home";
import Booking from "./pages/Booking";
import MyOrders from "./pages/MyOrders";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Notifications from "./pages/Notifications";
import TrackOrder from "./pages/TrackOrder";
import AnalyticsDashboard from "./pages/AnalyticsDashboard";
import AdminPanel from "./admin/AdminPanel";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/orders" element={<MyOrders />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/track" element={<TrackOrder />} />
        <Route path="/analytics" element={<AnalyticsDashboard />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Layout>
  );
}