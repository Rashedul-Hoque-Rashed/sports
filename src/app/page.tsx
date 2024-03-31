import Image from "next/image";
import player1 from "../assets/player1.jpg"
import player2 from "../assets/player2.jpg"
import player3 from "../assets/player3.jpg"
import player4 from "../assets/player4.avif"
import add from "../assets/add.jpeg"

export default function Home() {
  return (
    <main className="max-w-full min-h-screen mx-auto bg-[#F7F7F8] dark:bg-[#292B32] px-12 py-8">
      <div className="max-w-[1445px] mx-auto">
        <h4 className="bg-none text-[#000000] dark:text-[#ffffff] text-3xl font-extrabold border-b-4 w-fit py-2 border-[#738FFF]">Sports</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-6">
          <div className="bg-[#ffffff] dark:bg-[#3B3E47] p-3 shadow-md">
            <Image src={player1} alt="player1" className="w-[220px] h-[350px] mx-auto" />
            <h4 className="text-lg font-semibold text-[#000000] dark:text-[#ffffff] mb-2 mt-2">Sacramento River Cats</h4>
            <div className="flex justify-between items-center p-2 bg-[#F7F7F8] dark:bg-[#292B32]">
              <div>
                <h4 className="text-sm font-normal text-[#525965] dark:text-[#DFDFDF]">Total Events</h4>
                <p className="text-base font-medium text-[#000000] dark:text-[#ffffff]">48 Events</p>
              </div>
              <div>
                <h4 className="text-sm font-normal text-[#525965] dark:text-[#DFDFDF]">Sport</h4>
                <p className="text-base font-medium text-[#000000] dark:text-[#ffffff]">Baseball</p>
              </div>
            </div>
          </div>
          <div className="bg-[#ffffff] dark:bg-[#3B3E47] p-3 shadow-md">
            <Image src={player2} alt="player1" className="w-[220px] h-[350px] mx-auto" />
            <h4 className="text-lg font-semibold text-[#000000] dark:text-[#ffffff] mb-2 mt-2">Las Vegas Aviators</h4>
            <div className="flex justify-between items-center p-2 bg-[#F7F7F8] dark:bg-[#292B32]">
              <div>
                <h4 className="text-sm font-normal text-[#525965] dark:text-[#DFDFDF]">Total Events</h4>
                <p className="text-base font-medium text-[#000000] dark:text-[#ffffff]">28 Events</p>
              </div>
              <div>
                <h4 className="text-sm font-normal text-[#525965] dark:text-[#DFDFDF]">Sport</h4>
                <p className="text-base font-medium text-[#000000] dark:text-[#ffffff]">Baseball</p>
              </div>
            </div>
          </div>
          <div className="bg-[#ffffff] dark:bg-[#3B3E47] p-3 shadow-md">
            <Image src={player4} alt="player1" className="w-[220px] h-[350px] mx-auto" />
            <h4 className="text-lg font-semibold text-[#000000] dark:text-[#ffffff] mb-2 mt-2">New Jersey Devils</h4>
            <div className="flex justify-between items-center p-2 bg-[#F7F7F8] dark:bg-[#292B32]">
              <div>
                <h4 className="text-sm font-normal text-[#525965] dark:text-[#DFDFDF]">Total Events</h4>
                <p className="text-base font-medium text-[#000000] dark:text-[#ffffff]">15 Events</p>
              </div>
              <div>
                <h4 className="text-sm font-normal text-[#525965] dark:text-[#DFDFDF]">Sport</h4>
                <p className="text-base font-medium text-[#000000] dark:text-[#ffffff]">Ice Hockey</p>
              </div>
            </div>
          </div>
          <div className="bg-[#ffffff] dark:bg-[#3B3E47] p-3 shadow-md">
            <Image src={player3} alt="player1" className="w-[220px] h-[350px] mx-auto" />
            <h4 className="text-lg font-semibold text-[#000000] dark:text-[#ffffff] mb-2 mt-2">Los Angeles Dodgers</h4>
            <div className="flex justify-between items-center p-2 bg-[#F7F7F8] dark:bg-[#292B32]">
              <div>
                <h4 className="text-sm font-normal text-[#525965] dark:text-[#DFDFDF]">Total Events</h4>
                <p className="text-base font-medium text-[#000000] dark:text-[#ffffff]">38 Events</p>
              </div>
              <div>
                <h4 className="text-sm font-normal text-[#525965] dark:text-[#DFDFDF]">Sport</h4>
                <p className="text-base font-medium text-[#000000] dark:text-[#ffffff]">Baseball</p>
              </div>
            </div>
          </div>
          <div className="bg-[#ffffff] dark:bg-[#3B3E47] p-3 shadow-md">
            <div className="border border-[#006555] h-full relative">
              <Image src={add} alt="player1" className="w-[220px] h-[220px] mx-auto" />
              <button className="absolute top-0 right-0 py-1 px-3 bg-[#000000] text-[#ffffff] text-xs font-bold">
                Ad
              </button>
              <div className="px-2 py-6">
                <h4 className="text-[#222D3A] dark:text-[#ffffff] text-xl font-semibold mb-2">ProGear: Peak Performance Awaits!</h4>
                <p className="text-[#525965] dark:text-[#DFDFDF] text-sm">Experience peak performance with ProGear! Elevate your game with our premium sports equipment and apparel. Dominate the competition and unleash your full potential with ProGear by your side!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1445px] mx-auto my-10 py-10">
        <h2 className="text-[#000000] dark:text-[#ffffff] text-5xl font-extrabold text-center mb-3">Collection Spotlight</h2>
        <p className="text-[#000000] dark:text-[#ffffff] text-sm text-center">Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable <br /> experience. Grab yours today!</p>
      </div>
    </main>
  );
}
