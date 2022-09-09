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
const image2 = require("../../assets/images-2.jpeg");
const image3 = require("../../assets/images-3.jpeg");
const image4 = require("../../assets/images-4.jpeg");
const image5 = require("../../assets/images-5.jpeg");
const image6 = require("../../assets/images-6.jpeg");
const image7 = require("../../assets/images-7.jpeg");
const image8 = require("../../assets/images-8.jpeg");
const image9 = require("../../assets/images-9.jpeg");
const image10 = require("../../assets/images-10.jpeg");
const image11 = require("../../assets/images-11.jpeg");

// const IMAGE_1 =
//   "https://www.kindacode.com/wp-content/uploads/2021/08/fried-chicken.jpeg";
// const IMAGE_2 =
//   "https://www.kindacode.com/wp-content/uploads/2021/08/fried-chicken.jpeg";
// const FALLBACK_IMAGE =
//   "https://www.kindacode.com/wp-content/uploads/2021/08/oops.png";

export const MainPage = () => {
  return (
    <div>
      <MainPageWrapper>
        <MainHeroContentContainer>
          <MainHeroImgContainer>
            <img src={image1} alt="MainHeroImage" />
          </MainHeroImgContainer>
          <MainHeroTextContainer>
            At Sorkins, we’re creating the next generation of
            lacto-ovo-vegetarian cuisine. Quality fresh produce, with the whole
            world as a source of inspiration, is transformed into one exciting
            menu.
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
            <img src={image11} alt="MainMenuImage" />
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
            Bread from Green Rabbit
            <br />
            Butter from Löts gårdsmejeri
            <br />
            Chanterelle cappuccino
            <br />
            <br />
            Appetiser…
            <br />
            Truffled green ”foie gras” with wheat levain croutons
            <br />
            <br />
            From the garden…
            <br />
            Artichoke, broccoli, peas, leaves & sprouts
            <br />
            <br />
            Japanese Inspiration…
            <br /> Jasmine rice in salad leaves with deep fried onion, ginger,
            nashi pear, wasabi
            <br />
            <br /> This month´s produce… Beetroot
            <br />
            Raspberry, smoked cheese, trevisano, browned butter
            <br />
            <br />
            Summer´s flavours…
            <br />
            Roasted pointed cabbage, cheese, herbs, lemon zest
            <br />
            <br /> From the berry bush……
            <br /> Summer berries, swiss roll, punch
            <br />
            <br /> –
            <br />
            <br /> Every season offers its specific ingredients, therefore we
            change one of the dishes every month and dedicate it to an
            ingredient in season.
            <br />
            <br /> Produce in focus for August: Beetroot!
            <br />
            <br /> “ Beetroot came to the Nordic countries in the 17th and 18th
            centuries. The plant is easy to grow and hardy which enables it to
            be cultivated in favorable locations far up north in Sweden.
            Beetroot is often eaten as freshly cooked primroses or, even more
            commonly, as pickled. As a freshly cooked primer the beet tastes
            sweet and has hints of soil. In September, we pay homage to beets
            and prepare a dish in Rutabaga on local primeur beets with fresh
            raspberries, roasted red tardivo salad with smoked cheese.
            Otherwise, a fun tip that anyone can make at home is Cwikta (Polish
            Beetroot and Horseradish Scramble). Grate horseradish and blend in a
            food processor with whole cooked pickled beets to make a smooth
            purée. Season with sugar, vinegar, a little ground cumin, salt and
            pepper. Delicious!
            <br />
            <br />
            <br />
            <br />
            <br />
          </MenuTextContainer>
        </MenuContentContainer>
      </MainMenuWrapper>

      <MainBookingWrapper>
        <MainBookingContentContainer>
          <MainBookingImgContainer>
            <img
              src={image7}
              className="anything-else"
              alt="MainBookingImage"
            />
          </MainBookingImgContainer>
          <MainBookingTextContainer>
            At Sorkins, we’re creating the next generation of
            lacto-ovo-vegetarian cuisine. Quality fresh produce, with the whole
            world as a source of inspiration, is transformed into one exciting
            menu.
          </MainBookingTextContainer>
          <Link to="/bookings">
            <MainBookingButton>Book</MainBookingButton>
          </Link>
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
              src={image8}
              className="anything-else"
              alt="MainContactImage"
            />
          </MainContactImgContainer>
          <MainContactTextContainer>
            {" "}
            Feel free to contact us by clicking here!
            <Link to="/contact">
              <MainContactButton>Contact</MainContactButton>
            </Link>
          </MainContactTextContainer>
        </MainContactContentContainer>
      </MainContactWrapper>
    </div>
  );
};
