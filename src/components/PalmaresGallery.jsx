import PalmaresItem from "./PalmaresItem";

export default function PalmaresGallery() {
    const palmaresList = [
        {title: "SCERv", years: "2025, 2023, 2022", img: "/palmares-logos/SCERV.webp", alt: "logo del SCERv"},
        {title: "CEMv", years: "2025, 2024", img: "/palmares-logos/CEMV.webp", alt: "logo del CEMv"},
        {title: "CAAMv", years: "2025", img: "/palmares-logos/CAAMV.webp", alt: "logo del CAAMv"},
        {title: "CEAXv", years: "2025, 2024, 2023", img: "/palmares-logos/CEAXv.webp", alt: "logo del CEAXv"},
        {title: "Liga CNSAC", years: "2025", img: "/palmares-logos/cnsac.webp", alt: "logo de liga CNSAC"},
        {title: "CERAv", years: "2024", img: "/palmares-logos/CERAv.webp", alt: "logo del CERAv"},
        {title: "RWv - RWv F4 Spain", years: "2022", img: "/palmares-logos/RACINGweekend.webp", alt: "logo del Racing Weekend Virtual"},
    ];

    return (
        <div
        className='text-2xl span-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 2xl:grid-cols-2 gap-4 relative z-0'
        >
            {palmaresList.map((elem, index) => (
                <PalmaresItem titulo={elem.title} anyos={elem.years} img={elem.img} alt={elem.alt} key={index}/>
            ))}            
        </div>  
    )
}