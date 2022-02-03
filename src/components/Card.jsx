import styled from 'styled-components'

const colors = {'OWNER':'#ffb83d', 'ADMIN': '#fc3838', 'MOD': '#617bff', 'BOOSTER': '#F47FFF'}

const StaffStyled = styled.div`
    width: 100%;
    height: 600px;
    background-color: #24272B;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
`

const Content = styled.div`
    width: 100%;
    height: 100%;
    background-color: #303438;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    padding: 25px;
    padding-bottom: 40px;
    transition: all 0.3s ease;
    &:hover{
        background-color: #2176FF;
    }
    &:hover > img{
        border: 2px solid #f3f3f3
    }
    &:hover > a{
        border: 2px solid #f3f3f3
    }
    display: flex;
    flex-direction: column;
    justify-content: space-beeetween;
    align-items: center;
    box-shadow: 0px 0px 15px rgba(0,0,0,0.3);
    
`

const Tag = styled.div`
    padding: 8px 15px;
    border-radius: 7px;
    background-color: ${props => props.color};
    color: #f3f3f3;
    font-size: .8rem;
    font-weight: bold;
`

const Pfp = styled.img`
    width: 120px;
    height: 120px;
    border-radius: 360px;
    padding: 8px;
    border: 2px solid #2176FF;
    transition: all 0.3s ease;
`

const Name = styled.p`
    margin: 10px 0px;
    color: #f3f3f3;
    font-size: 1.8rem;
`

const Ocupation = styled.p`
    margin-bottom: 10pxpx;
    font-size: 1rem;
    color: #bbb;
`

const Desc = styled.p`
    color: #f3f3f3;
    margin-top: 30px;
    font-size: 1.1rem;
    text-align: center;
`

const External = styled.a`
    margin-top: 30px;
    padding: 10px 20px;
    border: 1px solid #2176FF;
    border-radius: 7px;
    color: #f3f3f3;
    font-size: 1.2rem;
    transition: all 0.3s ease;
    text-decoration: none;
`


const Habilities = styled.div`
    width: 100%;
    height: 100%;
    background-color: #191a1c;
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
`

const P = styled.p`
    color: #f3f3f3;
    font-size: 1rem;
    padding-top: 15px;
    padding-left: 15px;
`

const TagBox = styled.div`
    width: 100%;
    height: auto;
    padding: 0px 15px;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-items: center;
    color: #f3f3f3;
`


const HTag = styled.p`
    width: fit-content;
    margin: 10px 0px;
    padding: 3px 10px;
    border-radius: 7px;
    border: 2px solid #303438;
    margin-right: 10px;
`


const Card = (props) => {
    let tags = props.habilities.map((hab, index) => <HTag key={index}>{hab}</HTag>)
    return(
        <StaffStyled>
            <Content>
                <div style={{display:'flex', width:'100%'}}>
                    <Tag color={colors[props.role]}>{props.role}</Tag>
                </div>
                <Pfp src={props.pfp}/>
                <Name>{props.name}</Name>
                <Ocupation>{props.ocupation}</Ocupation>
                <Desc>
                    {props.desc}
                </Desc>
                <External href={props.link} target={'_blank'}>{props.type}</External>
            </Content>
            <Habilities>
                <P>Habilidades</P>
                <TagBox>
                    {tags}
                </TagBox>
            </Habilities>
        </StaffStyled>
    )
}


export default Card