import { useState, useEffect } from "react";
import styled from "styled-components";
import TypeAnimation from "react-type-animation";
import { AiOutlineGithub } from "react-icons/ai";
import { SiDiscord } from "react-icons/si";
import { SiTelegram } from "react-icons/si"
import Slider from "react-slick";

import Info from "../components/Info";
import Card from "../components/Card";
import Layout from "../components/Layout";
import { config } from "../config";
import Notification from "../components/Notification";
import api from "../api/api";

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
    background-color: #24272b;
`;

const HomeStyled = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h1`
    color: #f3f3f3;
    font-size: 5rem;
    user-select: none;
    @media (min-width: 550px) and (max-width: 800px) {
        font-size: 3rem;
    }
    @media (min-width: 300px) and (max-width: 550px) {
        font-size: 2rem;
    }
`;

const Btn = styled.a`
    position: absolute;
    bottom: 20%;
    padding: 15px 30px;
    border-radius: 360px;
    font-size: 1.5rem;
    text-decoration: none;
    background-color: transparent;
    border: 2px solid ${config.colors.highlight};
    color: #f3f3f3;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;
    line-height: 10px;
    &:hover {
        background-color: ${config.colors.highlight};
        border: 2px solid transparent;
    }
    @media (min-width: 300px) and (max-width: 800px) {
        font-size: 1rem;
        padding: 10px 25px;
    }
`;

const IconDiscord = styled.div`
    margin: 5px 10px;
`;

//banner principal
const Banner = () => {
    return (
        <HomeStyled>
            <Title>Codify Community</Title>
            <TypeAnimation
                sequence={[
                    "Programação",
                    5000,
                    "Design",
                    5000,
                    "Comunidade",
                    5000,
                    "code with <3",
                ]}
                repeat={Infinity}
                cursor={true}
                wrapper="h2"
                className="typing_animation"
            />
            <Follow />
            <Btn href="https://discord.gg/MSr8SJfR4H" target="_blank">
            <IconDiscord>
                <SiDiscord size={30} color="#f3f3f3" />
            </IconDiscord>
                Entre no Discord
            </Btn>
        </HomeStyled>
    );
};

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
    @media (min-width: 300px) and (max-width: 800px) {
        width: 130px;
    }
`;

const FollowText = styled.p`
    color: #f3f3f3;
    font-size: 1.5rem;
    @media (min-width: 300px) and (max-width: 800px) {
        font-size: 1.1rem;
    }
`;

const Icon = styled.a`
    width: 100%;
    height: 100%;
    margin: 0 3px;
    transition: all 0.3s ease;
    &:hover {
        position: relative;
        top: -3px;
        transform: rotate(-90deg);
    }
`;

//frase e icons na esquerda
const Follow = () => {
    return (
        <FollowBox>
            <FollowText>Segue lá </FollowText>
            <div
                style={{
                    width: "45%",
                    display: "flex",
                    justifyContent: "space-between",
                    position: "relative",
                    bottom: "-3px",
                }}
            >
                <Icon
                    href="https://github.com/codify-community" target="_blank">
                    <AiOutlineGithub size={30} color="#f3f3f3" />
                </Icon>
                <Icon href="https://discord.gg/MSr8SJfR4H" target="_blank">
                    <SiDiscord size={30} color="#f3f3f3" />
                </Icon>
                <Icon href="https://t.me/codifycommunity" target="_blank">
                    <SiTelegram size={30} color="#f3f3f3" />
                </Icon>
            </div>
        </FollowBox>
    );
};

const InfosBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    width: 83%;
    min-height: 300px;
    height: auto;
    margin: 5% 0px;
`;

//quadros com informações sobre o server (falta integrar com a api pra pegar os dados)
const Infos = (props) => {
    return (
        <InfosBox>
            <Info
                key={1}
                title={String(props.infos["channel_count"])}
                desc={"Canais"}
            />
            <Info
                key={2}
                title={String(props.infos["member_count"])}
                desc={"Membros"}
            />
            <Info
                key={3}
                title={String(props.infos["staff_count"])}
                desc={"Staffs"}
            />
            <Info key={4} title={"13.08.2020"} desc={"Criação do server"} />
        </InfosBox>
    );
};

//cards staff e boosters
const CardsBox = styled.div`
    width: 83%;
    height: auto;
    display: flex;
    flex-direction: column;
`;

const TitleCards = styled.h1`
    color: #f3f3f3;
    font-size: 6rem;
    text-shadow 2px 2px 3px ${config.colors.highlight};
    margin-top: 3%;
    @media (min-width: 550px) and (max-width: 800px){
        margin-top: 10%;
        font-size: 5rem;
    }
    @media (min-width: 300px) and (max-width: 550px){
        font-size: 4rem;
        margin-top: 15%;
    }
`;

const CardBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    min-height: 500px;
    margin: 5% 0px;
`;

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
            },
        },
        {
            breakpoint: 950,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
};

//area da staff (falta integrar com a api pra pegar os dados)
const Staffs = ({ staffs }) => {
    //staff arguments: foto, nome, descrição, cargo(MOD/ADM), habiliades (linguagens e frameworks), link (github ou site), type (github ou site)
    return (
        <CardsBox>
            <TitleCards>Staffs</TitleCards>
            <CardBox>
                <Slider {...SliderSettings} className="carousel">
                    {staffs.map((staff, index) => (
                        <Card
                            key={index}
                            pfp={staff.pfp}
                            name={staff.name}
                            ocupation={staff.ocupacao}
                            desc={staff.bio}
                            role={staff.role}
                            habilities={staff.habilidades}
                            link={staff.github}
                        />
                    ))}
                </Slider>
            </CardBox>
        </CardsBox>
    );
};

const Boosters = ({ boosters }) => {
    return (
        <CardsBox>
            <TitleCards>Boosters</TitleCards>
            <CardBox>
                <Slider {...SliderSettings} className="carousel">
                    {boosters.map((booster, index) => (
                        <Card
                            key={index}
                            pfp={booster.pfp}
                            name={booster.name}
                            ocupation={booster.ocupacao}
                            desc={booster.bio}
                            role={booster.role}
                            habilities={booster.habilidades}
                            link={booster.github}
                        />
                    ))}
                </Slider>
            </CardBox>
        </CardsBox>
    );
};

const getData = async () => {
    try {
        const response = await api.get("/api/home");

        const boosters = response.data.booster.sort((a, b) => a.name - b.name);

        const staffOrder = config.cards.staffOrder;

        const staffs = response.data.staff.sort((a, b) => {
            if (staffOrder[a.role] < staffOrder[b.role]) return -1;
            if (staffOrder[a.role] > staffOrder[b.role]) return 1;

            //Se os staffs tiverem a mesma role, ordenamos alfabeticamente:

            const aName = a.name.toLowerCase();
            const bName = b.name.toLowerCase();

            if (aName < bName) return -1;
            if (aName > bName) return 1;

            return 0;
        });

        const info = response.data.info;
        return { info, staffs, boosters };
    } catch (err) {
        console.log(err);
        throw new Error("Erro ao carregar os dados :" + err);
    }
};

const Main = () => {
    const [data, setData] = useState({
        info: { channel_count: 0, member_count: 0, staff_count: 0 },
        staffs: [],
        boosters: [],
    });

    const [error, setError] = useState(null);

    const handleNotificationClose = () => {
        setError(null);
    };

    useEffect(() => {
        getData()
            .then((data) => {
                setData(data);
            })
            .catch((err) => {
                console.error(err);
                setError("Falha ao carregar as informações.Tente novamente!");
            });

        return () => {
            setData({
                info: { channel_count: 0, member_count: 0, staff_count: 0 },
                staffs: [],
                boosters: [],
            });
        };
    }, []);

    return (
        <Layout>
            <MainBox>
                <Banner />
                <Infos infos={data.info} />
                <Staffs staffs={data.staffs} />
                <Boosters boosters={data.boosters} />
            </MainBox>
            {error && (
                <Notification
                    onClose={handleNotificationClose}
                    text={error}
                    type={"error"}
                />
            )}
        </Layout>
    );
};

export default Main;
