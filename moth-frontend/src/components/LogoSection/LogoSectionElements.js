import styled from 'styled-components'

export const InfoContainer = styled.div`
    color: #fff;
    background: #010606;
    display: flex;
    flex-direction: row;
    padding-left: 10px;
    padding-right: 10px;
`;

export const Img = styled.img`
    max-height: 200px;
    padding: 50px;
    margin-left: auto;
    margin-right: auto;
    object-fit: cover;

    @media screen and (max-width: 900px) {
        max-height: 100px;
        padding: 10px;
    }

    @media screen and (max-width: 468px) {
        max-height: 50px;
        padding: 2px;
    }
`;