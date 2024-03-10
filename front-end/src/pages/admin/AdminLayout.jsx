import PropTypes from 'prop-types'
// import TopBarAdmin from '../../components/ui/TopBarAdmin'
const AdminLayout=({ children })=>{
    return(
        <div className='admin_container'>
            {/* <header className='fixed-navbar'>
                <TopBarAdmin/>
            </header> */}
            <main className="">
                {children}
            </main>
        </div>
    )
}
AdminLayout.propTypes={
    children:PropTypes.node.isRequired,
}

export default AdminLayout