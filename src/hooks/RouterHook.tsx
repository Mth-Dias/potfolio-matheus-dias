import {  createBrowserRouter, useLocation } from "react-router-dom";
import HomePage from "../pages/HomePage";
import { useEffect, useState } from "react";

export default function RouterHook() {

  const [currentPage, setCurrentPage] = useState<string>('')

  const location = useLocation()
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
  ]);

  useEffect(() => {
    setCurrentPage(location.pathname)
  },[])

  return { router, currentPage };
}
