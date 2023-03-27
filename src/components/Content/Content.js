import React from "react";
import {Container, DarkButton, DarkButtonAlt} from "../../globalStyles";
import {Hero, HeroInfo, DarkSection, DarkSection2, ImgFloatRight, ArticleSection, SeePlaces, AirplaneIcon, MountainInfo, MiLeftContent, MiRightContent, MiText, ListSection, ReviewSection, FormSection} from './Content.elements';
import {Articles} from '../Articles/Articles';
import {Accordian} from '../Accordian/Accordian';
import {Carousel} from '../Carousel/Carousel';
// images
import mountains from '../../images/mountains.png';
import mountains2 from '../../images/mountains2.png';
import airplane from '../../images/airplane.png';
import hiker from '../../images/hiker.png';
import sittingHiker from '../../images/sitting-hiker.png';
// decor
import {HeroScribbleLeft, HeroScribbleRight, WhiteScribbleLeft, WhiteScribbleRight, ArticlesScribbleLeft, ArticlesScribbleRight, GreyScribbleBottom, AirplaneScribble, Tape, ScribbleWhiteLarge, ReviewsScribbleLeft, ReviewsScribbleRight} from '../Content/scribble.elements';
import heroScribbleLeftImg from '../../images/background/scribble-lightest.png';
import heroScribbleRightImg from '../../images/background/hero-scribble.png';
import WhiteScribbleLeftImg from '../../images/background/scribble-white-left.png';
import whiteScribbleRightImg from '../../images/background/scribble-white-right.png';
import articlesScribbleLeftImg from '../../images/background/articles-scribble-left.png';
import articlesScribbleRightImg from '../../images/background/articles-scribble-right.png';
import greyScribbleBottomImg from '../../images/background/scribble-lightest-bottom.png';
import airplaneScribbleImg from '../../images/background/airplane-scribble.png';
import tapeImg from '../../images/background/tape.png';
import scribbleWhiteLargeImg from '../../images/background/scribble-white-large.png';
import reviewsScribbleLeftImg from '../../images/background/reviews-scribble-left.png';
import reviewsScribbleRightImg from '../../images/background/reviews-scribble-right.png'; 


const Content = () => {
  return (
    <main>   
        <Hero>
            <HeroScribbleLeft src={heroScribbleLeftImg} />
            <Container>
                <HeroInfo>
                    <div>
                        <h2>Travel to your dream destination</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum sus pendisse ultrices gravida.</p>
                        <DarkButton>Reserve Ticket</DarkButton>
                    </div>
                    <img
                        src={mountains}
                        alt="Mountains"
                    />
                </HeroInfo>
            </Container>
            <HeroScribbleRight src={heroScribbleRightImg} />
        </Hero>

        <DarkSection>
            <Container>
                <h3>Create a memory to remember</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do ei usmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum sus pendisse ultrices gravida.</p>
                <DarkButtonAlt>My Travel Logs</DarkButtonAlt>
            </Container>
            <WhiteScribbleLeft src={WhiteScribbleLeftImg} />
            <WhiteScribbleRight src={whiteScribbleRightImg} />
        </DarkSection>

        <ArticleSection>
            <Container>
                <ArticlesScribbleLeft src={articlesScribbleLeftImg} />
                <Articles></Articles>
                <ArticlesScribbleRight src={articlesScribbleRightImg} />
            </Container>
        </ArticleSection>

        
        <SeePlaces>
            <GreyScribbleBottom src={greyScribbleBottomImg} />
            <Container>
                <AirplaneIcon 
                    src={airplane}
                    alt="airplane icon"
                />
                <h1>See places you've <em>never</em> been before</h1>
                <p>Lorem Ipsum Dolor | Lorem Ipsum Dolor | Lorem Ipsum Dolor</p>
                <AirplaneScribble src={airplaneScribbleImg} />
            </Container>
        </SeePlaces>

        <Container>
            <MountainInfo>
                <Tape src={tapeImg} />
                <MiLeftContent
                    src={mountains}
                    alt="More mountains"
                />
                <MiRightContent>
                    <img 
                        src={mountains2}
                        alt="Andre's Peak"
                    />
                    <MiText>
                        <h4>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do ei</h4>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                            <p>exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                    </MiText>
                    <button></button>
                </MiRightContent>
            </MountainInfo>
        </Container>

        <DarkSection2>
            <Container>
                <div>
                    <h3>Choose anywhere you'd like to be</h3>
                    <section>
                        <h5>Lorem Ipsum dolor</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ei usmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repre henderit in voluptate velit esse.</p>
                    </section>
                    <section>
                        <h5>Lorem Ipsum dolor</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ei usmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repre henderit in voluptate velit esse.</p>
                    </section>
                </div>
            </Container>
            <ImgFloatRight
                src={hiker}
                alt="Mountain hiker"
            />
            <ScribbleWhiteLarge src={scribbleWhiteLargeImg} />
        </DarkSection2>

        <Container>
            <ListSection>
                <div>
                    <h2>Lorem ipsum dolor sit amet consectetur</h2>
                    <Accordian />
                </div>
                <img 
                    src={sittingHiker}
                    alt="Hiker sitting"
                />
            </ListSection>
        </Container>

            <ReviewSection>
                <ReviewsScribbleLeft src={reviewsScribbleLeftImg}/>
                <Container>
                    <h2>Here's what they have to say...</h2>
                    <Carousel />
                </Container>
                <ReviewsScribbleRight src={reviewsScribbleRightImg}/>
            </ReviewSection>

        <Container>
            <FormSection>
                    <div>
                        <h2>Be updated!</h2>
                        <form>
                            <input type="text" placeholder="First Name*"></input>
                            <input type="text" placeholder="Last Name*"></input>
                            <input type="text" placeholder="Email Subject*"></input>
                            <textarea id="w3review" name="w3review" placeholder="Write something here..." rows="10" ></textarea>
                            <DarkButton type="submit" value="Submit Email">Submit Email</DarkButton>
                        </form>
                    </div>
                    <img
                        src={mountains}
                        alt="Even more mountains"
                    />
            </FormSection>
        </Container>
    </main>
  )
}

export default Content