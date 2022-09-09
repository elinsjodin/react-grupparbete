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
  HeroBookingContainer,
  MainContactContainer,
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


const image1 = require("../../assets/images-1.jpeg");
const image14 = require("../../assets/images-14.jpg");
const image8 = require("../../assets/images-12.jpg");
const image13 = require("../../assets/images-13.jpg");

export const MainPage = () => {
  return (
    <div>
      <MainPageWrapper>
        <MainHeroContentContainer>
          <MainHeroImgContainer>
            <img src={image1} alt="MainHeroImage" />
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
            <img src={image14} alt="MainMenuImage" />
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
              src={image8}
              className="anything-else"
              alt="MainBookingImage"
            />
          </MainBookingImgContainer>
          <MainBookingTextContainer>
            <HeroBookingContainer>
            Table reservations can be made one month to the calendar date. 
            Online reservations up to 12 guests. If you are more than that, 
            send your booking request to ES Reservations. 
            Sorkins is a cash free resturant.
            <Link to="/bookings">
              <MainBookingButton>
                <div>
                  Book
                </div>
              </MainBookingButton>
            </Link>
            </HeroBookingContainer>
          </MainBookingTextContainer>
        </MainBookingContentContainer>
        <MainBookingTitleContainer>
          Table Reservations
        </MainBookingTitleContainer>
      </MainBookingWrapper>

      <MainContactWrapper>
        <MainContactTitleContainer>
          Contact
        </MainContactTitleContainer>
        <MainContactContentContainer>
          <MainContactImgContainer>
            <img
              src={image13}
              className="anything-else"
              alt="MainBookingImage"
            />
          </MainContactImgContainer>
          <MainContactTextContainer>
            <MainContactContainer>
            Are you interested in a private dinner in a restuant enviromen?
            No problem. We offer Sorkin's chef's table as a chambre séparée, where we serve 
            a selection of set menus for up to 8 guests in the same party
            <Link to="/contact">
              <MainContactButton>
                <div>
                  Contact
                </div>
              </MainContactButton>
            </Link>
            </MainContactContainer>
          </MainContactTextContainer>
        </MainContactContentContainer>
      </MainContactWrapper>





    </div>
  );
};
