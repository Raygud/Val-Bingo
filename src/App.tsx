import * as React from "react";
import { Routes, Route} from "react-router-dom";
import {Rules,NoMatch} from './pages/Pages'
import {Home} from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
export default function App() {
  return (
    <>
    <h1>VAL <br /> BINGO!</h1>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="leikreglur" element={<Rules />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
}

