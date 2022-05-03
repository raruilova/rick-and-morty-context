import useRM from "../hooks/useRM";

const Character = () => {
  const { character } = useRM();
  return (
    <div className="flex justify-center">
      <div
        href="#"
        className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={character.image}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {character.name}
          </h5>
          <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <div>
              <span className="font-bold">Especie: </span>
              <p>{character.species}</p>
            </div>
            <div>
              <span className="font-bold">Origen: </span>
              <p>{character.origin.name}</p>
            </div>
            <div>
              <span className="font-bold">Localización: </span>
              <p>{character.location.name}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Character;
