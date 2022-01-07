import { useEffect, useState } from 'react';

export const useOnScreen = (ref, rootMargin = '0px') => {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const currentElement = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );
    if (ref.current) {
      observer.observe(currentElement);
    }
    return () => {
      observer.unobserve(currentElement);
    };
  }, [ref, rootMargin]);
  return isIntersecting;
};
