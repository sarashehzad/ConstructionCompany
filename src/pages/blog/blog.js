import React from "react";
import NewsSection from "./MainSectionArea/NewsSection";
import Cards from "./CardsSection/CardsSection";

import LastSec from "./LastSec/LastSec";

function Blog(){
    return(
        <div>
<NewsSection/>
<Cards/>

<LastSec/>
        </div>
    )
}
export default Blog;