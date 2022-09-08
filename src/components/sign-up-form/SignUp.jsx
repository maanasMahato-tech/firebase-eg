import { useState } from 'react';
import { createUserWithCredentials, createUserDocFromAuth } from '../utils/firebase/firebase.config';
import './signup.styles.scss';

let defaultFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

function SignUp() {
    const [formFields, setFromFields] = useState(defaultFields);
    const { displayName, email, password, confirmPassword } = formFields;
    const handeEvents = (e) => {
        setFromFields({ ...formFields, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password.length < 6) {
            alert("password must be at least 6 characters!");
            return;
        }

        if (password !== confirmPassword) {
            alert("password not correct");
            return;
        }

        try {
            const { user } = await createUserWithCredentials(formFields.email, formFields.password);
            await createUserDocFromAuth(user, { displayName })
            setFromFields(defaultFields);
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert("user already exists!");
                setFromFields(defaultFields);
            }
            else {
                console.log(error);
            }
        }
    }
    return (
        <div>
            <h1>SignUp</h1>
            <form onSubmit={handleSubmit} >
                <div className="group">
                    <label>Name: </label>
                    <input placeholder='name' className='this' type="text" name='displayName' value={displayName || ''} onChange={handeEvents} required />

                    <label>Email: </label>
                    <input placeholder='Email' type="email" name='email' value={email || ''} onChange={handeEvents} required />

                    <label>Password: </label>
                    <input placeholder='password' type="password" name='password' value={password || ''} onChange={handeEvents} required />

                    <label>Confirm Password: </label>
                    <input placeholder='confirm password' type="password" value={confirmPassword || ''} name='confirmPassword' onChange={handeEvents} required />

                    <button type='submit'>Sign up</button>
                </div>
            </form>
        </div>
    )
}

export default SignUp;