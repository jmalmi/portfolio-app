import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import {Button} from '../ButtonElements'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowFoward, ArrowRight } from './HeroElements'


const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }


    return (
        <div>
            <HeroContainer>
                <HeroBg>
                    <VideoBg autoPlay loop muted src={Video} type="video/mp4"/>
                </HeroBg>
                <HeroContent>
                    <HeroH1>Tervetuloa sivuilleni</HeroH1>
                    <HeroP>Tutustu koulutukseeni ja portfoliooni</HeroP>
                    <HeroBtnWrapper>
                        <Button onMouseEnter={onHover} onMouseLeave={onHover} to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80}
                        primary="true"
                        dark="true">
                            Aloita tästä {hover ? <ArrowFoward /> : <ArrowRight />}
                        </Button>
                    </HeroBtnWrapper>
                </HeroContent>
            </HeroContainer>
        </div>
    )
}

export default HeroSection
