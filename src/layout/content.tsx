import React from 'react';
import Jdenticon from 'react-jdenticon';
import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ObjectId } from 'mongoose';

interface Customer {
  _id: string;
  firstname: string;
  lastname: string;
  company: string;
  email: string;
  password: string;
}

type Props = {
  customers: any;
  deleteCustomer: (id: any) => void;
  selectCustomer: (
    id: any,
    firstname: any,
    lastname: any,
    company: any,
    status: any,
    email: any,
    password: any,
  ) => void;
};

export const Content = ({ customers, deleteCustomer, selectCustomer }: Props) => {
  const update = (
    id: any,
    firstname: any,
    lastname: any,
    company: any,
    status: any,
    email: any,
    password: any,
  ) => {
    selectCustomer(id, firstname, lastname, company, status, email, password);
  };
  const deleteSelectedCustomer = (id: any) => {
    deleteCustomer(id);
  };

  return (
    <div className="w-3/4 ml-5">
      {/* <div className="border border-gray-300 h-auto"></div> */}
      <div className="pt-8">
        <div className="text-lg font-bold">Customers</div>
        <table className="mt-8 w-full">
          <thead className="text-left font-[Inter]">
            <tr>
              <th className="text-[#94A3B8] font-thin">Name</th>
              <th className="text-[#94A3B8] font-thin">Company</th>
              <th className="text-[#94A3B8] font-thin">Email</th>
              <th className="text-[#94A3B8] font-thin">Admin</th>
              <th className="text-[#94A3B8] font-thin">Actions</th>
            </tr>
          </thead>
          <tbody className="font-[Inter] font-mono text-lg font-medium">
            {customers.map(
              (
                item: {
                  email: any;
                  firstname: string;
                  lastname: string;
                  company: any;
                  status: string;
                  _id: any;
                  password: any;
                },
                index: string,
              ) => (
                <tr key={'data' + index} className="space-y-3">
                  <td className="flex">
                    {
                      <div className="bg-[#F1F5F9] rounded-md mr-2">
                        <Jdenticon size="30" value={item.email} />
                      </div>
                    }
                    {item.firstname + ' ' + item.lastname}
                  </td>
                  <td>{item.company}</td>
                  <td>{item.email}</td>
                  <td>
                    {item.status == 'Administrator' ? (
                      <div className="w-12 h-5 rounded-sm bg-[#0EA5E9]" />
                    ) : (
                      <div className="w-12 h-5 rounded-sm bg-[#E2E8F0]" />
                    )}
                  </td>
                  <td className="flex gap-3">
                    <button
                      onClick={() =>
                        update(
                          item._id,
                          item.firstname,
                          item.lastname,
                          item.company,
                          item.status,
                          item.email,
                          item.password,
                        )
                      }
                    >
                      <img src="../images/Edit.png" />
                    </button>
                    <button onClick={() => deleteSelectedCustomer(item._id)}>
                      <img src="../images/Trash.png" />
                    </button>
                  </td>
                </tr>
              ),
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
