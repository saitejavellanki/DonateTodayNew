
import Admin from './components/admin/Admin'
import Contactus from './components/contact/Contactus';
import Donate from './components/donate/Donate';
import FoundersPage from './components/founders/Founders';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Services from './components/services/Services';
import Make from './components/donate/Make';
import ProtectedAdmin from './components/admin/protectedAdmin';
import CommunityGuidelines from './components/community/Community';
import HelpCenter from './components/community/Help';
import DonationIntro from './components/donate/DonationIntro';
import TermsAndConditions from './components/miss/Terms';
import MakeIntro from './components/donate/MakeIntro';
import TermsAnd from './components/miss/TermsMake';

function App() {
  return (
    
    <div>
      <BrowserRouter>
      
      <Navbar/>
         <Routes>
          <Route path="/" element={ <Home/> }/>
          
          <Route path="/contact-us" element={ <Contactus/> }/>
          <Route path="/donate" element={ <Donate/> }/>
          <Route path="/make" element={ <Make/> }/>
          <Route path="/admin" element={<ProtectedAdmin/>}/>
          <Route path="/our-team" element={ <FoundersPage/> }/>
          <Route path="/services" element={ <Services/> }/>
          <Route path="/community" element={ <CommunityGuidelines/> }/>
          <Route path="/helpcenter" element={ <HelpCenter/> }/>
          <Route path="/intro" element={ <DonationIntro/> }/>
          <Route path="/terms" element={ <TermsAndConditions/> }/>
          <Route path="/makeintro" element={ <MakeIntro/> }/>
          <Route path="/termsMake" element={ <TermsAnd/> }/>
         </Routes>
      
      </BrowserRouter>
      
      
      </div>
    
  );
}

export default App;
