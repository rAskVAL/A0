import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Arrow() {
  const [hidden, setHidden] = useState<boolean>(false);
  const [top, setTop] = useState<boolean>(true);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const targets = document.getElementsByClassName("target");
    const first = targets[0];
    const last = targets[targets.length - 1];
    function callback() {
      if (
        ref.current &&
        first.getBoundingClientRect().y - 500 >
          ref.current?.getBoundingClientRect().y
      ) {
        setHidden(false);
        setTop(true);
      } else if (
        ref.current &&
        first.getBoundingClientRect().y - 500 <
          ref.current?.getBoundingClientRect().y &&
        ref.current?.getBoundingClientRect().y >
          last.getBoundingClientRect().y + 500
      ) {
        setHidden(false);
        setTop(false);
      } else setHidden(true);
    }
    document.addEventListener("scroll", callback);
  }, []);
  console.log(window.scrollY);

  return (
    <>
      <motion.div
        animate={{
          opacity: hidden ? 0 : 100,
        }}
        className={`flex h-screen items-center justify-center ${
          hidden ? "pointer-events-none" : "pointer-events-auto"
        }`}
      >
        <div
          ref={ref}
          className={`fixed z-20 flex h-32 w-32 items-center justify-center rounded-full border border-white/5 bg-[radial-gradient(100%_100%_at_50%_50%,rgba(17,27,36,1)_35%,rgba(0,234,199,1)_500%)] transition-all hover:scale-95 hover:border-white/10`}
        >
          <i
            className={`ti ${
              top ? "ti-chevron-down" : "ti-chevron-up"
            } text-6xl text-white`}
          ></i>
        </div>
        <div className="fixed z-10 flex h-full w-20 flex-col items-center justify-center">
          <div
            className={`mask-clip relative h-1/3 overflow-hidden opacity-10 ${
              !top && "rotate-180"
            }`}
          >
            <div className="flex  -translate-y-[50%] flex-col">
              {Array.from(Array(20).keys()).map(() => (
                <motion.i
                  initial={{ translateY: "0%" }}
                  animate={{ translateY: "490%" }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="ti ti-chevron-down text-4xl text-white"
                ></motion.i>
              ))}
            </div>
          </div>
        </div>
        <img
          className="absolute -z-10 h-3/4 object-contain opacity-30"
          src="https://blog.mexc.com/wp-content/uploads/2022/06/A0_logotype_vertical_graphite.png"
          alt="alephzero logo"
        />
      </motion.div>
    </>
  );
}
