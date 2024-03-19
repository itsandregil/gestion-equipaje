import luggageLogo from "../assets/luggage.svg";

function BaggageCard({ title, description, information }) {
  return (
    <div className="  max-w-sm rounded overflow-hidden shadow-lg border border-cyan-500 px-6 py-10 text-center ">
      <h2 className="text-2xl font-semibold mb-4 text-center">{title}</h2>
      <div className="text-center mb-4">
        <p>{information}</p>
        <p>{description}</p>
      </div>
      <div className="text-center">
        <div class="inline-flex">
          <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
            -
          </button>
          <button type="number" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
            0
          </button>
          <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
            +
          </button>
        </div>
      </div>
      
    </div>
  );
}

export default BaggageCard;
