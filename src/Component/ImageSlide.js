import styled from "styled-components";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css";

const ImageSlide = (props) => {

    let setting = {
        dots:true,
        Infinity:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true,
        arrows:true,
        
        
    };
    return (
        <div style={{margin:'25px'}}>
        <Carousel {...setting}>
            <ImgContainer>
                <a>
                    <img src="/images/slider-badging.jpg" alt=""/>
                </a>
            </ImgContainer>
            <ImgContainer>
                <a>
                    <img src="/images/slider-scales.jpg" alt=""/>
                </a>
            </ImgContainer>
            <ImgContainer>
                <a>
                    <img src="/images/slider-scale.jpg" alt=""/>
                </a>
            </ImgContainer>
            <ImgContainer>
                <a>
                    <img src="/images/slider-badag.jpg" alt=""/>
                </a>
            </ImgContainer>

        </Carousel>
        </div>
    
    );


    


}
const Carousel =styled(Slider)`
   
    margin-top: 20px;
    &>button{       
        opacity:0;
       
        z-index:1;
        
    
        &:hover{
            opacity: 1;
            transition: opacity 0.2s ease 0s;
        }

    }
    ul li button {
        &:before {
            font-size: 6.8px;
            color: rgb(150,158,171);

        }
    }
    li.slick-active button:before{
        color:#f9f9f9;

    }
    .slick-list{
        overflow: initial;
    }
    /* .slick-prev{
        left: -75px;
    }
    .slick-next{
        right:-75px;
    } */
`;
const ImgContainer = styled.div`
    
    border-radius: 5px;
    position: relative;
    cursor: pointer;

 
    a{
        border-radius: 5px;
       
        overflow: hidden;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px , rgb(0 0 0 / 73%) 0px 16px 10px -10px ;
        padding:4px;
   
        cursor:pointer;
        display:block;
        position :relative;
        img{
            width: 100%;
            height: 100%;
        }

        &:hover{

            padding: 0;
            border:4px solid rgba(249,249,249,0.8);
            transition-duration: 300ms;

        }

    }



`;



export default ImageSlide;