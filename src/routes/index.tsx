import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import GroupBooking from '../pages/group-booking';
import AboutUs from '../pages/about-us';
import PrivacyPolicy from '../pages/privacy-policy';
import ContactUs from '../pages/contact-us';
import TermsConditions from '../pages/terms-conditions';

const Home = React.lazy(() => import('../pages/home'));

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Helmet>
                  <title>Nixtour - Home</title>
                </Helmet>
                <Home />
              </>
            }
          />
          <Route
            path="/group-booking"
            element={
              <>
                <Helmet>
                  <title>Nixtour - Group Booking</title>
                </Helmet>
                <GroupBooking />
              </>
            }
          />
          <Route
            path="/about-us"
            element={
              <>
                <Helmet>
                  <title>Nixtour - About Us</title>
                </Helmet>
                <AboutUs />
              </>
            }
          />
          <Route
            path="/privacy-policy"
            element={
              <>
                <Helmet>
                  <title>Nixtour - Privacy Policy</title>
                </Helmet>
                <PrivacyPolicy />
              </>
            }
          />
          <Route
            path="/contact-us"
            element={
              <>
                <Helmet>
                  <title>Nixtour - Contact Us</title>
                </Helmet>
                <ContactUs />
              </>
            }
          />
          <Route
            path="/user-agreement"
            element={
              <>
                <Helmet>
                  <title>Nixtour - Terms & Conditions</title>
                </Helmet>
                <TermsConditions />
              </>
            }
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
