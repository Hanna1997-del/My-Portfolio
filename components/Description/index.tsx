import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { slideUp, opacity } from "./animation";
import Rounded from "../../common/RoundedButton";
import { bodyStyle, buttonStyle, descriptionStyle } from "./style";
import { cn } from "@/lib/utils";

export default function Description() {
  const phrase =
    "Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.";
  const description = useRef<any>(null);
  const isInView = useInView(description);
  return (
    <div ref={description} className={descriptionStyle}>
      <div className={bodyStyle}>
        <p className="m-0 flex text-[36px] gap-[8px] leading-[1.3] flex-wrap">
          {phrase.split(" ").map((word, index) => (
            <span
              className="mr-[3px] relative overflow-hidden inline-flex"
              key={index}
            >
              <motion.span
                variants={slideUp}
                custom={index}
                animate={isInView ? "open" : "closed"}
                key={index}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </p>
        <motion.p
          className="m-0 text-[18px] w-[80%] font-[300]"
          variants={opacity}
          animate={isInView ? "open" : "closed"}
        >
          The combination of my passion for design, code & interaction positions
          me in a unique place in the web design world.
        </motion.p>
        <div data-scroll data-scroll-speed={0.1}>
          <Rounded className={buttonStyle}>
            <p>About me</p>
          </Rounded>
        </div>
      </div>
    </div>
  );
}
