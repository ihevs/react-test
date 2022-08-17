import { useState, useEffect } from 'react';
import { Error } from './Error';
import { generateId } from '../utils';

export const Form = ({ setPatients }) => {
  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [symptom, setSymptom] = useState('');

  const [error, setError] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    // validate
    if ([name, owner, email, date, symptom].includes('')) {
      setError(true);
      return;
    }
    setError(false);

    // Patients Object
    const patientObject = {
      id: generateId(),
      name,
      owner,
      email,
      date,
      symptom,
    };

    console.log(patientObject)

    setPatients(patients => [patientObject, ...patients]);

    // Reset form
    setName('');
    setOwner('');
    setEmail('');
    setDate('');
    setSymptom('');
  };

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y{' '}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form
        className="bg-white shadow-sm rounded-md py-10 px-5 mx-3 mb-14 md:mb-0"
        onSubmit={handleSubmit}
      >
        {error && <Error>Todos los campos son obligatorios</Error>}
        <div className="mb-5">
          <label
            htmlFor="pet"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Mascota
          </label>
          <input
            id="pet"
            type="text"
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="owner"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Propietario
          </label>
          <input
            id="owner"
            type="text"
            placeholder="Nombre del Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded"
            value={owner}
            onChange={e => setOwner(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            id="email"
            type="text"
            placeholder="Email contacto"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="date"
            className="block text-gray-700 uppercase font-bold"
          >
            Alta
          </label>
          <input
            id="date"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded"
            value={date}
            onChange={e => setDate(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="symptom"
            className="block text-gray-700 uppercase font-bold"
          >
            Síntomas
          </label>
          <textarea
            id="symptom"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded"
            placeholder="Describe los síntomas"
            rows={3}
            value={symptom}
            onChange={e => setSymptom(e.target.value)}
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-500 w-full p-3 text-white uppercase font-bold 
          hover:bg-indigo-600 cursor-pointer transition-all rounded-sm"
          value={'Agregar paciente'}
        />
      </form>
    </div>
  );
};
