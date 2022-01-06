import { useState, useEffect } from 'react';
import styled from 'styled-components';
import TypeAnimation from 'react-type-animation'
import {AiOutlineGithub, } from 'react-icons/ai'
import {SiDiscord} from 'react-icons/si'
import Slider from 'react-slick'
import axios from 'axios';

import Info from '../components/Info'
import Card from '../components/Card'


//color-pallete:
//Primary: #24272B
//Secondary: #303438
//Highlight: #2176FF
//Secondary Highlight: #004BA8
//Highlight 2: #A10220




const MainBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    background-color: #24272B;
`
const HomeStyled = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Title = styled.h1`
color: #f3f3f3;
font-size: 5rem;
user-select: none;
@media (min-width: 550px) and (max-width: 800px){
    font-size: 3rem;
}
@media (min-width: 300px) and (max-width: 550px){
    font-size: 2rem;
}
`
const Btn = styled.a`
position: absolute;
bottom: 20%;
padding: 15px 30px;
border-radius: 360px;
font-size: 1.5rem;
text-decoration: none;
background-color: transparent;
border: 2px solid #2176FF;
color: #f3f3f3;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
cursor: pointer;
transition: all 0.3s ease;
&:hover{
    background-color: #2176FF;
    border: 2px solid transparent;
}
@media (min-width: 300px) and (max-width: 800px){
    font-size: 1rem;
    padding: 10px 25px;
}
`
//banner principal
const Banner = () => {
    return(
        <HomeStyled>
            <Title>Codify Community</Title>
            <TypeAnimation sequence={['Programação', 1500, 'Design', 1500, 'Comunidade', 1500,  'code with <3', 1500]} repeat={Infinity} cursor={true} wrapper="h2" className="typing_animation"/>
            <Follow />
            <Btn href='https://discord.gg/MSr8SJfR4H' target='_blank'>Entre no Discord</Btn>
        </HomeStyled>
    )
}


const FollowBox = styled.div`
position: absolute;
left: -45px;
top: 50%;
width: 180px;
height: 40px;
transform: rotate(-270deg);
display: flex;
justify-content: space-between;
align-items: center;
@media (min-width: 300px) and (max-width: 800px){
    width: 130px;
}
`
const FollowText = styled.p`
color: #f3f3f3;
font-size: 1.5rem;
@media (min-width: 300px) and (max-width: 800px){
    font-size: 1.1rem;
}
`
const Icon = styled.a`
width: 100%;
height: 100%;
margin: 0 3px;
transition: all 0.3s ease;
&:hover{
    position: relative;
    top: -3px;
    transform: rotate(-90deg);
}
`
//frase e icons na esquerda
const Follow = () => {
    return (
        <FollowBox>
            <FollowText>Segue lá  </FollowText>
            <div style={{width: '45%' , display: 'flex', justifyContent: 'space-between', position: 'relative', bottom: '-3px'}}>
                <Icon href="https://github.com/codify-community" target="_blank"><AiOutlineGithub size={30} color="#f3f3f3" /></Icon>
                <Icon href="https://discord.gg/MSr8SJfR4H" target="_blank"><SiDiscord size={30} color="#f3f3f3" /></Icon>
            </div>
        </FollowBox>
    )
}


const InfosBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    width: 83%;
    min-height: 300px;
    height: auto;
    margin: 5% 0px;
`
//quadros com informações sobre o server (falta integrar com a api pra pegar os dados)
const Infos = (props) => {
    return(
        <InfosBox>
            <Info key={1} title={String(props.infos['channel_count'])} desc={'Canais'}/>
            <Info key={2} title={String(props.infos['member_count'])} desc={'Membros'}/>
            <Info key={3} title={String(props.infos['staff_count'])} desc={'Staffs'}/>
            <Info key={4} title={'13.08.2020'} desc={'Criação do server'}/>
        </InfosBox>
    )
}

//cards staff e boosters
const CardsBox = styled.div`
    width: 83%;
    height: auto;
    display: flex;
    flex-direction: column; 
`
const TitleCards = styled.h1`
    color: #f3f3f3;
    font-size: 6rem;
    text-shadow 2px 2px 3px #2176FF;
    margin-top: 3%;
    @media (min-width: 550px) and (max-width: 800px){
        margin-top: 10%;
        font-size: 5rem;
    }
    @media (min-width: 300px) and (max-width: 550px){
        font-size: 4rem;
        margin-top: 15%;
    }
`
const CardBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    min-height: 500px;
    margin: 5% 0px;
`

const SliderSettings = {
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 950,
          settings: {
            slidesToShow: 1,
          }
        },
      ]
    }

//area da staff (falta integrar com a api pra pegar os dados)
const Staffs = (props) => {
    //staff arguments: foto, nome, descrição, cargo(MOD/ADM), habiliades (linguagens e frameworks), link (github ou site), type (github ou site)
    const staffs = props.staff.map((user, index) =>
        <Card key={index} pfp={user.pfp} name={user.name} ocupation={'➛ Ocupação'} desc={user.bio} role={user.role} habilities={user.habilidades} link={user.github} type={'github'}/>
    )
    return( 
        <CardsBox>
            <TitleCards>Staffs</TitleCards>
            <CardBox>
                <Slider {...SliderSettings}  className='carousel'>
                    {staffs}
                </Slider >
            </CardBox>
        </CardsBox>
    )
}

const Boosters = (props) => {
    const boosters = props.booster.map((user, index) =>
        <Card key={index} pfp={user.pfp} name={user.name} ocupation={'➛ Ocupação'} desc={user.bio} role={user.role} habilities={user.habilidades} link={user.github} type={'github'}/>
    )
    return(
        <CardsBox>
            <TitleCards>Boosters</TitleCards>
            <CardBox>
                <Slider {...SliderSettings}  className='carousel'>
                    {boosters}      
                </Slider >
            </CardBox>
        </CardsBox>
    )   
}

const Main = () => {
    const [res, setRes] = useState({info:{'channel_count':'0'},staff:[], booster:[]})
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        if (loading) {
            const getStaffs = async () => {
                const response = await axios.get('http://localhost:5000/api/home');
                return response.data;
            }
            getStaffs().then(res => setRes(res))
            setLoading(false)
        }
    })
    
    return (
        <MainBox>
            <Banner />
            <Infos infos={res['info']}/>
            <Staffs staff={res['staff']}/>
            <Boosters booster={res['booster']}/>
        </MainBox>  
    );
}

export default Main;