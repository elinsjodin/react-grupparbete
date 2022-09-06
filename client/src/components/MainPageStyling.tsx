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

} from "./styledComponents/Containers";

import {
  MainContactButton,
  MainBookingButton,
} from "./styledComponents/ButtonsMain";

import { 
  MainPageWrapper, 
  MainMenuWrapper, 
  MainBookingWrapper,
  MainContactWrapper,
} from "./styledComponents/Wrappers";


const IMAGE_1 = "https://www.kindacode.com/wp-content/uploads/2021/08/fried-chicken.jpeg";
const IMAGE_2 = "https://www.kindacode.com/wp-content/uploads/2021/08/fried-chicken.jpeg";
const FALLBACK_IMAGE = "https://www.kindacode.com/wp-content/uploads/2021/08/oops.png";


export const MainPageHero = () => {
  return (
    <div>
      <MainPageWrapper>
        <MainHeroContentContainer>
          <MainHeroImgContainer>
            <img src={IMAGE_1} alt="MainHeroImage" />
          </MainHeroImgContainer>
            <MainHeroTextContainer>
            At Sorkins, we’re creating the next generation 
            of lacto-ovo-vegetarian cuisine. Quality fresh 
            produce, with the whole world as a source of inspiration,
            is transformed into one exciting menu.
            </MainHeroTextContainer>
        </MainHeroContentContainer>  
        <MainHeroTitleContainer>
            WELCOME TO<br/>
            <span>SORKINS</span>
        </MainHeroTitleContainer>
      </MainPageWrapper>

      <MainMenuWrapper>
        <MenuTitleContainer>Our Menu</MenuTitleContainer>
        <MenuContentContainer>
          <MenuImageContainer>
            <img src={IMAGE_1} alt="MainMenuImage" />
          </MenuImageContainer>
          <MenuTextContainer>
            <br/>The Sorkins Menu is 845 SEK per person. 
            <br/>(A vegan menu is also available)        
            <br/>                                
            <br/> –
            <br/>
            <br/>Bread from Green Rabbit
            <br/>Butter from Löts gårdsmejeri
            <br/>Chanterelle cappuccino
            <br/>
            <br/>Appetiser…
            <br/>Truffled green ”foie gras” with wheat levain croutons
            <br/>
            <br/>From the garden…
            <br/>Artichoke, broccoli, peas, leaves & sprouts
            <br/> 
            <br/>Japanese Inspiration…
            <br/> Jasmine rice in salad leaves with deep fried onion, ginger, nashi pear, wasabi
            <br/>
            <br/> This month´s produce… Beetroot
            <br/>Raspberry, smoked cheese, trevisano, browned butter
            <br/>
            <br/>Summer´s flavours…
            <br/>Roasted pointed cabbage, cheese, herbs, lemon zest
            <br/>
            <br/> From the berry bush……
            <br/> Summer berries, swiss roll, punch
            <br/>
            <br/> –
            <br/>
            <br/> Every season offers its specific ingredients, therefore we change one of the dishes every month and dedicate it to an ingredient in season.
            <br/>
            <br/> Produce in focus for August: Beetroot!
            <br/>
            <br/> “ Beetroot came to the Nordic countries in the 17th and 18th centuries. The plant is easy to grow and hardy which enables it to be cultivated in favorable locations far up north in Sweden. Beetroot is often eaten as freshly cooked primroses or, even more commonly, as pickled. As a freshly cooked primer the beet tastes sweet and has hints of soil. In September, we pay homage to beets and prepare a dish in Rutabaga on local primeur beets with fresh raspberries, roasted red tardivo salad with smoked cheese. Otherwise, a fun tip that anyone can make at home is Cwikta (Polish Beetroot and Horseradish Scramble). Grate horseradish and blend in a food processor with whole cooked pickled beets to make a smooth purée. Season with sugar, vinegar, a little ground cumin, salt and pepper. Delicious!
            <br/>
            <br/> / Mathias.”
            <br/>
            <br/> –
            <br/> 
          </MenuTextContainer>
        </MenuContentContainer>
      </MainMenuWrapper>

      <MainBookingWrapper>
        <MainBookingContentContainer>
          <MainBookingImgContainer>
            <img src={IMAGE_1} className="App-logo" alt="MainBookingImage" />
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
            <img src={IMAGE_2} className="App-logo" alt="MainContactImage" />
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