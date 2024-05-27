
function InfoBox({ title, details }) {
    return (
        <div className="block m-4 p-6 space-x-9">
            <h2 className="text-center mb-7 font-xl text-lg">{title}</h2>
            <div className="space-y-5 font-light">
                <p><a className="hover:underline" href="#">{details.p1}</a></p>
                <p><a className="hover:underline" href="#">{details.p2}</a></p>
                <p><a className="hover:underline" href="#">{details.p3}</a></p>
                <p><a className="hover:underline" href="#">{details.p4}</a></p>
                <p><a className="hover:underline" href="#">{details.p5}</a></p>
            </div>
        </div>
    )
}

export default InfoBox