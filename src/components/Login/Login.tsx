import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { fetchUserProfile } from '../../common/api';

const LoginPage = () => {
    const [user, setUser] = useState({
        email: '',
        password: '',
    })

    const handleEmailChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setUser({
            ...user,
            email: event.target.value,
        })
    }

    const handlePwdChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setUser({
            ...user,
            password: event.target.value,
        })
    }

    const onSubmit = () => {
        console.log(`signing up: ${user.email} ${user.password}`)
    }

    const onCall = async () => {
        const userProfile = await fetchUserProfile();
        console.log(`calling BE, received user profile: ${JSON.stringify(userProfile)}`)
    }

    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={user.email}
                    onChange={handleEmailChange}
                />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    value={user.password}
                    onChange={handlePwdChange}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button
                variant="primary"
                type="submit"
                onClick={onSubmit}
            >
                Sign Up
            </Button>

            <Button
                variant="secondary"
                onClick={onCall}
            >
                Check user profile
            </Button>
        </Form>
    );
}

export default LoginPage;