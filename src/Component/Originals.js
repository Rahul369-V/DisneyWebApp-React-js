import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectOriginal } from "../features/movie/movieSlice";

const Originals = (props) => {
    const movies = useSelector(selectOriginal);
    console.log(movies);
    return(
        <Container>

            <h4>Disney Originals</h4>
            <Content>
               
            {
                    movies && movies.map((movie,key) => (// this bracket is exception,not curly brackets
                        <Wrap key={key}>
                            {movie.id}
                            <Link to={"/detail/"+movie.id}>
                                <img src= {movie.cardImg} alt={movie.title}/>
                            </Link>
                        </Wrap>
                    ))}
             

            </Content>


        </Container>
        );
    
}

export default Originals;

const Container = styled.div`

    margin: 0 20px 20px 20px;
    /* padding:0 0 26px; */
    /* padding: 0 20px 20px 20px; */
    /* background-color: white; */
`;

const Content = styled.div`

    display: grid ;
    
    grid-gap: 25px;
    gap:25px;
    grid-template-columns: repeat(4,minmax(0,1fr));

    @media(max-width:768px){
        grid-template-columns: repeat(2,minmax(0,1fr));

    }


`;

const Wrap = styled.div`
    padding-top: 56.25%;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px , rgb(0 0 0 / 73%) 0px 16px 10px -10px ;
    overflow: hidden;
    position: relative;
    transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94);
    border: 3px solid rgba(249,249,249,0.1);

    img{

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

    &:hover{
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px , rgb(0 0 0 / 73%) 0px 16px 10px -10px ;
        transform:scale(1.05);
        border-color:rgba(249,249,249,0.8);
    }

`;


 {/* <Wrap>
                    <Link to='/'>
                        <img src="https://thedisinsider.com/wp-content/uploads/2021/02/F0809F3E692A09E60F989043E6F53BE4F71F21DDC1B046F32B9479C748A99B0F.png" alt=""/>
                    </Link>
                </Wrap>

                <Wrap>
                    <Link to='/'>
                        <img src="https://insidethemagic.net/wp-content/uploads/2021/03/tangled-flynn-and-rapunzel.png" alt=""/>
                    </Link>
                </Wrap>

                <Wrap>
                    <Link to='/'>
                        <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1828/1101828-h-f854237be6c0" alt=""/>
                    </Link>
                </Wrap>

                <Wrap>
                    <Link to='/'>
                        <img src="https://unicheck.com/blog/wp-content/uploads/2015/09/21632-disney-characters.jpeg" alt=""/>
                    </Link>
                </Wrap> */}