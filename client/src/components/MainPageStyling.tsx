import { 
  MainHeroContentContainer,
  MainHeroImgContainer,
  MainHeroTextContainer,
  MainHeroTitleContainer,
  MenuTitleContainer,
  MenuContentContainer, 
  MenuImageContainer,
  MenuTextContainer,
  MainBookingContentContainer,
  MainBookingImgContainer,
  MainBookingTextContainer,
  MainBookingTitleContainer,
  MainContactTitleContainer,
  MainContactTextContainer,
  MainContactImgContainer,
  MainContactContentContainer,

} from "../styles/Containers";

import {
  MainContactButton,
  MainBookingButton,
} from "./styledComponents/Buttons";

import { 
  MainPageWrapper, 
  MainMenuWrapper, 
  MainBookingWrapper,
  MainContactWrapper,
} from "../styles/Wrappers";
import logo from '../logo.svg';

export const MainPageHero = () => {
  return (
    <div>
      <MainPageWrapper>
        <MainHeroContentContainer>
          <MainHeroImgContainer>
            <img src={logo} className="App-logo" alt="MainHeroImage" />
          </MainHeroImgContainer>
            <MainHeroTextContainer>
            At Sorkins, we’re creating the next generation 
            of lacto-ovo-vegetarian cuisine. Quality fresh 
            produce, with the whole world as a source of inspiration,
            is transformed into one exciting menu.
            </MainHeroTextContainer>
        </MainHeroContentContainer>  
        <MainHeroTitleContainer>Welcome To Sorkins</MainHeroTitleContainer>
      </MainPageWrapper>

      <MainMenuWrapper>
        <MenuTitleContainer>Our Menu</MenuTitleContainer>
        <MenuContentContainer>
          <MenuImageContainer>
            <img src={logo} className="App-logo" alt="MainMenuImage" />
          </MenuImageContainer>
          <MenuTextContainer>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Possimus corporis cumque voluptas, earum nobis officiis voluptatibus aut velit enim placeat 
              quas odit cupiditate facilis, porro deserunt aspernatur qui libero optio iste itaque,
              magni nihil modi iusto. Quis enim aliquam corporis officia error assumenda
              sed eligendi delectus doloribus? Ducimus, similique non!
          </MenuTextContainer>
        </MenuContentContainer>
      </MainMenuWrapper>

      <MainBookingWrapper>
        <MainBookingContentContainer>
          <MainBookingImgContainer>
            <img src={logo} className="App-logo" alt="MainBookingImage" />
          </MainBookingImgContainer>
            <MainBookingTextContainer>
              At Sorkins, we’re creating the next generation 
              of lacto-ovo-vegetarian cuisine. Quality fresh 
              produce, with the whole world as a source of inspiration,
              is transformed into one exciting menu.
            </MainBookingTextContainer>
            <MainBookingButton>Book</MainBookingButton>
        </MainBookingContentContainer>  
        
        <MainBookingTitleContainer>Table Reservations</MainBookingTitleContainer>
      </MainBookingWrapper>
     

      <MainContactWrapper>
        <MainContactTitleContainer>Contact</MainContactTitleContainer>
        <MainContactContentContainer>
          <MainContactImgContainer>
            <img src={logo} className="App-logo" alt="MainContactImage" />
          </MainContactImgContainer>
          <MainContactTextContainer>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Possimus corporis cumque voluptas, earum nobis officiis voluptatibus aut velit enim placeat 
              quas odit cupiditate facilis, porro deserunt aspernatur qui libero optio iste itaque,
              magni nihil modi iusto. Quis enim aliquam corporis officia error assumenda
              sed eligendi delectus doloribus? Ducimus, similique non!
          </MainContactTextContainer>
          <MainContactButton>Contact</MainContactButton>
        </MainContactContentContainer>
      </MainContactWrapper>
      
    </div>
  );
};