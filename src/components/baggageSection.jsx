import BaggageTable from "./baggageTable"

// FIX: Make it don't overlap with NavBar.
function BaggageOptionsSection() {
    return (
        <div className="flex justify-center">
        <div className="mx-auto max-w-screen-lg">
            <h1>No. Reserva: #####</h1>
            <h2>Nombre de Pasajero</h2>
            <p>
                Ten en cuenta nuestras políticas para equipaje, peso, dimensiones, equipaje
                especial, entre otros.
            </p>
            <BaggageTable/>
        </div>
        </div>
    )
}

export default BaggageOptionsSection