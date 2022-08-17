export const Patient = ({ patient }) => {
  const { name, owner, email, date, symptom } = patient;
  return (
    <div className="m-3 my-6 bg-white shodow-md py-10 px-5 rounded-md">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: <span className="font-normal normal-case">{name}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: <span className="font-normal normal-case">{owner}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta: <span className="font-normal normal-case">{date}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas: <span className="font-normal normal-case">{symptom}</span>
      </p>

      <div className="text-end mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-500 hover:bg-indigo-600 text-white
            font-bold uppercase rounded-sm mr-5"
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-500 hover:bg-red-600 text-white
            font-bold uppercase rounded-sm"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};
