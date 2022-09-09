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
  HeroTextContainer, 
  HeroContactContainer,
  HeroBookingContainer
} from "../styledComponents/Containers";

import {
  MainContactButton,
  MainBookingButton,
} from "../styledComponents/Buttons";

import {
  MainPageWrapper,
  MainMenuWrapper,
  MainBookingWrapper,
  MainContactWrapper,
  
} from "../styledComponents/Wrappers";
import { Link } from "react-router-dom";

const HeroImg =
  "https://i.postimg.cc/4nCZ8qn0/images-1.jpg";
const MenuImg =
  "https://i.postimg.cc/BbfMmf2k/images-8.jpg";
const BookingImg =
  "https://i.postimg.cc/CLzHVt52/images-4.jpg";
const ContactImg =
  "https://i.postimg.cc/GhHHXTm0/images-11.jpg";


const FALLBACK_IMAGE =
  "https://www.kindacode.com/wp-content/uploads/2021/08/oops.png";


export const MainPage = () => {
  return (
    <div>
      <MainPageWrapper>
        <MainHeroContentContainer>
          <MainHeroImgContainer>
            <img src={HeroImg} alt="MainHeroImage" />
          </MainHeroImgContainer>
          <MainHeroTextContainer>
            <HeroTextContainer>
            At Sorkins, we’re creating the next generation of
            lacto-ovo-vegetarian cuisine. Quality fresh produce, with the whole
            world as a source of inspiration, is transformed into one exciting menu.
      
            </HeroTextContainer>
          </MainHeroTextContainer>
        </MainHeroContentContainer>
        <MainHeroTitleContainer>
          WELCOME TO
          <br />
          <span>SORKINS</span>
        </MainHeroTitleContainer>
      </MainPageWrapper>

      <MainMenuWrapper>
        <MenuTitleContainer>Our Menu</MenuTitleContainer>
        <MenuContentContainer>
          <MenuImageContainer>
            <img src={MenuImg} alt="MainMenuImage" />
          </MenuImageContainer>
          <MenuTextContainer>
            <br />
            The Sorkins Menu is 845 SEK per person.
            <br />
            (A vegan menu is also available)
            <br />
            <br /> –
            <br />
            <br />
            Bread from Yellow Rabbit
            <br />
            Butter from Göts gårdsmejeri
            <br />
            Green peas
            <br />
            <br />
            Appetiser…
            <br />
            Truffled green ”foie gras” with wheat levain croutons
            <br />
            From the garden…
            Artichoke, broccoli, peas, leaves & sprouts
            <br />
            Japanese Inspiration…
            Jasmine rice in salad leaves with deep fried onion, ginger,
            nashi pear, wasabi
            <br />
          </MenuTextContainer>
        </MenuContentContainer>
      </MainMenuWrapper>

      <MainBookingWrapper>
        <MainBookingContentContainer>
          <MainBookingImgContainer>
            <img
              src={BookingImg}
              className="anything-else"
              alt="MainBookingImage"
            />
          </MainBookingImgContainer>
          <MainBookingTextContainer>
            <HeroBookingContainer>
            At Sorkins, we’re creating the next generation of
            lacto-ovo-vegetarian cuisine. Quality fresh produce, with the whole
            world as a source of inspiration, is transformed into one exciting
            menu.
            <Link to="/bookings">
              <MainBookingButton><div>Book</div></MainBookingButton>
            </Link>
            </HeroBookingContainer>
            
          </MainBookingTextContainer>
        </MainBookingContentContainer>
        <MainBookingTitleContainer>
          Table Reservations
        </MainBookingTitleContainer>
        
      </MainBookingWrapper>

      <MainContactWrapper>
        <MainContactTitleContainer>Contact</MainContactTitleContainer>

        <MainContactContentContainer>
          <MainContactImgContainer>
            <img
              src={ContactImg}
              className="anything-else"
              alt="MainContactImage"
            />
          </MainContactImgContainer>
          <MainContactTextContainer>
          
            Table reservations can be made one month to the calendar date. 
Online reservations up to 12 guests. If you are more than that, send your booking request to ES Reservations.
Sorkins is a cash free resturant.
        
          </MainContactTextContainer>
        </MainContactContentContainer>
      </MainContactWrapper>
    </div>
  );
};
