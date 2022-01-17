import React from "react";
import {
  PortfolioContainer,
  PortfolioH1,
  PortfolioWrapper,
  PortfolioCard,
  PortfolioIcon,
  PortfolioH2,
  PortfolioP,
} from "./PortfolioElements";
import Icon1 from "../../images/img1.png";
import Icon2 from "../../images/img2.png";
import Icon3 from "../../images/img3.png";
import Icon4 from "../../images/img6.png";
import Icon5 from "../../images/img4.png";
import Icon6 from "../../images/img5.png";
import Icon7 from "../../images/img7.png";
import Icon8 from "../../images/Node.js_logo.svg";

const Portfolio = () => {
  return (
    <PortfolioContainer id="portfolio">
      <PortfolioH1>Portfolio</PortfolioH1>
      <PortfolioWrapper>
        <PortfolioCard
          onClick={() => window.open("https://gitlab.com/jonimalmivaara")}
        >
          <PortfolioIcon src={Icon7} />
          <PortfolioH2>Gitlab reponi</PortfolioH2>
          <PortfolioP>Täältä löydät eri projektieni lähdekoodeja</PortfolioP>
        </PortfolioCard>
        <PortfolioCard
          onClick={() =>
            window.open("https://student.labranet.jamk.fi/~AB5141/portfolio")
          }
        >
          <PortfolioIcon src={Icon1} />
          <PortfolioH2>Tämä Sivusto</PortfolioH2>
          <PortfolioP>
            Sivut on tehty käyttäen React scrollia ja routteria
          </PortfolioP>
        </PortfolioCard>
        <PortfolioCard
          onClick={() =>
            window.open("https://student.labranet.jamk.fi/~AB5141/mok/weather/")
          }
        >
          <PortfolioIcon src={Icon2} />
          <PortfolioH2>React sää</PortfolioH2>
          <PortfolioP>Pieni sää sovellus reactilla ja axioksella</PortfolioP>
        </PortfolioCard>
        <PortfolioCard
          onClick={() =>
            window.open(
              "https://student.labranet.jamk.fi/~AB5141/mok/redux-shop/"
            )
          }
        >
          <PortfolioIcon src={Icon3} />
          <PortfolioH2>React kauppa</PortfolioH2>
          <PortfolioP>Kauppa sovellus reactilla. Axios & Redux</PortfolioP>
        </PortfolioCard>
        <PortfolioCard
          onClick={() =>
            window.open("https://student.labranet.jamk.fi/~AB5141/mok/movies/")
          }
        >
          <PortfolioIcon src={Icon4} />
          <PortfolioH2>Movies app</PortfolioH2>
          <PortfolioP>Elokuva sovellus. Axios, modal, youtube</PortfolioP>
        </PortfolioCard>
        <PortfolioCard
          onClick={() =>
            window.open("https://student.labranet.jamk.fi/~AB5141/mok/busses/")
          }
        >
          <PortfolioIcon src={Icon5} />
          <PortfolioH2>Linja-autot reaaliajassa</PortfolioH2>
          <PortfolioP>GTFS Realtime datan käsittely</PortfolioP>
        </PortfolioCard>
        <PortfolioCard
          onClick={() =>
            window.open(
              "https://student.labranet.jamk.fi/~AB5141/mok/consumption/"
            )
          }
        >
          <PortfolioIcon src={Icon6} />
          <PortfolioH2>Car Consumption</PortfolioH2>
          <PortfolioP>
            Sovellus jolla voi tarkkailla ja tallentaa auton kulutusta
          </PortfolioP>
        </PortfolioCard>
        <PortfolioCard
          onClick={() =>
            window.open("https://gitlab.com/jonimalmivaara/todos_backend")
          }
        >
          <PortfolioIcon src={Icon8} />
          <PortfolioH2>Todos backend</PortfolioH2>
          <PortfolioP>Node.js, Express ja MongoDB</PortfolioP>
        </PortfolioCard>
      </PortfolioWrapper>
    </PortfolioContainer>
  );
};

export default Portfolio;
