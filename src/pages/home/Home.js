import React from "react";
import HomeMainSection from "./HomeMainSection/HomeMainSection";
import HomeMiddleSection from "./HomeMiddleSection/HomeMiddleSection";
import HomeTestimonials from "./HomeTestimonials/HomeTestimonials";
import HomeLastSection from "./HomeLastSection/HomeLastSection";


function Home(){
    return(
        <div>
<HomeMainSection/>
<HomeMiddleSection/>

<HomeTestimonials/>
<HomeLastSection/>
        </div>
    )
}
export default Home;