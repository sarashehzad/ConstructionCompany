import React from "react";
import ServicesMainSection from "./ServicesMainSection/ServicesMainSection";
import ServicesBlockSection from "./ServicesBlocksSection/ServicesBlocksSection";
import ServicesLatestProject from "./ServicesLatestProject/ServicesLatestProject";
import ServicesLastSection from "./ServicesLastSection/ServicesLastSection";

function Services(){
    return(
        <div>
<ServicesMainSection/>
<ServicesBlockSection/>
<ServicesLatestProject/>
<ServicesLastSection/>
        </div>
    )
}
export default Services;