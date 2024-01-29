import { useRef } from "react";
import {
  ContentContainer,
  VideoContainer,
  HeroContainer,
  SmallContent,
} from "./HeroPage.styles";
import TextComponents from "../../components/TextComponents";
import PageTemplate from "../pageTemplate";
import { Button } from "../../components/Touchables/Buttons";
import { useNavigate } from "react-router-dom";
import { TopRatedEstablishments } from "../../static/establishments";
import { SmallEstablishmentDisplay } from "../../components/Displays/SmallEstablishmentDisplay/SmallEstablishmentDisplay";
import FavCategoriesSection from "./Sections/CategoriesDisplay/FavCategoriesSection";
import { WhyChooseUsSection } from "./Sections/WhyChooseUs/WhyChooseUs.section";
import herovideo from "../../assets/video/video.mp4";
import StroryServices from "./Sections/Story&Services/StroryServices.section";
import Spacer from "../../components/containers/spacer";

const HeroPage = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();
  return (
    <PageTemplate>
      <HeroContainer>
        <VideoContainer ref={videoRef} autoPlay muted loop>
          <source src={herovideo} type={"video/mp4"} />
        </VideoContainer>
        <ContentContainer>
          <TextComponents.Title
            opposite
            style={{ fontFamily: "Allura", lineHeight: 1 }}
          >
            Welcome to Your Pet Haven
          </TextComponents.Title>
          <TextComponents.Subtitle opposite>
            Your Trusted Source for Pet Care Tips and Companionship
          </TextComponents.Subtitle>
          <TextComponents.Body opposite>
            At Your Pet Haven, we understand that pets are more than just
            animals – they're cherished members of our families. Whether you're
            a seasoned pet owner or considering bringing a new furry friend into
            your life, we're here to guide you on the exciting journey of pet
            companionship.
          </TextComponents.Body>
          <SmallContent>
            <Button
              onClick={() => {
                navigate("/services", { state: { from: "hero" } });
              }}
              buttonType="search"
            >
              Search for services near you
            </Button>
            <Button
              backgroundColor="#ffffff45"
              textColor={"#203e59"}
              onClick={() => {
                navigate("/faq", { state: { from: "hero" } });
              }}
            >
              Read FAQ to find out more obout us.
            </Button>
          </SmallContent>
          <SmallContent direction="row">
            {TopRatedEstablishments.map((establishment) => {
              return (
                <SmallEstablishmentDisplay
                  establishment={establishment}
                  key={establishment.id}
                />
              );
            })}
          </SmallContent>
        </ContentContainer>
      </HeroContainer>
      {/* POPULAR CATEGORIES */}
      <FavCategoriesSection />
      {/* WHY CHOOSE US */}
      <Spacer height={2} />
      <WhyChooseUsSection />
      {/* STORY JURNEY AND SERVICES */}
      <Spacer height={2} />
      <StroryServices />
      <div style={{ height: "100vh" }}></div>
    </PageTemplate>
  );
};

export default HeroPage;
