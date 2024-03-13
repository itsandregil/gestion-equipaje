import BaggageOptionsSection from "../components/baggageSection"
import NavBar from "../components/navbar"
import RecommendationSection from "../components/recommendationSection"

// Baggage view
function BaggageView() {
    return (
        <>
            <NavBar/>
            <BaggageOptionsSection/>
            <RecommendationSection/>
        </>
    )
}

export default BaggageView