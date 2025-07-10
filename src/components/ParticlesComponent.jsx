import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState, useContext } from "react";
import { loadAll } from "@tsparticles/all";
import { ThemeContext } from "../context/ThemeContext";

const ParticlesComponent = ({ id = "tsparticles" }) => {
  const [init, setInit] = useState(false);
  const { darkMode } = useContext(ThemeContext); // ✅ Get current theme

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      console.log("🔧 Loading all tsparticles features...");
      await loadAll(engine);
      console.log("✅ All features loaded");
    }).then(() => setInit(true));
  }, []);

  const options = useMemo(() => ({
    background: {
      color: {
        value: darkMode ? "#0f172a" : "#ffffff", // ✅ Dark or light background
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "bubble",
        },
      },
      modes: {
        push: {
          quantity: 4,
        },
        bubble: {
          distance: 200,
          size: 8,
          duration: 2,
          opacity: 1,
        },
      },
    },
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          area: 800,
        },
      },
      color: {
        value: darkMode ? "#ffffff" : "#0f172a", // ✅ Contrast particles
      },
      shape: {
        type: ["circle", "square", "triangle", "star"],
      },
      opacity: {
        value: 0.8,
        random: true,
      },
      size: {
        value: { min: 1, max: 5 },
      },
      links: {
        enable: true,
        color: darkMode ? "#ffffff" : "#0f172a", // ✅ Matching link color
        distance: 150,
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1.5,
        outModes: {
          default: "bounce",
        },
      },
    },
    detectRetina: true,
  }), [darkMode]);

  return <Particles id={id} options={options} />;
};

export default ParticlesComponent;
