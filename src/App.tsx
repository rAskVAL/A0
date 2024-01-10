import { useState } from "react";
import FixedComponent, { Context, Options } from "./components/FixedComponent";
import Block from "./components/Block";
import Arrow from "./components/Arrow";
import Navbar from "./components/Navbar";
import SmallArrow from "./components/SmallArrow";
import BluredCircles from "./components/BluredCircles";

const context: Context[] = [
  {
    id: "1",
    title: "Into Aleph Zero",
    paragraphs: [
      "Aleph Zero is a layer 1 blockchain with a highly scalable architecture with its own AlephBFT consensus mechanism.",
      "Its sub-second finality makes for seamless experiences for users, while the network remains secure and decentralized.",
    ],
  },
  {
    id: "2",
    title: "Blazingly fast. Exceptionally private.",
    paragraphs: [
      "Deploy Web3 apps that are as fast as legacy solutions. Aleph Zero is a layer 1 that enables teams to deploy scalable, secure, low-cost, and ZK privacy-enhanced products across multiple verticals—from DeFi and gaming to enterprise.",
    ],
  },
  {
    id: "3",
    title: "Driving Web3 adoption",
    paragraphs: [
      "Aleph Zero bridges the gap between scalability, security, developer friendliness, and cost of use. Moreover, the network will boast a native privacy stack to further enable you to build solutions that strike the balance between transparency and privacy.",
    ],
  },
  {
    id: "4",
    title: "Community of over 100,000 people",
    paragraphs: [
      "Join us and get involved in a number of ongoing educational activities run not only by the core team but also by the community directly.",
    ],
  },
];

function App() {
  // this state contains ID of the overlapping item or null when no container overlapped

  const [overlappedItem, setOverlappedItem] = useState<string | null>(null);

  const options: Options = {
    overlappedItem: overlappedItem, // state which includes id of overlapped item
    setOverlappedItem: setOverlappedItem, // sets id of overlapped item
    overlapTargetClass: "target", // add class to containers you want to interacted with fixed element, then this class needs to be added here.
    logo: "https://cdn-images-1.medium.com/max/1200/1*HspIYThoyGWNikuOwjf-xg.png", // logo
    context: context, // context for fixed container when its open
    color: "#00eac7",
    borderColor: "#80ffec",
  };

  return (
    <>
      <Navbar />
      <main className="container mx-auto flex h-full w-full flex-col items-center justify-center gap-36 px-4">
        <Arrow />
        <Block id="1" overlappedItem={overlappedItem}>
          <div className="h-20 w-20 rounded-full border border-white/5 bg-transparent p-4">
            <img
              className="h-full w-full  object-contain invert"
              src="https://cdn-images-1.medium.com/max/1200/1*HspIYThoyGWNikuOwjf-xg.png"
              alt="Aleph Logo"
            />
          </div>
          <p className="font-medium">Into Aleph Zero</p>
        </Block>
        <SmallArrow />
        <Block id="2" overlappedItem={overlappedItem}>
          <p className="font-medium">Blazingly fast.</p>
          <p>Exceptionally private.</p>
        </Block>
        <SmallArrow />
        <Block id="3" overlappedItem={overlappedItem}>
          <p className="font-medium">Driving Web3 adoption</p>
        </Block>
        <SmallArrow />
        <Block id="4" overlappedItem={overlappedItem}>
          <p className="font-medium">Community of over 100,000 people</p>
        </Block>
        <div className="h-screen"></div>
      </main>
      {/* \/ component for assigement, as prop takes options */}
      <FixedComponent options={options} />
      <BluredCircles />
    </>
  );
}
export default App;
