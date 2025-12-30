import PalmaresItem from "./PalmaresItem";

export default function PalmaresGallery() {
    const palmaresList = [
        {title: "SCERv", years: "2025, 2023, 2022"},
        {title: "CEMv", years: "2025, 2024"},
        {title: "CAAMv", years: "2025"},
        {title: "CEAXv", years: "2025, 2024, 2023"},
        {title: "Liga CNSAC", years: "2025"},
        {title: "CERAv", years: "2024"},
        {title: "RWv", years: "2022"},
        {title: "RWv F4 Spain", years: "2022"},
    ];

    return (
        <div
        className='text-2xl span-1 grid grid-cols-2 lg:grid-cols-1 2xl:grid-cols-2 gap-4'
        >
            {palmaresList.map((elem, index) => (
                <PalmaresItem titulo={elem.title} anyos={elem.years} key={index}/>
            ))}

            
        </div>  
    )
}