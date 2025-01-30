export const EstablecerIdioma = (Astro) => {
  const idiomaGuardado = Astro.cookies.get("IDIOMA_USMX")?.value;

  const idioma =
    idiomaGuardado ||
    (Astro.request.headers.get("accept-language")?.startsWith("es")
      ? "es"
      : "en");

  if (!idiomaGuardado) {
    const fechaExpiracionCookie = new Date();
    fechaExpiracionCookie.setFullYear(fechaExpiracionCookie.getFullYear() + 1);
    Astro.cookies.set("IDIOMA_USMX", idioma, {
      expires: fechaExpiracionCookie,
      path: "/",
    });
  }

  return idioma;
};
