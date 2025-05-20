import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const BackgroundNetwork = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 h-full w-full z-0"
      init={particlesInit}
      options={{
        fullScreen: { enable: false }, // Muy importante: evita tomar control del body
        background: {
          color: {
            value: "#000000", // negro de fondo
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 1,
              },
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
            outModes: {
              default: "bounce",
            },
          },
          number: {
            value: 70,
            density: {
              enable: true,
              area: 800,
            },
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: ["circle", "triangle"],
          },
          size: {
            value: { min: 1.5, max: 4 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default BackgroundNetwork;
