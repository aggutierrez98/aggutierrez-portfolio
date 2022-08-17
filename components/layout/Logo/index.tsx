import * as React from "react";

interface Props extends React.SVGProps<SVGSVGElement> {
  color: string;
}

export const Logo = ({ color, width, height, ...props }: Props) => (
  <svg
    width={width ? width : 142.4}
    height={height ? height : 39.08}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)" fill={color}>
      <path d="M43.12 1.92c0 .373-.053.733-.16 1.08-.08.32-.24.707-.48 1.16-.24.427-.573.96-1 1.6-.427.613-.987 1.4-1.68 2.36a232.854 232.854 0 0 0-3.8 5.56 85.885 85.885 0 0 0-3.2 5.12c-.907 1.627-1.627 3.133-2.16 4.52-.533 1.36-.8 2.573-.8 3.64 0 .4.027.76.08 1.08.053.347.147.613.28.8.027.053.12.12.28.2l.56.32c.187.107.36.2.52.28l.24.12c0 .107-.12.2-.36.28-.213.08-.467.12-.76.12-1.093 0-1.867-.32-2.32-.96-.453-.613-.68-1.32-.68-2.12 0-1.067.213-2.173.64-3.32.453-1.147 1.107-2.52 1.96-4.12l.88-1.68-.24.04a5.72 5.72 0 0 1-1.2.12c-.773 0-1.56-.12-2.36-.36a8.38 8.38 0 0 1-1.08-.44L25 16.6c-.427-.267-.8-.493-1.12-.68-.32-.187-.493-.28-.52-.28-.053 0-.147.08-.28.24-.107.16-.253.347-.44.56a131.447 131.447 0 0 1-3.88 4.28c-1.36 1.44-2.6 2.707-3.72 3.8-.96.933-1.84 1.72-2.64 2.36-.8.667-1.56 1.2-2.28 1.6-.72.427-1.413.733-2.08.92a7.53 7.53 0 0 1-2.04.28c-.96 0-1.813-.147-2.56-.44-.747-.293-1.373-.693-1.88-1.2A4.871 4.871 0 0 1 .4 26.36a4.672 4.672 0 0 1-.4-1.88c0-.827.2-1.707.6-2.64.427-.96 1-1.84 1.72-2.64s1.56-1.467 2.52-2c.96-.533 1.987-.8 3.08-.8.667 0 1.267.107 1.8.32.533.213.973.467 1.32.76.373.293.653.6.84.92.187.293.28.547.28.76 0 .293-.12.547-.36.76-.213.213-.427.32-.64.32-.133 0-.293-.067-.48-.2-.187-.16-.48-.427-.88-.8-.613-.587-1.093-.973-1.44-1.16a2.52 2.52 0 0 0-1.08-.4c-.72 0-1.467.16-2.24.48-.773.32-1.48.773-2.12 1.36a7.525 7.525 0 0 0-1.6 2.12c-.4.8-.6 1.693-.6 2.68 0 .747.133 1.413.4 2 .293.587.68 1.08 1.16 1.48.507.4 1.08.693 1.72.88.667.213 1.373.32 2.12.32 1.173 0 2.28-.253 3.32-.76 1.067-.507 2.267-1.347 3.6-2.52.347-.32.827-.787 1.44-1.4a73.37 73.37 0 0 0 2.04-2.04 93.638 93.638 0 0 0 2.24-2.32c.747-.8 1.427-1.533 2.04-2.2a42.34 42.34 0 0 0 1.48-1.68c.4-.48.6-.773.6-.88 0-.027-.067-.08-.2-.16a2.951 2.951 0 0 0-.52-.32 11.744 11.744 0 0 0-.6-.4c-.213-.133-.4-.24-.56-.32-.293-.16-.547-.253-.76-.28a7.805 7.805 0 0 0-.96-.04c-.507 0-.96.093-1.36.28-.373.16-.76.44-1.16.84-.24.24-.4.387-.48.44-.053.027-.173.04-.36.04-.347 0-.52-.067-.52-.2 0-.24.133-.467.4-.68.293-.24.64-.453 1.04-.64s.827-.333 1.28-.44a4.43 4.43 0 0 1 1.24-.2c.88 0 1.973.373 3.28 1.12.4.24.653.36.76.36l.28-.28c.16-.187.347-.4.56-.64 3.92-4.56 7.227-7.973 9.92-10.24C36.853 1.147 39.107 0 40.92 0c.693 0 1.227.147 1.6.44.4.293.6.787.6 1.48ZM32.44 15.96c.667-1.067 1.4-2.187 2.2-3.36.8-1.2 1.733-2.547 2.8-4.04a98.275 98.275 0 0 0 2.04-2.96c.533-.8.947-1.453 1.24-1.96.293-.533.493-.973.6-1.32.107-.347.16-.68.16-1 0-.507-.213-.76-.64-.76-.613 0-1.333.2-2.16.6-.827.4-1.72.96-2.68 1.68a32.892 32.892 0 0 0-3.04 2.52 51.924 51.924 0 0 0-3.24 3.2c-.133.16-.373.427-.72.8-.347.373-.733.8-1.16 1.28-.427.453-.867.947-1.32 1.48-.453.507-.88.973-1.28 1.4-.373.4-.68.747-.92 1.04l-.36.44c0 .053.213.227.64.52.72.533 1.387.947 2 1.24.64.293 1.213.52 1.72.68.507.133.933.227 1.28.28.347.027.627.04.84.04h.48a.697.697 0 0 0 .36-.2c.133-.107.28-.28.44-.52.187-.267.427-.627.72-1.08Z" />
      <path d="m40.48 24.56 2.04-3.04-1.28 1.24c-.747.72-1.4 1.32-1.96 1.8s-1.067.867-1.52 1.16a6.282 6.282 0 0 1-1.2.6c-.373.107-.733.16-1.08.16-.533 0-.96-.147-1.28-.44-.32-.293-.48-.72-.48-1.28 0-1.04.347-2.093 1.04-3.16a12.405 12.405 0 0 1 2.44-2.84 14.905 14.905 0 0 1 3.08-2.08c1.093-.533 2.053-.8 2.88-.8.56 0 1 .12 1.32.36.32.24.48.587.48 1.04 0 .133-.027.28-.08.44-.027.16-.04.28-.04.36 0 .027.013.04.04.04.32-.48.587-.853.8-1.12.24-.293.453-.52.64-.68.187-.16.373-.253.56-.28.187-.053.4-.08.64-.08.373 0 .6.053.68.16.107.107.16.213.16.32 0 .027-.2.293-.6.8-.4.48-.893 1.093-1.48 1.84-.587.72-1.24 1.507-1.96 2.36a93.592 93.592 0 0 0-1.92 2.44 50.67 50.67 0 0 0-1.48 2.04c-.4.56-.6.907-.6 1.04 0 .027.173-.067.52-.28.373-.187.893-.467 1.56-.84 1.44-.827 2.68-1.64 3.72-2.44a26.814 26.814 0 0 0 3.04-2.76l.8-.8c.16-.16.267-.24.32-.24.053 0 .08.027.08.08v.04c0 .08-.027.147-.08.2-.32.533-.813 1.12-1.48 1.76a34.563 34.563 0 0 1-2.24 1.88c-.8.613-1.627 1.2-2.48 1.76a31.592 31.592 0 0 1-2.32 1.4c-.56.293-.987.52-1.28.68-.267.16-.48.307-.64.44-.16.133-.307.28-.44.44a31.16 31.16 0 0 1-.48.8c-.96 1.493-1.733 2.68-2.32 3.56-.587.907-1.067 1.64-1.44 2.2-.4.56-.747 1.013-1.04 1.36-.293.347-.627.693-1 1.04a12.18 12.18 0 0 1-.96.88c-.293.24-.573.427-.84.56-.267.16-.547.267-.84.32a5.63 5.63 0 0 1-1 .08c-.88 0-1.533-.213-1.96-.64-.427-.4-.64-.92-.64-1.56 0-.507.267-1.133.8-1.88.507-.747 1.227-1.52 2.16-2.32.933-.8 2.053-1.6 3.36-2.4 1.28-.8 2.693-1.533 4.24-2.2l.96-.44 2.08-3.08Zm-5.56 8.04c.4-.507.773-1.013 1.12-1.52.347-.48.653-.907.92-1.28s.467-.68.6-.92l.24-.32c-.053 0-.293.093-.72.28a31.143 31.143 0 0 0-3.64 1.92 25.146 25.146 0 0 0-2.92 2.08c-.853.693-1.52 1.373-2 2.04s-.72 1.253-.72 1.76c0 .747.36 1.12 1.08 1.12.773 0 1.667-.44 2.68-1.32.987-.88 2.107-2.16 3.36-3.84Zm7.04-11.24c.507-.507.907-.947 1.2-1.32.293-.373.507-.693.64-.96.133-.293.213-.547.24-.76.027-.213.04-.413.04-.6 0-.347-.093-.627-.28-.84a.872.872 0 0 0-.72-.36c-.453 0-1.08.28-1.88.84-.8.533-1.587 1.213-2.36 2.04-.773.8-1.44 1.693-2 2.68-.56.987-.84 1.92-.84 2.8 0 .16.053.32.16.48.107.16.213.24.32.24.16 0 .427-.107.8-.32.373-.24.8-.547 1.28-.92a27.416 27.416 0 0 0 1.64-1.32 51.087 51.087 0 0 0 1.76-1.68Z" />
      <path d="m54.32 24.56 2.04-3.04-1.28 1.24c-.747.72-1.4 1.32-1.96 1.8s-1.067.867-1.52 1.16a6.277 6.277 0 0 1-1.2.6c-.373.107-.733.16-1.08.16-.533 0-.96-.147-1.28-.44-.32-.293-.48-.72-.48-1.28 0-1.04.347-2.093 1.04-3.16a12.405 12.405 0 0 1 2.44-2.84 14.907 14.907 0 0 1 3.08-2.08c1.093-.533 2.053-.8 2.88-.8.56 0 1 .12 1.32.36.32.24.48.587.48 1.04a1.4 1.4 0 0 1-.08.44c-.027.16-.04.28-.04.36 0 .027.013.04.04.04.32-.48.587-.853.8-1.12.24-.293.453-.52.64-.68.187-.16.373-.253.56-.28.187-.053.4-.08.64-.08.373 0 .6.053.68.16.107.107.16.213.16.32 0 .027-.2.293-.6.8-.4.48-.893 1.093-1.48 1.84-.587.72-1.24 1.507-1.96 2.36a93.592 93.592 0 0 0-1.92 2.44 50.768 50.768 0 0 0-1.48 2.04c-.4.56-.6.907-.6 1.04 0 .027.173-.067.52-.28a40.49 40.49 0 0 0 1.56-.84c1.44-.827 2.68-1.64 3.72-2.44A26.814 26.814 0 0 0 63 20.64l.8-.8c.16-.16.267-.24.32-.24.053 0 .08.027.08.08v.04c0 .08-.027.147-.08.2-.32.533-.813 1.12-1.48 1.76a34.536 34.536 0 0 1-2.24 1.88c-.8.613-1.627 1.2-2.48 1.76a31.57 31.57 0 0 1-2.32 1.4c-.56.293-.987.52-1.28.68-.267.16-.48.307-.64.44-.16.133-.307.28-.44.44-.107.187-.267.453-.48.8-.96 1.493-1.733 2.68-2.32 3.56-.587.907-1.067 1.64-1.44 2.2-.4.56-.747 1.013-1.04 1.36-.293.347-.627.693-1 1.04a12.18 12.18 0 0 1-.96.88c-.293.24-.573.427-.84.56-.267.16-.547.267-.84.32a5.63 5.63 0 0 1-1 .08c-.88 0-1.533-.213-1.96-.64-.427-.4-.64-.92-.64-1.56 0-.507.267-1.133.8-1.88.507-.747 1.227-1.52 2.16-2.32.933-.8 2.053-1.6 3.36-2.4 1.28-.8 2.693-1.533 4.24-2.2l.96-.44 2.08-3.08Zm-5.56 8.04c.4-.507.773-1.013 1.12-1.52.347-.48.653-.907.92-1.28s.467-.68.6-.92l.24-.32c-.053 0-.293.093-.72.28a31.15 31.15 0 0 0-3.64 1.92 25.146 25.146 0 0 0-2.92 2.08c-.853.693-1.52 1.373-2 2.04s-.72 1.253-.72 1.76c0 .747.36 1.12 1.08 1.12.773 0 1.667-.44 2.68-1.32.987-.88 2.107-2.16 3.36-3.84Zm7.04-11.24c.507-.507.907-.947 1.2-1.32.293-.373.507-.693.64-.96a2.71 2.71 0 0 0 .24-.76c.027-.213.04-.413.04-.6 0-.347-.093-.627-.28-.84a.872.872 0 0 0-.72-.36c-.453 0-1.08.28-1.88.84-.8.533-1.587 1.213-2.36 2.04-.773.8-1.44 1.693-2 2.68-.56.987-.84 1.92-.84 2.8 0 .16.053.32.16.48.107.16.213.24.32.24.16 0 .427-.107.8-.32.373-.24.8-.547 1.28-.92a27.384 27.384 0 0 0 1.64-1.32 50.996 50.996 0 0 0 1.76-1.68Z" />
      <path d="M74.92 20.12c.347-.453.587-.68.72-.68.027 0 .067.04.12.12 0 .08-.093.267-.28.56-.187.267-.547.707-1.08 1.32-.587.693-1.16 1.36-1.72 2-.56.613-1.12 1.16-1.68 1.64-.56.48-1.12.867-1.68 1.16-.533.293-1.08.44-1.64.44-.453 0-.8-.133-1.04-.4s-.36-.6-.36-1c0-.213.04-.44.12-.68.08-.267.12-.427.12-.48-.96.88-1.773 1.507-2.44 1.88-.64.373-1.267.56-1.88.56-.96 0-1.44-.44-1.44-1.32 0-.32.04-.627.12-.92.08-.32.24-.68.48-1.08.213-.427.52-.92.92-1.48.4-.56.92-1.267 1.56-2.12.747-.933 1.293-1.667 1.64-2.2.347-.533.613-.933.8-1.2.213-.293.4-.467.56-.52.16-.08.427-.12.8-.12a1.2 1.2 0 0 1 .64.2c.24.107.36.213.36.32 0 .107-.387.56-1.16 1.36-1.76 1.813-2.987 3.28-3.68 4.4-.667 1.12-1 2.067-1 2.84 0 .213.04.4.12.56.08.16.213.24.4.24.347 0 .76-.187 1.24-.56.507-.373 1.027-.84 1.56-1.4a28.76 28.76 0 0 0 1.68-1.84c.56-.693 1.093-1.36 1.6-2 .747-.933 1.293-1.667 1.64-2.2l.84-1.2c.213-.293.387-.467.52-.52.16-.08.427-.12.8-.12a1.2 1.2 0 0 1 .64.2c.24.107.36.213.36.32 0 .107-.387.56-1.16 1.36-1.76 1.813-2.987 3.28-3.68 4.4-.667 1.12-1 2.067-1 2.84 0 .533.187.8.56.8.24 0 .573-.133 1-.4.453-.293.947-.68 1.48-1.16a27.418 27.418 0 0 0 1.68-1.76 38.819 38.819 0 0 0 1.84-2.16Z" />
      <path d="M85.48 6.8c.293 0 .48.013.56.04.106.027.16.107.16.24s-.133.373-.4.72c-.24.347-.56.76-.96 1.24-.4.48-.853 1.013-1.36 1.6-.48.587-.947 1.173-1.4 1.76-.507.64-.92 1.173-1.24 1.6-.294.4-.534.72-.72.96-.16.24-.267.413-.32.52-.053.08-.08.133-.08.16 0 .08.12.12.36.12h.64c.186 0 .347.027.48.08.133.027.2.107.2.24 0 .053-.027.093-.08.12-.053.027-.24.04-.56.04h-.48l-1.08-.04-.92 1.28c-1.387 1.92-2.427 3.587-3.12 5-.694 1.413-1.04 2.373-1.04 2.88 0 .293.04.48.12.56.08.053.213.08.4.08.24 0 .493-.053.76-.16.293-.133.613-.333.96-.6.373-.293.8-.667 1.28-1.12.48-.48 1.04-1.08 1.68-1.8.96-1.067 1.6-1.787 1.92-2.16.347-.373.547-.56.6-.56.026 0 .053.027.08.08.026.027-.04.147-.2.36a92.8 92.8 0 0 1-.64.84c-.267.32-.573.693-.92 1.12-.347.427-.707.853-1.08 1.28-1.174 1.36-2.2 2.347-3.08 2.96-.88.587-1.653.88-2.32.88-.64 0-1.08-.133-1.32-.4-.267-.24-.4-.573-.4-1 0-.347.147-.827.44-1.44.293-.64.68-1.347 1.16-2.12.48-.773 1.026-1.6 1.64-2.48a59.213 59.213 0 0 1 1.92-2.6l.64-.84h-.72c-.374 0-.627-.04-.76-.12-.133-.107-.2-.227-.2-.36 0-.053.053-.08.16-.08.107-.027.386-.04.84-.04h1.04l1.04-1.52a146.2 146.2 0 0 0 2.68-3.84 47.34 47.34 0 0 1 1.6-2.2c.4-.533.733-.88 1-1.04.293-.16.64-.24 1.04-.24Z" />
      <path d="M86.2 13.36a.96.96 0 0 1 .2-.56c.16-.187.333-.333.52-.44.213-.133.427-.24.64-.32.24-.08.44-.12.6-.12.213 0 .4.027.56.08.16.053.24.187.24.4 0 .373-.2.693-.6.96-.373.267-.867.4-1.48.4a1 1 0 0 1-.52-.12c-.107-.107-.16-.2-.16-.28Zm-1.2 4.4c-.853.88-1.587 1.68-2.2 2.4a21.097 21.097 0 0 0-1.44 1.96c-.347.56-.6 1.08-.76 1.56-.16.453-.24.88-.24 1.28 0 .56.16.84.48.84.266 0 .613-.133 1.04-.4.427-.293.907-.68 1.44-1.16a21.75 21.75 0 0 0 1.72-1.76 38.819 38.819 0 0 0 1.84-2.16c.347-.453.587-.68.72-.68.08 0 .12.053.12.16 0 .08-.107.267-.32.56-.214.293-.56.72-1.04 1.28-.534.64-1.08 1.28-1.64 1.92-.56.613-1.12 1.173-1.68 1.68-.56.48-1.12.867-1.68 1.16-.56.32-1.12.48-1.68.48-.454 0-.8-.133-1.04-.4s-.36-.613-.36-1.04c0-.293.053-.587.16-.88.08-.32.24-.68.48-1.08.24-.427.56-.92.96-1.48.4-.56.907-1.253 1.52-2.08a72.614 72.614 0 0 0 1.48-2.16c.373-.56.68-.973.92-1.24s.453-.44.64-.52c.186-.08.44-.12.76-.12.24 0 .453.067.64.2.186.133.306.227.36.28 0 .133-.4.6-1.2 1.4Z" />
      <path d="M99.4 20.08c-.08.107-.24.293-.48.56l-.76.76c-1.84 1.84-3.64 3.2-5.4 4.08-1.76.88-3.48 1.32-5.16 1.32a2.65 2.65 0 0 1-1.76-.64c-.507-.453-.734-1.107-.68-1.96.026-.8.36-1.693 1-2.68a15.233 15.233 0 0 1 2.28-2.88 14.612 14.612 0 0 1 3.04-2.28c1.093-.613 2.146-.92 3.16-.92.826 0 1.4.147 1.72.44.346.267.506.613.48 1.04-.027.613-.267 1.2-.72 1.76a7.276 7.276 0 0 1-1.6 1.52c-.64.427-1.32.773-2.04 1.04s-1.387.4-2 .4c-.534 0-.947-.04-1.24-.12-.294-.107-.48-.16-.56-.16-.054 0-.16.147-.32.44-.134.293-.28.64-.44 1.04-.134.373-.267.76-.4 1.16-.107.373-.16.64-.16.8-.027.507.04.867.2 1.08.186.187.533.28 1.04.28.666 0 1.413-.133 2.24-.4.853-.293 1.72-.693 2.6-1.2a23.574 23.574 0 0 0 2.76-1.92 26.823 26.823 0 0 0 2.68-2.56c.16-.213.28-.347.36-.4.08-.08.146-.12.2-.12.106 0 .16.053.16.16 0 .027-.067.147-.2.36Zm-8.88-1.4a31.6 31.6 0 0 1-.48.56l-.48.64c-.134.213-.254.4-.36.56-.107.16-.16.267-.16.32-.027.107.053.187.24.24.213.027.466.04.76.04.4 0 .813-.027 1.24-.08.426-.08.906-.28 1.44-.6.266-.107.587-.307.96-.6s.733-.613 1.08-.96c.346-.347.64-.68.88-1 .266-.347.4-.613.4-.8.026-.293-.054-.507-.24-.64-.187-.16-.427-.24-.72-.24-.294 0-.64.067-1.04.2s-.814.32-1.24.56c-.4.24-.8.52-1.2.84-.4.293-.76.613-1.08.96Z" />
      <path d="M102.92 16.2c0 .08-.014.16-.04.24 0 .053-.054.16-.16.32l-.48.6c-.187.267-.467.64-.84 1.12.08 0 .32-.2.72-.6.773-.773 1.44-1.32 2-1.64.56-.347 1.12-.52 1.68-.52.32 0 .586.107.8.32.24.187.36.467.36.84 0 .56-.374 1.413-1.12 2.56-.24.373-.4.627-.48.76-.054.133-.08.267-.08.4.026.133.08.24.16.32.106.08.306.12.6.12.64 0 1.52-.333 2.64-1l.48-.24c.133-.08.226-.12.28-.12.053 0 .08.027.08.08 0 .107-.147.253-.44.44-.294.187-.64.387-1.04.6-.4.187-.814.36-1.24.52-.4.133-.72.2-.96.2-.454 0-.867-.12-1.24-.36-.374-.267-.56-.6-.56-1 0-.187.093-.467.28-.84.186-.4.386-.8.6-1.2.213-.4.413-.76.6-1.08l.28-.48c0-.187-.12-.28-.36-.28-.32 0-.76.187-1.32.56-.534.347-1.107.8-1.72 1.36a23.35 23.35 0 0 0-1.8 1.84A18.576 18.576 0 0 0 99.08 22c-.4.613-.747 1.213-1.04 1.8-.32.56-.614 1.067-.88 1.52a7.444 7.444 0 0 1-.84 1.04c-.267.293-.56.44-.88.44-.214 0-.414-.04-.6-.12-.187-.08-.28-.2-.28-.36 0-.16.093-.387.28-.68.16-.32.453-.747.88-1.28 1.04-1.387 1.893-2.56 2.56-3.52.64-.96 1.146-1.747 1.52-2.36.4-.64.693-1.133.88-1.48a8 8 0 0 1 .44-.8c.106-.16.213-.253.32-.28.106-.053.28-.08.52-.08.533 0 .853.12.96.36Z" />
      <path d="M112.8 16.2c0 .08-.014.16-.04.24 0 .053-.054.16-.16.32l-.48.6c-.187.267-.467.64-.84 1.12.08 0 .32-.2.72-.6.773-.773 1.44-1.32 2-1.64.56-.347 1.12-.52 1.68-.52.32 0 .586.107.8.32.24.187.36.467.36.84 0 .56-.374 1.413-1.12 2.56-.24.373-.4.627-.48.76-.054.133-.08.267-.08.4.026.133.08.24.16.32.106.08.306.12.6.12.64 0 1.52-.333 2.64-1l.48-.24c.133-.08.226-.12.28-.12.053 0 .08.027.08.08 0 .107-.147.253-.44.44-.294.187-.64.387-1.04.6-.4.187-.814.36-1.24.52-.4.133-.72.2-.96.2-.454 0-.867-.12-1.24-.36-.374-.267-.56-.6-.56-1 0-.187.093-.467.28-.84.186-.4.386-.8.6-1.2.213-.4.413-.76.6-1.08l.28-.48c0-.187-.12-.28-.36-.28-.32 0-.76.187-1.32.56-.534.347-1.107.8-1.72 1.36a23.35 23.35 0 0 0-1.8 1.84 18.494 18.494 0 0 0-1.52 1.96c-.4.613-.747 1.213-1.04 1.8-.32.56-.614 1.067-.88 1.52a7.532 7.532 0 0 1-.84 1.04c-.267.293-.56.44-.88.44-.214 0-.414-.04-.6-.12-.187-.08-.28-.2-.28-.36 0-.16.093-.387.28-.68.16-.32.453-.747.88-1.28 1.04-1.387 1.893-2.56 2.56-3.52.64-.96 1.146-1.747 1.52-2.36.4-.64.693-1.133.88-1.48a8 8 0 0 1 .44-.8c.106-.16.213-.253.32-.28.106-.053.28-.08.52-.08.533 0 .853.12.96.36Z" />
      <path d="M130.84 20.08c-.08.107-.24.293-.48.56l-.76.76c-1.84 1.84-3.64 3.2-5.4 4.08-1.76.88-3.48 1.32-5.16 1.32a2.65 2.65 0 0 1-1.76-.64c-.507-.453-.734-1.107-.68-1.96.026-.8.36-1.693 1-2.68a15.21 15.21 0 0 1 2.28-2.88 14.589 14.589 0 0 1 3.04-2.28c1.093-.613 2.146-.92 3.16-.92.826 0 1.4.147 1.72.44.346.267.506.613.48 1.04-.027.613-.267 1.2-.72 1.76a7.282 7.282 0 0 1-1.6 1.52c-.64.427-1.32.773-2.04 1.04s-1.387.4-2 .4c-.534 0-.947-.04-1.24-.12-.294-.107-.48-.16-.56-.16-.054 0-.16.147-.32.44-.134.293-.28.64-.44 1.04a52 52 0 0 0-.4 1.16c-.107.373-.16.64-.16.8-.027.507.04.867.2 1.08.186.187.533.28 1.04.28.666 0 1.413-.133 2.24-.4.853-.293 1.72-.693 2.6-1.2a23.675 23.675 0 0 0 2.76-1.92 26.92 26.92 0 0 0 2.68-2.56c.16-.213.28-.347.36-.4.08-.08.146-.12.2-.12.106 0 .16.053.16.16 0 .027-.067.147-.2.36Zm-8.88-1.4c-.134.16-.294.347-.48.56l-.48.64c-.134.213-.254.4-.36.56-.107.16-.16.267-.16.32-.027.107.053.187.24.24.213.027.466.04.76.04.4 0 .813-.027 1.24-.08.426-.08.906-.28 1.44-.6.266-.107.586-.307.96-.6a12.18 12.18 0 0 0 1.08-.96c.346-.347.64-.68.88-1 .266-.347.4-.613.4-.8.026-.293-.054-.507-.24-.64-.187-.16-.427-.24-.72-.24-.294 0-.64.067-1.04.2s-.814.32-1.24.56c-.4.24-.8.52-1.2.84-.4.293-.76.613-1.08.96Z" />
      <path d="M141.44 20.36c.293-.267.493-.467.6-.6.133-.16.24-.24.32-.24.026 0 .04.027.04.08 0 .08-.187.333-.56.76-.374.427-.814.907-1.32 1.44a45.54 45.54 0 0 1-2.96 2.84c-.374.32-.787.653-1.24 1-.454.32-.88.613-1.28.88-.374.293-.694.533-.96.72-.267.187-.4.293-.4.32v.12c.026.053.04.12.04.2 0 1.467-.387 2.853-1.16 4.16a12.816 12.816 0 0 1-2.8 3.4c-1.12.987-2.32 1.76-3.6 2.32-1.307.587-2.494.88-3.56.88-.854 0-1.507-.2-1.96-.6-.48-.4-.72-.88-.72-1.44 0-.453.2-.933.6-1.44.4-.507 1.053-1.093 1.96-1.76.88-.64 2.04-1.373 3.48-2.2 1.413-.827 3.146-1.8 5.2-2.92.48-.267.76-.44.84-.52.08-.08.12-.267.12-.56 0-.427-.134-.84-.4-1.24-.267-.4-.614-.6-1.04-.6-.16 0-.427.053-.8.16-.374.08-.76.173-1.16.28-.4.08-.747.173-1.04.28-.294.08-.427.12-.4.12-.4 0-.6-.08-.6-.24 0-.053.093-.12.28-.2.186-.107.626-.307 1.32-.6a17.057 17.057 0 0 0 3.44-2c1.066-.8 1.986-1.6 2.76-2.4.773-.8 1.386-1.533 1.84-2.2.453-.667.68-1.147.68-1.44a.761.761 0 0 0-.32-.64c-.214-.187-.547-.28-1-.28-.667 0-1.347.24-2.04.72-.694.453-1.267 1.093-1.72 1.92-.294.48-.52.8-.68.96-.16.133-.374.2-.64.2-.427 0-.64-.12-.64-.36 0-.507.2-1 .6-1.48.426-.48.933-.893 1.52-1.24a8.602 8.602 0 0 1 1.8-.88c.64-.213 1.16-.32 1.56-.32.72 0 1.373.187 1.96.56.586.373.88.853.88 1.44 0 .453-.174.987-.52 1.6-.347.613-.814 1.24-1.4 1.88a19.141 19.141 0 0 1-2 1.8 12.96 12.96 0 0 1-2.36 1.48l-.84.44.48.16c.4.133.733.32 1 .56.293.213.533.507.72.88.106.24.186.36.24.36.053 0 .226-.107.52-.32.32-.187.68-.413 1.08-.68.426-.293.84-.587 1.24-.88.426-.32.76-.587 1-.8a86.294 86.294 0 0 0 2.04-1.84 27.126 27.126 0 0 0 1.96-2Zm-9.72 8.76c.133-.4.2-.627.2-.68l-.44.24c-.267.16-.627.36-1.08.6-.427.24-.907.507-1.44.8-.56.32-1.094.613-1.6.88-.507.293-.974.56-1.4.8-.427.24-.747.427-.96.56-1.52.907-2.614 1.68-3.28 2.32-.667.667-1 1.267-1 1.8 0 .453.2.8.6 1.04.4.24.866.36 1.4.36.666 0 1.44-.24 2.32-.72.88-.453 1.76-1.08 2.64-1.88a15.11 15.11 0 0 0 2.36-2.76 11.711 11.711 0 0 0 1.68-3.36ZM43.12 1.92c0 .373-.053.733-.16 1.08-.08.32-.24.707-.48 1.16-.24.427-.573.96-1 1.6-.427.613-.987 1.4-1.68 2.36a232.854 232.854 0 0 0-3.8 5.56 85.885 85.885 0 0 0-3.2 5.12c-.907 1.627-1.627 3.133-2.16 4.52-.533 1.36-.8 2.573-.8 3.64 0 .4.027.76.08 1.08.053.347.147.613.28.8.027.053.12.12.28.2l.56.32c.187.107.36.2.52.28l.24.12c0 .107-.12.2-.36.28-.213.08-.467.12-.76.12-1.093 0-1.867-.32-2.32-.96-.453-.613-.68-1.32-.68-2.12 0-1.067.213-2.173.64-3.32.453-1.147 1.107-2.52 1.96-4.12l.88-1.68-.24.04a5.72 5.72 0 0 1-1.2.12c-.773 0-1.56-.12-2.36-.36a8.38 8.38 0 0 1-1.08-.44L25 16.6c-.427-.267-.8-.493-1.12-.68-.32-.187-.493-.28-.52-.28-.053 0-.147.08-.28.24-.107.16-.253.347-.44.56a131.447 131.447 0 0 1-3.88 4.28c-1.36 1.44-2.6 2.707-3.72 3.8-.96.933-1.84 1.72-2.64 2.36-.8.667-1.56 1.2-2.28 1.6-.72.427-1.413.733-2.08.92a7.53 7.53 0 0 1-2.04.28c-.96 0-1.813-.147-2.56-.44-.747-.293-1.373-.693-1.88-1.2A4.871 4.871 0 0 1 .4 26.36a4.672 4.672 0 0 1-.4-1.88c0-.827.2-1.707.6-2.64.427-.96 1-1.84 1.72-2.64s1.56-1.467 2.52-2c.96-.533 1.987-.8 3.08-.8.667 0 1.267.107 1.8.32.533.213.973.467 1.32.76.373.293.653.6.84.92.187.293.28.547.28.76 0 .293-.12.547-.36.76-.213.213-.427.32-.64.32-.133 0-.293-.067-.48-.2-.187-.16-.48-.427-.88-.8-.613-.587-1.093-.973-1.44-1.16a2.52 2.52 0 0 0-1.08-.4c-.72 0-1.467.16-2.24.48-.773.32-1.48.773-2.12 1.36a7.525 7.525 0 0 0-1.6 2.12c-.4.8-.6 1.693-.6 2.68 0 .747.133 1.413.4 2 .293.587.68 1.08 1.16 1.48.507.4 1.08.693 1.72.88.667.213 1.373.32 2.12.32 1.173 0 2.28-.253 3.32-.76 1.067-.507 2.267-1.347 3.6-2.52.347-.32.827-.787 1.44-1.4a73.37 73.37 0 0 0 2.04-2.04 93.638 93.638 0 0 0 2.24-2.32c.747-.8 1.427-1.533 2.04-2.2a42.34 42.34 0 0 0 1.48-1.68c.4-.48.6-.773.6-.88 0-.027-.067-.08-.2-.16a2.951 2.951 0 0 0-.52-.32 11.744 11.744 0 0 0-.6-.4c-.213-.133-.4-.24-.56-.32-.293-.16-.547-.253-.76-.28a7.805 7.805 0 0 0-.96-.04c-.507 0-.96.093-1.36.28-.373.16-.76.44-1.16.84-.24.24-.4.387-.48.44-.053.027-.173.04-.36.04-.347 0-.52-.067-.52-.2 0-.24.133-.467.4-.68.293-.24.64-.453 1.04-.64s.827-.333 1.28-.44a4.43 4.43 0 0 1 1.24-.2c.88 0 1.973.373 3.28 1.12.4.24.653.36.76.36l.28-.28c.16-.187.347-.4.56-.64 3.92-4.56 7.227-7.973 9.92-10.24C36.853 1.147 39.107 0 40.92 0c.693 0 1.227.147 1.6.44.4.293.6.787.6 1.48ZM32.44 15.96c.667-1.067 1.4-2.187 2.2-3.36.8-1.2 1.733-2.547 2.8-4.04a98.275 98.275 0 0 0 2.04-2.96c.533-.8.947-1.453 1.24-1.96.293-.533.493-.973.6-1.32.107-.347.16-.68.16-1 0-.507-.213-.76-.64-.76-.613 0-1.333.2-2.16.6-.827.4-1.72.96-2.68 1.68a32.892 32.892 0 0 0-3.04 2.52 51.924 51.924 0 0 0-3.24 3.2c-.133.16-.373.427-.72.8-.347.373-.733.8-1.16 1.28-.427.453-.867.947-1.32 1.48-.453.507-.88.973-1.28 1.4-.373.4-.68.747-.92 1.04l-.36.44c0 .053.213.227.64.52.72.533 1.387.947 2 1.24.64.293 1.213.52 1.72.68.507.133.933.227 1.28.28.347.027.627.04.84.04h.48a.697.697 0 0 0 .36-.2c.133-.107.28-.28.44-.52.187-.267.427-.627.72-1.08Z" />
      <path d="m40.48 24.56 2.04-3.04-1.28 1.24c-.747.72-1.4 1.32-1.96 1.8s-1.067.867-1.52 1.16a6.282 6.282 0 0 1-1.2.6c-.373.107-.733.16-1.08.16-.533 0-.96-.147-1.28-.44-.32-.293-.48-.72-.48-1.28 0-1.04.347-2.093 1.04-3.16a12.405 12.405 0 0 1 2.44-2.84 14.905 14.905 0 0 1 3.08-2.08c1.093-.533 2.053-.8 2.88-.8.56 0 1 .12 1.32.36.32.24.48.587.48 1.04 0 .133-.027.28-.08.44-.027.16-.04.28-.04.36 0 .027.013.04.04.04.32-.48.587-.853.8-1.12.24-.293.453-.52.64-.68.187-.16.373-.253.56-.28.187-.053.4-.08.64-.08.373 0 .6.053.68.16.107.107.16.213.16.32 0 .027-.2.293-.6.8-.4.48-.893 1.093-1.48 1.84-.587.72-1.24 1.507-1.96 2.36a93.592 93.592 0 0 0-1.92 2.44 50.67 50.67 0 0 0-1.48 2.04c-.4.56-.6.907-.6 1.04 0 .027.173-.067.52-.28.373-.187.893-.467 1.56-.84 1.44-.827 2.68-1.64 3.72-2.44a26.814 26.814 0 0 0 3.04-2.76l.8-.8c.16-.16.267-.24.32-.24.053 0 .08.027.08.08v.04c0 .08-.027.147-.08.2-.32.533-.813 1.12-1.48 1.76a34.563 34.563 0 0 1-2.24 1.88c-.8.613-1.627 1.2-2.48 1.76a31.592 31.592 0 0 1-2.32 1.4c-.56.293-.987.52-1.28.68-.267.16-.48.307-.64.44-.16.133-.307.28-.44.44a31.16 31.16 0 0 1-.48.8c-.96 1.493-1.733 2.68-2.32 3.56-.587.907-1.067 1.64-1.44 2.2-.4.56-.747 1.013-1.04 1.36-.293.347-.627.693-1 1.04a12.18 12.18 0 0 1-.96.88c-.293.24-.573.427-.84.56-.267.16-.547.267-.84.32a5.63 5.63 0 0 1-1 .08c-.88 0-1.533-.213-1.96-.64-.427-.4-.64-.92-.64-1.56 0-.507.267-1.133.8-1.88.507-.747 1.227-1.52 2.16-2.32.933-.8 2.053-1.6 3.36-2.4 1.28-.8 2.693-1.533 4.24-2.2l.96-.44 2.08-3.08Zm-5.56 8.04c.4-.507.773-1.013 1.12-1.52.347-.48.653-.907.92-1.28s.467-.68.6-.92l.24-.32c-.053 0-.293.093-.72.28a31.143 31.143 0 0 0-3.64 1.92 25.146 25.146 0 0 0-2.92 2.08c-.853.693-1.52 1.373-2 2.04s-.72 1.253-.72 1.76c0 .747.36 1.12 1.08 1.12.773 0 1.667-.44 2.68-1.32.987-.88 2.107-2.16 3.36-3.84Zm7.04-11.24c.507-.507.907-.947 1.2-1.32.293-.373.507-.693.64-.96.133-.293.213-.547.24-.76.027-.213.04-.413.04-.6 0-.347-.093-.627-.28-.84a.872.872 0 0 0-.72-.36c-.453 0-1.08.28-1.88.84-.8.533-1.587 1.213-2.36 2.04-.773.8-1.44 1.693-2 2.68-.56.987-.84 1.92-.84 2.8 0 .16.053.32.16.48.107.16.213.24.32.24.16 0 .427-.107.8-.32.373-.24.8-.547 1.28-.92a27.416 27.416 0 0 0 1.64-1.32 51.087 51.087 0 0 0 1.76-1.68Z" />
      <path d="m54.32 24.56 2.04-3.04-1.28 1.24c-.747.72-1.4 1.32-1.96 1.8s-1.067.867-1.52 1.16a6.277 6.277 0 0 1-1.2.6c-.373.107-.733.16-1.08.16-.533 0-.96-.147-1.28-.44-.32-.293-.48-.72-.48-1.28 0-1.04.347-2.093 1.04-3.16a12.405 12.405 0 0 1 2.44-2.84 14.907 14.907 0 0 1 3.08-2.08c1.093-.533 2.053-.8 2.88-.8.56 0 1 .12 1.32.36.32.24.48.587.48 1.04a1.4 1.4 0 0 1-.08.44c-.027.16-.04.28-.04.36 0 .027.013.04.04.04.32-.48.587-.853.8-1.12.24-.293.453-.52.64-.68.187-.16.373-.253.56-.28.187-.053.4-.08.64-.08.373 0 .6.053.68.16.107.107.16.213.16.32 0 .027-.2.293-.6.8-.4.48-.893 1.093-1.48 1.84-.587.72-1.24 1.507-1.96 2.36a93.592 93.592 0 0 0-1.92 2.44 50.768 50.768 0 0 0-1.48 2.04c-.4.56-.6.907-.6 1.04 0 .027.173-.067.52-.28a40.49 40.49 0 0 0 1.56-.84c1.44-.827 2.68-1.64 3.72-2.44A26.814 26.814 0 0 0 63 20.64l.8-.8c.16-.16.267-.24.32-.24.053 0 .08.027.08.08v.04c0 .08-.027.147-.08.2-.32.533-.813 1.12-1.48 1.76a34.536 34.536 0 0 1-2.24 1.88c-.8.613-1.627 1.2-2.48 1.76a31.57 31.57 0 0 1-2.32 1.4c-.56.293-.987.52-1.28.68-.267.16-.48.307-.64.44-.16.133-.307.28-.44.44-.107.187-.267.453-.48.8-.96 1.493-1.733 2.68-2.32 3.56-.587.907-1.067 1.64-1.44 2.2-.4.56-.747 1.013-1.04 1.36-.293.347-.627.693-1 1.04a12.18 12.18 0 0 1-.96.88c-.293.24-.573.427-.84.56-.267.16-.547.267-.84.32a5.63 5.63 0 0 1-1 .08c-.88 0-1.533-.213-1.96-.64-.427-.4-.64-.92-.64-1.56 0-.507.267-1.133.8-1.88.507-.747 1.227-1.52 2.16-2.32.933-.8 2.053-1.6 3.36-2.4 1.28-.8 2.693-1.533 4.24-2.2l.96-.44 2.08-3.08Zm-5.56 8.04c.4-.507.773-1.013 1.12-1.52.347-.48.653-.907.92-1.28s.467-.68.6-.92l.24-.32c-.053 0-.293.093-.72.28a31.15 31.15 0 0 0-3.64 1.92 25.146 25.146 0 0 0-2.92 2.08c-.853.693-1.52 1.373-2 2.04s-.72 1.253-.72 1.76c0 .747.36 1.12 1.08 1.12.773 0 1.667-.44 2.68-1.32.987-.88 2.107-2.16 3.36-3.84Zm7.04-11.24c.507-.507.907-.947 1.2-1.32.293-.373.507-.693.64-.96a2.71 2.71 0 0 0 .24-.76c.027-.213.04-.413.04-.6 0-.347-.093-.627-.28-.84a.872.872 0 0 0-.72-.36c-.453 0-1.08.28-1.88.84-.8.533-1.587 1.213-2.36 2.04-.773.8-1.44 1.693-2 2.68-.56.987-.84 1.92-.84 2.8 0 .16.053.32.16.48.107.16.213.24.32.24.16 0 .427-.107.8-.32.373-.24.8-.547 1.28-.92a27.384 27.384 0 0 0 1.64-1.32 50.996 50.996 0 0 0 1.76-1.68Z" />
      <path d="M74.92 20.12c.347-.453.587-.68.72-.68.027 0 .067.04.12.12 0 .08-.093.267-.28.56-.187.267-.547.707-1.08 1.32-.587.693-1.16 1.36-1.72 2-.56.613-1.12 1.16-1.68 1.64-.56.48-1.12.867-1.68 1.16-.533.293-1.08.44-1.64.44-.453 0-.8-.133-1.04-.4s-.36-.6-.36-1c0-.213.04-.44.12-.68.08-.267.12-.427.12-.48-.96.88-1.773 1.507-2.44 1.88-.64.373-1.267.56-1.88.56-.96 0-1.44-.44-1.44-1.32 0-.32.04-.627.12-.92.08-.32.24-.68.48-1.08.213-.427.52-.92.92-1.48.4-.56.92-1.267 1.56-2.12.747-.933 1.293-1.667 1.64-2.2.347-.533.613-.933.8-1.2.213-.293.4-.467.56-.52.16-.08.427-.12.8-.12a1.2 1.2 0 0 1 .64.2c.24.107.36.213.36.32 0 .107-.387.56-1.16 1.36-1.76 1.813-2.987 3.28-3.68 4.4-.667 1.12-1 2.067-1 2.84 0 .213.04.4.12.56.08.16.213.24.4.24.347 0 .76-.187 1.24-.56.507-.373 1.027-.84 1.56-1.4a28.76 28.76 0 0 0 1.68-1.84c.56-.693 1.093-1.36 1.6-2 .747-.933 1.293-1.667 1.64-2.2l.84-1.2c.213-.293.387-.467.52-.52.16-.08.427-.12.8-.12a1.2 1.2 0 0 1 .64.2c.24.107.36.213.36.32 0 .107-.387.56-1.16 1.36-1.76 1.813-2.987 3.28-3.68 4.4-.667 1.12-1 2.067-1 2.84 0 .533.187.8.56.8.24 0 .573-.133 1-.4.453-.293.947-.68 1.48-1.16a27.418 27.418 0 0 0 1.68-1.76 38.819 38.819 0 0 0 1.84-2.16Z" />
      <path d="M85.48 6.8c.293 0 .48.013.56.04.106.027.16.107.16.24s-.133.373-.4.72c-.24.347-.56.76-.96 1.24-.4.48-.853 1.013-1.36 1.6-.48.587-.947 1.173-1.4 1.76-.507.64-.92 1.173-1.24 1.6-.294.4-.534.72-.72.96-.16.24-.267.413-.32.52-.053.08-.08.133-.08.16 0 .08.12.12.36.12h.64c.186 0 .347.027.48.08.133.027.2.107.2.24 0 .053-.027.093-.08.12-.053.027-.24.04-.56.04h-.48l-1.08-.04-.92 1.28c-1.387 1.92-2.427 3.587-3.12 5-.694 1.413-1.04 2.373-1.04 2.88 0 .293.04.48.12.56.08.053.213.08.4.08.24 0 .493-.053.76-.16.293-.133.613-.333.96-.6.373-.293.8-.667 1.28-1.12.48-.48 1.04-1.08 1.68-1.8.96-1.067 1.6-1.787 1.92-2.16.347-.373.547-.56.6-.56.026 0 .053.027.08.08.026.027-.04.147-.2.36a92.8 92.8 0 0 1-.64.84c-.267.32-.573.693-.92 1.12-.347.427-.707.853-1.08 1.28-1.174 1.36-2.2 2.347-3.08 2.96-.88.587-1.653.88-2.32.88-.64 0-1.08-.133-1.32-.4-.267-.24-.4-.573-.4-1 0-.347.147-.827.44-1.44.293-.64.68-1.347 1.16-2.12.48-.773 1.026-1.6 1.64-2.48a59.213 59.213 0 0 1 1.92-2.6l.64-.84h-.72c-.374 0-.627-.04-.76-.12-.133-.107-.2-.227-.2-.36 0-.053.053-.08.16-.08.107-.027.386-.04.84-.04h1.04l1.04-1.52a146.2 146.2 0 0 0 2.68-3.84 47.34 47.34 0 0 1 1.6-2.2c.4-.533.733-.88 1-1.04.293-.16.64-.24 1.04-.24Z" />
      <path d="M86.2 13.36a.96.96 0 0 1 .2-.56c.16-.187.333-.333.52-.44.213-.133.427-.24.64-.32.24-.08.44-.12.6-.12.213 0 .4.027.56.08.16.053.24.187.24.4 0 .373-.2.693-.6.96-.373.267-.867.4-1.48.4a1 1 0 0 1-.52-.12c-.107-.107-.16-.2-.16-.28Zm-1.2 4.4c-.853.88-1.587 1.68-2.2 2.4a21.097 21.097 0 0 0-1.44 1.96c-.347.56-.6 1.08-.76 1.56-.16.453-.24.88-.24 1.28 0 .56.16.84.48.84.266 0 .613-.133 1.04-.4.427-.293.907-.68 1.44-1.16a21.75 21.75 0 0 0 1.72-1.76 38.819 38.819 0 0 0 1.84-2.16c.347-.453.587-.68.72-.68.08 0 .12.053.12.16 0 .08-.107.267-.32.56-.214.293-.56.72-1.04 1.28-.534.64-1.08 1.28-1.64 1.92-.56.613-1.12 1.173-1.68 1.68-.56.48-1.12.867-1.68 1.16-.56.32-1.12.48-1.68.48-.454 0-.8-.133-1.04-.4s-.36-.613-.36-1.04c0-.293.053-.587.16-.88.08-.32.24-.68.48-1.08.24-.427.56-.92.96-1.48.4-.56.907-1.253 1.52-2.08a72.614 72.614 0 0 0 1.48-2.16c.373-.56.68-.973.92-1.24s.453-.44.64-.52c.186-.08.44-.12.76-.12.24 0 .453.067.64.2.186.133.306.227.36.28 0 .133-.4.6-1.2 1.4Z" />
      <path d="M99.4 20.08c-.08.107-.24.293-.48.56l-.76.76c-1.84 1.84-3.64 3.2-5.4 4.08-1.76.88-3.48 1.32-5.16 1.32a2.65 2.65 0 0 1-1.76-.64c-.507-.453-.734-1.107-.68-1.96.026-.8.36-1.693 1-2.68a15.233 15.233 0 0 1 2.28-2.88 14.612 14.612 0 0 1 3.04-2.28c1.093-.613 2.146-.92 3.16-.92.826 0 1.4.147 1.72.44.346.267.506.613.48 1.04-.027.613-.267 1.2-.72 1.76a7.276 7.276 0 0 1-1.6 1.52c-.64.427-1.32.773-2.04 1.04s-1.387.4-2 .4c-.534 0-.947-.04-1.24-.12-.294-.107-.48-.16-.56-.16-.054 0-.16.147-.32.44-.134.293-.28.64-.44 1.04-.134.373-.267.76-.4 1.16-.107.373-.16.64-.16.8-.027.507.04.867.2 1.08.186.187.533.28 1.04.28.666 0 1.413-.133 2.24-.4.853-.293 1.72-.693 2.6-1.2a23.574 23.574 0 0 0 2.76-1.92 26.823 26.823 0 0 0 2.68-2.56c.16-.213.28-.347.36-.4.08-.08.146-.12.2-.12.106 0 .16.053.16.16 0 .027-.067.147-.2.36Zm-8.88-1.4a31.6 31.6 0 0 1-.48.56l-.48.64c-.134.213-.254.4-.36.56-.107.16-.16.267-.16.32-.027.107.053.187.24.24.213.027.466.04.76.04.4 0 .813-.027 1.24-.08.426-.08.906-.28 1.44-.6.266-.107.587-.307.96-.6s.733-.613 1.08-.96c.346-.347.64-.68.88-1 .266-.347.4-.613.4-.8.026-.293-.054-.507-.24-.64-.187-.16-.427-.24-.72-.24-.294 0-.64.067-1.04.2s-.814.32-1.24.56c-.4.24-.8.52-1.2.84-.4.293-.76.613-1.08.96Z" />
      <path d="M102.92 16.2c0 .08-.014.16-.04.24 0 .053-.054.16-.16.32l-.48.6c-.187.267-.467.64-.84 1.12.08 0 .32-.2.72-.6.773-.773 1.44-1.32 2-1.64.56-.347 1.12-.52 1.68-.52.32 0 .586.107.8.32.24.187.36.467.36.84 0 .56-.374 1.413-1.12 2.56-.24.373-.4.627-.48.76-.054.133-.08.267-.08.4.026.133.08.24.16.32.106.08.306.12.6.12.64 0 1.52-.333 2.64-1l.48-.24c.133-.08.226-.12.28-.12.053 0 .08.027.08.08 0 .107-.147.253-.44.44-.294.187-.64.387-1.04.6-.4.187-.814.36-1.24.52-.4.133-.72.2-.96.2-.454 0-.867-.12-1.24-.36-.374-.267-.56-.6-.56-1 0-.187.093-.467.28-.84.186-.4.386-.8.6-1.2.213-.4.413-.76.6-1.08l.28-.48c0-.187-.12-.28-.36-.28-.32 0-.76.187-1.32.56-.534.347-1.107.8-1.72 1.36a23.35 23.35 0 0 0-1.8 1.84A18.576 18.576 0 0 0 99.08 22c-.4.613-.747 1.213-1.04 1.8-.32.56-.614 1.067-.88 1.52a7.444 7.444 0 0 1-.84 1.04c-.267.293-.56.44-.88.44-.214 0-.414-.04-.6-.12-.187-.08-.28-.2-.28-.36 0-.16.093-.387.28-.68.16-.32.453-.747.88-1.28 1.04-1.387 1.893-2.56 2.56-3.52.64-.96 1.146-1.747 1.52-2.36.4-.64.693-1.133.88-1.48a8 8 0 0 1 .44-.8c.106-.16.213-.253.32-.28.106-.053.28-.08.52-.08.533 0 .853.12.96.36Z" />
      <path d="M112.8 16.2c0 .08-.014.16-.04.24 0 .053-.054.16-.16.32l-.48.6c-.187.267-.467.64-.84 1.12.08 0 .32-.2.72-.6.773-.773 1.44-1.32 2-1.64.56-.347 1.12-.52 1.68-.52.32 0 .586.107.8.32.24.187.36.467.36.84 0 .56-.374 1.413-1.12 2.56-.24.373-.4.627-.48.76-.054.133-.08.267-.08.4.026.133.08.24.16.32.106.08.306.12.6.12.64 0 1.52-.333 2.64-1l.48-.24c.133-.08.226-.12.28-.12.053 0 .08.027.08.08 0 .107-.147.253-.44.44-.294.187-.64.387-1.04.6-.4.187-.814.36-1.24.52-.4.133-.72.2-.96.2-.454 0-.867-.12-1.24-.36-.374-.267-.56-.6-.56-1 0-.187.093-.467.28-.84.186-.4.386-.8.6-1.2.213-.4.413-.76.6-1.08l.28-.48c0-.187-.12-.28-.36-.28-.32 0-.76.187-1.32.56-.534.347-1.107.8-1.72 1.36a23.35 23.35 0 0 0-1.8 1.84 18.494 18.494 0 0 0-1.52 1.96c-.4.613-.747 1.213-1.04 1.8-.32.56-.614 1.067-.88 1.52a7.532 7.532 0 0 1-.84 1.04c-.267.293-.56.44-.88.44-.214 0-.414-.04-.6-.12-.187-.08-.28-.2-.28-.36 0-.16.093-.387.28-.68.16-.32.453-.747.88-1.28 1.04-1.387 1.893-2.56 2.56-3.52.64-.96 1.146-1.747 1.52-2.36.4-.64.693-1.133.88-1.48a8 8 0 0 1 .44-.8c.106-.16.213-.253.32-.28.106-.053.28-.08.52-.08.533 0 .853.12.96.36Z" />
      <path d="M130.84 20.08c-.08.107-.24.293-.48.56l-.76.76c-1.84 1.84-3.64 3.2-5.4 4.08-1.76.88-3.48 1.32-5.16 1.32a2.65 2.65 0 0 1-1.76-.64c-.507-.453-.734-1.107-.68-1.96.026-.8.36-1.693 1-2.68a15.21 15.21 0 0 1 2.28-2.88 14.589 14.589 0 0 1 3.04-2.28c1.093-.613 2.146-.92 3.16-.92.826 0 1.4.147 1.72.44.346.267.506.613.48 1.04-.027.613-.267 1.2-.72 1.76a7.282 7.282 0 0 1-1.6 1.52c-.64.427-1.32.773-2.04 1.04s-1.387.4-2 .4c-.534 0-.947-.04-1.24-.12-.294-.107-.48-.16-.56-.16-.054 0-.16.147-.32.44-.134.293-.28.64-.44 1.04a52 52 0 0 0-.4 1.16c-.107.373-.16.64-.16.8-.027.507.04.867.2 1.08.186.187.533.28 1.04.28.666 0 1.413-.133 2.24-.4.853-.293 1.72-.693 2.6-1.2a23.675 23.675 0 0 0 2.76-1.92 26.92 26.92 0 0 0 2.68-2.56c.16-.213.28-.347.36-.4.08-.08.146-.12.2-.12.106 0 .16.053.16.16 0 .027-.067.147-.2.36Zm-8.88-1.4c-.134.16-.294.347-.48.56l-.48.64c-.134.213-.254.4-.36.56-.107.16-.16.267-.16.32-.027.107.053.187.24.24.213.027.466.04.76.04.4 0 .813-.027 1.24-.08.426-.08.906-.28 1.44-.6.266-.107.586-.307.96-.6a12.18 12.18 0 0 0 1.08-.96c.346-.347.64-.68.88-1 .266-.347.4-.613.4-.8.026-.293-.054-.507-.24-.64-.187-.16-.427-.24-.72-.24-.294 0-.64.067-1.04.2s-.814.32-1.24.56c-.4.24-.8.52-1.2.84-.4.293-.76.613-1.08.96Z" />
      <path d="M141.44 20.36c.293-.267.493-.467.6-.6.133-.16.24-.24.32-.24.026 0 .04.027.04.08 0 .08-.187.333-.56.76-.374.427-.814.907-1.32 1.44a45.54 45.54 0 0 1-2.96 2.84c-.374.32-.787.653-1.24 1-.454.32-.88.613-1.28.88-.374.293-.694.533-.96.72-.267.187-.4.293-.4.32v.12c.026.053.04.12.04.2 0 1.467-.387 2.853-1.16 4.16a12.816 12.816 0 0 1-2.8 3.4c-1.12.987-2.32 1.76-3.6 2.32-1.307.587-2.494.88-3.56.88-.854 0-1.507-.2-1.96-.6-.48-.4-.72-.88-.72-1.44 0-.453.2-.933.6-1.44.4-.507 1.053-1.093 1.96-1.76.88-.64 2.04-1.373 3.48-2.2 1.413-.827 3.146-1.8 5.2-2.92.48-.267.76-.44.84-.52.08-.08.12-.267.12-.56 0-.427-.134-.84-.4-1.24-.267-.4-.614-.6-1.04-.6-.16 0-.427.053-.8.16-.374.08-.76.173-1.16.28-.4.08-.747.173-1.04.28-.294.08-.427.12-.4.12-.4 0-.6-.08-.6-.24 0-.053.093-.12.28-.2.186-.107.626-.307 1.32-.6a17.057 17.057 0 0 0 3.44-2c1.066-.8 1.986-1.6 2.76-2.4.773-.8 1.386-1.533 1.84-2.2.453-.667.68-1.147.68-1.44a.761.761 0 0 0-.32-.64c-.214-.187-.547-.28-1-.28-.667 0-1.347.24-2.04.72-.694.453-1.267 1.093-1.72 1.92-.294.48-.52.8-.68.96-.16.133-.374.2-.64.2-.427 0-.64-.12-.64-.36 0-.507.2-1 .6-1.48.426-.48.933-.893 1.52-1.24a8.602 8.602 0 0 1 1.8-.88c.64-.213 1.16-.32 1.56-.32.72 0 1.373.187 1.96.56.586.373.88.853.88 1.44 0 .453-.174.987-.52 1.6-.347.613-.814 1.24-1.4 1.88a19.141 19.141 0 0 1-2 1.8 12.96 12.96 0 0 1-2.36 1.48l-.84.44.48.16c.4.133.733.32 1 .56.293.213.533.507.72.88.106.24.186.36.24.36.053 0 .226-.107.52-.32.32-.187.68-.413 1.08-.68.426-.293.84-.587 1.24-.88.426-.32.76-.587 1-.8a86.294 86.294 0 0 0 2.04-1.84 27.126 27.126 0 0 0 1.96-2Zm-9.72 8.76c.133-.4.2-.627.2-.68l-.44.24c-.267.16-.627.36-1.08.6-.427.24-.907.507-1.44.8-.56.32-1.094.613-1.6.88-.507.293-.974.56-1.4.8-.427.24-.747.427-.96.56-1.52.907-2.614 1.68-3.28 2.32-.667.667-1 1.267-1 1.8 0 .453.2.8.6 1.04.4.24.866.36 1.4.36.666 0 1.44-.24 2.32-.72.88-.453 1.76-1.08 2.64-1.88a15.11 15.11 0 0 0 2.36-2.76 11.711 11.711 0 0 0 1.68-3.36Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h142.4v39.08H0z" />
      </clipPath>
    </defs>
  </svg>
);
