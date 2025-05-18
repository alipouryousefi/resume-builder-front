import React from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import Modal from "../components/Modal";
import { UserContext } from "../context/userContext";
import ProfileCard from "../components/ProfileCard";
const LandingPage = () => {
  const navigate = useNavigate();
  const [openAuthModal, setOpenAuthModal] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState("login");
  const { user } = React.useContext(UserContext);
  const handleCTA = () => {
    if (user) {
      navigate("/dashboard");
    } else {
      setOpenAuthModal(true);
    }
  };
  return (
    <div className="w-full min-h-full bg-white">
      <div className="container mx-auto px-4 py-6">
        <header className="flex justify-between items-center mb-16">
          <div className="text-xl font-bold">Resume Builder</div>
          {user ? (
            <ProfileCard />
          ) : (
            <button
              className="bg-purple-100 text-sm font-semibold text-black px-7 py-2.5 rounded-lg hover:bg-gray-800 hover:text-white transition-colors cursor-pointer"
              onClick={() => setOpenAuthModal(true)}
            >
              Login / Sign Up
            </button>
          )}
        </header>

        {/* Hero */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 pr-4 mb-8 md:mb-0">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Build Your{" "}
              <span className="text-transparent bg-clip-text bg-[radial-gradient(circle,_#7182ff_0%,_#3cff52_100%)] bg-[length:200%_200%] animate-text-shine">
                Resume Effortlessly
              </span>
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Craft a standout resume in minutes with our easy-to-use builder.
            </p>
            <button
              className="bg-black text-sm font-semibold text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
              onClick={handleCTA}
            >
              Get Started
            </button>
          </div>
          <div className="w-full md:w-1/2">
            <img src="test.png" alt="hero" className="w-full rounded-lg" />
          </div>
        </div>

        <section className="mt-5">
          <h2 className="text-2xl font-bold text-center mb-12">
            Features That Make Resume Building a Breeze
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-3">Easy Editing</h3>
              <p className="text-gray-600">
                Our intuitive interface allows you to edit your resume with
                ease.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-3">
                Customizable Templates
              </h3>
              <p className="text-gray-600">
                Choose from a variety of professionally designed templates.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-3">on-Click Export</h3>
              <p className="text-gray-600">
                Download your resume in multiple formats with a single click.
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="text-sm bg-gray-50 text-secondary text-center p-5 mt-5">
        Made with ❤️ by Ali Py
      </div>

      <Modal
        isOpen={openAuthModal}
        onClose={() => {
          setOpenAuthModal(false);
          setCurrentPage("login");
        }}
        hideHeader
      >
        <div>
          {currentPage === "login" && <Login setCurrentPage={setCurrentPage} />}
          {currentPage === "signup" && (
            <Signup setCurrentPage={setCurrentPage} />
          )}
        </div>
      </Modal>
    </div>
  );
};

export default LandingPage;
