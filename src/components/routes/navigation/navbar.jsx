import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Fragment } from 'react';
import './navigation.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { UserContext } from '../../context/user.context';
import { SignOut } from '../../utils/firebase/firebase.config';


const Navigation = () => {
    const { CurrentUser, setCurrentUser } = useContext(UserContext);
    //console.log(CurrentUser);

    const SignOutHandler = async () => {
        await SignOut();
        setCurrentUser(null);
    }
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <Logo className='logo' />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>SHOP</Link>
                    {CurrentUser ? <span className='nav-link' onClick={SignOutHandler}>SIGN OUT</span> : <Link className='nav-link' to='/sign-in'>SIGN IN</Link>}
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
}
export default Navigation;