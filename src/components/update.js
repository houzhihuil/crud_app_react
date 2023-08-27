import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Update() {
  const location = useLocation(); 
  const data = location.state ?? { data: {} }; // using nullish coalescing
  // const data = location.state ? location.state.data : {}; // using conditional check
 
  const [id, setId] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [checkbox, setCheckbox] = useState(false);

  const navigate = useNavigate();


  useEffect(() => {
     
      setId(localStorage.getItem('id'));
      setFirstName(localStorage.getItem('firstName'));
      setLastName(localStorage.getItem('lastName'));
      setCheckbox(localStorage.getItem('checkbox')); 
  }, []);

  const updateAPIData = () => { 
    axios
      .put(`https://64e7bf5db0fd9648b7904d83.mockapi.io/fakeData/${id}`, {
        firstName,
        lastName,
        checkbox
      })
      .then(() => {
        const updatedData = {
          ...data,
          firstName,
          lastName,
          checkbox
        };
         localStorage.setItem('updateData', JSON.stringify(updatedData));

        // Navigate back to the "Read" page
        navigate('/read');

      });
  };

  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>First Name</label>
          <input
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="I agree to the Terms and Conditions"
            checked={checkbox}
            onChange={() => setCheckbox(!checkbox)}
          />
        </Form.Field>

        <Button onClick={updateAPIData}>Update</Button>
      </Form>
    </div>
  );
}
