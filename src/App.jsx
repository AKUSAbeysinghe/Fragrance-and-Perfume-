import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Pages/Home";
import Footer from "./components/Footer";

import PrivacyPolicy from "./components/Pages/Privacy";
import TermsOfService from "./components/Pages/Terms.jsx";
import FAQ from "./components/Pages/FAQ.jsx";

import Contact from "./components/Pages/Contact.jsx";
import Collections from "./components/Pages/Collections.jsx";

import Heritage from "./components/Pages/Heritage.jsx";
import Journal from "./components/Pages/Journal.jsx";
import Botique from "./components/Pages/Boutiques.jsx";

// ✅ Admin Pages
import Login from "./Admin/Login.jsx";
import SignUp from "./Admin/SignUp.jsx";
import AdminPanel from "./Admin/AdminPanel.jsx";

// ✅ Import ScrollToTop
import ScrollToTop from "./components/ScrollToTop.jsx";

// ✅ Smart Layout
function Layout({ children }) {
  const location = useLocation();

  const hideLayout = [
    "/login",
    "/signup",
    "/admin",
    "/admin-lookbook",
  ].includes(location.pathname);

  return (
    <div className="bg-[#fcf8f3] text-black font-sans min-h-screen flex flex-col">
      
      {/* Scroll To Top */}
      <ScrollToTop />

      {/* Navbar */}
      {!hideLayout && <Navbar />}

      {/* Main Content */}
      <main className="flex-1 w-full">
        {children}
      </main>

      {/* Footer */}
      {!hideLayout && <Footer />}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Customer Pages */}
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />

        <Route
          path="/collections"
          element={
            <Layout>
              <Collections />
            </Layout>
          }
        />

        
         <Route
          path="/journal"
          element={
            <Layout>
              <Journal />
            </Layout>
          }
        />

        <Route
          path="/boutiques"
          element={
            <Layout>
              <Botique />
            </Layout>
          }
        /> 

        <Route
          path="/heritage"
          element={
            <Layout>
              <Heritage />
            </Layout>
          }
        />
       

        <Route
          path="/privacy-policy"
          element={
            <Layout>
              <PrivacyPolicy />
            </Layout>
          }
        />

        <Route
          path="/terms-of-service"
          element={
            <Layout>
              <TermsOfService />
            </Layout>
          }
        />

        <Route
          path="/FAQ"
          element={
            <Layout>
              <FAQ />
            </Layout>
          }
        />

        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />

        {/* Admin Pages */}
        <Route
          path="/signup"
          element={
            <Layout>
              <SignUp />
            </Layout>
          }
        />

        <Route
          path="/login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />

        <Route
          path="/admin"
          element={
            <Layout>
              <AdminPanel />
            </Layout>
          }
        />

        {/* 404 */}
        <Route
          path="*"
          element={
            <Layout>
              <div className="text-center py-20 text-2xl font-semibold">
                404 : Page Not Found
              </div>
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;