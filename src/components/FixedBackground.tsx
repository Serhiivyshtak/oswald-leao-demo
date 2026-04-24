export default function FixedBackground({backgroundImage}) {
    return <div className="w-screen h-screen fixed top-0 left-0 -z-10 bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${backgroundImage})`}}></div>;
}
