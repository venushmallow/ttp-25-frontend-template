import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const LoginPage = () => {
  const [userEmail, setUserEmail] = useState<string>('');
  const [userPwd, setUserPwd] = useState<string>('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setUserEmail(event.target.value);
  }

  const handlePwdChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setUserPwd(event.target.value);
  }

  const onSubmit = () => {
    console.log(`submitting: ${userEmail} ${userPwd}`)
  }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
            type="email" 
            placeholder="Enter email" 
            value={userEmail}
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
            value={userPwd}
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
        Submit
      </Button>
    </Form>
  );
}

export default LoginPage;