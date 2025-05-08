'use client'
import { Box } from "@mantine/core";
import { useEffect, useState } from "react";
import "./ghost.css"
import { usePathname } from "next/navigation";
// import { Monument } from "@/types/monument";
// import { monuments } from "@/data/monuments";
import Image from "next/image";

export function GhostComponent() {
  const pathname = usePathname()
  const [ghostPosition, setGhostPosition] = useState({ x: 400, y: 300 });
  // const [, setActiveMonument] = useState<Monument | null>(null);

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

      const graves = document.querySelectorAll<HTMLElement>('.grave');

      const scrollX = window.scrollX || window.pageXOffset;
      const scrollY = window.scrollY || window.pageYOffset;
      
      const ghostViewportX = newPosition.x - scrollX;
      const ghostViewportY = newPosition.y - scrollY;
      
      const ghostRect = {
        left: ghostViewportX,
        top: ghostViewportY,
        width: 50,
        height: 50
      };
      

      graves.forEach((grave) => {
        const rect = grave.getBoundingClientRect();

        // Collision detection
        const graveId = grave?.id?.split("-")[1] || ""

        const element = document.getElementById(`monument${graveId}`);

        if (
          ghostRect.left >= rect.left &&
          ghostRect.left < rect.right &&
          ghostRect.top >= rect.top &&
          ghostRect.top < rect.bottom
        ) {
          // Collision detected
          // console.log(`Ghost touched grave with id: ${grave.id}`);
          if (element) {
            element.style.display = "block"

          }
        }
        else {
          if (element) {
            element.style.display = "none"
          }


        }
      });
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