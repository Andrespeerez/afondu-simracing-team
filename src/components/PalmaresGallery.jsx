import PalmaresItem from "./PalmaresItem";

export default function PalmaresGallery() {
    const palmaresList = [
        {title: "SCERv", years: "2025, 2023, 2022", img: "/palmares-logos/SCERV.webp"},
        {title: "CEMv", years: "2025, 2024", img: "/palmares-logos/CEMV.webp"},
        {title: "CAAMv", years: "2025", img: "/palmares-logos/CAAMV.webp"},
        {title: "CEAXv", years: "2025, 2024, 2023", img: "/palmares-logos/CEAXv.webp"},
        {title: "Liga CNSAC", years: "2025", img: "/palmares-logos/cnsac.webp"},
        {title: "CERAv", years: "2024", img: "/palmares-logos/CERAv.webp"},
        {title: "RWv - RWv F4 Spain", years: "2022", img: "/palmares-logos/RACINGweekend.webp"},
    ];

    return (
        <div
        className='text-2xl span-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 2xl:grid-cols-2 gap-4'
        >
            {palmaresList.map((elem, index) => (
                <PalmaresItem titulo={elem.title} anyos={elem.years} img={elem.img} key={index}/>
            ))}            
        </div>  
    )
}