import { Footer } from "../components/footer";
import { Main } from "../components/main";
import { Section } from "../components/section";
import { Toaster } from 'react-hot-toast';


export const LandingPage = () => {
  return (
    <>
  <Toaster position="top-center" reverseOrder={false} />
      <Main />
      <Section/>
      <Footer />
    </>
  );
};
