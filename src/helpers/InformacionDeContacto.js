import { InformacionGeneralUSMX } from "./InformacionGeneralUSMX";

export const InformacionDeContacto = {
  es: [
    {
      SVG: "TELEFONO",
      Alt: "Icono de teléfono de USMX",
      Titulo: "Llama ahora",
      Texto: InformacionGeneralUSMX.Telefono,
      Href: `tel:${InformacionGeneralUSMX.Telefono}`,
      AriaLabel: `Llamar a USMX al número ${InformacionGeneralUSMX.Telefono}`,
    },
    {
      SVG: "CORREO",
      Alt: "Icono de correo de USMX",
      Titulo: "Envíanos un correo",
      Texto: InformacionGeneralUSMX.CorreoElectronico,
      Href: `mailto:${InformacionGeneralUSMX.CorreoElectronico}`,
      AriaLabel: `Enviar correo a USMX al correo ${InformacionGeneralUSMX.CorreoElectronico}`,
    },
    {
      SVG: "FQARastreo",
      Alt: "Icono de ubicación de USMX",
      Titulo: "Visítanos",
      Texto: InformacionGeneralUSMX.Ubicacion,
      Href: `https://www.google.com/maps/search/${InformacionGeneralUSMX.Ubicacion}`,
      AriaLabel: `Visitar USMX en ${InformacionGeneralUSMX.Ubicacion}`,
    },
  ],
  en: [
    {
      SVG: "TELEFONO",
      Alt: "USMX phone icon",
      Titulo: "Call now",
      Texto: InformacionGeneralUSMX.Telefono,
      Href: `tel:${InformacionGeneralUSMX.Telefono}`,
      AriaLabel: `Call USMX at ${InformacionGeneralUSMX.Telefono}`,
    },
    {
      SVG: "CORREO",
      Alt: "USMX email icon",
      Titulo: "Send us an email",
      Texto: InformacionGeneralUSMX.CorreoElectronico,
      Href: `mailto:${InformacionGeneralUSMX.CorreoElectronico}`,
      AriaLabel: `Send email to USMX at ${InformacionGeneralUSMX.CorreoElectronico}`,
    },
    {
      SVG: "FQARastreo",
      Alt: "USMX location icon",
      Titulo: "Visit us",
      Texto: InformacionGeneralUSMX.Ubicacion,
      Href: `https://www.google.com/maps/search/${InformacionGeneralUSMX.Ubicacion}`,
      AriaLabel: `Visit USMX in ${InformacionGeneralUSMX.Ubicacion}`,
    },
  ],
};
