/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form } from 'react-bootstrap';
import Select from 'react-select';
import './Input.Module.css';

function InputCategory({ inputCategory }) {
  const [categoryId, setCategoryId] = useState([]);
  const [user, setUser] = useState({});
  const [data, setData] = useState([]);

  const [errorResponse, setErrorResponse] = useState({
    isError: false,
    message: '',
  });

  const token = localStorage.getItem('token');

  const getUsers = async () => {
    try {
      const responseUsers = await axios.get(
        'https://second-hand-be.herokuapp.com/api/who-am-i',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const dataUsers = await responseUsers;
      setData(dataUsers);
    } catch (err) {
      console.log(err);
    }
  };

  axios.get(
    'https://second-hand-be.herokuapp.com/api/categories',
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  )
    .then((res) => {
      const state = res.data.data.data.map((listCategory) => {
        return {
          value: listCategory.id,
          label: listCategory.name,
        };
      });
      setCategoryId(state);
    })
    .catch((err) => {
      const response = err.response.data;
      setErrorResponse({
        isError: true,
        message: response.message,
      });
    });

  useEffect(() => {
    getUsers();
  }, [categoryId]);

  const categoryStyles = {
    control: (styles) => { return { ...styles }; },
    option: (styles, { isDisabled }) => {
      return {
        ...styles,
        color: 'black',
        cursor: isDisabled ? 'not-allowed' : 'default',
        borderRadius: '14px',
        zIndex: '2',
      };
    },
  };

  const handleGetValue = (e) => {
    inputCategory(e.value);
  };

  return (
    <div className="mb-3">
      <Form className="form-category" styles={categoryStyles}>
        <Select options={categoryId} onChange={handleGetValue} styles={categoryStyles} />
      </Form>
    </div>
  );
}

export default InputCategory;
