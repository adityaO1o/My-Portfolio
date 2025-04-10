
import { useState, useEffect, useRef } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClickable, setIsClickable] = useState(false);
  const cursorOuterRef = useRef<HTMLDivElement>(null);
  const cursorInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    
    const updateCursorPosition = (e: MouseEvent) => {
      // Cancel any pending animation frame
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      
      // Use requestAnimationFrame for smoother performance
      animationFrameId = requestAnimationFrame(() => {
        if (cursorOuterRef.current && cursorInnerRef.current) {
          // Direct DOM manipulation for better performance
          cursorOuterRef.current.style.transform = `translate(-50%, -50%) translate(${e.clientX}px, ${e.clientY}px)`;
          cursorInnerRef.current.style.transform = `translate(-50%, -50%) translate(${e.clientX}px, ${e.clientY}px)`;
          
          // Update React state for other properties
          setPosition({ x: e.clientX, y: e.clientY });
        }
      });
    };

    const handleMouseOver = (e: MouseEvent) => {
      // Check if cursor is over a clickable element
      const target = e.target as HTMLElement;
      const clickable = 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') || 
        target.closest('a') || 
        target.classList.contains('clickable');
      
      setIsClickable(!!clickable);
    };

    // Add body class to hide default cursor
    document.body.classList.add('cursor-none');

    // Add event listeners
    document.addEventListener('mousemove', updateCursorPosition, { passive: true });
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      // Remove body class
      document.body.classList.remove('cursor-none');
      
      // Remove event listeners
      document.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mouseover', handleMouseOver);
      
      // Cancel any pending animation frame
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <div className="pointer-events-none fixed z-50">
      {/* Outer cursor element */}
      <div 
        ref={cursorOuterRef}
        className={`absolute rounded-full border-2 border-cyan-400 transition-transform duration-300 ${isClickable ? 'w-8 h-8 animate-pulse' : 'w-6 h-6'}`}
        style={{ 
          left: 0, 
          top: 0,
          transform: `translate(-50%, -50%) translate(${position.x}px, ${position.y}px)`,
          transition: 'width 0.3s, height 0.3s',
          willChange: 'transform'
        }}
      />
      {/* Inner cursor element */}
      <div 
        ref={cursorInnerRef}
        className="absolute w-2 h-2 bg-cyan-300 rounded-full"
        style={{ 
          left: 0, 
          top: 0,
          transform: `translate(-50%, -50%) translate(${position.x}px, ${position.y}px)`,
          willChange: 'transform'
        }}
      />
    </div>
  );
};

export default CustomCursor;
