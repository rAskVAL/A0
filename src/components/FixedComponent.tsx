import { motion } from "framer-motion";
import { /* forwardRef, */ useEffect, useRef, useState } from "react";
import { Context } from "../App";

interface Props {
  overlappedItem: string | null;
  setOverlappedItem: (item: string | null) => void;
  context: Context[];
}

export default function FixedComponent({
  overlappedItem,
  setOverlappedItem,
  context,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [animating, setAnimating] = useState<boolean>(false);
  const [text, setText] = useState<Context | null>(null);
  useEffect(() => {
    window.onscroll = function callback() {
      const targets = document.getElementsByClassName("target");
      if (targets.length > 0)
        Array.from(targets).forEach((item) => {
          const id = item.id;
          const rootRect = ref.current?.getBoundingClientRect();
          const targetRect = item.getBoundingClientRect();
          if (
            rootRect &&
            targetRect &&
            !(
              rootRect.bottom < targetRect.top ||
              rootRect.top > targetRect.bottom
            )
          ) {
            setOverlappedItem(id);
          } else if (overlappedItem === id) setOverlappedItem(null);
        });
    };
    setText(context?.filter((item) => item.id === overlappedItem)[0] || null);
  }, [overlappedItem, setOverlappedItem, text, context]);
  return (
    <>
      <motion.div
        onAnimationStart={() => setAnimating(true)}
        onAnimationComplete={() => setAnimating(false)}
        initial={{ opacity: 0, scale: 0, translateY: 60 }}
        animate={{
          translateY: 0,
          scale: 1,
          opacity: 1,
          height: overlappedItem ? "18rem" : "3.5rem",
          width: overlappedItem ? "40rem" : "3.5rem",
          borderRadius: overlappedItem ? "1rem" : "20rem",
        }}
        transition={{ duration: 0.3 }}
        className={`fixed bottom-4 right-4 flex min-h-14 min-w-14 items-center justify-center overflow-hidden rounded-full border-2 border-emerald-300 bg-gradient-to-tr from-zerogreen to-emerald-500 p-4 text-white`}
      >
        <img
          src="https://cdn-images-1.medium.com/max/1200/1*HspIYThoyGWNikuOwjf-xg.png"
          className={`h-12 w-12 object-contain opacity-100 transition-all duration-300 ${
            overlappedItem && "!h-1/2 !w-1/2 !opacity-15 blur-sm"
          }`}
        />
        {overlappedItem && !animating && (
          <motion.div
            initial={{ height: "0%", opacity: 0 }}
            animate={{ height: "100%", opacity: 100 }}
            className="absolute h-full w-full overflow-hidden p-4"
          >
            <div className="h-full w-full space-y-2 rounded-lg p-4">
              <h2 className="text-4xl font-bold">{text?.title}</h2>
              <hr className="!my-4 border-white/50" />
              {text?.paragraphs.map((p) => <p className="font-medium">{p}</p>)}
            </div>
          </motion.div>
        )}
      </motion.div>
      <div
        ref={ref}
        className="fixed bottom-4  right-4 h-16 w-16 bg-red-200 opacity-0"
      ></div>
    </>
  );
}
