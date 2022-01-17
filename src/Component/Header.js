import React from "react";
import styled from "styled-components";
import { useDispatch , useSelector} from "react-redux";
// import { useHistory } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { auth, provider,storage} from "../firebase";
import { useEffect } from "react";
import { 
    selectUserName ,
    selectUserPhoto ,
    setUserLoginDetails,
    setSignOutState
} from "../features/user/userSlice";



const Header = (props) => {

     const dispatch = useDispatch();
     const navigate = useNavigate();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(()=>{

        auth.onAuthStateChanged(async (user)=>{
            if(user){
                setUser(user);
                navigate('/home');
                // history.navigate('/home');
            }
        });

     },[userName]);
    const handleAuth =() =>{

        if(!userName){
        auth.signInWithPopup(provider).then((result) => {
            console.log(userPhoto);
            setUser(result.user);
        }).catch((error)=>{
            alert(error.message);
        });}
        else if(userName){
            auth.signOut().then(()=>{
                dispatch(setSignOutState());
                navigate('/');// this means to the login page/ starting page
            });
        }
    };
    const setUser = (user) => {
        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email: user.email,
                photo : user.photoURL
            })
        );
    };
    // const handleAuth =()=>{
    //     alert("heloooooo");
    // }
    return(

        <Nav>

            <MainLogo>
            
                <img src="/images/logo.svg" alt="Disney"/>

            </MainLogo>

            {!userName ? (
                <Login onClick={handleAuth}>Login</Login>):(<>
            <NavMenu>

                <a href="/home">
                    <img src="/images/home-icon.svg" alt ="HOME"/>
                    <span>HOME</span>
                </a>
                <a href="/search">
                    <img src="/images/search-icon.svg" alt ="SEARCH"/>
                    <span>SEARCH</span>
                </a>
                <a href="/home">
                    <img src="/images/watchlist-icon.svg" alt ="WATCHLIST"/>
                    <span>WATCHLIST</span>
                </a>
                <a href="/originals">
                    <img src="/images/original-icon.svg" alt ="ORIGINALS"/>
                    <span>ORIGINALS</span>
                </a>
                <a href="/movies">
                    <img src="/images/movie-icon.svg" alt ="MOVIES"/>
                    <span>MOVIES</span>
                </a>
                <a href="/series">
                    <img src="/images/series-icon.svg" alt ="SERIES"/>
                    <span>SERIES</span>
                </a>
            
            </NavMenu>
            <SignOut>
                <UserImage src ={userPhoto} alt={userName}/>
                <DropDown>
                    <span onClick={handleAuth}>Sign Out</span>
                </DropDown>
            </SignOut>
            </>)}
             
            
        </Nav>



    );

}

export default Header;

const Nav = styled.nav`

    width: 100%;
    height: 55px;
    background-color: #090b13;
    opacity: 0.85;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 20px;
    align-items:center;
    position:fixed;
    left:0;
    right: 0;
    top: 0;
    z-index:3;

`;

const MainLogo = styled.a`
    padding: 0;
    
    border-radius: 5px;
    overflow: hidden;
    width: 72px;
    max-height: 60px;
    display: inline-block;
    img{
        display: block;
        width: 100%;
    }

`;

const NavMenu = styled.div`

    position: relative;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: row nowrap;
    height: 100%;
    margin: 0;
    padding: 0;
    margin-right: auto;
    margin-left: 23px;

    a{  
      
        display: flex;
        align-items: center;
        padding: 0 12px;

        img{
            width: 20px;
            height: 20px;
            min-width: 20px;
            z-index: auto;
            margin: 0 2px 4px 0;
            

        }
        span{
            color: rgb(249,249,249);
            font-size: 13px;
            letter-spacing: 1px;
            /* line-height: 1.08; */
            padding: 2px 0;
            white-space: nowrap;
            position: relative;
        
        &:before{
            position: absolute;
            background-color: rgb(249,249,249);
            border-radius: 2px;
            bottom: -6px;
            content: "";
            height: 2px;
            opacity: 0;
            left: 0;
            right: 0;
            /* transform-origin: left center;  its start from left*/
            transform-origin: center;
            transform:scaleX(0);
            transition: 0.3s;
            /* transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94)0.2s; */
            visibility: hidden;
            width: auto;


        }
    
    }

    &:hover{
        span:before{
            transform:scaleX(1);
            visibility: visible;
            opacity: 1 !important;
        }
    }

    }
   
    @media (max-width:768px){
        display: none;
    } 
    

`;

const Login = styled.a`


    background-color: rgba(0, 0, 0, 0.6);
    padding: 8px 16px;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    border-radius: 4px;
    border: 1px solid #f9f9f9;
    transition: all 0.2s ease 0s;
    &:hover {
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
    }



`;

const UserImage =styled.img`

    height: 42px;
    min-width: 30px;
    width: 42px;
    border-radius: 50%;
    overflow: hidden;

`;
const DropDown = styled.div`

    position: absolute;
    top:55px;
    right: 35px;
    padding:8px;
    background: rgb(19,19,19);
    border:1px solid rgba(151,151,151,0.33);
    border-radius: 4px;
    font-size: 14px;
    opacity: 0;


`;

const SignOut = styled.div`


    height: 60px ;
    width: 50px;
    display: flex;
    cursor: pointer;
    justify-content:center;
    align-items: center;
/* 
    ${UserImage}{
        
    } */
    &:hover{
        ${DropDown}{ /* this DropDown Should be defined already (should be over this , not designed below this because we using this here!!)*/
            opacity: 1;
            transition-duration:0.8s;
        }
    }


`;
