import React from "react";
import PortfolioMain from "./mainSectionPortfolio/mainSectionPortfolio";
import PortfolioCards from "./portfolioCards/portfolioCards";
import PortfolioLastSection from "./portfolioLastSection/portfolioLastSection";

function Portfolio(){
    return(
        <div>
<PortfolioMain/>
<PortfolioCards/>
<PortfolioLastSection/>
        </div>
    )
}
export default Portfolio;