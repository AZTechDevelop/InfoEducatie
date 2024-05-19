import { useState } from 'react';
import axios from 'axios';
import Joi from 'joi';
import { useNavigate } from 'react-router-dom';

const Cont = () => {
    const navigate = useNavigate();
    const [dateFormular, setDateFormular] = useState({
        utilizator: '',
        email: '',
        parola: '',
        confirmaParola: '',
        actiune: 'inregistrare',  
    });
    const [erori, setErori] = useState({});
    const [mesaj, setMesaj] = useState('');

    const schema = Joi.object({
        utilizator: Joi.string().alphanum().min(3).max(30).when('actiune', { is: 'inregistrare', then: Joi.required() }).label('Utilizator'),
        email: Joi.string().email({ tlds: { allow: false } }).required().label('Email'),
        parola: Joi.string().min(8).required().label('Parola'),
        confirmaParola: Joi.string().valid(Joi.ref('parola')).when('actiune', { is: 'inregistrare', then: Joi.required() }).messages({
            'any.only': 'Parolele nu se potrivesc',
        }),
    });

    const gestioneazaSchimbare = (e) => {
        setDateFormular({
            ...dateFormular,
            [e.target.name]: e.target.value,
        });
    };

    const gestioneazaSubmit = async (e) => {
        e.preventDefault();
        const { error } = schema.validate(dateFormular, { abortEarly: false });
        if (error) {
            const eroriValidare = {};
            error.details.forEach((detail) => {
                eroriValidare[detail.path[0]] = detail.message;
            });
            setErori(eroriValidare);
            return;
        }

        const bazaUrl = `http://localhost:3001/api/${dateFormular.actiune}`;
        try {
            const raspuns = await axios.post(bazaUrl, dateFormular);
            setMesaj(raspuns.data.mesaj);
            if (raspuns.data.succes) {
                if (dateFormular.actiune === 'login') {
                    navigate('/logged-in', { state: { ...dateFormular, utilizator: raspuns.data.utilizator } });
                }
            }
        } catch (error) {
            setMesaj(error.response?.data?.mesaj || 'A apărut o eroare în timpul autentificării sau înregistrării');
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="font-bold  text-black mb-4">{dateFormular.actiune === 'login' ? 'Autentificare' : 'Creează un Cont Nou'}</h1>
            <form onSubmit={gestioneazaSubmit} action="/api/register" method="post">
                <div className="mb-4">
                    <label htmlFor="actiune" className="block text-sm font-medium text-gray-700">Acțiune</label>
                    <select
                        id="actiune"
                        name="actiune"
                        value={dateFormular.actiune}
                        onChange={gestioneazaSchimbare}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    >
                        <option value="inregistrare">Înregistrare</option>
                        <option value="login">Autentificare</option>
                    </select>
                </div>

                {dateFormular.actiune === 'inregistrare' && (
                    <div className="mb-4">
                        <label htmlFor="utilizator" className="block text-sm font-medium text-gray-700">Utilizator</label>
                        <input
                            type="text"
                            id="utilizator"
                            name="utilizator"
                            value={dateFormular.utilizator}
                            onChange={gestioneazaSchimbare}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        />
                        {erori.utilizator && <p className="text-red-500 text-sm">{erori.utilizator}</p>}
                    </div>
                )}

                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={dateFormular.email}
                        onChange={gestioneazaSchimbare}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    />
                    {erori.email && <p className="text-red-500 text-sm">{erori.email}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="parola" className="block text-sm font-medium text-gray-700">Parola</label>
                    <input
                        type="password"
                        id="parola"
                        name="parola"
                        value={dateFormular.parola}
                        onChange={gestioneazaSchimbare}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    />
                    {erori.parola && <p className="text-red-500 text-sm">{erori.parola}</p>}
                </div>

                {dateFormular.actiune === 'inregistrare' && (                     
                    <div className="mb-4">
                        <label htmlFor="confirmaParola" className="block text-sm font-medium text-gray-700">
                            Confirmă Parola
                        </label>
                        <input
                            type="password"
                            id="confirmaParola"
                            name="confirmaParola"
                            value={dateFormular.confirmaParola}
                            onChange={gestioneazaSchimbare}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        />
                        {erori.confirmaParola && <p className="text-red-500 text-sm">{erori.confirmaParola}</p>}
                    </div>
                )}

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded-md"
                >
                    {dateFormular.actiune === 'login' ? 'Autentificare' : 'Înregistrare'}
                </button>
            </form>

            {mesaj && <p className="mt-4 text-green-500">{mesaj}</p>}
        </div>
    );
};

export default Cont;
