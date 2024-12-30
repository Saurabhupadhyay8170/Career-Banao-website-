import AdmissionQues10thPage from 'src/pages/main-website/collegefounder/AdmissionQues10thPage'
import AdmissionQues12thPage from 'src/pages/main-website/collegefounder/AdmissionQues12thPage'
import AdmissionTakenPage from 'src/pages/main-website/collegefounder/AdmissionTakenPage'
import Budget10thPage from 'src/pages/main-website/collegefounder/Budget10thPage'
import BudgetDiplomaPage from 'src/pages/main-website/collegefounder/BudgetDiplomaPage'
import BudgetPage from 'src/pages/main-website/collegefounder/BudgetPage'
import CollegeFounderPage from 'src/pages/main-website/collegefounder/CollegeFounderPage'
import Course10thPage from 'src/pages/main-website/collegefounder/Course10thPage'
import DegreeQuestionPage from 'src/pages/main-website/collegefounder/DegreeQuestionPage'
import DegreeScorePage from 'src/pages/main-website/collegefounder/DegreeScorePage'
import DiplomaDegreeScorePage from 'src/pages/main-website/collegefounder/DiplomaDegreeScore'
import DiplomaHolderPage from 'src/pages/main-website/collegefounder/DiplomaHolderPage'
import DiplomaModePage from 'src/pages/main-website/collegefounder/DiplomaModePage'
import DiplomaQusPage from 'src/pages/main-website/collegefounder/DiplomaQusPage'
import EMIPage from 'src/pages/main-website/collegefounder/EMIPage'
import FormPage from 'src/pages/main-website/collegefounder/FormPage'
import FrndFormPage from 'src/pages/main-website/collegefounder/FrndFormPage'
import ModePage from 'src/pages/main-website/collegefounder/ModePage'
import OnlineModePage from 'src/pages/main-website/collegefounder/OnlineModePage'
import ReffFrndPage from 'src/pages/main-website/collegefounder/ReffFrndPage'
import RegularModePage from 'src/pages/main-website/collegefounder/RegularModePage'
import Score10thPage from 'src/pages/main-website/collegefounder/Score10th'
import Score12thPage from 'src/pages/main-website/collegefounder/Score12thPage'
import ThankuPage from 'src/pages/main-website/collegefounder/ThankuPage'

  const CollegeFoundRoutes = [
    {
      path:"CollegeFinder",
      element:CollegeFounderPage,
    },
    {
      path:"/CollegeFinder-score10th",
      element:Score10thPage,
    },
    {
      path:"/CollegeFinder-score12th",
      element:Score12thPage,
    },
    
    {
      path:"/CollegeFinder-course10th",
      element:Course10thPage,
    },
    {
      path:"/CollegeFinder-question10th",
      element:AdmissionQues10thPage,
    },
    {
      path:"/CollegeFinder-question12th",
      element:AdmissionQues12thPage,
    },
    {
      path:"/CollegeFinder-budget",
      element:BudgetPage,
    },
    {
      path:"/CollegeFinder-emi",
      element:EMIPage,
    },
    {
      path:"/CollegeFinder-formsub",
      element:FormPage,
    },
    {
      path:"/CollegeFinder-regularmode",
      element:RegularModePage,
    },
    {
      path:"/CollegeFinder-diplomacourse",
      element:DiplomaHolderPage,
    },
    {
      path:"/CollegeFinder-diplomamode",
      element:DiplomaModePage,
    },
    {
      path:"/CollegeFinder-diplomaqus",
      element:DiplomaQusPage,
    },
    {
      path:"/CollegeFinder-diplomascore",
      element:DiplomaDegreeScorePage,
    },

    {
      path:"/CollegeFinder-diplomabudget",
      element:BudgetDiplomaPage,
    },
    {
      path:"/CollegeFinder-onlinemode",
      element:OnlineModePage,
    },
    {
      path:"/CollegeFinder-mode",
      element:ModePage,
    },
    {
      path:"/CollegeFinder-degreescore",
      element:DegreeScorePage,
    },
    {
      path:"/CollegeFinder-degreequs",
      element:DegreeQuestionPage,
    },
    {
      path:"/CollegeFinder-adtaken",
      element:AdmissionTakenPage,
    },
    {
      path:"/CollegeFinder-Reff",
      element:ReffFrndPage,
    },
    {
      path:"/CollegeFinder-frndform",
      element:FrndFormPage,
    },
    {
      path:"/CollegeFinder-thanku",
      element:ThankuPage,
    },
    {
      path:"/CollegeFinder-budget10th",
      element:Budget10thPage,
    },
  ]

export default CollegeFoundRoutes