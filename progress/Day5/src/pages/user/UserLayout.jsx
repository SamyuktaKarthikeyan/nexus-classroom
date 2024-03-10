import PropTypes from 'prop-types'
import Navbar from '../../components/ui/Navbar'
import Footer from '../../components/ui/Footer'
const UserLayout=({ children })=>{
    return(
        <div className='user_container'>
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
UserLayout.propTypes={
    children:PropTypes.node.isRequired,
}

export default UserLayout