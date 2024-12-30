// Component to display custom link in an article
export default function ExtLink(prop){
    return <a href={prop.link} className="text-[#14b8a6] font-semibold cursor-pointer hover:underline">
        {prop.children}
    </a>
}