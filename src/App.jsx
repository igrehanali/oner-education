import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./contexts/AuthContext";
import "./App.css";
import Login from "./pages/Login";
import MainApp from "./pages/MainApp";
import MainSettings from "./pages/MainSettings";
import Dashboard from "./pages/Dashboard";
import Product from "./pages/Product";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import UsersDetails from "./pages/UsersDetails";
import Services from "./pages/Services";
import University from "./pages/University";
import Languages from "./pages/Languages";
import HighSchool from "./pages/HighSchool";
import Sports from "./pages/Sports";
import UniApplication from "./pages/UniApplication";
import SchoolApplication from "./pages/SchoolApplication";
import Signup from "./pages/Signup";
import Document from "./pages/Document";
import ViewDetails from "./pages/ViewDetails";
import BlockedAccount from "./pages/BlockedAccount";
import BlockedViewDetails from "./pages/BlockedViewDetails";
import HealthAndTravelInsurance from "./pages/HealthAndTravelInsurance";
import ESimPlans from "./pages/ESimPlans";
import AirportPickup from "./pages/AirportPickup";
import DormitoryPlacement from "./pages/DormitoryPlacement";
import VisaConsultation from "./pages/VisaConSultation";
import HealthViewDetails from "./pages/HealthViewDetails";
import SimViewDetails from "./pages/SimViewDetails";
import AirportViewDetails from "./pages/AirportViewDetails";
import DormitoryViewDetails from "./pages/DormitoryViewDetails";
import VisaViewDetails from "./pages/VisaViewDetails";
import Banner from "./pages/Banner";
import ResetLink from "./pages/ResetLink";
import ChangePassword from "./pages/ChangePassword";
import UpdatePassword from "./pages/UpdatePassword";
import Payments from "./pages/Payments";
import UniPayments from "./pages/UniPayments";
import SchoolPayments from "./pages/SchoolPayments";
import SportsPayments from "./pages/SportsPayments";
import LanguagePayments from "./pages/LanguagePayments";
import UniFees from "./pages/UniFees";
import SchoolFees from "./pages/SchoolFees";
import SportsFees from "./pages/SportsFees";
import LanguageFees from "./pages/LanguageFees";
import Chats from "./pages/Chats";
import AboutUs from "./pages/AboutUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermAndCondition from "./pages/TermAndCondition";
import ContactUs from "./pages/ContactUs";
import DocumentView from "./pages/DocumentView";
import Notification from "./pages/Notification";
import { AuthContextProvider } from "./contexts/AuthContext";

const App = () => {
  return (
    <div>
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/ResetLink" element={<ResetLink />} />
            <Route path="/ChangePassword" element={<ChangePassword />} />
            <Route path="/UpdatePassword" element={<UpdatePassword />} />
            <Route path="/app" element={<MainApp />}>
              <Route path="/app" element={<Dashboard />} />
              <Route path="/app/Dashboard" element={<Dashboard />} />
              <Route path="/app/Product" element={<Product />} />
              <Route path="/app/Users" element={<Users />} />
              <Route path="/app/Services" element={<Services />} />
              <Route path="/app/payments" element={<Payments />} />
              <Route path="/app/UsersDetails" element={<UsersDetails />} />

              <Route path="/app/University" element={<University />} />
              <Route path="/app/Languages" element={<Languages />} />
              <Route path="/app/HighSchool" element={<HighSchool />} />
              <Route path="/app/Sports" element={<Sports />} />
              <Route path="/app/UniApplication" element={<UniApplication />} />
              <Route
                path="/app/SchoolApplication"
                element={<SchoolApplication />}
              />

              <Route path="/app/Document" element={<Document />} />
              <Route path="/app/ViewDetails" element={<ViewDetails />} />
              <Route path="/app/BlockedAccount" element={<BlockedAccount />} />
              <Route
                path="/app/BlockedViewDetails"
                element={<BlockedViewDetails />}
              />
              <Route
                path="/app/HealthAndTravelInsurance"
                element={<HealthAndTravelInsurance />}
              />
              <Route path="/app/ESimPlans" element={<ESimPlans />} />
              <Route path="/app/AirportPickup" element={<AirportPickup />} />
              <Route
                path="/app/DormitoryPlacement"
                element={<DormitoryPlacement />}
              />
              <Route
                path="/app/VisaConsultation"
                element={<VisaConsultation />}
              />
              <Route
                path="/app/HealthViewDetails"
                element={<HealthViewDetails />}
              />

              <Route path="/app/SimViewDetails" element={<SimViewDetails />} />
              <Route
                path="/app/AirportViewDetails"
                element={<AirportViewDetails />}
              />
              <Route
                path="/app/DormitoryViewDetails"
                element={<DormitoryViewDetails />}
              />
              <Route
                path="/app/VisaViewDetails"
                element={<VisaViewDetails />}
              />
              <Route path="/app/Banner" element={<Banner />} />
              <Route path="/app/UniPayments" element={<UniPayments />} />
              <Route path="/app/SchoolPayments" element={<SchoolPayments />} />
              <Route path="/app/SportsPayments" element={<SportsPayments />} />
              <Route
                path="/app/LanguagePayments"
                element={<LanguagePayments />}
              />
              <Route path="/app/Settings" element={<Settings />} />
              <Route path="/app/UniFees" element={<UniFees />} />
              <Route path="/app/SchoolFees" element={<SchoolFees />} />
              <Route path="/app/SportsFees" element={<SportsFees />} />
              <Route path="/app/LanguageFees" element={<LanguageFees />} />
              <Route path="/app/Chats" element={<Chats />} />
              <Route path="/app/MainSettings" element={<MainSettings />}>
                <Route path="/app/MainSettings" element={<AboutUs />} />
                <Route
                  path="/app/MainSettings/PrivacyPolicy"
                  element={<PrivacyPolicy />}
                />
                <Route
                  path="/app/MainSettings/TermAndCondition"
                  element={<TermAndCondition />}
                />
                <Route
                  path="/app/MainSettings/ContactUs"
                  element={<ContactUs />}
                />
              </Route>
              <Route path="/app/DocumentView" element={<DocumentView />} />
              <Route path="/app/Notification" element={<Notification />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
};

export default App;
