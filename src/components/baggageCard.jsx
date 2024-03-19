import luggageLogo from "../assets/luggage.svg";

function BaggageCard({ title, description, information }) {
  //Temporal baggage template
  const bagg = {
    description: "Maleta",
    weight: 4,
    luggage_type: "De mano",
    width: 10,
    height: 10,
    length: 10,
    desciption: "Equipaje",
    user_id: 1,
    flight_id: 1,
    booking_id: 1,
    placement_area_id: 1
  };

  const AddBaggage = async (bagg) => {
    const options = {
      method: "POST",
      headers: {
        cookie:
          "next-auth.csrf-token=80c28e121d2c8ff1fd38631d5c417baccf79e024a98fcadae21a3535d62fa4aa%257Ccbb499010154b7f4a626b4c887fafbd7548cfd29aa3a53d0ed5c11d2cc6b4518; next-auth.callback-url=http%253A%252F%252Flocalhost%253A3000",
        "User-Agent": "insomnia/8.6.1",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bagg),
    };

    fetch("http://localhost:8080/sitas/luggage", options)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg border border-cyan-500 px-6 py-10 text-center">
      <h2 className="text-2xl font-semibold mb-4 text-center">{title}</h2>
      <div className="text-center mb-4">
        <p>{information}</p>
        <p>{description}</p>
      </div>
      <div className="text-center">
        <button
          onClick={() => AddBaggage(bagg)}
          type="button"
          className="text-cyan-500 border-2 border-cyan-500 px-4 py-2 rounded-lg hover:bg-cyan-100"
        >
          Agregar Equipaje
        </button>
      </div>
    </div>
  );
}

export default BaggageCard;
