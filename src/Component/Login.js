import React from 'react';
import styled from 'styled-components';


const Login = (props) => {

    return(
        <Container>
            
            
            <Content>
                
                <ShowCase>

                    <Logo1 src= "/images/cta-logo-one.svg" alt=""/>
                    <SignUp>ENJOY ALL THERE</SignUp>
                    <Discription>Hotstar is an Indian brand of subscription video on-demand over-the-top streaming service owned by Novi Digital Entertainment of Star India and operated by Disney Media and Entertainment Distribution, both division of The Walt Disney Company</Discription>
                    <Logo2 src="/images/cta-logo-two.png" alt=""/>

                </ShowCase>
            </Content>

        </Container>
    );



};

export default Login;
const Container = styled.section`

    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
    background-image: url("/images/login-background.jpg");
    background-size: cover;

`;

const Content = styled.div`
    
    margin-bottom: 10px;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 80px,40px;
    height: 100%;


`;

const ShowCase =styled.div`

    max-width: 650px;
    width:100%;
    display: flex;
    flex-direction: column;


`;

const Logo1 = styled.img`
   
    margin-bottom: 13px;
    height: 100px;
    max-width: 600px;
    min-height: 1px;
    display: block;
    width:75%;
    margin-left: auto;
    margin-right: auto;
   
`;
const SignUp = styled.a`
    
    font-weight: bold;
    width: 75%;
    margin-bottom: 12px;
    color: #f9f9f9;
    background-color: #0063e5;
    border-radius: 5px;
    letter-spacing: 1.5px;
    font-size: 18px;
    padding: 16.5px;
    border: 1px solid transparent;
    margin-left: auto;
    margin-right: auto;
    &:hover{
        background-color: #0483ee;
    }



`;
const Discription = styled.p`

    color: #f9f9f9;
    font-size: 12px;
    margin:0 0 21px;
    line-height: 1.6;
    letter-spacing: 1.1px;



`;
const Logo2 = styled.img`

    overflow: hidden;
    max-width: 600px;
    margin-bottom: 20px;
    display: inline-block;
    vertical-align: bottom;
    margin-left: auto;
    box-sizing: border-box;
    margin-right: auto;
   width: 100%;
`;
