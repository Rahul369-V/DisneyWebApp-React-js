import styled from "styled-components";
import React from "react";
import { useParams } from "react-router-dom"; //used to write in a URL!!!
import { useEffect,useState } from "react";
import db from "../firebase";


const Detail = (props) => {

    const { id } = useParams();
    const [detailData, setDetailData] = useState({});
    useEffect(() => {
        db.collection("movies")
          .doc(id)
          .get()
          .then((doc) => {
            if (doc.exists) {
              setDetailData(doc.data());
            } else {
              console.log("no such document in firebase");
            }
          })
          .catch((error) => {
            console.log("Error getting document:", error);
          });
      }, [id]);
    return (<Container>

        <Background>
            <img alt={detailData.title} src={detailData.backgroundImg}/> 

        </Background>
        <ImageTitle>

            <img alt={detailData.title} src={detailData.titleImg}/>


        </ImageTitle>
        <ContentMeta>
            <Controls>
                 <Player>
                    <img src='/images/play-icon-black.png' alt=""/>
                    <span>Play</span>
                </Player>
                <Trailer>

                    <img src = '/images/play-icon-white.png' alt=""/>
                    <span>trailer</span>


                </Trailer>
                <AddList>
                    <span/>{/* we going to target this do our own icon*/ }
                    <span/>
                </AddList>
                <GroupWatch>
                    <div>
                    <img src="/images/group-icon.png" alt="" />
                    </div>
                </GroupWatch>
            </Controls>
            <SubTitle>{detailData.subTitle}</SubTitle>
            <Description>{detailData.description}</Description>
        </ContentMeta>
    </Container>);
};

export default Detail;
const Container = styled.div`

   
    position: relative;
    min-height: calc(100vh-250px);
    overflow-x: hidden;
    display: block;
    top:72px;
    padding: 0 calc(3.5vw+5px);





`;

const Background = styled.div`

    left: 0;
    opacity: 0.81;
    position: fixed;
    right: 0;
    top: 0;
    z-index:-1;
    

    img{
        width: 100vw;
        height: 100vh;
        /* object-fit: cover; */
        @media(max-width:768px){
            /* width:initial; */
            /* width: 100%;
            height:100%; */
            object-fit: cover;
            
        }
    }


`;

const ImageTitle = styled.div`
  align-items: flex-end;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  margin: 0px auto;
  padding-left:10px;
  height: 30vw;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;
  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }
`;

const ContentMeta = styled.div`
  max-width: 874px;
`;

const Controls = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  margin: 20px;
  min-height: 56px;
`;

const Player = styled.button`

  font-size: 15px;
  margin: 0px 22px 0px 0px;
  padding: 0px 20px;
  height: 52px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  background: rgb (249, 249, 249);
  border: none;
  color: rgb(0, 0, 0);
  img {
    width: 32px;
  }
  &:hover {
    background: rgb(198, 198, 198);
  }
  @media (max-width: 768px) {
    height: 41px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;
    img {
      width: 25px;
    }
  }
`;


const Trailer = styled(Player)` /* which gonna retrive everything from player*/

  background-color: rgba(0,0,0,0.3);
  border: 1px solid white;
  color:rgb(249,249,249);

  &:hover {
    background: rgb(198, 198, 198);
    color: rgb(0, 0, 0);
  }



`; 
const AddList = styled.div`

  margin-right: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;
  span {
    background-color: rgb(249, 249, 249);
    display: inline-block;
    &:first-child {
      height: 2px;
      transform: translate(1px, 0px) rotate(0deg);
      width: 16px;
    }
   
    &:nth-child(2) {
      height: 16px;
      transform: translateX(-8px) rotate(0deg);
      width: 2.01px;
    }
  }
`;
const GroupWatch = styled.div`
    
  height: 44px;
  width: 44px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
 

  cursor: pointer;
  background: white;
  div {
    height: 40px;
    width: 40px;
    background-color: rgba(0, 0, 0, 0.9);
    border-radius: 50%;
    img {
      width: 100%;
    }
  }
`;

const SubTitle = styled.div`
    margin: 20px;
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
const Description = styled.div`
    margin: 20px;   
  line-height: 1.4;
  font-size: 20px;
  padding: 16px 0px;
  color: rgb(249, 249, 249);
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;