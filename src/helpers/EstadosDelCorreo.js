import { imagenes } from "./Multimedia.astro";

export const EstadosDelCorreo = {
  es: [
    {
      Estado: "Enviando",
      Imagen: imagenes.EnviandoCorreo.Imagen,
      AltImagen: "Ilustración de un correo electrónico siendo enviado",
      ColorTexto: "Azul",
      Texto: "Enviando correo electrónico, por favor espere...",
    },
    {
      Estado: "Enviado",
      Imagen: imagenes.CorreoRecibido.Imagen,
      AltImagen: "Ilustración de un correo electrónico recibido",
      ColorTexto: "Verde",
      Texto: "¡El correo electrónico fue enviado con éxito!",
    },
    {
      Estado: "NoEnviado",
      Imagen: imagenes.CorreoNoEnviado.Imagen,
      AltImagen: "Ilustración de un correo electrónico no recibido",
      ColorTexto: "Rojo",
      Texto:
        "Error al enviar el correo electrónico, por favor inténtalo de nuevo.",
    },
  ],
  en: [
    {
      Estado: "Enviando",
      Imagen: imagenes.EnviandoCorreo.Imagen,
      AltImagen: "Illustration of an email being sent",
      ColorTexto: "Azul",
      Texto: "Sending email, please wait...",
    },
    {
      Estado: "Enviado",
      Imagen: imagenes.CorreoRecibido.Imagen,
      AltImagen: "Illustration of an email received",
      ColorTexto: "Verde",
      Texto: "Email sent successfully!",
    },
    {
      Estado: "NoEnviado",
      Imagen: imagenes.CorreoNoEnviado.Imagen,
      AltImagen: "Illustration of an email not received",
      ColorTexto: "Rojo",
      Texto: "Error sending email, please try again.",
    },
  ],
};
