import React from 'react';
import { Sidebar } from './sidebar';
import { Content } from './content';
import Divider from './divider';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const MainLayout = () => {
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState({});
  useEffect(() => {
    loadUsers();
  }, []);

  async function loadUsers() {
    const datas = await axios.get('/api/customer');
    setCustomers(datas.data);
  }

  async function addNewCustomer(
    firstname: any,
    lastname: any,
    company: any,
    status: any,
    email: any,
    password: any,
  ) {
    const datas = await axios.post('/api/customer', {
      firstname,
      lastname,
      company,
      status,
      email,
      password,
    });
    setCustomers(datas.data);
    setSelectedCustomer({});
  }

  async function selectCustomer(
    id: any,
    firstname: any,
    lastname: any,
    company: any,
    status: any,
    email: any,
    password: any,
  ) {
    const newCustomer = {
      id,
      firstname,
      lastname,
      company,
      status,
      email,
      password,
    };
    setSelectedCustomer(newCustomer);
  }

  async function updateCustomer(
    id: any,
    firstname: any,
    lastname: any,
    company: any,
    status: any,
    email: any,
    password: any,
  ) {
    const datas = await axios.put(`/api/customer/${id}`, {
      firstname,
      lastname,
      company,
      status,
      email,
      password,
    });
    setCustomers(datas.data);
    setSelectedCustomer({});
  }

  async function deleteCustomer(id: any) {
    const datas = await axios.delete(`/api/customer/${id}`);
    setCustomers(datas.data);
    setSelectedCustomer({});
  }

  return (
    <div className="flex flex-row h-screen">
      <Sidebar
        addNewCustomer={addNewCustomer}
        selectedCustomer={selectedCustomer}
        updateCustomer={updateCustomer}
      />
      <Divider vertical />
      <Content
        customers={customers}
        deleteCustomer={deleteCustomer}
        selectCustomer={selectCustomer}
      />
    </div>
  );
};
