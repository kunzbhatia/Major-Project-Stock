import React from "react";
import Icon1 from "../../images/svg-3.svg";
import Icon2 from "../../images/svg-4.svg";
import Icon3 from "../../images/svg-5.svg";
import Icon4 from "../../images/svg-6.svg";
import Icon5 from "../../images/svg-7.svg";
import Icon6 from "../../images/svg-8.svg";
import "./Services.css";
import { ServicesCard } from "./ServicesElements";
const Services = () => {
  return (
    <div className="ServicesContainer" id="discover">
      <div className="Services-Elements">
        <div className="ServicesH1" align="center">
          Know more about Stockify
        </div>
        <div className="ServicesWrapper">
          <ServicesCard>
            <div className="ServicesCard">
              <img className="ServicesIcon" src={Icon1} alt="icon1" />

              <div className="ServicesP">
                Provided with a fixed amount of virtual money that you can use
                for trading.
              </div>
            </div>
          </ServicesCard>
          <ServicesCard>
            <div className="ServicesCard">
              <img className="ServicesIcon" src={Icon2} alt="icon1" />

              <div className="ServicesP">
                Look at different indicators and decide which stock to buy and
                which ones to sell.
              </div>
            </div>
          </ServicesCard>
          <ServicesCard>
            <div className="ServicesCard">
              <img className="ServicesIcon" src={Icon3} alt="icon1" />

              <div className="ServicesP">
                Explore different stocks on the Market page.
              </div>
            </div>
          </ServicesCard>
          <ServicesCard>
            <div className="ServicesCard">
              <img className="ServicesIcon" src={Icon4} alt="icon1" />

              <div className="ServicesP">
                User's portfolio display watchlist, orders, position, profile,
                total investment, net profit or loss.
              </div>
            </div>
          </ServicesCard>
          <ServicesCard>
            <div className="ServicesCard">
              <img className="ServicesIcon" src={Icon5} alt="icon1" />

              <div className="ServicesP">
                Demonstrate your ability of making sound investment decisions in
                a real scenario without losing real money.
              </div>
            </div>
          </ServicesCard>
          <ServicesCard>
            <div className="ServicesCard">
              <img className="ServicesIcon" src={Icon6} alt="icon1" />

              <div className="ServicesP">
                Stock prices will change in real-time. Graphs displayed for each
                ticker along with some indicators for fundamental analysis.
              </div>
            </div>
          </ServicesCard>
        </div>
      </div>
    </div>
  );
};

export default Services;
