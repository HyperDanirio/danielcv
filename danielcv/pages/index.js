import Image from "next/image";
function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Image className="mt-80" width={800} height={1200} src={"/CV-1.png"} />
    </div>
  );
}

export default Home;
