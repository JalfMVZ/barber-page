export interface Servicio {
  nombre: string;
  precio: string;
  descripcion: string;
}

export interface CategoriaServicio {
  id: string;
  titulo: string;
  servicios: Servicio[];
}

export interface FooterLink {
  text: string;
  href: string;
}

export interface Links {
  text: string;
  href: string;
}

export const servicios: CategoriaServicio[] = [
  {
    id: "corte",
    titulo: "CORTE",
    servicios: [
      {
        nombre: "Corte clásico",
        precio: "S/28.00",
        descripcion: "Corte tradicional y elegante.",
      },
      {
        nombre: "Corte y lavado",
        precio: "S/18.50",
        descripcion: "Corte con lavado incluido.",
      },
      {
        nombre: "Barba y bigote",
        precio: "S/25.00",
        descripcion: "Arreglo de barba y bigote.",
      },
    ],
  },
  {
    id: "afeitado",
    titulo: "AFEITADO",
    servicios: [
      {
        nombre: "Afeitado tradicional",
        precio: "S/24.50",
        descripcion: "Afeitado clásico y preciso.",
      },
      {
        nombre: "Afeitado con diseño",
        precio: "S/30.00",
        descripcion: "Afeitado con estilo personalizado.",
      },
    ],
  },
  {
    id: "recorte",
    titulo: "RECORTE",
    servicios: [
      {
        nombre: "Recorte de barba",
        precio: "S/17.00",
        descripcion: "Recorte para barba perfecta.",
      },
      {
        nombre: "Recorte con tijera",
        precio: "S/18.50",
        descripcion: "Recorte detallado con tijera.",
      },
    ],
  },
  {
    id: "peinado",
    titulo: "PEINADO",
    servicios: [
      {
        nombre: "Peinado especial",
        precio: "S/25.00",
        descripcion: "Peinado para ocasiones especiales.",
      },
      {
        nombre: "Tratamiento capilar",
        precio: "S/18.50",
        descripcion: "Cuidado profundo del cabello.",
      },
    ],
  },
];

export const additionalLinks: FooterLink[] = [
  { text: "Sobre nosotros", href: "/about" },
  { text: "Términos y condiciones", href: "/terms" },
  { text: "Política de privacidad", href: "/privacy" },
  { text: "Noticias", href: "/news" },
  { text: "Contáctanos", href: "/contact" },
];

// export const latestNews: FooterLink[] = [
//   { text: "Luz de tierra dividida", href: "#" },
//   { text: "Estaciones que llevan aire", href: "#" },
//   { text: "Signos semejantes para mayo", href: "#" },
//   { text: "Mayor abierto después del césped", href: "#" },
//   { text: "Juntados fue segundo dividido", href: "#" },
// ];
