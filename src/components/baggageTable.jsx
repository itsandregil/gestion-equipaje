import backPackLogo from "@/assets/backpack.svg";
import carryOnLogo from "@/assets/carry-on.svg";
import luggageLogo from "@/assets/luggage.svg";
import BaggageCard from "./baggageCard";

function BaggageTable() {

  return (
    <>
      <BaggageCard
        title="Equipaje Personal"
        logo={backPackLogo}
        luggageDescription="Puede ser una cartera, morral, pañalera, un bolso para llevar un portátil o un paquete."
        sizes="Medidas máximas: 45 x 35 x 25 cm (alto, largo y ancho)"
        extra="Asegúrate que puedas ubicarlo debajo del asiento delantero."
        luggageType="Personal"
      />
      <BaggageCard
        title="Equipaje de Mano"
        logo={carryOnLogo}
        luggageType="De mano"
        luggageDescription="Puedes llevarlo contigo en la cabina del avión y ubicarlo en el compartimiento superior."
        sizes="Medidas máximas: 55 x 35 x 25 cm (alto, largo y ancho), incluyendo ruedas y manijas."
        extra="Peso máximo: 10 kg. Si tu equipaje de mano no cumple con las condiciones, deberá registrarse como equipaje de bodega."
      />
      <BaggageCard
        title="Equipaje de Bodega"
        logo={luggageLogo}
        luggageDescription="Regístralo en el counter del aeropuerto antes de ir a la sala de abordaje."
        sizes="Medidas máximas: no debe exceder los 158cm de dimension total (largo + ancho + alto)."
        extra="Peso máximo: 23 kg dependiendo de la tarifa y 32 kg dependiendo de la tarifa"
        luggageType="De bodega"
      />
    </>
  );
}

export default BaggageTable;
