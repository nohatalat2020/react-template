import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {SocialMedia,Social,SocialParagraph,SpanOne,SpanTwo,Icon} from './Style.js';


const SociaMedia = () =>{

    const [socialIcons , setSocialIcons] = useState([]);

    useEffect(()=>{
       axios.get('js/data.json').then(res=>{
           setSocialIcons(res.data.social)
       })
    },[])


    const SocialMediaIcons = socialIcons.map((socialItem) =>{
        return(
            <Social key={socialItem.id} item={socialItem.id}>
                <Icon className={socialItem.icon}></Icon>
                <SocialParagraph>
                    <SpanOne>{socialItem.title}</SpanOne>
                    <SpanTwo>{socialItem.body}</SpanTwo>
                </SocialParagraph>
            </Social>
        )
    })


    return(
         <SocialMedia>
            {SocialMediaIcons}   
        </SocialMedia>
    )
}
export default SociaMedia ;