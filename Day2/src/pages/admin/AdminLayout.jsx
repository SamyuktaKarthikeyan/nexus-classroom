import PropTypes from 'prop-types'
import Navbar from '../../components/ui/Navbar'
import Footer from '../../components/ui/Footer'
const AdminLayout=({ children })=>{
    return(
        <div className='admin_container'>
            <header className='fixed-navbar'>
                <Navbar/>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}
AdminLayout.propTypes={
    children:PropTypes.node.isRequired,
}

export default AdminLayout