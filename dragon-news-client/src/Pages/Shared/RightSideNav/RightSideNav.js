import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaWhatsapp, FaTwitch } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarosel from '../BrandCarosel/BrandCarosel';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';


const RightSideNav = () => {
    const { providerLogin } = useContext(AuthContext)


    const handleGoogleSignIn = () => {
        providerLogin()
            .then(result => {
                const user = result.user;
                console.log(user)

            })
            .catch(error => {
                console.error(error);
            })
    }


    return (
        <div>
            <ButtonGroup vertical>
                <Button
                    onClick={handleGoogleSignIn}
                    className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle> Login with Google</Button>
                <Button variant="outline-dark"> <FaGithub></FaGithub> Login with GitHub</Button>
            </ButtonGroup>

            <div className='mt-4'>
                <h5>Find Us On</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2'> <FaFacebook />  Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp /> WhatsApp</ListGroup.Item>
                    <ListGroup.Item className='mb-2'> <FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'> <FaTwitch /> Twitch</ListGroup.Item>
                    {/* <ListGroup.Item className='mb-2'>Vestibulum at eros</ListGroup.Item> */}
                </ListGroup>
            </div>
            <div>
                <BrandCarosel></BrandCarosel>
            </div>
        </div>
    );
};

export default RightSideNav;