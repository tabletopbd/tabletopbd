import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import useAuthCheck from "./hooks/useAuthCheck";
import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";
import Navigation from './components/Navigation';
import Welcome from './pages/Welcome';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from './components/Footer';
import Restaurants from "./pages/Restaurants";
import RestaurantSingle from "./pages/SingleRestaurant";
import Admin from "./pages/admin/pages/Index";
import Users from "./pages/admin/pages/Users";
import Contact from "./pages/admin/pages/Contact";
import Bookings from "./pages/admin/pages/Bookings";
import Restaurant from "./pages/admin/pages/Restaurant";
import RestaurantForm from "./pages/admin/components/AddRestaurantForm";
import Loader from "./components/Looder";
import Favorite from "./pages/mobile/Favorite";
import PrivacyPolicy from "./pages/company/PrivacyPolicy";
import UserConditions from "./pages/company/UserConditions";
import AboutUs from "./pages/company/AboutUs";
import ContactUs from "./pages/company/ContactUs";
import Terms from "./pages/company/Terms";
import Dashboard from "./pages/mobile/Dashboard";
import Discounts from "./pages/mobile/Discounts";
import Locations from "./pages/mobile/Locations";
import Tips from "./pages/mobile/Tips";
import Follow from "./pages/mobile/Follow";
import MobileWelcome from "./pages/mobile/MobileWelcome";
import ChoosePage from "./pages/mobile/ChoosePage";
import PercantagePage from "./pages/mobile/PercentagePage";
import TimePage from "./pages/mobile/TimePage";



function App() {
  const authChecked = useAuthCheck();

  const device = window.cordova;
  
  const starterWelcomePage = ( 
        device ? (
            <MobileWelcome />
        ) : (
            ""
        )
  )
  const starterChoosePage = ( 
        device ? (
            <ChoosePage />
        ) : (
            ""
        )
  )
  const starterPercentagePage = ( 
        device ? (
            <PercantagePage />
        ) : (
            ""
        )
  )
  const starterTimePage = ( 
        device ? (
            <TimePage />
        ) : (
            ""
        )
  )

  const showDashboard = ( 
        device ? (
            <Dashboard />
        ) : (
            ""
        )
  )

  const showDiscounts = ( 
        device ? (
            <Discounts />
        ) : (
            ""
        )
  )

  const showLocations = ( 
        device ? (
            <Locations />
        ) : (
            ""
        )
  )

  const showTips = ( 
        device ? (
            <Tips />
        ) : (
            ""
        )
  )

  const showFollow = ( 
        device ? (
            <Follow />
        ) : (
            ""
        )
  )

  const showFavorite = ( 
        device ? (
            <Favorite />
        ) : (
            ""
        )
  )
  
  const Router = window.cordova ? HashRouter : BrowserRouter;

    return !authChecked ? (
        <Loader/>
    ) : (
      <div className="App">
        <div>
          <Router>
            <Routes>
                <Route path="/" element = {
                  <PublicRoute>
                      { device ? "" :  <Navigation /> }
                      <Welcome />
                      <Footer />
                  </PublicRoute>
                } />

                <Route path="/register" element={
                  <PublicRoute>
                    <Navigation />
                    <Register />
                    <Footer />
                  </PublicRoute>
                } />

                <Route path="/login" element={
                  <PublicRoute>
                    <Navigation />
                    <Login />
                    <Footer />
                  </PublicRoute>
                } />

                <Route path="/logout" element={
                  <PublicRoute>
                    <Navigation />
                    <Footer />
                  </PublicRoute>
                } />
              
                <Route path="/admin" element={
                  <PrivateRoute>
                    <Admin />
                  </PrivateRoute>
                } />
                
                <Route path="/users" element={
                  <PrivateRoute>
                    <Navigation />
                    <Users />
                  </PrivateRoute>
                } />

                <Route path="/restaurant/" element={
                  <PrivateRoute>
                    <Navigation />
                    <Restaurant />
                    <Footer />
                  </PrivateRoute>
                } />
                <Route path="/add-restaurant" element={
                  <PublicRoute>
                    <Navigation />
                    <RestaurantForm />
                    <Footer />
                  </PublicRoute>
                } />

                <Route path="/terms-and-conditions" element={
                  <PublicRoute>
                    <Navigation />
                    <Terms />
                    <Footer />
                  </PublicRoute>
                } />
                <Route path="/user-conditions" element={
                  <PublicRoute>
                    <Navigation />
                    <UserConditions />
                    <Footer />
                  </PublicRoute>
                } />

                <Route path="/privacy-policy" element={
                  <PublicRoute>
                    <Navigation />
                    <PrivacyPolicy />
                    <Footer />
                  </PublicRoute>
                } />

                <Route path="/about" element={
                  <PublicRoute>
                    <Navigation />
                    <AboutUs />
                    <Footer />
                  </PublicRoute>
                } />

                <Route path="/contactus" element={
                  <PublicRoute>
                    <Navigation />
                    <ContactUs />
                    <Footer />
                  </PublicRoute>
                } />

                {/* Admin Bookings */}
                <Route path="/bookings" element={
                  <PrivateRoute>
                    <Navigation />
                    <Bookings />
                  </PrivateRoute>
                } />

                {/* Admin/Contacts */}
                <Route path="/contact" element={
                  <PrivateRoute>
                    <Navigation />
                    <Contact />
                    <Footer />
                  </PrivateRoute>
                } />
              
                <Route path="/restaurants/:filter?/:value?" element={
                  <PublicRoute>
                    <Navigation />
                    <Restaurants />
                    <Footer />
                  </PublicRoute>
                } />
                {/* Mobile Welcome page */}
                <Route path="/starter-welcome" element={
                  <PublicRoute>
                    { starterWelcomePage }
                  </PublicRoute>
                } />

                <Route path="/starter-percentage" element={
                  <PublicRoute>
                    { starterPercentagePage }
                  </PublicRoute>
                } />

                <Route path="/starter-time" element={
                  <PublicRoute>
                    { starterTimePage }
                  </PublicRoute>
                } />

                <Route path="/starter-choose" element={
                  <PublicRoute>
                    { starterChoosePage }
                  </PublicRoute>
                } />

                <Route path="/dashboard" element={
                  <PublicRoute>
                    { showDashboard }
                  </PublicRoute>
                } />
                
                <Route path="/discounts" element={
                  <PublicRoute>
                    <Navigation />
                    { showDiscounts }
                  </PublicRoute>
                } />


                <Route path="/locations" element={
                  <PublicRoute>
                    <Navigation />
                    { showLocations }
                  </PublicRoute>
                } />

                <Route path="/tips" element={
                  <PublicRoute>
                    <Navigation />
                    { showTips }
                  </PublicRoute>
                } />

                <Route path="/follow" element={
                  <PublicRoute>
                    <Navigation />
                    { showFollow }
                  </PublicRoute>
                } />

                {/* Mobile welcome page end*/}

                {/* Mobile Favorite */}
                <Route path="/favorite" element={
                  <PublicRoute>
                    <Navigation />
                    { showFavorite }
                  </PublicRoute>
                } />
                {/* Mobile Favorite end*/}

                 <Route path="/restaurant/:id" element={
                  <PublicRoute>
                    <Navigation />
                    <RestaurantSingle />
                    <Footer />
                  </PublicRoute>
                } />
                
            </Routes>
          </Router>
        </div>
      </div>
    )
}

export default App;
