import React,{useState,useEffect} from 'react';
import {PortfolioSection,PortfolioTitle,Span,PortfolioList,PortfolioItem,Box,Overlay,BoxImg,OverlaySpan} from './Style.js';
import axios from 'axios';





const Portfolio = () =>{

//hooks state ==== useState
        /*
            images === state ={
                images :[]
            }

            setImages === this.setState
        */ 
const [images ,setImages] = useState([]);

//hooks componenetDidMount ==== useEffect
            /*
            useEffect((arrow function)=>{
                axios request
            } ,[empty array to rest or infinit loop will hppen])
            */

useEffect(()=>{
  axios.get('js/data.json').then(res=>{
      setImages(res.data.portfolio)
  
})
},[])

//map loop on images
const PortofolioImages = images.map((imageItem)=>{

    return(
                <Box key={imageItem.id}>
                    <BoxImg src={imageItem.image} alt=""/>
                    <Overlay>
                        <OverlaySpan>
                            Show Image
                        </OverlaySpan>
                    </Overlay>
                </Box>
                  
    )
})

    return(
         <PortfolioSection>
            <PortfolioTitle><Span>My</Span> Portfolio</PortfolioTitle>
            <PortfolioList>
                <PortfolioItem active>All</PortfolioItem>
                <PortfolioItem>Houses</PortfolioItem>
                <PortfolioItem>Skyscrapers</PortfolioItem>
                <PortfolioItem>Lake House</PortfolioItem>
            </PortfolioList>
            
            <div>
                
               {PortofolioImages}
                
            </div>
            
        </PortfolioSection>
        
    );
}
export default Portfolio;
