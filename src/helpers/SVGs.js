export const listaSVG = ({
  SVG = "PREDETERMINADO",
  Tamaño = "24",
  Box = "0 0 24 24",
  Alt = "SVG predeterminado",
  Titulo = "",
  Color = "",
}) => {
  const CONTENIDO_SVGS = {
    PREDETERMINADO: `
    <path d="M5.13 10.71h3.74L6.22 8.06c-1.01 0-1.83-.82-1.83-1.84a1.83 1.83 0 0 1 1.83-1.83c1.02 0 1.84.82 1.84 1.83l2.65 2.65V5.13a1.84 1.84 0 0 1 0-2.59a1.81 1.81 0 0 1 2.58 0c.71.71.71 1.87 0 2.59v3.74l2.66-2.65a1.83 1.83 0 0 1 3.66 0c0 1.02-.82 1.84-1.83 1.84l-2.65 2.65h3.74a1.84 1.84 0 0 1 2.59 0c.72.71.72 1.87 0 2.58c-.71.71-1.87.71-2.59 0h-3.74l2.65 2.66c1.01 0 1.83.81 1.83 1.83a1.83 1.83 0 0 1-1.83 1.83c-1.02 0-1.83-.82-1.83-1.83l-2.66-2.65v3.74c.71.72.71 1.88 0 2.59c-.71.72-1.87.72-2.58 0a1.84 1.84 0 0 1 0-2.59v-3.74l-2.65 2.65c0 1.01-.82 1.83-1.84 1.83a1.83 1.83 0 0 1 0-3.66l2.65-2.66H5.13c-.72.71-1.88.71-2.59 0a1.81 1.81 0 0 1 0-2.58a1.84 1.84 0 0 1 2.59 0"/>`,
    RASTREO: `
     <g>
      <path
        fill-rule="evenodd"
        d="M9.166 19.986A1 1 0 0 1 9 20H5a1 1 0 1 1 0-2h4q.085 0 .166.014a3.001 3.001 0 0 1 5.668 0A1 1 0 0 1 15 18h4a1 1 0 1 1 0 2h-4q-.084 0-.166-.014a3.001 3.001 0 0 1-5.668 0M11 19a1 1 0 1 1 2 0a1 1 0 0 1-2 0"
        clip-rule="evenodd"
      />
      <path d="M11.5 2.131a1 1 0 0 1 1 0l4.601 2.657q-.09.028-.179.075L12.08 7.475L6.946 4.76zM5.967 6.505v5.21a1 1 0 0 0 .5.866l4.57 2.638V9.186zm7.07 8.671l4.496-2.595a1 1 0 0 0 .5-.866v-5.2a1 1 0 0 1-.161.108l-4.835 2.608z" />
    </g>
    `,
    SERVICIOS: `
    <path d="M2.289 12.998q-.205 0-.343-.144t-.138-.357t.144-.356t.356-.143h3.48q.213 0 .357.144t.144.357t-.144.356t-.356.143zM7.502 19q-1.04 0-1.771-.73Q5 17.543 5 16.5H3.616q-.335 0-.535-.25t-.133-.571l.321-1.181h2.495q.838 0 1.417-.58t.579-1.42q0-.46-.2-.85t-.556-.646h1.815q.84 0 1.42-.58t.58-1.419t-.58-1.42t-1.42-.581H5.327l.304-1.1q.092-.393.39-.647Q6.316 5 6.734 5h10.054q.384 0 .627.308q.242.308.155.686L16.998 8.5h1.271q.384 0 .727.172q.344.171.566.474l1.797 2.398q.218.292.283.609q.066.316.01.664l-.598 3.037q-.056.292-.284.469t-.518.177h-.483q0 1.039-.728 1.77t-1.77.73t-1.771-.73q-.73-.728-.73-1.77H10q0 1.039-.728 1.77t-1.77.73M4.29 9.502q-.213 0-.357-.144t-.144-.357t.144-.356t.356-.143h4.5q.213 0 .357.144q.143.144.143.357t-.143.356t-.357.143zM7.5 18q.617 0 1.059-.441Q9 17.117 9 16.5t-.441-1.059T7.5 15t-1.059.441Q6 15.883 6 16.5t.441 1.059Q6.883 18 7.5 18m9.77 0q.617 0 1.058-.441q.441-.442.441-1.059t-.441-1.059T17.269 15t-1.058.441q-.442.442-.442 1.059t.441 1.059q.442.441 1.06.441m-1.384-4.75h4.653l.176-.89l-2.138-2.86h-1.818z"/>`,
    INFORMACION: `<path
      d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2S2 6.5 2 12s4.5 10 10 10M11 7h2v2h-2zm3 10h-4v-2h1v-2h-1v-2h3v4h1z"/>`,
    CORREO: `<path
    d="M22 5.5H9c-1.1 0-2 .9-2 2v9a2 2 0 0 0 2 2h13c1.11 0 2-.89 2-2v-9a2 2 0 0 0-2-2m0 3.67l-6.5 3.33L9 9.17V7.5l6.5 3.31L22 7.5zM5 16.5c0 .17.03.33.05.5H1c-.552 0-1-.45-1-1s.448-1 1-1h4zM3 7h2.05c-.02.17-.05.33-.05.5V9H3c-.55 0-1-.45-1-1s.45-1 1-1m-2 5c0-.55.45-1 1-1h3v2H2c-.55 0-1-.45-1-1"
    />`,
    SISTEMA: `
        <path
          d="M23 2H1v16h12v-2c0-.698.11-1.371.314-2.002H3v-10h18v5.676c.72.17 1.395.46 2 .848zM3 20h10v2H3z"
        />
        <path
          d="M18.252 14.75a1.25 1.25 0 0 1 2.13-.887l.71.705l1.41-1.418l-.71-.705a3.25 3.25 0 0 0-5.541 2.305v.75H15V22h9v-6.5h-5.748z"
        /> `,
    PAQUETE: `<path
          d="M22.549 9.604a10.46 10.46 0 0 0-3.388-6.838A10.63 10.63 0 0 0 12 0a10.64 10.64 0 0 0-7.16 2.764a10.47 10.47 0 0 0-3.428 7.74c0 2.371.81 4.672 2.298 6.529a10.6 10.6 0 0 0 5.895 3.698L12 24l2.395-3.27a10.6 10.6 0 0 0 5.895-3.697a10.44 10.44 0 0 0 2.26-7.43zm-11.306 6.28a.26.26 0 0 1-.034.125a.254.254 0 0 1-.347.092l-3.906-2.237a1 1 0 0 1-.505-.865V8.624a.26.26 0 0 1 .033-.126a.254.254 0 0 1 .347-.092l3.907 2.237a1.01 1.01 0 0 1 .503.866v4.372zM12 9.48a1.03 1.03 0 0 1-.503-.133L7.5 7.057a.24.24 0 0 1-.09-.092a.25.25 0 0 1 .09-.342l3.997-2.289a1.02 1.02 0 0 1 1.007 0l3.996 2.29a.24.24 0 0 1 .09.092a.25.25 0 0 1 0 .25a.3.3 0 0 1-.09.092l-3.997 2.289A1 1 0 0 1 12 9.48M17.546 13a1 1 0 0 1-.503.866l-3.908 2.237a.254.254 0 0 1-.38-.218V11.51a1.01 1.01 0 0 1 .503-.867l3.907-2.238a.254.254 0 0 1 .38.219z"
        />`,
    X: `<path
          fill="none"
          stroke="#2c3e50"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m3 21l7.5-7.5m3-3L21 3M8 3H3l13 18h5Z"
        />`,
    FACEBOOK: `
        <path d="M2.002 12.002a10.005 10.005 0 0 0 8.437 9.879v-6.989H7.902v-2.89h2.54v-2.2a3.528 3.528 0 0 1 3.773-3.9c.75.012 1.5.079 2.24.2v2.459h-1.264a1.446 1.446 0 0 0-1.628 1.563v1.878h2.771l-.443 2.891h-2.328v6.988a10 10 0 1 0-11.561-9.879Z"/>
    `,
    INSTAGRAM: `
        <path d="M17.34 5.46a1.2 1.2 0 1 0 1.2 1.2a1.2 1.2 0 0 0-1.2-1.2m4.6 2.42a7.6 7.6 0 0 0-.46-2.43a4.9 4.9 0 0 0-1.16-1.77a4.7 4.7 0 0 0-1.77-1.15a7.3 7.3 0 0 0-2.43-.47C15.06 2 14.72 2 12 2s-3.06 0-4.12.06a7.3 7.3 0 0 0-2.43.47a4.8 4.8 0 0 0-1.77 1.15a4.7 4.7 0 0 0-1.15 1.77a7.3 7.3 0 0 0-.47 2.43C2 8.94 2 9.28 2 12s0 3.06.06 4.12a7.3 7.3 0 0 0 .47 2.43a4.7 4.7 0 0 0 1.15 1.77a4.8 4.8 0 0 0 1.77 1.15a7.3 7.3 0 0 0 2.43.47C8.94 22 9.28 22 12 22s3.06 0 4.12-.06a7.3 7.3 0 0 0 2.43-.47a4.7 4.7 0 0 0 1.77-1.15a4.85 4.85 0 0 0 1.16-1.77a7.6 7.6 0 0 0 .46-2.43c0-1.06.06-1.4.06-4.12s0-3.06-.06-4.12M20.14 16a5.6 5.6 0 0 1-.34 1.86a3.06 3.06 0 0 1-.75 1.15a3.2 3.2 0 0 1-1.15.75a5.6 5.6 0 0 1-1.86.34c-1 .05-1.37.06-4 .06s-3 0-4-.06a5.7 5.7 0 0 1-1.94-.3a3.3 3.3 0 0 1-1.1-.75a3 3 0 0 1-.74-1.15a5.5 5.5 0 0 1-.4-1.9c0-1-.06-1.37-.06-4s0-3 .06-4a5.5 5.5 0 0 1 .35-1.9A3 3 0 0 1 5 5a3.1 3.1 0 0 1 1.1-.8A5.7 5.7 0 0 1 8 3.86c1 0 1.37-.06 4-.06s3 0 4 .06a5.6 5.6 0 0 1 1.86.34a3.06 3.06 0 0 1 1.19.8a3.1 3.1 0 0 1 .75 1.1a5.6 5.6 0 0 1 .34 1.9c.05 1 .06 1.37.06 4s-.01 3-.06 4M12 6.87A5.13 5.13 0 1 0 17.14 12A5.12 5.12 0 0 0 12 6.87m0 8.46A3.33 3.33 0 1 1 15.33 12A3.33 3.33 0 0 1 12 15.33"/>
    `,
    TIKTOK: `
        <path
          d="M12.438 2.017C13.53 2 14.613 2.008 15.696 2c.067 1.275.525 2.575 1.459 3.475c.933.925 2.25 1.35 3.533 1.492v3.358c-1.2-.042-2.408-.292-3.5-.808c-.475-.217-.917-.492-1.35-.775c-.008 2.433.008 4.866-.017 7.291a6.36 6.36 0 0 1-1.125 3.283c-1.091 1.6-2.983 2.642-4.924 2.675c-1.192.067-2.384-.258-3.4-.858c-1.684-.992-2.867-2.808-3.042-4.758a16 16 0 0 1-.008-1.242c.15-1.583.933-3.1 2.15-4.133c1.383-1.2 3.316-1.775 5.125-1.433c.016 1.233-.034 2.466-.034 3.7c-.825-.267-1.791-.192-2.516.308a2.9 2.9 0 0 0-1.134 1.458c-.175.425-.125.892-.116 1.342c.2 1.366 1.516 2.516 2.916 2.392c.934-.009 1.825-.55 2.309-1.342c.158-.275.333-.559.341-.884c.084-1.491.05-2.975.059-4.466c.008-3.358-.009-6.708.016-10.058"
        />
   `,
    FQARastreo: `
        <path d="M6.72 16.64a1 1 0 1 1 .56 1.92c-.5.146-.86.3-1.091.44c.238.143.614.303 1.136.452C8.48 19.782 10.133 20 12 20s3.52-.218 4.675-.548c.523-.149.898-.309 1.136-.452c-.23-.14-.59-.294-1.09-.44a1 1 0 0 1 .559-1.92c.668.195 1.28.445 1.75.766c.435.299.97.82.97 1.594c0 .783-.548 1.308-.99 1.607c-.478.322-1.103.573-1.786.768C15.846 21.77 14 22 12 22s-3.846-.23-5.224-.625c-.683-.195-1.308-.446-1.786-.768c-.442-.3-.99-.824-.99-1.607c0-.774.535-1.295.97-1.594c.47-.321 1.082-.571 1.75-.766M12 7.5c-1.54 0-2.502 1.667-1.732 3c.357.619 1.017 1 1.732 1c1.54 0 2.502-1.667 1.732-3A2 2 0 0 0 12 7.5" class="duoicon-primary-layer"/><path d="M12 2a7.5 7.5 0 0 1 7.5 7.5c0 2.568-1.4 4.656-2.85 6.14a16.4 16.4 0 0 1-1.853 1.615c-.594.446-1.952 1.282-1.952 1.282a1.71 1.71 0 0 1-1.69 0a21 21 0 0 1-1.952-1.282A16.4 16.4 0 0 1 7.35 15.64C5.9 14.156 4.5 12.068 4.5 9.5A7.5 7.5 0 0 1 12 2" class="duoicon-secondary-layer" opacity=".3"/>
    `,
    FQARetraso: `
   <g fill="none" stroke="#adadad" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="12.49" r="1"/><circle cx="10.5" cy="12.49" r="1"/><path d="M8.38 3.53A4 4 0 1 0 2 7.62m2.5-3.11L6 3.01m.5 6.49v-1H5a2 2 0 0 0-2 2v2"/><path d="M13.5 12.49v-5a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1v2"/></g>
    `,
    FQADisponibilidad: `
   <path d="M22 10H2v9a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3zM7 8a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1m10 0a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1" opacity=".5"/><path d="M19 4h-1v3a1 1 0 0 1-2 0V4H8v3a1 1 0 0 1-2 0V4H5a3 3 0 0 0-3 3v3h20V7a3 3 0 0 0-3-3"/>
    `,
    FQASoporte: `
    <path d="M12 2C6.486 2 2 6.486 2 12v4.143C2 17.167 2.897 18 4 18h1a1 1 0 0 0 1-1v-5.143a1 1 0 0 0-1-1h-.908C4.648 6.987 7.978 4 12 4s7.352 2.987 7.908 6.857H19a1 1 0 0 0-1 1V18c0 1.103-.897 2-2 2h-2v-1h-4v3h6c2.206 0 4-1.794 4-4c1.103 0 2-.833 2-1.857V12c0-5.514-4.486-10-10-10"/>
    `,
    FQAError: `
   <path  d="M12 17q.425 0 .713-.288Q13 16.425 13 16t-.287-.713Q12.425 15 12 15t-.712.287Q11 15.575 11 16t.288.712Q11.575 17 12 17Zm0-4q.425 0 .713-.288Q13 12.425 13 12V8q0-.425-.287-.713Q12.425 7 12 7t-.712.287Q11 7.575 11 8v4q0 .425.288.712q.287.288.712.288Zm0 9q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-2q3.35 0 5.675-2.325Q20 15.35 20 12q0-3.35-2.325-5.675Q15.35 4 12 4Q8.65 4 6.325 6.325Q4 8.65 4 12q0 3.35 2.325 5.675Q8.65 20 12 20Zm0-8Z"/>
    `,
    FQAEntregado: `
   <g fill="none" stroke="#adadad" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="#adadad"><path d="M21 7v5M3 7v10.161c0 1.383 1.946 2.205 5.837 3.848C10.4 21.67 11.182 22 12 22V11.355M15 19s.875 0 1.75 2c0 0 2.78-5 5.25-6"/><path d="M8.326 9.691L5.405 8.278C3.802 7.502 3 7.114 3 6.5s.802-1.002 2.405-1.778l2.92-1.413C10.13 2.436 11.03 2 12 2s1.871.436 3.674 1.309l2.921 1.413C20.198 5.498 21 5.886 21 6.5s-.802 1.002-2.405 1.778l-2.92 1.413C13.87 10.564 12.97 11 12 11s-1.871-.436-3.674-1.309M6 12l2 1m9-9L7 9"/></g>
    `,
    FQAProhibidos: `
    <path fill="none" stroke="#adadad" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.46 18.54A9.25 9.25 0 0 0 18.54 5.46M5.459 18.541A9.25 9.25 0 0 1 18.54 5.46M5.46 18.54L18.54 5.46"/>
    `,
    FQADomicilio: `
    <path fill="#adadad" d="M12 3s-6.186 5.34-9.643 8.232A1.04 1.04 0 0 0 2 12a1 1 0 0 0 1 1h2v7a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4h4v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7h2a1 1 0 0 0 1-1a.98.98 0 0 0-.383-.768C18.184 8.34 12 3 12 3"/>
    `,
    FQAInternacional: `
    <path fill="#adadad" d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10S4.477 0 10 0m0 1.395a8.605 8.605 0 1 0 0 17.21a8.605 8.605 0 0 0 0-17.21m2.048 2.093a6.7 6.7 0 0 1 1.802 1.024q.187.144.363.307q.032.028.062.06c.328.303.626.644.89 1.01l.11.147q.095.142.184.29q.072.116.139.236q.076.134.146.273q.078.155.149.316c.033.073.07.148.1.226q.109.272.197.552l.052.19a7 7 0 0 1 .215 1.087c.007.066.017.136.022.201q.031.323.033.65a7 7 0 0 1-.117 1.27l-.04.217q-.06.284-.14.56c-.509-.233-1.107-.576-1.263-.953c-.284-.68-1.04-1.02-1.348-1.896c-.507-1.45.166-1.412.26-2.312c.044-.422-.26-.51-.661-.338c-.936.393-1.253.242-1.442-.463c-.189-.703 0-.899 0-.899c-.638.07-.662-.707-.331-.903c.23-.132.425-.537.618-.852M9.374 7.797c.59-.27 1.135-.367 1.063-.831c-.07-.459-.236-.801-1.158-.801s-.52 1.265-1.276.51c-.756-.75.165-.556.543-.727c.379-.172.757-.877.095-.927c-.661-.047-.52.292-1.04.1c-.52-.196-.756.679-1.088.557c-.218-.082-.803-.532-1.191-.975a7 7 0 0 0-1.834 2.51c.113 1.307.804 1.993.804 1.993s.355.851 2.483 1.897c0 0 .4.024-.072-.461c-.472-.487-.993-1.095-.402-1.41c.59-.319.757-.292.899.293c.141.584.615.24.661-.319c.048-.557.922-1.14 1.513-1.41m-.45 2.94c1.018 0 .923.317 1.727 1.025c.803.704.378 1.409-.025 1.945c-.401.534-.756 1.14-.945 2.238c-.19 1.094-.686.314-.85.047c-.166-.269-.426-.511-.354-1.63c.07-1.118-.687-.46-.946-1.92c-.26-1.458.378-1.704 1.394-1.704m4.977.964c.271-.173.92.278.78.753c-.143.475-.591.207-.816 0c-.225-.206-.237-.583.036-.753"/>
    `,
  };
  return `
    <svg 
      width="${Tamaño}" 
      height="${Tamaño}" 
      viewBox="${Box}" 
      role="img" 
      aria-label="${Alt}"
      class="SVG ${Color}"
    >
    <title>${Titulo}</title>
      ${CONTENIDO_SVGS[SVG]}
    </svg>
  `;
};
