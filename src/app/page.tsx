import IntroCard from "@/components/card/IntroCard";
import MainLayout from "@/components/layouts/main";
import Image from "next/image";

export default function Home() {


  

  return (
    <MainLayout>
      <div className="w-full  flex flex-col items-center">
        {/* view slider */}
        <div className="w-full bg-white-smoke flex justify-center items-center">
          <div className="w-[90%] justify-center flex-col gap-5 items-center flex h-[400px]">
            <h1 className="text-black font-poppins text-[2em]">
              What documents are you looking for?
            </h1>
            <p>Help you study more easily</p>
          </div>
        </div>
        {/* intro card */}
        <div className="w-[80%] flex justify-center gap-6 mt-4">
          <IntroCard />
          <IntroCard />
          <IntroCard />
          <IntroCard />
          <IntroCard />

        </div>
      </div>
    </MainLayout>
  );
}
