import { useState } from "react";
import FixedComponent from "./components/FixedComponent";
import Block from "./components/Block";
import Arrow from "./components/Arrow";
import Navbar from "./components/Navbar";

export type Context = {
  id: string;
  title: string;
  paragraphs: string[];
};

function App() {
  const [overlappedItem, setOverlappedItem] = useState<string | null>(null);

  // This context is a prop for a fixed component, id must match id of container that matches description.

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

  return (
    <>
      <Navbar />
      <main className="container mx-auto flex h-full w-full flex-col items-center justify-center gap-36">
        <Arrow />
        <Block id="1">
          <div className="h-20 w-20 rounded-full border border-white/5 bg-transparent p-4">
            <img
              className="h-full w-full  object-contain invert"
              src="https://cdn-images-1.medium.com/max/1200/1*HspIYThoyGWNikuOwjf-xg.png"
              alt="Aleph Logo"
            />
          </div>
          <p className="font-medium">Into Aleph Zero</p>
        </Block>
        <i className="ti ti-chevron-down text-5xl text-white/20"></i>
        <Block id="2">
          <p className="font-medium">Blazingly fast.</p>
          <p>Exceptionally private.</p>
        </Block>
        <i className="ti ti-chevron-down text-5xl text-white/20"></i>
        <Block id="3">
          <p className="font-medium">Driving Web3 adoption</p>
        </Block>
        <i className="ti ti-chevron-down text-5xl text-white/20"></i>
        <Block id="4">
          <p className="font-medium">Community of over 100,000 people</p>
        </Block>
        <div className="h-screen"></div>
        <div className="absolute left-32 top-1/4 h-64 w-64 rounded-full bg-zerogreen/5 blur-3xl" />
        <div className="absolute right-14 top-2/3 h-[30rem] w-[30rem] rounded-full bg-zerogreen/5 blur-3xl" />
      </main>

      <FixedComponent
        context={context}
        overlappedItem={overlappedItem}
        setOverlappedItem={setOverlappedItem}
      />
    </>
  );
}
export default App;
