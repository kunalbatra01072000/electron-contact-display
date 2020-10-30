import React from "react";
import Contacts from "../Contacts/Contacts";
import Contactform from "../Contacts/Contactform";
import { Contactfilter } from "../Contacts/Contactfilter";

const Home = (props) => {
  return (
    <div className="grid-2">
      <div>
        <Contactform />
      </div>
      <div>
        <Contactfilter />
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
