import  { useEffect, useState } from 'react'
import Profile from './Profile';
import Courses from './Courses';
import PaymentHistory from './PaymentHistory';

const Content = ({activeLink}) => {

    const [content,setContent] = useState(null);

    useEffect(() => {
        const arr = {
            link1: <Profile />,
            link2: <Courses/>,
            link3: <PaymentHistory/>
        }
        setContent(arr[activeLink])
    }, [activeLink])


  return (
    <div >
      {content}
    </div>
  )
}

export default Content