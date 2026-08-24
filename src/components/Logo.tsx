import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'color';
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'color',
  size = 'md',
  showTagline = true,
}) => {
  // Dimension scales
  const sizeConfig = {
    sm: { symbolSize: 34, titleSize: 'text-xl', subSize: 'text-[9px]', height: 38 },
    md: { symbolSize: 44, titleSize: 'text-2xl', subSize: 'text-[10.5px]', height: 48 },
    lg: { symbolSize: 58, titleSize: 'text-3xl sm:text-4xl', subSize: 'text-[12px]', height: 62 },
  };

  const currentSize = sizeConfig[size];

  // Color mappings
  const orangeFill = '#E87524';
  const mintFill = '#70CDA5';

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`} id="brand-logo-container">
      {/* Flame & Water Drop Symbol */}
      <svg
        width={currentSize.symbolSize}
        height={currentSize.symbolSize * 1.05}
        viewBox="0 0 100 105"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 hover:scale-105"
        id="logo-svg-symbol"
      >
        {/* Outer Warm Orange Flame Petal */}
        <path
          d="M48 2C48 2 24 22 15 46C6 70 17 92 38 98C49 101 62 98 71 91C55 93 42 85 36 73C30 61 34 45 44 32C49 25 49 12 48 2Z"
          fill={orangeFill}
        />
        {/* Inner Mint Water Drop */}
        <path
          d="M52 30C52 30 76 56 76 74C76 86 66 96 53 96C40 96 32 86 32 74C32 58 52 30 52 30Z"
          fill={mintFill}
        />
        {/* Delicate Base Swoosh Curve */}
        <path
          d="M72 88C78 82 82 72 81 61C80 57 78 54 78 54C78 54 81 60 82 66C83 75 79 84 72 90C67 94 60 97 52 98C45 99 37 97 32 94C37 98 47 101 56 100C65 99 71 94 72 88Z"
          fill={orangeFill}
          opacity="0.85"
        />
      </svg>

      {/* Typography: Jonny Eagle + PLUMBING & HEATING */}
      <div className="flex flex-col justify-center leading-none">
        <span
          className={`${currentSize.titleSize} font-extrabold tracking-tight font-serif italic`}
          style={{
            fontFamily: "'Playfair Display', 'Georgia', serif",
            color: variant === 'dark' ? '#FFFFFF' : orangeFill,
            letterSpacing: '-0.02em',
            lineHeight: 1.05
          }}
        >
          Jonny Eagle
        </span>
        {showTagline && (
          <span
            className={`${currentSize.subSize} font-bold uppercase tracking-[0.2em] mt-1`}
            style={{
              color: variant === 'dark' ? '#70CDA5' : mintFill,
              fontFamily: "'Outfit', sans-serif"
            }}
          >
            PLUMBING & HEATING
          </span>
        )}
      </div>
    </div>
  );
};
