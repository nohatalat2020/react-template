import React from 'react';
import {AboutInfo,AboutSection,Anchor,InfoDesc,InfoDir,InfoTitle,Span} from './Style.js'
const About = () =>{
    return(
         <AboutSection>
            <div className="container">
                <AboutInfo>
                    <InfoTitle><Span>This is</Span> Our</InfoTitle>
                    <InfoDir>Creative Bulidings</InfoDir>
                    <InfoDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                         Enim est <Anchor href="#">explicabo</Anchor> maxime 
                         quibusdam quaerat nihil aliquid aperiam deleniti, 
                         repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </InfoDesc>
                    <InfoDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                         Enim est explicabo maxime quibusdam quaerat nihil aliquid
                          aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </InfoDesc>
                </AboutInfo>
            </div>
        </AboutSection>
    )
}
export default About ;