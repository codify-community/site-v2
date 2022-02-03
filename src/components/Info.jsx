import styled from "styled-components";
import CountUp from "react-countup";
import { config } from "../config";

const InfoStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    flex: 1;
    padding: 50px 0px;
    min-width: 200px;
    min-height: 200px;
    background-color: #303438;
    margin: 10px 15px;
`;

const Title = styled.p`
    color: #f3f3f3;
    font-size: 3rem;
    user-select: none;
    text-align: center;
    font-weight: bold;
`;

const Desc = styled(Title)`
    color: ${config.colors.highlight};
    font-size: 1.5rem;
    font-weight: normal;
`;

const Info = (props) => {
    let content = [];
    //verify if there is '.' in props.data
    if (!props.title.includes(".")) {
        content.push(
            <CountUp
                key={123}
                end={props.title}
                delay={1}
                duration={1.5}
                className="info_title"
            />
        );
    } else {
        content.push(<Title key={123}>{props.title}</Title>);
    }
    return (
        <InfoStyled>
            {content}
            <Desc>{props.desc}</Desc>
        </InfoStyled>
    );
};

export default Info;
