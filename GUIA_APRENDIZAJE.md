# 📚 Guía de Aprendizaje - Mi Portfolio React

## Índice

1. [Introducción](#introducción)
2. [React Hooks Básicos](#react-hooks-básicos)
3. [Context API](#context-api)
4. [Custom Hooks](#custom-hooks)
5. [Intersection Observer](#intersection-observer)
6. [LocalStorage](#localstorage)
7. [Animaciones con Tailwind CSS](#animaciones-con-tailwind-css)
8. [Navegación Suave](#navegación-suave)
9. [Componentes Reutilizables](#componentes-reutilizables)
10. [Internacionalización (i18n)](#internacionalización)
11. [EmailJS](#emailjs)
12. [Responsive Design](#responsive-design)

---

## Introducción

Este portfolio fue desarrollado con **React**, **Vite** y **Tailwind CSS**. Implementa varias funcionalidades modernas de desarrollo web. Aquí aprenderás cómo funciona cada una de manera simple.

### Tecnologías Utilizadas

- **React 18**: Biblioteca para interfaces de usuario
- **Vite**: Herramienta de construcción rápida
- **Tailwind CSS**: Framework CSS utility-first
- **Lucide React**: Iconos modernos
- **EmailJS**: Envío de emails sin backend
- **SweetAlert2**: Alertas bonitas

---

## React Hooks Básicos

### ¿Qué son los Hooks?

Los Hooks son funciones especiales de React que te permiten usar estado y otras características sin escribir clases.

### 1. useState - Manejo de Estado

**¿Qué hace?** Permite agregar estado a componentes funcionales.

```jsx
import { useState } from "react";

function Contador() {
  // [valorActual, funciónParaCambiarlo]
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Has clickeado {count} veces</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
}
```

**Ejemplo del Portfolio:**

```jsx
// En Navbar.jsx - Control del menú móvil
const [isMenuOpen, setIsMenuOpen] = useState(false);

// Para abrir/cerrar el menú
const toggleMenu = () => {
  setIsMenuOpen(!isMenuOpen); // Cambia entre true y false
};
```

### 2. useEffect - Efectos Secundarios

**¿Qué hace?** Ejecuta código cuando el componente se monta, actualiza o desmonta.

```jsx
import { useState, useEffect } from "react";

function EjemploEffect() {
  const [data, setData] = useState(null);

  // Se ejecuta cuando el componente se monta
  useEffect(() => {
    console.log("Componente montado!");

    // Función de limpieza (se ejecuta al desmontar)
    return () => {
      console.log("Componente desmontado!");
    };
  }, []); // Array vacío = solo se ejecuta al montar

  return <div>Componente con efecto</div>;
}
```

**Ejemplo del Portfolio:**

```jsx
// En Navbar.jsx - Detectar scroll
const [isScrolled, setIsScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 20);
  };

  // Agregar listener cuando se monta
  window.addEventListener("scroll", handleScroll);

  // Limpiar listener cuando se desmonta
  return () => window.removeEventListener("scroll", handleScroll);
}, []); // Solo se ejecuta una vez
```

### 3. useRef - Referencias

**¿Qué hace?** Crea una referencia que persiste entre renderizados y puede acceder a elementos DOM.

```jsx
import { useRef } from "react";

function EjemploRef() {
  const inputRef = useRef(null);

  const focusInput = () => {
    // Acceder al elemento DOM directamente
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
```

**Ejemplo del Portfolio:**

```jsx
// En useInView.jsx - Para observar elementos
const ref = useRef(null);

// Luego usamos ref.current para acceder al elemento
if (ref.current) {
  observer.observe(ref.current);
}
```

---

## Context API

### ¿Qué es Context API?

Es una forma de compartir datos entre componentes sin tener que pasar props manualmente en cada nivel.

### Problema que Resuelve

**Sin Context (Prop Drilling):**

```jsx
// Pasando props por muchos niveles
<App theme={theme}>
  <Header theme={theme}>
    <Navbar theme={theme}>
      <Button theme={theme} /> {/* ¡Por fin llegó! */}
    </Navbar>
  </Header>
</App>
```

**Con Context:**

```jsx
// Cualquier componente puede acceder directamente
<ThemeProvider>
  <App>
    <Header>
      <Navbar>
        <Button /> {/* Usa useTheme() directamente */}
      </Navbar>
    </Header>
  </App>
</ThemeProvider>
```

### Implementación Paso a Paso

**1. Crear el Context:**

```jsx
import { createContext } from "react";

// Crear el contexto
const ThemeContext = createContext();
```

**2. Crear el Provider:**

```jsx
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // El value es lo que compartimos
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
```

**3. Crear el Hook Personalizado:**

```jsx
export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme debe usarse dentro de ThemeProvider");
  }

  return context;
};
```

**4. Usar en Componentes:**

```jsx
function MiComponente() {
  const { theme, toggleTheme } = useTheme();

  return <button onClick={toggleTheme}>Tema actual: {theme}</button>;
}
```

### Ejemplo Real: Dark Mode Context

```jsx
// context/DarkModeContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

const DarkModeContext = createContext();

// Hook para usar el contexto fácilmente
export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return context;
};

export const DarkModeProvider = ({ children }) => {
  // Estado: leer de localStorage
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved === "true";
  });

  // Efecto: guardar en localStorage y actualizar HTML
  useEffect(() => {
    localStorage.setItem("darkMode", isDarkMode.toString());

    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  // Función para cambiar modo
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Compartir estos valores con todos los componentes
  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
```

**Uso en Navbar:**

```jsx
import { useDarkMode } from "../context/DarkModeContext";

export const Navbar = () => {
  // Acceder al contexto
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button onClick={toggleDarkMode}>{isDarkMode ? <Sun /> : <Moon />}</button>
  );
};
```

### Ejemplo Real: Language Context

```jsx
// context/LanguageContext.jsx
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "en";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "es" : "en"));
  };

  const value = {
    language,
    setLanguage,
    toggleLanguage,
    isEnglish: language === "en",
    isSpanish: language === "es",
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
```

---

## Custom Hooks

### ¿Qué son los Custom Hooks?

Son funciones que reutilizan lógica entre componentes. Siempre empiezan con "use".

### Ejemplo: useInView Hook

**Problema:** Queremos detectar cuando un elemento es visible en pantalla para animarlo.

**Solución:**

```jsx
// hooks/useInView.jsx
import { useState, useEffect, useRef } from "react";

export const useInView = (options = {}) => {
  // Estado para saber si es visible
  const [isVisible, setIsVisible] = useState(false);

  // Referencia al elemento
  const ref = useRef(null);

  useEffect(() => {
    // Crear observador
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Actualizar visibilidad
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1, // 10% visible
        ...options,
      },
    );

    const currentRef = ref.current;

    // Empezar a observar
    if (currentRef) {
      observer.observe(currentRef);
    }

    // Limpiar al desmontar
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  // Retornar referencia y estado
  return [ref, isVisible];
};
```

**Uso:**

```jsx
function MiComponente() {
  // Usar el custom hook
  const [ref, isVisible] = useInView();

  return (
    <div ref={ref} className={isVisible ? "opacity-100" : "opacity-0"}>
      ¡Me animo cuando soy visible!
    </div>
  );
}
```

**En el Portfolio:**

```jsx
// App.jsx
const AnimatedSection = ({ children, id }) => {
  const [ref, isVisible] = useInView();

  return (
    <section
      id={id}
      ref={ref}
      className={`transition-all duration-1000 
        ${isVisible ? "opacity-100" : "opacity-0"}
      `}
    >
      {children}
    </section>
  );
};
```

---

## Intersection Observer

### ¿Qué es?

API del navegador que observa cuando un elemento entra o sale del viewport (parte visible de la pantalla).

### Conceptos Básicos

```jsx
// 1. Crear el observador
const observer = new IntersectionObserver(
  // Callback: se ejecuta cuando cambia la visibilidad
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log("¡Elemento visible!");
      } else {
        console.log("Elemento no visible");
      }
    });
  },
  // Opciones
  {
    threshold: 0.5, // 50% visible para activar
    rootMargin: "0px", // Margen extra
  },
);

// 2. Observar un elemento
const elemento = document.querySelector("#mi-elemento");
observer.observe(elemento);

// 3. Dejar de observar
observer.unobserve(elemento);
```

### Propiedades Importantes

```jsx
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // ¿Está intersectando?
    console.log(entry.isIntersecting); // true/false

    // ¿Qué porcentaje es visible?
    console.log(entry.intersectionRatio); // 0 a 1

    // El elemento observado
    console.log(entry.target);

    // Coordenadas del elemento
    console.log(entry.boundingClientRect);
  });
});
```

### Uso Práctico: Animaciones al Scroll

```jsx
function AnimatedElement() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Cuando el elemento es 10% visible
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Opcional: dejar de observar después de animar
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 
        ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
    >
      ¡Me animo cuando aparezco!
    </div>
  );
}
```

---

## LocalStorage

### ¿Qué es?

API del navegador para guardar datos persistentes en el navegador del usuario.

### Operaciones Básicas

```jsx
// 1. GUARDAR datos
localStorage.setItem("clave", "valor");
localStorage.setItem("nombre", "Mario");
localStorage.setItem("edad", "25");

// 2. OBTENER datos
const nombre = localStorage.getItem("nombre"); // 'Mario'
const edad = localStorage.getItem("edad"); // '25'

// 3. ELIMINAR un dato
localStorage.removeItem("nombre");

// 4. ELIMINAR todo
localStorage.clear();

// 5. VERIFICAR si existe
if (localStorage.getItem("nombre")) {
  console.log("El nombre existe");
}
```

### Guardar Objetos JSON

```jsx
// LocalStorage solo guarda strings
// Para objetos, usar JSON

// Guardar objeto
const usuario = { nombre: "Mario", edad: 25 };
localStorage.setItem("usuario", JSON.stringify(usuario));

// Obtener objeto
const usuarioGuardado = JSON.parse(localStorage.getItem("usuario"));
console.log(usuarioGuardado.nombre); // 'Mario'
```

### Ejemplo: Persistir Dark Mode

```jsx
function useDarkMode() {
  const [isDark, setIsDark] = useState(() => {
    // Leer al iniciar
    const saved = localStorage.getItem("darkMode");
    return saved === "true"; // Convertir string a boolean
  });

  useEffect(() => {
    // Guardar cada vez que cambia
    localStorage.setItem("darkMode", isDark.toString());
  }, [isDark]);

  return [isDark, setIsDark];
}
```

### Ejemplo: Persistir Idioma

```jsx
function useLanguage() {
  const [language, setLanguage] = useState(() => {
    // Leer de localStorage o usar 'en' por defecto
    return localStorage.getItem("language") || "en";
  });

  useEffect(() => {
    // Guardar cuando cambia
    localStorage.setItem("language", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "es" : "en"));
  };

  return { language, toggleLanguage };
}
```

### Manejo de Errores

```jsx
function guardarEnLocalStorage(clave, valor) {
  try {
    localStorage.setItem(clave, valor);
  } catch (error) {
    // LocalStorage puede estar lleno o bloqueado
    console.error("Error al guardar:", error);
  }
}

function leerDeLocalStorage(clave, valorPorDefecto) {
  try {
    const valor = localStorage.getItem(clave);
    return valor !== null ? valor : valorPorDefecto;
  } catch (error) {
    console.error("Error al leer:", error);
    return valorPorDefecto;
  }
}
```

---

## Animaciones con Tailwind CSS

### Clases de Transición

```jsx
// transition-all: Anima todas las propiedades
// duration-300: Duración de 300ms
<div className="transition-all duration-300 hover:scale-110">
  Hover para agrandar
</div>

// transition-opacity: Solo anima opacidad
<div className="transition-opacity duration-500 hover:opacity-50">
  Hover para transparentar
</div>

// transition-colors: Solo anima colores
<div className="transition-colors duration-200 hover:bg-blue-500">
  Hover para cambiar color
</div>
```

### Transform (Transformaciones)

```jsx
// Escalar
<button className="hover:scale-110">Agrandar</button>
<button className="hover:scale-90">Achicar</button>

// Rotar
<div className="hover:rotate-45">Rotar 45°</div>
<div className="hover:rotate-180">Rotar 180°</div>

// Trasladar (mover)
<div className="hover:translate-x-4">Mover derecha</div>
<div className="hover:translate-y-4">Mover abajo</div>
<div className="hover:-translate-x-4">Mover izquierda</div>

// Combinar transformaciones
<div className="hover:scale-110 hover:rotate-12">
  Agrandar y rotar
</div>
```

### Opacidad

```jsx
// opacity-0: Invisible
// opacity-100: Visible

<div className="opacity-0 hover:opacity-100 transition-opacity">
  Aparece al hover
</div>

// Animación de entrada
<div className={isVisible ? 'opacity-100' : 'opacity-0'}>
  Aparece condicionalmente
</div>
```

### Ejemplo: Animación de Entrada

```jsx
function AnimatedCard() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`
      transition-all duration-1000
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
    `}
    >
      ¡Card animada!
    </div>
  );
}
```

### Ejemplo del Portfolio: AnimatedSection

```jsx
const AnimatedSection = ({ children, direction = 'up' }) => {
  const [ref, isVisible] = useInView();

  // Función para determinar la dirección de animación
  const getTransformClass = () => {
    switch (direction) {
      case 'left':
        return isVisible ? 'translate-x-0' : '-translate-x-10';
      case 'right':
        return isVisible ? 'translate-x-0' : 'translate-x-10';
      case 'up':
      default:
        return isVisible ? 'translate-y-0' : 'translate-y-10';
    }
  };

  return (
    <section
      ref={ref}
      className={`
        transition-all duration-1000 transform
        ${isVisible ? 'opacity-100' : 'opacity-0'}
        ${getTransformClass()}
      `}
    >
      {children}
    </section>
  );
};

// Uso:
<AnimatedSection direction="left">
  <Skills />
</AnimatedSection>

<AnimatedSection direction="right">
  <Projects />
</AnimatedSection>
```

### Animaciones de Navbar al Scroll

```jsx
<nav
  className={`
  fixed top-0 w-full transition-all duration-300
  ${
    isScrolled ? "bg-white/80 backdrop-blur-lg shadow-lg" : "bg-white shadow-sm"
  }
`}
>
  {/* Contenido del navbar */}
</nav>
```

### Efectos de Hover

```jsx
// Botón con múltiples efectos
<button className="
  bg-blue-600 text-white px-6 py-3 rounded-lg
  transition-all duration-300
  hover:bg-blue-700
  hover:scale-105
  hover:shadow-xl
  active:scale-95
">
  Click Me
</button>

// Card con efecto
<div className="
  p-6 rounded-lg bg-white
  transition-all duration-300
  hover:shadow-2xl
  hover:-translate-y-2
">
  Hover para elevar
</div>
```

---

## Navegación Suave

### Smooth Scroll Básico

```jsx
// Opción 1: CSS
html {
  scroll-behavior: smooth;
}

// Opción 2: JavaScript
window.scrollTo({
  top: 0,
  behavior: 'smooth'
});

// Opción 3: Scroll a un elemento
document.querySelector('#seccion').scrollIntoView({
  behavior: 'smooth',
  block: 'start' // o 'center', 'end'
});
```

### Implementación en React

```jsx
// App.jsx
useEffect(() => {
  const handleScrollClick = (e) => {
    // Obtener el href del link
    const href = e.target.getAttribute("href");

    // Si es un ancla (#algo)
    if (href?.startsWith("#")) {
      e.preventDefault(); // Prevenir comportamiento por defecto

      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  // Agregar listeners a todos los links con #
  const anchors = document.querySelectorAll('a[href^="#"]');
  anchors.forEach((anchor) => {
    anchor.addEventListener("click", handleScrollClick);
  });

  // Limpiar al desmontar
  return () => {
    anchors.forEach((anchor) => {
      anchor.removeEventListener("click", handleScrollClick);
    });
  };
}, []);
```

### Ajustar Offset (para Navbar Fijo)

```jsx
// Problema: El navbar tapa el contenido al hacer scroll
// Solución: usar scroll-margin en Tailwind

<section
  id="skills"
  className="scroll-mt-20" // Margen superior de scroll
>
  {/* Contenido */}
</section>

// scroll-mt-20 = 80px (20 * 4px)
// scroll-mt-[72px] = 72px exactos
```

### Componente BackToTop

```jsx
export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Mostrar botón después de scroll
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Función para ir arriba
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-6 right-6 z-50
        transition-all duration-300
        ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }
      `}
    >
      ↑
    </button>
  );
};
```

### Detectar Scroll

```jsx
function DetectarScroll() {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <p>Scroll Y: {scrollY}px</p>
      <p>{isScrolled ? "Scrolleado" : "En el top"}</p>
    </div>
  );
}
```

---

## Componentes Reutilizables

### Principio de Componentes

```jsx
// ❌ MAL: Código repetido
function Pagina() {
  return (
    <div>
      <button className="bg-blue-600 px-4 py-2">Botón 1</button>
      <button className="bg-blue-600 px-4 py-2">Botón 2</button>
      <button className="bg-blue-600 px-4 py-2">Botón 3</button>
    </div>
  );
}

// ✅ BIEN: Componente reutilizable
function Button({ children, onClick }) {
  return (
    <button className="bg-blue-600 px-4 py-2" onClick={onClick}>
      {children}
    </button>
  );
}

function Pagina() {
  return (
    <div>
      <Button>Botón 1</Button>
      <Button>Botón 2</Button>
      <Button>Botón 3</Button>
    </div>
  );
}
```

### Props (Propiedades)

```jsx
// Props básicas
function Saludo({ nombre, edad }) {
  return <p>Hola {nombre}, tienes {edad} años</p>;
}

// Uso
<Saludo nombre="Mario" edad={25} />

// Props con valores por defecto
function Button({ text = "Click", color = "blue" }) {
  return (
    <button className={`bg-${color}-600`}>
      {text}
    </button>
  );
}

// Uso
<Button /> // Muestra "Click" en azul
<Button text="Enviar" color="green" />
```

### Children (Contenido Hijo)

```jsx
// children es un prop especial para contenido anidado
function Card({ children, title }) {
  return (
    <div className="border rounded-lg p-4">
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  );
}

// Uso
<Card title="Mi Card">
  <p>Este es el contenido</p>
  <button>Click</button>
</Card>;
```

### Ejemplo del Portfolio: AnimatedSection

```jsx
// Componente reutilizable para animar secciones
const AnimatedSection = ({ children, id, direction = "up" }) => {
  const [ref, isVisible] = useInView();

  const getTransformClass = () => {
    switch (direction) {
      case "left":
        return isVisible ? "translate-x-0" : "-translate-x-10";
      case "right":
        return isVisible ? "translate-x-0" : "translate-x-10";
      case "up":
      default:
        return isVisible ? "translate-y-0" : "translate-y-10";
    }
  };

  return (
    <section
      id={id}
      ref={ref}
      className={`
        transition-all duration-1000 transform
        ${isVisible ? "opacity-100" : "opacity-0"}
        ${getTransformClass()}
        scroll-mt-20
      `}
    >
      {children}
    </section>
  );
};

// Uso: Reutilizar para múltiples secciones
function App() {
  return (
    <>
      <AnimatedSection id="skills" direction="left">
        <Skills />
      </AnimatedSection>

      <AnimatedSection id="projects" direction="right">
        <Projects />
      </AnimatedSection>

      <AnimatedSection id="contact" direction="up">
        <Contact />
      </AnimatedSection>
    </>
  );
}
```

### Patrón de Renderizado Condicional

```jsx
function Card({ isVisible, title, content }) {
  // No renderizar nada si no es visible
  if (!isVisible) return null;

  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}

// Uso con operador ternario
function App() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show ? <Card title="Visible" /> : null}
      {/* O más corto con && */}
      {show && <Card title="Visible" />}
    </div>
  );
}
```

### Props para Estilos Dinámicos

```jsx
function Button({ variant = 'primary', size = 'md', children }) {
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700',
    secondary: 'bg-gray-600 hover:bg-gray-700',
    danger: 'bg-red-600 hover:bg-red-700',
  };

  const sizes = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button className={`
      ${variants[variant]}
      ${sizes[size]}
      text-white rounded transition-colors
    `}>
      {children}
    </button>
  );
}

// Uso
<Button variant="primary" size="lg">Grande Azul</Button>
<Button variant="danger" size="sm">Pequeño Rojo</Button>
```

---

## Internacionalización

### ¿Qué es i18n?

Internacionalización (i18n = internationalization = 18 letras entre i y n) es el proceso de preparar una aplicación para múltiples idiomas.

### Estructura de Traducciones

```jsx
// translations.js
export const translations = {
  en: {
    welcome: "Welcome",
    goodbye: "Goodbye",
    greeting: "Hello, {{name}}!", // Con variable
  },
  es: {
    welcome: "Bienvenido",
    goodbye: "Adiós",
    greeting: "¡Hola, {{name}}!",
  },
};
```

### Sistema Simple de Traducciones

```jsx
// 1. Archivo de traducciones
export const translations = {
  en: {
    navbar: {
      home: "Home",
      about: "About",
      contact: "Contact",
    },
    buttons: {
      submit: "Submit",
      cancel: "Cancel",
    },
  },
  es: {
    navbar: {
      home: "Inicio",
      about: "Acerca de",
      contact: "Contacto",
    },
    buttons: {
      submit: "Enviar",
      cancel: "Cancelar",
    },
  },
};

// 2. Context para el idioma
import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "es" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// 3. Uso en componentes
function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language].navbar;

  return (
    <nav>
      <a href="#home">{t.home}</a>
      <a href="#about">{t.about}</a>
      <a href="#contact">{t.contact}</a>
      <button onClick={toggleLanguage}>
        {language === "en" ? "ES" : "EN"}
      </button>
    </nav>
  );
}
```

### Ejemplo del Portfolio

```jsx
// translations.js (simplificado)
export const translations = {
  en: {
    navbar: {
      home: "Home",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    main: {
      greeting: "👋 Hi, I'm",
      name: "Mario Esteban Mateo",
      getInTouch: "Get In Touch",
    },
    skills: {
      title: "My Skills",
      subtitle: "Technologies & Tools",
    },
  },
  es: {
    navbar: {
      home: "Inicio",
      skills: "Habilidades",
      projects: "Proyectos",
      contact: "Contacto",
    },
    main: {
      greeting: "👋 Hola, soy",
      name: "Mario Esteban Mateo",
      getInTouch: "Contactar",
    },
    skills: {
      title: "Mis Habilidades",
      subtitle: "Tecnologías y Herramientas",
    },
  },
};

// Uso en Navbar.jsx
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

export const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language].navbar; // Obtener traducciones

  return (
    <nav>
      <a href="#home">{t.home}</a>
      <a href="#skills">{t.skills}</a>
      <a href="#projects">{t.projects}</a>
      <a href="#contact">{t.contact}</a>

      <button onClick={toggleLanguage}>
        {language === "en" ? "🇪🇸 ES" : "🇬🇧 EN"}
      </button>
    </nav>
  );
};

// Uso en Main.jsx
export const Main = () => {
  const { language } = useLanguage();
  const t = translations[language].main;

  return (
    <div>
      <h2>{t.greeting}</h2>
      <h1>{t.name}</h1>
      <button>{t.getInTouch}</button>
    </div>
  );
};
```

### Persistir Idioma con LocalStorage

```jsx
export const LanguageProvider = ({ children }) => {
  // Leer idioma guardado o usar 'en' por defecto
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "en";
  });

  // Guardar cada vez que cambia
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "es" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
```

### Helper para Traducciones Complejas

```jsx
// Para textos con variables
function formatTranslation(text, vars) {
  return text.replace(/{{(\w+)}}/g, (_, key) => vars[key] || "");
}

// Ejemplo
const t = {
  welcome: "Welcome, {{name}}! You have {{count}} messages.",
};

const result = formatTranslation(t.welcome, {
  name: "Mario",
  count: 5,
});
// Resultado: "Welcome, Mario! You have 5 messages."
```

---

## EmailJS

### ¿Qué es EmailJS?

Servicio que permite enviar emails desde el frontend sin necesidad de un backend.

### Configuración Inicial

```bash
# 1. Instalar
npm install @emailjs/browser

# 2. Registrarse en emailjs.com
# 3. Crear un servicio de email
# 4. Crear una plantilla de email
# 5. Obtener las credenciales:
#    - Service ID
#    - Template ID
#    - Public Key
```

### Uso Básico

```jsx
import emailjs from "@emailjs/browser";

function ContactForm() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // ID del servicio
        "YOUR_TEMPLATE_ID", // ID de la plantilla
        e.target, // El formulario
        "YOUR_PUBLIC_KEY", // Tu clave pública
      )
      .then((result) => {
        console.log("Email enviado!", result.text);
        alert("Mensaje enviado correctamente!");
      })
      .catch((error) => {
        console.log("Error:", error.text);
        alert("Error al enviar el mensaje");
      });
  };

  return (
    <form onSubmit={sendEmail}>
      <input type="text" name="user_name" placeholder="Nombre" />
      <input type="email" name="user_email" placeholder="Email" />
      <textarea name="message" placeholder="Mensaje" />
      <button type="submit">Enviar</button>
    </form>
  );
}
```

### Ejemplo con Estados

```jsx
import { useState } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("");

    // Parámetros del template
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: "Mario",
    };

    emailjs
      .send("service_id", "template_id", templateParams, "public_key")
      .then(() => {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setStatus("error");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Nombre"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Mensaje"
        required
      />

      <button type="submit" disabled={isLoading}>
        {isLoading ? "Enviando..." : "Enviar"}
      </button>

      {status === "success" && <p>¡Mensaje enviado!</p>}
      {status === "error" && <p>Error al enviar</p>}
    </form>
  );
}
```

### Integración con SweetAlert2

```jsx
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    // Mostrar loading
    Swal.fire({
      title: "Enviando...",
      didOpen: () => {
        Swal.showLoading();
      },
    });

    // Enviar email
    await emailjs.send("service_id", "template_id", formData, "public_key");

    // Éxito
    Swal.fire({
      icon: "success",
      title: "¡Enviado!",
      text: "Tu mensaje fue enviado correctamente",
      confirmButtonText: "OK",
    });

    // Limpiar formulario
    setFormData({ name: "", email: "", message: "" });
  } catch (error) {
    // Error
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Hubo un problema al enviar el mensaje",
      confirmButtonText: "Reintentar",
    });
  }
};
```

### Variables de Entorno

```javascript
// .env
VITE_EMAILJS_SERVICE_ID = service_xxx;
VITE_EMAILJS_TEMPLATE_ID = template_xxx;
VITE_EMAILJS_PUBLIC_KEY = public_xxx;

// En el código
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

emailjs.send(serviceId, templateId, formData, publicKey);
```

### Plantilla de Email en EmailJS

```
Nuevo mensaje desde el portfolio

De: {{from_name}}
Email: {{from_email}}

Mensaje:
{{message}}

---
Este email fue enviado desde tu portfolio
```

---

## Responsive Design

### Mobile-First Approach

```jsx
// Tailwind usa mobile-first
// Sin prefijo = móvil
// sm: = tablets (640px+)
// md: = desktop pequeño (768px+)
// lg: = desktop (1024px+)
// xl: = desktop grande (1280px+)

<div
  className="
  w-full        {/* Móvil: 100% ancho */}
  sm:w-1/2      {/* Tablet: 50% ancho */}
  lg:w-1/3      {/* Desktop: 33.33% ancho */}
"
>
  Contenido
</div>
```

### Ejemplos de Breakpoints

```jsx
// Texto responsive
<h1 className="
  text-2xl      {/* Móvil: 24px */}
  md:text-4xl   {/* Desktop: 36px */}
  lg:text-5xl   {/* Desktop grande: 48px */}
">
  Título
</h1>

// Padding responsive
<div className="
  px-4          {/* Móvil: 16px horizontal */}
  sm:px-6       {/* Tablet: 24px */}
  lg:px-8       {/* Desktop: 32px */}
">
  Contenido
</div>

// Grid responsive
<div className="
  grid
  grid-cols-1     {/* Móvil: 1 columna */}
  md:grid-cols-2  {/* Tablet: 2 columnas */}
  lg:grid-cols-3  {/* Desktop: 3 columnas */}
  gap-4
">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

### Menú Responsive

```jsx
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav>
      {/* Logo (siempre visible) */}
      <div className="flex justify-between items-center">
        <h1>Logo</h1>

        {/* Botón hamburguesa (solo móvil) */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden"  {/* Ocultar en desktop */}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Links de navegación */}
      <div className={`
        ${isMenuOpen ? 'block' : 'hidden'}  {/* Toggle móvil */}
        lg:flex   {/* Siempre flex en desktop */}
        lg:items-center
      `}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
```

### Ejemplo del Portfolio: Navbar

```jsx
export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Desktop Navigation (oculto en móvil) */}
        <div className="hidden lg:flex items-center gap-8">
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
        </div>

        {/* Mobile Menu Button (oculto en desktop) */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Navigation (solo visible cuando está abierto) */}
        <div
          className={`
          ${isMenuOpen ? "block" : "hidden"}
          lg:hidden
          absolute top-full left-0 right-0
          bg-white shadow-lg
        `}
        >
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
        </div>
      </div>
    </nav>
  );
};
```

### Cards Responsive

```jsx
function ProjectsGrid() {
  return (
    <div
      className="
      grid
      grid-cols-1       {/* Móvil: 1 columna */}
      sm:grid-cols-2    {/* Tablet: 2 columnas */}
      lg:grid-cols-3    {/* Desktop: 3 columnas */}
      gap-4 sm:gap-6    {/* Gap crece con pantalla */}
      p-4 sm:p-6 lg:p-8 {/* Padding crece con pantalla */}
    "
    >
      {projects.map((project) => (
        <div
          className="
          bg-white rounded-lg p-4
          hover:shadow-xl transition-shadow
        "
        >
          <h3 className="text-lg md:text-xl">{project.title}</h3>
          <p className="text-sm md:text-base">{project.description}</p>
        </div>
      ))}
    </div>
  );
}
```

### Imágenes Responsive

```jsx
<img
  src="image.jpg"
  alt="Descripción"
  className="
    w-full        {/* Ancho completo */}
    h-auto        {/* Alto automático (mantiene ratio) */}
    object-cover  {/* Cubrir área sin deformar */}
    rounded-lg
    max-w-md      {/* Máximo ancho */}
    mx-auto       {/* Centrar */}
  "
/>
```

### Ocultar/Mostrar según Pantalla

```jsx
<div>
  {/* Solo en móvil */}
  <div className="block lg:hidden">Versión móvil</div>

  {/* Solo en desktop */}
  <div className="hidden lg:block">Versión desktop</div>

  {/* Solo en tablets */}
  <div className="hidden md:block lg:hidden">Versión tablet</div>
</div>
```

### Container con Max-Width

```jsx
// Contenedor que se adapta pero tiene límite
<div
  className="
  w-full                {/* 100% en móvil */}
  max-w-7xl             {/* Máximo 1280px */}
  mx-auto               {/* Centrado */}
  px-4 sm:px-6 lg:px-8  {/* Padding lateral responsive */}
"
>
  Contenido limitado y centrado
</div>
```

---

## Resumen de Conceptos Clave

### 1. **React Hooks**

- `useState`: Para manejar estado en componentes
- `useEffect`: Para efectos secundarios (API calls, subscriptions)
- `useRef`: Para referencias persistentes y acceso al DOM

### 2. **Context API**

- Compartir datos globales sin prop drilling
- Perfecto para temas, idiomas, autenticación
- Usar con custom hooks para mejor DX

### 3. **Custom Hooks**

- Reutilizar lógica entre componentes
- Siempre empezar con "use"
- Retornar arrays o objetos según necesidad

### 4. **Intersection Observer**

- Detectar cuando elementos son visibles
- Perfecto para lazy loading y animaciones
- Mejor rendimiento que scroll listeners

### 5. **LocalStorage**

- Persistir datos en el navegador
- Solo strings (usar JSON para objetos)
- Manejar errores con try/catch

### 6. **Tailwind CSS**

- Utility-first CSS framework
- Mobile-first por defecto
- Fácil crear animaciones y transiciones

### 7. **Internacionalización**

- Archivo de traducciones organizado
- Context para idioma global
- Persistir preferencia del usuario

### 8. **EmailJS**

- Enviar emails sin backend
- Integrar con cualquier formulario
- Usar variables de entorno para seguridad

---

## Próximos Pasos para Aprender

### 1. **TypeScript**

Agregar tipado estático a tu código React

### 2. **Testing**

- Jest para unit tests
- React Testing Library
- Cypress para E2E tests

### 3. **State Management Avanzado**

- Redux Toolkit
- Zustand
- Jotai

### 4. **Backend**

- Node.js + Express
- API RESTful
- Bases de datos (MongoDB, PostgreSQL)

### 5. **Deployment**

- Vercel
- Netlify
- GitHub Pages

---

## Recursos Adicionales

### Documentación Oficial

- React: https://react.dev
- Tailwind CSS: https://tailwindcss.com
- Vite: https://vitejs.dev

### Tutoriales

- FreeCodeCamp: https://www.freecodecamp.org
- React Tutorial: https://react.dev/learn
- Tailwind Play: https://play.tailwindcss.com

### Comunidades

- Stack Overflow
- Reddit r/reactjs
- Discord de React

---

## Conclusión

Has aprendido los fundamentos de un portfolio moderno con React:

- ✅ Manejo de estado con Hooks
- ✅ Context API para datos globales
- ✅ Animaciones suaves y responsivas
- ✅ Internacionalización
- ✅ Formularios de contacto funcionales
- ✅ Diseño responsive y accesible

¡Sigue practicando y construyendo proyectos! 🚀

---

**Hecho con ❤️ para aprender React**
