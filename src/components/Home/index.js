import React from 'react';
import {HomeSection,HomeDesc,HomeInfo,HomeInformation,Span,HomeBtn,HomeTitle} from './Style.js';
const Home = () =>{
    return(
       <HomeSection>
            <div className="container">
                <HomeInformation>
                    <HomeTitle>Emaar Company</HomeTitle>
                    <HomeInfo>Creative Builders</HomeInfo>
                    <HomeDesc>
                        Iam a professional <Span> Designs</Span> and Professional Engineers creating modern and futuristic designs to homes. Let us work together. Thank you. 
                    </HomeDesc>
                    <HomeBtn>Let's Begin</HomeBtn>
                </HomeInformation>
            </div>
        </HomeSection>
    )
}
export default Home ;