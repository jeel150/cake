import React, { useEffect, useState } from 'react';
import { useTheme } from './ThemeContext';

const NavbarAnimations = () => {
  const { theme } = useTheme();
  const [santas, setSantas] = useState([]);
  const [snowflakes, setSnowflakes] = useState([]);
  const [firecrackers, setFirecrackers] = useState([]);

  // Christmas animations
  useEffect(() => {
    if (theme?.name.toLowerCase() === 'christmas') {
      // Create multiple Santas
      const santaInterval = setInterval(() => {
        setSantas(prev => [...prev, { id: Date.now(), top: Math.random() * 10 }]);
      }, 8000);

      // Create snowflakes
      const snowflakeInterval = setInterval(() => {
        setSnowflakes(prev => [...prev, { 
          id: Date.now(), 
          left: Math.random() * 100,
          delay: Math.random() * 5,
          size: Math.random() * 5 + 3
        }]);
      }, 300);

      return () => {
        clearInterval(santaInterval);
        clearInterval(snowflakeInterval);
      };
    } else {
      setSantas([]);
      setSnowflakes([]);
    }
  }, [theme]);

  // Diwali animations
  useEffect(() => {
    if (theme?.name.toLowerCase() === 'diwali') {
      const firecrackerInterval = setInterval(() => {
        setFirecrackers(prev => [...prev, { 
          id: Date.now(), 
          left: Math.random() * 100,
          color: `hsl(${Math.random() * 60}, 100%, 50%)`
        }]);
      }, 200);

      return () => {
        clearInterval(firecrackerInterval);
      };
    } else {
      setFirecrackers([]);
    }
  }, [theme]);

  // Remove animations after they complete
  useEffect(() => {
    const santaTimer = setTimeout(() => {
      setSantas(prev => prev.filter(santa => Date.now() - santa.id < 16000));
    }, 16000);

    const snowflakeTimer = setTimeout(() => {
      setSnowflakes(prev => prev.filter(flake => Date.now() - flake.id < 6000));
    }, 6000);

    const firecrackerTimer = setTimeout(() => {
      setFirecrackers(prev => prev.filter(cracker => Date.now() - cracker.id < 1200));
    }, 1200);

    return () => {
      clearTimeout(santaTimer);
      clearTimeout(snowflakeTimer);
      clearTimeout(firecrackerTimer);
    };
  }, [santas, snowflakes, firecrackers]);

  if (!theme) return null;

  return (
    <>
      {/* Christmas animations */}
      {theme.name.toLowerCase() === 'christmas' && (
        <>
          {santas.map(santa => (
            <div
              key={santa.id}
              className="santa-claus"
              style={{ top: `${santa.top}px` }}
            />
          ))}
          {snowflakes.map(flake => (
            <div
              key={flake.id}
              className="snowflake"
              style={{
                left: `${flake.left}%`,
                top: '-10px',
                width: `${flake.size}px`,
                height: `${flake.size}px`,
                animationDelay: `${flake.delay}s`
              }}
            />
          ))}
        </>
      )}

      {/* Diwali animations */}
      {theme.name.toLowerCase() === 'diwali' && (
        <>
          {firecrackers.map(cracker => (
            <div
              key={cracker.id}
              className="firecracker"
              style={{
                left: `${cracker.left}%`,
                top: '100%',
                backgroundColor: cracker.color
              }}
            />
          ))}
        </>
      )}
    </>
  );
};

export default NavbarAnimations;