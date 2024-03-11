import BaggageCard from "./baggageCard"

function BaggageTable() {
    return (
        <div className="flex justify-center space-x-10 mt-10 mb-10">
            <BaggageCard title="Equipaje personal" description="Bolsos, carteras, etc"/>
            <BaggageCard title="Equipaje de Mano" description="Maletas pequeñas"/>
            <BaggageCard title="Equipaje de Bodega" description="Maletas gigantes"/>
        </div>
    )
}

export default BaggageTable