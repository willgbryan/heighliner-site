import React from 'react';
import { ChevronDown } from 'lucide-react';

const AnimatedChevron = () => {
  return (
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
      <ChevronDown className="w-8 h-8 text-white" />
    </div>
  );
};

export default AnimatedChevron;