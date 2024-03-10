import LazyLayout from "./components/ui/LazyLayout"
import { lazy } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import UserLayout from "./pages/user/UserLayout"
const LazyLogin = lazy(() => import("./pages/auth/LoginPage"))
const LazyHCourse=lazy(()=> import("./pages/user/CoursesHome"))
const LazyReg = lazy(() => import("./pages/auth/SignUpPage"))
const LazyContact = lazy(()=>import("./pages/user/Contact"))
import AdminLayout from "./pages/admin/AdminLayout"

const LazyHome= lazy(()=> import ("./pages/user/Homepage"));
const LazyDash=lazy(()=> import("./pages/admin/Dashboard"))
const Userroutes = () => {
  return (
    <UserLayout>
      <Routes>
        <Route path="/home" element={<LazyLayout component={LazyHome} />} />
        <Route path="/courses" element={<LazyLayout component={LazyHCourse} />} />
        <Route path="/contact" element={<LazyLayout component={LazyContact} />} />
        
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
          <Route exact path="/" element={<Navigate to="/nexus/user/home/"/>}/>
          <Route path="/nexus/user/*"  element={<Userroutes />} />
          <Route path="/nexus/admin/*"  element={<Adminroutes />} />
          <Route path="/nexus/login" element={<LazyLayout component={LazyLogin} />} />
          <Route path="/nexus/signup" element={<LazyLayout component={LazyReg} />} />
      </Routes>
    </div>
  )
}

export default App