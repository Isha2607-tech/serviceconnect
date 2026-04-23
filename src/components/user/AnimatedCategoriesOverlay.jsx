import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import CategoriesPage from '../../pages/user/Categories';

/**
 * AnimatedCategoriesOverlay
 * A premium fullscreen overlay that grows from a specific trigger point.
 */
const AnimatedCategoriesOverlay = ({ isOpen, onClose, triggerRef }) => {
  const [origin, setOrigin] = useState({ x: '50%', y: '50%' });

  useEffect(() => {
    if (isOpen && triggerRef?.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      setOrigin({ x: `${x}px`, y: `${y}px` });
      
      // Prevent scrolling on the background page
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, triggerRef]);

  // Handle hardware back button / escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ 
            opacity: 0, 
            scale: 0,
            filter: 'blur(20px)',
          }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            filter: 'blur(0px)',
          }}
          exit={{ 
            opacity: 0, 
            scale: 0,
            filter: 'blur(20px)',
            transition: { duration: 0.3, ease: [0.32, 0, 0.67, 0] }
          }}
          transition={{ 
            type: "spring",
            damping: 25,
            stiffness: 200,
            mass: 0.8
          }}
          style={{ 
            transformOrigin: `${origin.x} ${origin.y}`,
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'white',
            overflowY: 'auto'
          }}
        >
          {/* We wrap the content and intercept the back button if needed */}
          <div className="relative min-h-screen">
            {/* 
              Inject a custom back button handler if CategoriesPage uses navigate(-1).
              Since we are in an overlay, navigate(-1) would go back in history, 
              but we want to close the overlay.
              We'll need to modify CategoriesPage slightly to accept an onClose prop 
              or just rely on the user's "Close Flow" requirement.
            */}
            <CategoriesPage isOverlay={true} onOverlayClose={onClose} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default AnimatedCategoriesOverlay;
