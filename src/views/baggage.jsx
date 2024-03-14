import BaggageOptionsSection from "../components/baggageSection"
import InfoSection from "../components/infoSection"
import NavBar from "../components/navbar"
import RecommendationSection from "../components/recommendationSection"

// Baggage view
function BaggageView() {
    return (
        <>
            <NavBar/>
            <BaggageOptionsSection/>
            <RecommendationSection/>
            <InfoSection/>
        </>
    )
}

export default BaggageView