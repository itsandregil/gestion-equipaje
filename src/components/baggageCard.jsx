import luggageLogo from "../assets/luggage.svg"

function BaggageCard({title, description, information}) {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg border border-cyan-500 px-6 py-10 text-center">
            <h2 className="text-2xl font-semibold mb-4 text-center">{title}</h2>
            <div className="text-center mb-4">

                <p>
                {information}
                </p>
                <p>
                {description}
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