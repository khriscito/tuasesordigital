import { lazy } from "react";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import ContactContent from "../../content/ContactContent.json";
import Video from "../../components/ContentBlock/Video"
import TestimonialCarousel from "../../components/TestimonialCarousel/TestimonialCarousel";
import PartnerCarousel from "../../components/PartnerCarousel/PartnerCarousel";
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";


const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const FAQ = lazy(() => import("../../components/FAQ/FAQ"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <Video 
  url="/videos/VideoRCV.mp4" 
  title="Obtenga su póliza RCV desde nuestro portal"
  local={true}
  preview="/img/svg/Shirley.avif"
/>


<ImageCarousel />

      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      />
<TestimonialCarousel />

<Video 
  url="/videos/VideoRCV.mp4" 
  title="Obtenga su póliza RCV desde nuestro portal"
  local={true}
  preview="/img/svg/Shirley.avif"
/>

<PartnerCarousel />
<ContentBlock
        direction="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="documentos.avif"
        id="about"
      />
<FAQ
  title={ContactContent.title}
  content={ContactContent.text}
  id="contact"
/>
    </Container>
  );
};

export default Home;
