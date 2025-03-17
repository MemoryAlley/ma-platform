'use client'
import { Box } from "@mantine/core";
import { useEffect, useState } from "react";
import "./ghost.css"
import { usePathname } from "next/navigation";
import { Monument } from "@/types/monument";
import { monuments } from "@/data/monuments";
import Image from "next/image";

export function GhostComponent() {
  const pathname = usePathname()
  const [ghostPosition, setGhostPosition] = useState({ x: 400, y: 300 });
  const [, setActiveMonument] = useState<Monument | null>(null);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      e.preventDefault()
      e.stopPropagation()
      const speed = 20;
      const newPosition = { ...ghostPosition };

      switch (e.key) {
        case 'ArrowUp':
          newPosition.y = Math.max(0, ghostPosition.y - speed);
          break;
        case 'ArrowDown':
          newPosition.y = Math.min(Infinity, ghostPosition.y + speed);
          break;
        case 'ArrowLeft':
          newPosition.x = Math.max(0, ghostPosition.x - speed);
          break;
        case 'ArrowRight':
          newPosition.x = Math.min(Infinity, ghostPosition.x + speed);
          break;
      }

      setGhostPosition(newPosition);

      // Check for monument collision
      const nearbyMonument = monuments.find(monument => {
        const distance = Math.sqrt(
          Math.pow(newPosition.x - monument.position.x, 2) +
          Math.pow(newPosition.y - monument.position.y, 2)
        );
        return distance < 25;
      });

      setActiveMonument(nearbyMonument || null);
    };
    if (pathname === '/cimetery') {
      window.addEventListener('keydown', handleKeyPress);
    }
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [ghostPosition, pathname]);

  if (pathname !== '/cimetery') {
    return null
  }
  return <Box
        component="div"
        className="ghost-container"
        style={{
          position: "absolute", 
          transition: 'all .5s',
          zIndex: 999999999999999,
          left: ghostPosition.x,
          top: ghostPosition.y,
          transform: 'translate(-50%, -50%)'
        }}
        ref={(el) => {
          if (el) {
            el.scrollIntoView({
              behavior: 'smooth',
              block: 'center',
              inline: 'center'
            });
          }
        }}
      >
        <div className="ghost-glow"></div>
        <Image src="/assets/ghost.svg" width={100} height={100} alt="ghost" className="ghost-icon" />
      </Box>
}