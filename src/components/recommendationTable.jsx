import RecommendationCard from "./recommendationCard"

function RecommendationTable() {
    return (
        <div className="bg-blue-950">
            <div className="mx-20 space-y-6 py-8">
                <RecommendationCard
                    title="Articulos restringidos"
                    description="Conoce los elementos restringidos que ponen en riesgo la salud, la seguridad y el avión."
                />
                <RecommendationCard
                    title="Equipaje especial"
                    description="Revisa las condiciones para llevar equipos deportivos, instrumentos musicales, obras de arte y más."
                />
                <RecommendationCard
                    title="Sobredimensionado"
                    description="Si tu equipaje excede el peso o las dimensiones, puedes llevarlo con un cargo adicional."
                />
                <RecommendationCard
                    title="Liquidos"
                    description="Ten en cuenta que podrás llevar líquidos en tu equipaje de mano que no superen los 100ml."
                />
            </div>
        </div>
    )
}

export default RecommendationTable