import React, { useState } from 'react';
import axios from 'axios';
import Joi from 'joi';
import { useNavigate } from 'react-router-dom';

const Cont = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        action: 'register',  // 'register' sau 'login'
    });
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState('');

    const schema = Joi.object({
        username: Joi.string().alphanum().min(3).max(30).when('action', { is: 'register', then: Joi.required() }).label('Username'),
        email: Joi.string().email({ tlds: { allow: false } }).required().label('Email'),
        password: Joi.string().min(8).required().label('Password'),
        confirmPassword: Joi.string().valid(Joi.ref('password')).when('action', { is: 'register', then: Joi.required() }).messages({
            'any.only': 'Passwords do not match',
        }),
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { error } = schema.validate(formData, { abortEarly: false });
        if (error) {
            const validationErrors = {};
            error.details.forEach((detail) => {
                validationErrors[detail.path[0]] = detail.message;
            });
            setErrors(validationErrors);
            return;
        }

        const baseUrl = `http://localhost:3001/api/${formData.action}`;
        try {
            const response = await axios.post(baseUrl, formData);
            setMessage(response.data.message);
            if (response.data.success) {
                if (formData.action === 'login') {
                    navigate('/logged-in', { state: { ...formData, username: response.data.username } });
                }
            }
        } catch (error) {
            setMessage(error.response?.data?.message || 'An error occurred during login or registration');
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">{formData.action === 'login' ? 'Log In' : 'Create a New Account'}</h1>
            <form onSubmit={handleSubmit} action="/api/register" method="post">
                <div className="mb-4">
                    <label htmlFor="action" className="block text-sm font-medium text-gray-700">Action</label>
                    <select
                        id="action"
                        name="action"
                        value={formData.action}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    >
                        <option value="register">Register</option>
                        <option value="login">Log In</option>
                    </select>
                </div>

                {formData.action === 'register' && (
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        />
                        {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
                    </div>
                )}

                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    />
                    {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                </div>

                {formData.action === 'register' && (                     <div className="mb-4">
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        />
                        {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
                    </div>
                )}

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded-md"
                >
                    {formData.action === 'login' ? 'Log In' : 'Register'}
                </button>
            </form>

            {message && <p className="mt-4 text-green-500">{message}</p>}
        </div>
    );
};

export default Cont;

