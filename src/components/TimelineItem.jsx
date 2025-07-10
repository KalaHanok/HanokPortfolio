import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const TimelineItem = ({
  side = "left",
  title,
  subtitle,
  date,
  grade,
  isLast,
  thisRef,
  nextRef,
}) => {
  const alignLeft = side === "left";
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.5 });
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    if (thisRef?.current && nextRef?.current) {
      const thisDot = thisRef.current.getBoundingClientRect().top;
      const nextDot = nextRef.current.getBoundingClientRect().top;
      const height = nextDot - thisDot;
      setLineHeight(height > 0 ? height : 0);
    }
  }, [inView, thisRef, nextRef]);

  return (
    <div className="relative flex w-full" ref={ref}>
      {/* 📄 Card */}
      <motion.div
        initial={{ opacity: 0, x: alignLeft ? -50 : 50 }}
        animate={
          inView ? { opacity: 1, x: 0 } : { opacity: 0, x: alignLeft ? -50 : 50 }
        }
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className={`w-full md:w-1/2 p-4 rounded-xl shadow-md transition-colors duration-300 ${
          alignLeft ? "md:mr-auto text-left" : "md:ml-auto text-left"
        } bg-white dark:bg-gray-800`}
      >
        <h4 className="text-lg font-bold text-gray-900 dark:text-white">
          {title}
        </h4>
        <p className="text-sm text-gray-700 dark:text-gray-300">{subtitle}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{date}</p>
        <p className="text-sm text-green-700 dark:text-green-400 mt-1 font-semibold">
          Grade: {grade}
        </p>
      </motion.div>

      {/* 🟦 Dot + Line */}
      <div
        className="hidden md:flex absolute left-1/2 -translate-x-1/2 flex-col items-center z-10"
        ref={thisRef}
      >
        <div className="w-4 h-4 bg-blue-500 rounded-full z-10" />
        {!isLast && (
          <motion.div
            className="w-1 bg-blue-500 origin-top"
            animate={{ height: inView ? lineHeight : 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        )}
      </div>
    </div>
  );
};

export default TimelineItem;
