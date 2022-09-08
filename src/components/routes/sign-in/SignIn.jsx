import SignUp from '../../sign-up-form/SignUp';
import { signInWithGooglePopup } from '../../utils/firebase/firebase.config';


function SignIn() {
    const signInUser = async () => {
        /*const { user } = */await signInWithGooglePopup();
        //await createUserDocFromAuth(user);
    }
    return (
        <div>
            <h1>SignIn</h1>
            <button type='button' onClick={signInUser}>Sign in</button>

            <div>
                <SignUp />
            </div>
        </div>
    )
}

export default SignIn;