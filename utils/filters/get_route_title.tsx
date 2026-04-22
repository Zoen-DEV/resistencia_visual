import { RoutesNames } from "../enums/routes.enum";

export const getRouteTitle = (param: string): string => {
  switch (param) {
    case RoutesNames.HOME:
      return "";
    case RoutesNames.ABOUT_ME:
      return "Sobre mí";
    case RoutesNames.PORTFOLIO:
      return "Portafolio";
    case RoutesNames.SHOP:
      return "Tienda";
    case RoutesNames.CONTACT:
      return "Contacto";
    case RoutesNames.PROJECT_1:
      return "Portafolio / Habitarnos en el tiempo";
    case RoutesNames.PROJECT_2:
      return "Portafolio / Cotidiana";
    case RoutesNames.PROJECT_3:
      return "Portafolio / Lo que comemos";
    case RoutesNames.PROJECT_4:
      return "Portafolio / Hecha un vistazo";
    default:
      return "";
  }
};
