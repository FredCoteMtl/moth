import React from 'react'
import { 
    InfoContainer,
    TopLine,
    TextWrapper,
    Avatar,
    Subtitle,
    Git
} from './CreatorElements'
import {default as creatorAvatar} from '../../images/creator.jpg'

const CreatorSection = () => {
    return (
        <InfoContainer>
            <TextWrapper>
                <TopLine>MEET THE CREATOR</TopLine>
                <Subtitle>This project was made by Frederic Cote (Nakamoth)</Subtitle>
                <Subtitle>I am a CS student at University of Montreal. If you need someone to code some solidity smart contracts or make a frontend for a project, I'm the guy you are looking for!</Subtitle>
                <Subtitle>You can find more of my projects <Git href={'https://github.com/FredCoteMtl'} target={'_blank'}>on Github</Git></Subtitle>
                <Subtitle>To contact me (creator): <u>fredcote-_-@hotmail.com</u></Subtitle>
                <Subtitle>To contact the official moth email: <u>moth.official@hotmail.com</u></Subtitle>
            </TextWrapper>
            <Avatar src={creatorAvatar} alt={'creators face'} type={'img/jpg'} />
        </InfoContainer>
    )
}

export default CreatorSection
