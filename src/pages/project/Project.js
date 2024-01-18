import React from 'react';
 import FirstSection from './projectherosection/mainherosection';
import AboutProject from './middlesection/middlesection';
import RelatedProject from './relatedprojects/relatedprojects';
import LastSection from './LastSection/LastSectionn';
 
function Project() {
  return (
    <div>
   <FirstSection/>
   <AboutProject/>
   <RelatedProject/>
<LastSection/>
    </div>
  );
}

export default Project;
