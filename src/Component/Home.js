import styled from "styled-components";
import React from 'react';
import ImageSlide from "./ImageSlide";
import TrendingPage from "./TrendingPage";
import Recommends from "./Recommends";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trending from "./Trending";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import db from "../firebase";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName, selectUserPhoto } from "../features/user/userSlice";



const Home = (props) => {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    let recommends = [];
    let newDisneys = [];
    let trending = [];
    let originals = [];

    // use react hooks
    useEffect(()=>{

        db.collection('movies').onSnapshot((snapshot)=>{
            snapshot.docs.map((doc)=>{
                // console.log(recommends);
                switch(doc.data().type){
                    case 'recommend': // match with firebase type_property
                        recommends=[...recommends,{id:doc.id,...doc.data() }];
                        break;
                    case 'new' :
                        newDisneys=[...newDisneys,{id:doc.id,...doc.data() }];
                        break;
                    case 'original':
                        originals=[...originals,{id:doc.id,...doc.data()}];
                        
                        break;       
                    case 'trending':
                        trending=[...trending,{id:doc.id,...doc.data() }];
                        break;    
                }
            });
        dispatch(
            setMovies({
            recommend:recommends,
            newDisney: newDisneys,
            original:originals,
            trending:trending

            })
        );
    });
    },[userName]);
    return(

        <Container>
            <ImageSlide/>
            <TrendingPage/>
            <Recommends/>
            <NewDisney/>
            <Originals/>
            <Trending/>
        </Container>



    );
}

export default Home;


const Container = styled.main`
    /* height: 500px; */
    position:relative;
    min-height: calc(100vh-250px);
    overflow-x: hidden;
    display: block;
    top:72px;
    padding: 0 calc(3.5vw+5px);
    /* background: url('images/home-background.png')center center /cover no-repeat fixed; */
    &:after{
    background: url('images/home-background.png')center center /cover no-repeat fixed;
    content:'';
    position: absolute;
    inset: 0;
    z-index: -1;
    opacity: 1;
    }
  



`;
