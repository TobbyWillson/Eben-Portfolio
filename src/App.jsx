import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Outlet } from "react-router-dom";

import ScrollToTop from "./Components/ScrollToTop";

import Home from "./pages/Home";
import CosineWalletApp from "./pages/CosineWalletApp";
import CosineWalletWebsite from "./pages/CosineWalletWebsite";
import DropCycleWebsite from "./pages/DropCycleWebsite";
import TutorDem from "./pages/TutorDem";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import NotFound from "./pages/NotFound";
import AboutMe from "./pages/AboutMe";

// Current Page Bar
import CurrentPageBar from "./Components/CurrentPageBar";

import { useLocation } from "react-router-dom";

const RootLayout = () => {
  const currentPath = useLocation().pathname;

  // const excludedPaths = ["/", "/home", "/tutordem", "/dropcycle", "/about", "/cosinewalletapp", "/cosinewalletwebsite"];
  // const showCurrentPageBar = !excludedPaths.includes(currentPath);

  const showCurrentPageBar = currentPath !== "/" && currentPath !== "/home" && currentPath !== "*";

  return (
    <>
      <ScrollToTop />
      <header className='w-full'>
        <Navbar />
      </header>

      <main className='mt-30 '>
        {showCurrentPageBar ? <CurrentPageBar /> : null}

        <Outlet />
      </main>

      <footer className='w-full'>
        <div className=''>
          <Footer />
        </div>
      </footer>
    </>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      {/* My old method of defining index route */}
      <Route index element={<Home />} />
      {/* New Method */}
      <Route path='cosinewalletwebsite' element={<CosineWalletWebsite />} />
      <Route path='cosinewalletapp' element={<CosineWalletApp />} />
      <Route path='tutordem' element={<TutorDem />} />
      <Route path='dropcycle' element={<DropCycleWebsite />} />
      <Route path='about' element={<AboutMe />} />

      <Route path='*' element={<NotFound />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
