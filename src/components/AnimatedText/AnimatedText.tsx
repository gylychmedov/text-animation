import { useEffect, useState } from "react";
import { IAnimatedText } from "../../interface/IAnimatedText";

const AnimatedText: React.FC<IAnimatedText> = ({
  texts = [],
  duration = 2000,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev >= texts.length - 1 ? 0 : prev + 1));
    }, duration);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <div>{texts[activeIndex]}</div>;
};

export default AnimatedText;
