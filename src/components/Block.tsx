import { type ReactNode } from "react";

function Block({
  id,
  children,
  overlappedItem,
}: {
  id: string;
  children: ReactNode;
  overlappedItem: string | null;
}) {
  // Block is a styled component which accepts children.
  return (
    <div
      id={id}
      className={`target flex h-96 w-full items-center justify-center overflow-hidden rounded-lg border border-white/5 bg-gradient-to-t from-transparent to-midnight-400 text-3xl ${
        overlappedItem === id
          ? "border-zerogreen/20 text-zerogreen"
          : "border-white/5 text-white"
      } transition-all duration-500 hover:border-white/20 hover:to-midnight-400/50 md:text-6xl`}
    >
      <div className="justfiy-start flex w-full flex-col items-start p-14">
        {children}
      </div>
    </div>
  );
}

export default Block;
