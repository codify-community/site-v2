import { IoCloseSharp } from "react-icons/io5";
import { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import { config } from "../config";
import { delay } from "../util/delay";

const notificationTypes = {
    error: config.notification.error,
    success: config.notification.success,
};

const ButtonClose = styled.button`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: -5px;
    right: -5px;
    width: 20px;
    height: 20px;
    border-radius: 12.5px;
    border: none;
    background-color: white;
    color: black;
    cursor: pointer;
`;

const slideIn = keyframes`
    from{
        transform: translateY(300%);
    }to{
        transform: translateY(0%);
    }

`;

const NotificationStyled = styled.div`
    position: fixed;
    z-index: 10;
    width: 400px;
    height: max-content;
    right: 20px;
    padding: 20px 10px;
    border-radius: 10px;
    color: #ffffff;
    background-color: ${(props) =>
        notificationTypes[props.type] || notificationTypes["success"]};

    animation: ${slideIn} ${config.notification.transition / 2}ms ease-in;
    transition: ${config.notification.transition}ms bottom;

    &.closing {
        bottom: -40% !important;
    }

    &.active {
        bottom: 100px;
    }
`;

const Notification = ({ text, type, onClose, ...props }) => {
    const notificationRef = useRef(null);

    const [content, setContent] = useState({
        text: null,
        type: null,
    });
    
    /*eslint-disable react-hooks/exhaustive-deps*/ 
    useEffect(() => {
        if (content.text) {
            notificationRef.current.classList.add("closing");

            delay(config.notification.transition).then(() => {
                setContent({
                    text: text,
                    type: type,
                });
            });
        } else {
            setContent({
                text: text,
                type: type,
            });
        }
    }, [text]);

    useEffect(() => {
        notificationRef.current.classList.remove("closing");
        notificationRef.current.classList.add("active");
    }, [content.text]);

    const closeNotification = async () => {
        notificationRef.current.classList.add("closing");
        await delay(config.notification.transition);
        onClose();
    };

    return (
        <NotificationStyled
            ref={notificationRef}
            type={content.type}
            {...props}
        >
            {content.text}
            <ButtonClose onClick={closeNotification}>
                <IoCloseSharp />
            </ButtonClose>
        </NotificationStyled>
    );
};

export default Notification;
