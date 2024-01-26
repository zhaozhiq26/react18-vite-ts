import { Routes, Route } from "react-router-dom";
import {lazy, Suspense} from "react";
 
const Home = lazy(() => import("@/pages/home")) 
const About = lazy(() => import("@/pages/about")) 
const Login = lazy(() => import("@/pages/login"))  
function RootRoute() :JSX.Element{
  return (
    <>
      <Suspense fallback={"loading"}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Suspense>
    </>
  );
}
export default RootRoute