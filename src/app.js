import React,{ useEffect } from "react";
import "./styles/style.scss"
import { BrowserRouter, Routes, Route, useLocation} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
const Gallery = React.lazy(()=> import('./pages/Gallery')) 
const News = React.lazy(()=> import('./pages/News'))
const ErrorPage = React.lazy(()=> import("./pages/ErrorPage")) 
const NewsOne = React.lazy(()=> import("./components/catalogpages/OneNews"))
const GalleryOne = React.lazy(()=> import("./components/catalogpages/GalleryOne"))

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


function app() {

    return (
        <BrowserRouter>
            <ScrollToTop/>
            <Header/>
            <Routes>
                <Route path="/" element={<React.Suspense><News/></React.Suspense>}/>
                <Route path="/search/:keyword" element={<React.Suspense><News/></React.Suspense>}/>
                <Route path="/filter/:cities" element={<React.Suspense><News/></React.Suspense>}/>
                <Route path="/gallery" element={<React.Suspense><Gallery/></React.Suspense>}/>
                <Route path="/gallery/:id" element={<React.Suspense><GalleryOne/></React.Suspense>}/>
                <Route path="*" element={<React.Suspense><ErrorPage title={'Схоже такої сторінки не існує'} text={"Головне меню"} link={"/"}/></React.Suspense>}/>
                <Route path="/news/:id" element = {<React.Suspense><NewsOne/></React.Suspense>}/>
            </Routes>
            <Footer/>   
        </BrowserRouter>
    )
}

export default app;