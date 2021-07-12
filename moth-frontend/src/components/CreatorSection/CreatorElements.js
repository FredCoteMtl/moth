import styled from 'styled-components';

export const InfoContainer = styled.div`
    color: #fff;
    background: #010606;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-bottom: 50px;
    padding-left: 10px;
    padding-right: 10px;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

export const TopLine = styled.p`
    color: #01bf71;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
    margin-right: auto;
    margin-left: auto;
`;

export const Avatar = styled.img`
    border-radius: 50%;
    max-height: 250px;
    margin-right: auto;
    margin-left: auto;
`;

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 10px;
    font-size: 14px;
    line-height: 24px;
    color: white;
`;

export const Git = styled.a`
    color: #01bf71;
`;