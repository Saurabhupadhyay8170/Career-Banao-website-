import ApplicationApplyPage from "src/pages/main-website/applicationapply/ApplicationApplypage";
import ProtectedRoutes from "pages/main-website/protected";
import Counselling from "pages/main-website/protected/counselling";

const protectedRoutes = [
  {
    path:"/counselling/:category",
    protected:ProtectedRoutes,
    element:Counselling
  },
  {
    path:"/counselling/:category/apply/:college",
    protected:ProtectedRoutes,
    element:ApplicationApplyPage
  },
]

export default protectedRoutes;