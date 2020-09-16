import React from "react";
import "../App.scss";
import Layout from "./Layout";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faHeart, faTrash, faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";


library.add(faCoffee, faHeart, faTrash, faArrowAltCircleRight)

function App() {
  return (
    <main className="main-component">
      <section>
        <Layout />
      </section>
    </main>
  );
}

export default App;
