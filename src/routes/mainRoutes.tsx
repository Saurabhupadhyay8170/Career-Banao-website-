import ApplicationApplyPage from "src/pages/main-website/applicationapply/ApplicationApplypage";
import Career from "pages/main-website/career";
import CareerForm from "pages/main-website/career/CareerForm";
import ContactPage from "pages/main-website/contact";
import HomePage from "pages/main-website/home";
import PrivacyPolicyPage from "pages/main-website/privacypolicy";
import TermsAndConditionsPage from "pages/main-website/termsconditions";
import CounselingLayout from "src/components/main-website/counseling/CounselingLayout";


const mainRoutes = [
  {
    path:"/",
    element:HomePage,
  },
  
  {
    path:"/admissions",
    element:ApplicationApplyPage,
  },

  {
    path:"/counselling",
    element:CounselingLayout
  },

  {
    path:"/contact",
    element:ContactPage,
  },
  {
    path:"/career",
    element:Career,
  },
  {
    path:"/career/jobapply/:job_id",
    element:CareerForm,
  },
  {
    path:"/privacy-policy",
    element:PrivacyPolicyPage,
  },
  {
    path:"/terms-and-conditions",
    element:TermsAndConditionsPage,
  },
  {
    path:"*",
    element:HomePage,
  },
]



export default mainRoutes;