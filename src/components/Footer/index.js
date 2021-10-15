import React from 'react'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkTitle, FooterLinkItems, FooterLink, Rights, RightsLogo } from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Sivusto</FooterLinkTitle>
                                <FooterLink href="https://www.linkedin.com/in/jonimalmivaara/">LinkedIn</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Koulutus</FooterLinkTitle>
                                <FooterLink href="https://ict-alan-osaajaksi.pages.labranet.jamk.fi/">Ohjelmistoalan osaajaksi</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <Rights>
                    <RightsLogo to='/'>Joni Malmivaara Ⓒ {new Date().getFullYear()}</RightsLogo>
                </Rights>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
