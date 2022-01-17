import React from "react";
import styled from "styled-components";


const TrendingPage = (props) => {
return(
    
    <Container>
        
        <Wrap>
        <video autoPlay={true} loop={true} playsInline={true}>
                <source src="/videos/dc.mp4" type="video/mp4"/>

            </video>
            <img src="/images/viewers-disney.png" alt=""/>
           
        </Wrap>
        <Wrap>
            <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="/videos/mc.mp4" type="video/mp4"/>

            </video>
       
            <img src="/images/viewers-marvel.png" alt=""/>
        </Wrap>

        <Wrap>
        <video autoPlay={true} loop={true} playsInline={true}>
                    <source src ="/videos/nc.mp4" type='video/mp4'></source>
            </video>
            <img src="/images/viewers-national.png" alt=""/>
        </Wrap>

        <Wrap>
        <video autoPlay={true} loop={true} playsInline={true}>
                <source src ="/videos/pc.mp4" type='video/mp4'></source>
            </video>
            <img src="/images/viewers-pixar.png" alt=""/>
        </Wrap>

        <Wrap>
        <img src="/images/viewers-starwars.png" alt="fff"/>
        <video autoPlay={true} loop={true} playsInline={true}>
                <source src="/videos/sc.mp4" type="video/mp4"/>

            </video>
           
        </Wrap>
    </Container>
);


}



const Container = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 30px;
    display: grid;
    /* padding: 30px 0 26px; */
    padding:20px;
    grid-gap:25px;
    gap:25px;
    
    grid-template-columns : repeat(5,minmax(0,1fr));

    @media(max-width:768px){
        grid-template-columns: repeat(1,minmax(0,1fr));
    }


`;

const Wrap = styled.div`

    /* padding-top: 56%; */
    width: 230px;
    height: 130px;
   
    border-radius:10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px , rgb(0 0 0 / 73%) 0px 16px 10px -10px ;
    cursor: pointer;
    overflow: hidden;
    position:relative;
    transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94);
    border:3px solid rgba(249,249,249,0.1);
    @media(max-width:768px){
        width: 100%;
        height: 200px;
        img{
            
        }
    }

    img {
        inset: 0px;
        display:block;
        height:100%;
        width: 100%;
        object-fit: cover;
        opacity: 1;
        position: absolute;
        transition:opacity 500ms ease-in-out 0s;
        z-index:1;
        top:0;
       
    }
    video{
        height: 100%;
        width: 100%;
        object-fit: cover;
        position:absolute;
        top:0;
        opacity: 0;
        z-index:0;
    }
        &:hover{
            box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px , rgb(0 0 0 / 73%) 0px 16px 10px -10px ;
            transform:scale(1.08);
            border-color: rgba(249,249,249,0.8);
            video{
                opacity: 1;
            }

        }
   
   

`;

export default TrendingPage;