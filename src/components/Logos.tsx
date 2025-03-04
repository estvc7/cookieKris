const Logos: React.FC = () => {
    return (
        <section id="logos" className="py-32 px-5 bg-background">
            <p className="text-lg font-medium text-center">Ingredientes Usados</p>
            <div className="mt-5 w-full flex flex-wrap flex-row items-center justify-evenly gap-5 sm:gap-10 opacity-45 logos-container">

                {/* Nutella */}
                <svg width="300" height="60" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
                    <text x="5" y="45" fontFamily="Arial, Helvetica, sans-serif" fontSize="50" fontWeight="bold">
                        <tspan fill="black">N</tspan>
                        <tspan fill="red">UTELLA</tspan>
                    </text>
                </svg>


                {/* FR */}
                <svg width="680" height="80" viewBox="0 0 300 80" xmlns="http://www.w3.org/2000/svg">
                    <text x="10" y="60" fontFamily="Arial, Helvetica, sans-serif" fontSize="50" fontWeight="bold" fill="#B69349">
                        FERRERO ROCHER
                    </text>
                </svg>

                {/* HErs */}
                <svg width="300" height="80" viewBox="0 0 300 80" xmlns="http://www.w3.org/2000/svg">
                    <text x="10" y="60" fontFamily="Arial, Helvetica, sans-serif" fontSize="60" fontWeight="bold" fill="#4D0E06">
                        HERSHEYs
                    </text>
                </svg>
                {/* Oreo */}
                <svg width="300" height="80" viewBox="0 0 300 80" xmlns="http://www.w3.org/2000/svg">
                    <text x="10" y="60" fontFamily="Arial, Helvetica, sans-serif" fontSize="60" fontWeight="bold" fill="#000000">
                        OREO
                    </text>
                </svg>

        
            </div>
        </section>
    )
}

export default Logos