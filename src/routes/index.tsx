import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
          <Route path="/" element={<Home />} />
          <Route path="/group-booking" element={<GroupBooking />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/user-agreement" element={<TermsConditions />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
