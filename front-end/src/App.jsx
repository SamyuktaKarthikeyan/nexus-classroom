import LazyLayout from "./components/ui/LazyLayout"
import { lazy } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import UserLayout from "./pages/user/UserLayout"
const LazyLogin = lazy(() => import("./pages/auth/LoginPage"))
const LazyResetPass=lazy(()=> import("./pages/auth/ResetPass"))
const LazyHCourse=lazy(()=> import("./pages/user/CoursesHome"))
const LazyTeam = lazy(()=> import("./pages/user/Aboutus"))
const LazyEnqStat=lazy(()=> import("./pages/user/ViewSelfEnquiryStatus"))
const LazyAccount=lazy(()=> import("./pages/user/Account"))
const LazyReg = lazy(() => import("./pages/auth/SignUpPage"))
const LazyFaq = lazy(()=>import("./pages/user/Faq"))
const LazyPerC=lazy(()=>import("./pages/user/PersonalCourses"))
const LazySelfPayHist=lazy(()=>import("./pages/user/SelfPayHistory"))
const LazyLandingPg = lazy(()=>import("./pages/auth/LandingPage"))
import AdminLayout from "./pages/admin/AdminLayout"

const LazyHome= lazy(()=> import ("./pages/user/Homepage"));
const LazyDash=lazy(()=> import("./pages/admin/Dashboard"))
const Userroutes = () => {
  return (
    <UserLayout>
      <Routes>
        <Route path="/home" element={<LazyLayout component={LazyHome} />} />
        <Route path="/courses" element={<LazyLayout component={LazyHCourse} />} />
        <Route path="/account" element={<LazyLayout component={LazyAccount} />} />
        <Route path="/faqs" element={<LazyLayout component={LazyFaq} />} />
        <Route path="/about-us" element={<LazyLayout component={LazyTeam} />} />
        <Route path="/enquiry-status" element={<LazyLayout component={LazyEnqStat} />} />
        <Route path="/payment-history" element={<LazyLayout component={LazySelfPayHist} />} />
        <Route path="/your-courses" element={<LazyLayout component={LazyPerC} />} />
        
      </Routes>
    </UserLayout>
  )
}
const Adminroutes = () => {
  return (
    <AdminLayout>
      <Routes>
        <Route path="/dashboard" element={<LazyLayout component={LazyDash} />} />
      </Routes>
    </AdminLayout>
  )
}
const App = () => {
  return (
    <div>
      <Routes>
          <Route exact path="/" element={<Navigate to="/nexus/"/>}/>
          <Route path="/nexus/user/*"  element={<Userroutes />} />
          <Route path="/nexus/admin/*"  element={<Adminroutes />} />
          <Route path="/nexus/"  element={<LazyLayout component={LazyLandingPg} />} />
          <Route path="/nexus/login" element={<LazyLayout component={LazyLogin} />} />
          <Route path="/nexus/signup" element={<LazyLayout component={LazyReg} />} />
          <Route path="/nexus/reset-password" element={<LazyLayout component={LazyResetPass} />} />
      </Routes>
    </div>
  )
}

export default App