import Details from "./details/details";
import HeroSection from "./herosection/herosection";
import LatestProject from "./latest/project";
import AboutUs from "./aboutus/about";
import QuestionBlock from "./questionblock/question";
import LastSection from "./lastsection/lastsection";


function Main() {
    return (
      <div className="Main">

       <HeroSection/>
       <Details/>
       <LatestProject/>
       <AboutUs/>
       <QuestionBlock/>
       <LastSection/>
       
      </div>
    );
  }
  
  export default Main;