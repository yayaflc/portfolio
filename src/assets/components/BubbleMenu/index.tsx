import type { CSSProperties, ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

type MenuItem = {
  label: string;
  href: string;
  ariaLabel?: string;
  rotation?: number;
  hoverStyles?: {
    bgColor?: string;
    textColor?: string;
  };
};

export type BubbleMenuProps = {
  onMenuClick?: (open: boolean) => void;
  className?: string;
  style?: CSSProperties;
  menuAriaLabel?: string;
  menuBg?: string;
  menuContentColor?: string;
  useFixedPosition?: boolean;
  items?: MenuItem[];
  animationEase?: string;
  animationDuration?: number;
  staggerDelay?: number;
};

const DEFAULT_ITEMS: MenuItem[] = [
  {
    label: 'home',
    href: '#',
    ariaLabel: 'Home',
    rotation: -8,
    hoverStyles: { bgColor: '#3b82f6', textColor: '#ffffff' }
  },
  {
    label: 'about',
    href: '#',
    ariaLabel: 'About',
    rotation: 8,
    hoverStyles: { bgColor: '#10b981', textColor: '#ffffff' }
  },
  {
    label: 'projects',
    href: '#',
    ariaLabel: 'Documentation',
    rotation: 8,
    hoverStyles: { bgColor: '#f59e0b', textColor: '#ffffff' }
  },
  {
    label: 'blog',
    href: '#',
    ariaLabel: 'Blog',
    rotation: 8,
    hoverStyles: { bgColor: '#ef4444', textColor: '#ffffff' }
  },
  {
    label: 'contact',
    href: '#',
    ariaLabel: 'Contact',
    rotation: -8,
    hoverStyles: { bgColor: '#8b5cf6', textColor: '#ffffff' }
  }
];

export default function BubbleMenu({
  onMenuClick,
  className,
  style,
  menuAriaLabel = 'Toggle menu',
  menuBg = '#fff',
  menuContentColor = '#111',
  useFixedPosition = false,
  items,
  animationEase = 'back.out(1.5)',
  animationDuration = 0.5,
  staggerDelay = 0.12
}: BubbleMenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const overlayRef = useRef<HTMLDivElement>(null);
  const bubblesRef = useRef<HTMLAnchorElement[]>([]);
  const labelRefs = useRef<HTMLSpanElement[]>([]);

  const menuItems = items?.length ? items : DEFAULT_ITEMS;

  const containerClassName = [
    'bubble-menu',
    useFixedPosition ? 'fixed' : 'absolute',
    'left-0 right-0 top-8',
    'flex items-center justify-between',
    'gap-4 px-8',
    'pointer-events-none',
    'z-[1001]',
    className
  ]
    .filter(Boolean)
    .join(' ');
  const handleToggle = () => {
    const nextState = !isMenuOpen;
    if (nextState) setShowOverlay(true);
    setIsMenuOpen(nextState);
    onMenuClick?.(nextState);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
    setIsMenuOpen(false);
    onMenuClick?.(false);
  };

  useEffect(() => {
    const overlay = overlayRef.current;
    const bubbles = bubblesRef.current.filter(Boolean);
    const labels = labelRefs.current.filter(Boolean);
    if (!overlay || !bubbles.length) return;

    if (isMenuOpen) {
      gsap.set(overlay, { display: 'flex' });
      gsap.killTweensOf([...bubbles, ...labels]);
      gsap.set(bubbles, { scale: 0, transformOrigin: '50% 50%' });
      gsap.set(labels, { y: 24, autoAlpha: 0 });

      bubbles.forEach((bubble, i) => {
        const delay = i * staggerDelay + gsap.utils.random(-0.05, 0.05);
        const tl = gsap.timeline({ delay });
        tl.to(bubble, {
          scale: 1,
          duration: animationDuration,
          ease: animationEase
        });
        if (labels[i]) {
          tl.to(
            labels[i],
            {
              y: 0,
              autoAlpha: 1,
              duration: animationDuration,
              ease: 'power3.out'
            },
            '-=' + animationDuration * 0.9
          );
        }
      });
    } else if (showOverlay) {
      gsap.killTweensOf([...bubbles, ...labels]);
      gsap.to(labels, {
        y: 24,
        autoAlpha: 0,
        duration: 0.2,
        ease: 'power3.in'
      });
      gsap.to(bubbles, {
        scale: 0,
        duration: 0.2,
        ease: 'power3.in',
        onComplete: () => {
          gsap.set(overlay, { display: 'none' });
          setShowOverlay(false);        }
      });
    }
  }, [isMenuOpen, showOverlay, animationEase, animationDuration, staggerDelay]);

  return (
    <>      {/* Workaround for silly Tailwind capabilities */}      <style>{`
        .bubble-menu .menu-line {
          transition: transform 0.3s ease, opacity 0.3s ease;
          transform-origin: center;
        }
        .bubble-menu-items .pill-list {
          max-width: 280px;
        }
        .bubble-menu-items .pill-list .pill-col {
          width: 100%;
        }
        .bubble-menu-items .pill-link {
          transform: rotate(var(--item-rot, 0deg));
        }
        .bubble-menu-items .pill-link:hover {
          transform: rotate(var(--item-rot, 0deg)) scale(1.05) !important;
          background: var(--hover-bg) !important;
          color: var(--hover-color) !important;
        }
        .bubble-menu-items .pill-link:active {
          transform: rotate(var(--item-rot, 0deg)) scale(0.95) !important;
        }
      `}</style>

      <button
        type="button"
        className={`bubble-menu toggle-bubble menu-btn inline-flex flex-col items-center justify-center rounded-full pointer-events-auto w-11 h-11 border-0 cursor-pointer p-0 will-change-transform transition-colors duration-500 bg-pinkPrimary/40 hover:bg-pinkPrimary/60 dark:bg-pinkPrimary/20 dark:hover:bg-pinkPrimary/40 ${className || ''}`}
        onClick={handleToggle}
        aria-label={menuAriaLabel}
        aria-pressed={isMenuOpen}
        style={style}
      >
          <span
            className="menu-line block mx-auto rounded-sm"
            style={{
              width: 20,
              height: 2,
              background: menuContentColor,
              transform: isMenuOpen ? 'translateY(3.5px) rotate(45deg)' : 'none'
            }}
          />
          <span
            className="menu-line block mx-auto rounded-sm mt-1.5"
            style={{
              width: 20,
              height: 2,
              background: menuContentColor,
              transform: isMenuOpen ? 'translateY(-3.5px) rotate(-45deg)' : 'none'
            }}          />
        </button>      {showOverlay && (
        <div
          ref={overlayRef}
          className="bubble-menu-items fixed top-20 right-6 flex items-start justify-end pointer-events-none z-[1000]"
          aria-hidden={!isMenuOpen}
        >
          <ul
            className="pill-list list-none m-0 p-0 flex flex-col gap-3 pointer-events-auto max-w-[280px]"
            role="menu"
            aria-label="Menu links"
          >
            {menuItems.map((item, idx) => (
              <li
                key={idx}
                role="none"
                className={[
                  'pill-col',
                  'flex justify-center items-stretch',
                  'box-border'
                ].join(' ')}
              >                <a
                  role="menuitem"
                  href={item.href}
                  aria-label={item.ariaLabel || item.label}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className={[
                    'pill-link',
                    'w-full',
                    'rounded-full',
                    'no-underline',
                    'bg-white',
                    'text-inherit',
                    'shadow-md',
                    'flex items-center justify-center',
                    'relative',
                    'transition-all duration-300',
                    'box-border',
                    'whitespace-nowrap overflow-hidden'
                  ].join(' ')}
                  style={
                    {
                      ['--item-rot']: `${item.rotation ?? 0}deg`,
                      ['--pill-bg']: menuBg,
                      ['--pill-color']: menuContentColor,
                      ['--hover-bg']: item.hoverStyles?.bgColor || '#F48FB1',                      ['--hover-color']: item.hoverStyles?.textColor || '#ffffff',
                      background: menuBg,
                      color: menuContentColor,
                      minHeight: '50px',
                      padding: '0.75rem 1.5rem',
                      fontSize: '1rem',
                      fontWeight: 500,
                      lineHeight: 1,
                      willChange: 'transform'
                    } as CSSProperties
                  }
                  ref={el => {
                    if (el) bubblesRef.current[idx] = el;
                  }}
                >
                  <span
                    className="pill-label inline-block"
                    style={{
                      willChange: 'transform, opacity',
                      lineHeight: 1.2
                    }}
                    ref={el => {
                      if (el) labelRefs.current[idx] = el;
                    }}
                  >
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
