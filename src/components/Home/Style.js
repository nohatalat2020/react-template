import styled from 'styled-components';

export const HomeSection = styled.div `
    height: 500px;
    background: url('../images/home-bg.jpg');
    background-size: cover;
    background-position: center;
    text-align: center;
    position: relative;
    
    @media (max-width:575px){
    background: url('../images/home-bg2.jpg');
    background-size: cover;
    background-position: center;
    }
     @media (max-width:375px){
    background: url('../images/home-bg3.jpg');
    background-size: cover;
    background-position: center;
    }
    `

export const HomeInformation = styled.div `
   position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    `

export const HomeTitle = styled.h2 `
    font-size: 60px;
    font-weight: bold;
    color: #fff;
    @media (max-width:768px) {
        font-size: 40px;
        color: #fff
}

   @media (max-width:575px){
        font-size: 30px;

   }
    `

export const HomeInfo = styled.h4 `
    font-size: 35px;
    color: #eb5424;
    margin-bottom: 20px;
    @media (max-width:768px) {
       font-size: 20px

}
    `

export const HomeDesc = styled.p `
    font-size: 20px;
    line-height: 1.5;
    color: #fff;
    margin-bottom: 20px;
    @media (max-width:768px) {
        font-size: 15px

}
  @media (max-width:375px){
      color:#fff;
  }  
    `

export const Span = styled.span `
    color: #eb5424;
`

export const HomeBtn = styled.button `
   background: #eb5424;
    color: #fff;
    font-size: 18px;
    width: 150px;
    border: 0;
    padding: 15px;
    cursor: pointer;
    font-weight: bold;
    &:hover{
       background: #fff;
      color: #eb5424;
    }
`


