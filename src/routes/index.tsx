import React, { Suspense } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Home = React.lazy(() => import('../pages/home'));
const GroupBooking = React.lazy(() => import('../pages/group-booking/'));

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/group-booking" element={<GroupBooking />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
