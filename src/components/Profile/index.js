import React ,{useState,useEffect}from 'react';
import {ProfileSection,ProfileDiv,ProfileList,ProfileItem,Span,SkillsDiv,SkillsDesc,SkillsTitle,SkillsPerc,SkillsHead,ProfileTitle,Parent,ParentSpan,ProfileSpan,SkillsBar,SkillsSpan} from './Style.js';
import axios from 'axios';



const Profile = () =>{

 const [Skills ,setSkills] = useState([]);

 useEffect(()=>{
    axios.get('js/data.json').then(res =>{
        setSkills(res.data.profile)
    })

 },[]);

const SkillsSection = Skills.map((skill) =>{
    return(
        <SkillsBar key={skill.id}>
            <SkillsTitle>{skill.title}</SkillsTitle>
                <SkillsPerc>{skill.percentage}</SkillsPerc>
                    <Parent>
                        <ParentSpan sp={skill.id}></ParentSpan>
                    </Parent>
        </SkillsBar>
    )
})



    return(
        <ProfileSection>
            <div className="container">
                <ProfileDiv>
                    <ProfileTitle><ProfileSpan>Our </ProfileSpan>Information</ProfileTitle>
                    <ProfileList>
                        <ProfileItem>
                            <Span>Name</Span>
                            Emaar Construction CO.
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Since</Span>
                              1966
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Address</Span>
                             New York
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Phone</Span>
                            4444 5555 6666
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Email</Span>
                            emaar@emaar .com
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Website</Span>
                            <Span web>www.emaar.com</Span>
                        </ProfileItem>
                    </ProfileList>
                </ProfileDiv>
                
                <SkillsDiv>
                    <SkillsHead>Some <SkillsSpan>skills</SkillsSpan></SkillsHead>
                    <SkillsDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </SkillsDesc>
                    <div>
                        {SkillsSection}

                    </div>

                </SkillsDiv>
                
            </div>

        </ProfileSection>
        
    )
}
export default Profile ;