import React from "react";
import ServiceHeroSection from "./ServiceHeroSection/ServiceHeroSection";
import ServiceAboutUs from "./ServiceMiddleSection/ServiceMiddleSection";
import ServiceRelatedProjects from "./ServiceRelatedProjects/ServiceRelatedProjects";
import ServiceQuestionSection from "./ServiceQuestionSection/ServiceQuestionSection";
import ServiceLastSection from "./ServiceLastSection/ServiceLastSection";

function Service(){
    return(
        <div>
<ServiceHeroSection/>
<ServiceAboutUs/>
<ServiceRelatedProjects/>
<ServiceQuestionSection/>
<ServiceLastSection/>
        </div>
    )
}
export default Service;