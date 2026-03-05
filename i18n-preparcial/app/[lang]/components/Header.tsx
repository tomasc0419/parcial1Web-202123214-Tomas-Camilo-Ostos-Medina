import Image from "next/image";
import Link from "next/link";

export default function Header({lang}:{lang:string}){
const ImageComponent: React.FC = () => (
    <div>
        <Image src={'http://127.0.0.1:8000' + 'https://www.clipartmax.com/png/full/71-713336_harry-potter-logo-harry-potter-logo-png.png'} alt={'alt'} width={28} height={28} />
    </div>
);
return(

<header className="bg-[#FDB608] flex justify-center py-4">

<Link href={`/${lang}`}>

<Image src={'https://www.clipartmax.com/png/full/71-713336_harry-potter-logo-harry-potter-logo-png.png'} alt={'alt'} width={200} height={200


} />

</Link>

</header>

)

}