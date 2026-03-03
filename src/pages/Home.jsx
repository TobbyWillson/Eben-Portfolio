import React from "react";
import "../index.css";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/manrope";

import Description from "../Components/Description";
import SelectedProjectSection from "../Components/SelectedProjectSection";

const Home = () => {
  return (
    <div className=' min-h-screen'>
      <div className='container mx-auto'>
        <Description />

        <p className='text-design flex items-center text-center my-20 '>AKINEBENEZER</p>
      </div>

      <SelectedProjectSection />
    </div>
  );
};

export default Home;
