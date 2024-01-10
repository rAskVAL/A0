import { motion } from "framer-motion";
import { /* forwardRef, */ useEffect, useRef, useState } from "react";
import { Context, Options } from "../App";

export default function FixedComponent({ options }: { options: Options }) {
  const ref = useRef<HTMLDivElement>(null);
  const [animating, setAnimating] = useState<boolean>(false);
  const [text, setText] = useState<Context | null>(null);
  const {
    logo,
    overlapTargetClass,
    overlappedItem,
    setOverlappedItem,
    context,
    color,
    borderColor,
  } = options;

  useEffect(() => {
    window.onscroll = function callback() {
      const targets = document.getElementsByClassName(overlapTargetClass);
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

    setText(context?.filter((item) => item.id === overlappedItem)[0] || null); // if overlapped item equals any of the id's in context, this text will be shown
  }, [overlappedItem, setOverlappedItem, overlapTargetClass, text, context]);
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
        }}
        transition={{ duration: 0.3 }}
        style={{ backgroundColor: color, borderColor: borderColor }}
        className={`fixed bottom-4 right-4 flex min-h-14 min-w-14 items-center justify-center overflow-hidden border-2  p-4 text-white transition-all ${
          overlappedItem
            ? "h-2/3 w-3/4 rounded-[1rem] md:h-72 md:w-[40rem]"
            : "h-14 w-14 rounded-[5rem] hover:scale-110"
        }`}
      >
        <img
          src={logo}
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
