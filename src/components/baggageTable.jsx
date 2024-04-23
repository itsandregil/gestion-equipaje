import { useEffect } from "react";
import BaggageCard from "./baggageCard";
import { useState } from "react";

function BaggageTable() {

    //State for storing the baggages
    const [baggages, setBaggages] = useState([]);

    //Executed when the component is mounted
    useEffect(() => {
        ListBaggages();
    }, []);

    //Method for listing all the baggages in a table
    const ListBaggages = async () => {                
        const options = {
            method: 'GET',
            headers: {
              cookie: 'next-auth.csrf-token=80c28e121d2c8ff1fd38631d5c417baccf79e024a98fcadae21a3535d62fa4aa%257Ccbb499010154b7f4a626b4c887fafbd7548cfd29aa3a53d0ed5c11d2cc6b4518; next-auth.callback-url=http%253A%252F%252Flocalhost%253A3000',
              'User-Agent': 'insomnia/8.6.1'
            }
        };
          
        fetch('http://localhost:8080/sitas/luggage', options)
        .then(response => response.json())
        .then(response => setBaggages(response))
        .catch(err => console.error(err));    
    }

    //Method for deleting a baggage from the table
    const DeleteBaggage = async (id) => {
        const options = {
            method: 'DELETE',
            headers: {
              cookie: 'next-auth.csrf-token=80c28e121d2c8ff1fd38631d5c417baccf79e024a98fcadae21a3535d62fa4aa%257Ccbb499010154b7f4a626b4c887fafbd7548cfd29aa3a53d0ed5c11d2cc6b4518; next-auth.callback-url=http%253A%252F%252Flocalhost%253A3000',
              'User-Agent': 'insomnia/8.6.1'
            }
        };
          
        fetch(`http://localhost:8080/sitas/luggage/${id}`, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err)); 
        ListBaggages();   
    }    


  return (
    <div>
      <div className="flex justify-center space-x-10 mt-10 mb-10">
        <BaggageCard
          title="Equipaje personal"
          description="xxx "
          information="Pieza adicional"
        />
        <BaggageCard
          title="Equipaje de Mano"
          description="Maletas pequeñas"
          information="Pieza adicional"
        />
        <BaggageCard
          title="Equipaje de Bodega"
          description="Maletas gigantes"
          information="Pieza adicional"
        />
      </div>

      <div>
        <h1>Titulo de la tabla</h1>
        <table className="table-auto">
          <thead>
            <tr>
              <th>id</th>
              <th>description</th>
              <th>weight</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {baggages?.map((baggage) => (
              <tr key={baggage.id}>
                <td>{baggage.id}</td>
                <td>{baggage.description}</td>
                <td>{baggage.weight}</td>
                <td>
                    <button onClick={() => DeleteBaggage(baggage.id)} className="bg-red-400">Eliminar</button>
                </td>
              </tr>
            ))}            
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BaggageTable;
