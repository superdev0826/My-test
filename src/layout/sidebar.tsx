import React, { useEffect } from 'react';
import { useState } from 'react';
import Eye from '../images/Eye.png';
import Eyeoff from '../images/Eye Off.png';
import RadioGroup from '../components/radiogroup';
import Input from '../components/input';

type Props = {
  addNewCustomer: (
    firstname: any,
    lastname: any,
    company: any,
    status: any,
    email: any,
    password: any,
  ) => void;
  updateCustomer: (
    id: any,
    firstname: any,
    lastname: any,
    company: any,
    status: any,
    email: any,
    password: any,
  ) => void;
  selectedCustomer: any;
};

export const Sidebar = ({ addNewCustomer, updateCustomer, selectedCustomer }: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [company, setCompany] = useState('');
  const [status, setStatus] = useState('User');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    firstname: '',
    lastname: '',
    company: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    if (selectedCustomer?.firstname) {
      setFirstName(selectedCustomer.firstname);
      setLastName(selectedCustomer.lastname);
      setCompany(selectedCustomer.company);
      setStatus(selectedCustomer.status);
      setEmail(selectedCustomer.email);
      setPassword(selectedCustomer.password);
    } else {
      setFirstName('');
      setLastName('');
      setCompany('');
      setStatus('User');
      setEmail('');
      setPassword('');
    }
  }, [selectedCustomer]);

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    // validate inputs
    const errors = {
      firstname: '',
      lastname: '',
      company: '',
      email: '',
      password: '',
    };
    if (firstname.trim() === '') {
      errors.firstname = 'Required';
    }
    if (lastname.trim() === '') {
      errors.lastname = 'Required';
    }
    if (company.trim() === '') {
      errors.company = 'Required';
    }
    if (email.trim() === '') {
      errors.email = 'Required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Invaild Email';
    }
    if (password.trim() === '') {
      errors.password = 'Required';
    } else if (password.length < 8) {
      errors.password = '8+ characters';
    }
    setErrors(errors);

    // submit form if there are no errors
    if (selectedCustomer.id == undefined) {
      if (!Object.values(errors).some((error) => error !== '')) {
        try {
          addNewCustomer(firstname, lastname, company, status, email, password);
          setFirstName('');
          setLastName('');
          setCompany('');
          setStatus('User');
          setEmail('');
          setPassword('');
        } catch (error) {
          console.error(error);
        }
      }
    } else {
      try {
        updateCustomer(selectedCustomer.id, firstname, lastname, company, status, email, password);
        setFirstName('');
        setLastName('');
        setCompany('');
        setStatus('User');
        setEmail('');
        setPassword('');
      } catch (error) {
        console.error(error);
      }
    }
  };
  return (
    <div className="w-1/4">
      <div className="flex flex-col space-y-8 p-8">
        <div className="text-lg font-bold">Add Customer</div>
        <div className="grid md:grid-cols-2 md:gap-6 mb-5 ">
          <div className="w-full">
            <Input
              label="First Name"
              name="firstname"
              type="text"
              value={firstname}
              onChange={(event) => setFirstName(event.target.value)}
              error={errors.firstname}
            />
          </div>
          <div className="w-full">
            <Input
              label="Last Name"
              name="lastname"
              type="text"
              value={lastname}
              onChange={(event) => setLastName(event.target.value)}
              error={errors.lastname}
            />
          </div>
        </div>
        <div className="w-full mb-5">
          <Input
            label="Company"
            name="company"
            type="text"
            value={company}
            onChange={(event) => setCompany(event.target.value)}
            error={errors.company}
          />
        </div>
        <div className="flex space-x-4 mb-5">
          <div className="w-full ">
            <div className="mb-2">Status</div>
            <div className="flex rounded-md bg-[#F1F5F9] w-full">
              <RadioGroup setStatus={setStatus} role={status} />
            </div>
          </div>
        </div>
        <div className="w-full mb-5">
          <div className="w-full">
            <Input
              label="Email"
              name="email"
              type="text"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              error={errors.email}
            />
          </div>
        </div>
        <div className="w-full mb-5">
          <div>
            <div className="relative rounded-md ">
              <Input
                label="Password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                error={errors.password}
              />
              <div className="absolute inset-y-1 top-9 right-2 flex items-center justify-center">
                <img
                  src={showPassword ? Eyeoff.src : Eye.src}
                  className="h-6 w-6 rounded-full object-cover cursor-pointer"
                  alt="myimage"
                  onClick={handleTogglePassword}
                  style={{ verticalAlign: 'middle' }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mb-5">
          <div className="w-full">
            <button
              onClick={handleSubmit}
              className="w-full mt-5 rounded-lg bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-bold py-2 px-4 "
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
