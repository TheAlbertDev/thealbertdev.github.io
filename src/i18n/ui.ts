export const languages = {
  en: "English",
  es: "Español",
};

export const defaultLang = "es";

export const ui = {
  es: {
    "meta.description": "Website personal de Albert Álvarez Carulla",
    "nav.home": "Inicio",
    "nav.posts": "Blog",
    "nav.contact": "Contactar",
    "nav.about": "Acerca de",
    "footer.nav.title": "Explorar",
    "footer.social.title": "Redes sociales",
    "newsletter.title": "Newsletter",
    "newsletter.caption": "Ingresa tu correo para recibir novedades",
    "newsletter.button": "Suscribirse",
    "404.title": "Página no encontrada",
    "404.message": "La página que buscas no existe",
  },
  en: {
    "meta.description": "Albert Álvarez Carulla's personal website",
    "nav.home": "Home",
    "nav.posts": "Blog",
    "nav.contact": "Contact",
    "nav.about": "About",
    "footer.nav.title": "Explore",
    "footer.social.title": "Social media",
    "newsletter.caption": "Enter your email to receive updates",
    "newsletter.button": "Subscribe",
    "404.title": "Page not found",
    "404.message": "The page you are looking for does not exist",
  },
} as const;

export const routes = {
  es: {
    "": "/",
    posts: "/posts",
    about: "/acerca-de",
    contact: "/contactar",
  },
  en: {
    "": "/",
    posts: "/posts",
    about: "/about",
    contact: "/contact",
  },
};

export const showDefaultLang = false;
