import InfoBox from "./infoBox"

function InfoTable() {

    const sobreNosotros = {
        p1: "Somos Singapur Airlines",
        p2: "Trabaja con nosotros",
        p3: "Noticias corporativas",
        p4: "Alianzas y beneficios",
        p5: "Sostenibilidad",
    }

    const enlacesRapidos = {
        p1: "Informacion legal",
        p2: "Politica de privacidad",
        p3: "Contrato de transporte",
        p4: "Articulos restringidos",
        p5: "Contactanos",
    }

    const portalesAsociados = {
        p1: "Programa lifemiles",
        p2: "Vuelos baratos",
        p3: "Singapur cargo",
        p4: "Singapur empresas",
        p5: "Relacion con inversionistas",
    }

    return (
        <>
            <div className="flex justify-center m-7">
                <InfoBox title="Sobre Nosotros" details={sobreNosotros} />
                <InfoBox title="Enlaces Rapidos" details={enlacesRapidos} />
                <InfoBox title="Portales Asociados" details={portalesAsociados} />
            </div>
        </>
    )
}

export default InfoTable