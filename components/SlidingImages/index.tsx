import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { circleContainerStyle, circleStyle, imageContainerStyle, projectStyle, sliderStyle, slidingImagesStyle } from "./style";

const slider1 = [
  {
    color: "#e3e5e7",
    src: "c2.jpg",
  },
  {
    color: "#d6d7dc",
    src: "decimal.jpg",
  },
  {
    color: "#e3e3e3",
    src: "funny.jpg",
  },
  {
    color: "#21242b",
    src: "google.jpg",
  },
];

const slider2 = [
  {
    color: "#d4e3ec",
    src: "maven.jpg",
  },
  {
    color: "#e5e0e1",
    src: "panda.jpg",
  },
  {
    color: "#d7d4cf",
    src: "powell.jpg",
  },
  {
    color: "#e1dad6",
    src: "wix.jpg",
  },
];

export default function SlidingImages() {
  const container = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <div ref={container} className={slidingImagesStyle}>
      <motion.div style={{ x: x1 }} className={sliderStyle}>
        {slider1.map((project, index) => {
          return (
            <div
              className={projectStyle}
              style={{ backgroundColor: project.color }}
              key={index}
            >
              <div key={index} className={imageContainerStyle}>
                <Image
                  fill={true}
                  alt={"image"}
                  src={`/images/${project.src}`}
                />
              </div>
            </div>
          );
        })}
      </motion.div>
      <motion.div style={{ x: x2 }} className={sliderStyle}>
        {slider2.map((project, index) => {
          return (
            <div
              className={projectStyle}
              style={{ backgroundColor: project.color }}
              key={index}
            >
              <div key={index} className={imageContainerStyle}>
                <Image
                  fill={true}
                  alt={"image"}
                  src={`/images/${project.src}`}
                />
              </div>
            </div>
          );
        })}
      </motion.div>
      <motion.div style={{ height }} className={circleContainerStyle}>
        <div className={circleStyle}></div>
      </motion.div>
    </div>
  );
}
