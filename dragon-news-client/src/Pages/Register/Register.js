import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Register = () => {
    useTitle('Register')
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false)
    const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext)

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(name, photoURL, email, password)
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setError('')
                form.reset()
                handleUpdateUserProfile(name, photoURL)
                handleEmailVerification()
                toast.success('Please verify your email address before login.')
            })
            .catch(e => {
                console.error(e)
                setError(e.message)
            })
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
            .then(() => {


            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleEmailVerification = () => {
        verifyEmail()
            .then(() => {

            })
            .catch(error => {
                console.error(error);
            })
    }






    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" >
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" name="name" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Photo URL</Form.Label>
                <Form.Control type="text" name="photoURL" placeholder="photo URL" />
            </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    name="email" type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                    onClick={(e) => setAccepted(!accepted)}
                    type="checkbox"
                    label={<>Accept <Link to='/terms'>Terms and Conditions</Link></>}

                />
            </Form.Group>

            <Form.Text className="text-danger">
                {error}
            </Form.Text> <br />
            <Button
                disabled={!accepted}
                variant="primary" type="submit">
                Register
            </Button>

        </Form>
    );
};

export default Register;