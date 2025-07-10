import { useRef } from "react";
import TimelineItem from "./TimelineItem";

const timelineData = [
  { side: "left", title: "SSC - Sri Krishna High School", subtitle: "Board of Secondary Education", date: "2018 – 2019", grade: "9.7/10" },
  { side: "right", title: "Intermediate - Sri Sanjeevni Junior College", subtitle: "Board of Intermediate Education", date: "2019 – 2021", grade: "9.3/10" },
  { side: "left", title: "B.Tech - CSE (AI & ML) - Gokaraju CET", subtitle: "JNTU Hyderabad", date: "2021 – 2025", grade: "9.11/10" },
];

const AnimatedTimeline = () => {
  // create refs for all items
  const itemRefs = timelineData.map(() => useRef(null));

  return (
    <div className="relative mt-16 mb-16">
      <div className="flex flex-col gap-24">
        {timelineData.map((item, index) => (
          <TimelineItem
            key={index}
            {...item}
            isLast={index === timelineData.length - 1}
            thisRef={itemRefs[index]}
            nextRef={itemRefs[index + 1]} // will be undefined for last item
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedTimeline;
