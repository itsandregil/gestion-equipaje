import luggageLogo from "../assets/luggage.svg"

function BaggageCard({title, description}) {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg border border-cyan-500 px-6 py-10 text-center">
            <h2 className="text-2xl font-semibold mb-4 text-center">{title}</h2>
            <div className="text-center mb-4">
                <img src={luggageLogo} alt="Luggage" className="mx-auto h-32 w-32 mb-2"/>
                <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
            <div className="text-center">
                <button type="button" className="text-cyan-500 border-2 border-cyan-500 px-4 py-2 rounded-lg hover:bg-cyan-100">
                    Agregar Equipaje
                </button>
            </div>
        </div>
    )
}

export default BaggageCard