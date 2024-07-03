import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
 * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

/* HTML: <div class="loader"></div> */
.loader {
  --s: 50px;

  --_d: calc(0.353 * var(--s));
  width: calc(var(--s) + var(--_d));
  aspect-ratio: 1;
  display: grid;
}
.loader:before,
.loader:after {
  content: "";
  grid-area: 1/1;
  clip-path: polygon(
    var(--_d) 0,
    100% 0,
    100% calc(100% - var(--_d)),
    calc(100% - var(--_d)) 100%,
    0 100%,
    0 var(--_d)
  );
  background: conic-gradient(
    from -90deg at calc(100% - var(--_d)) var(--_d),
    #fff 135deg,
    #666 0 270deg,
    #aaa 0
  );
  animation: l6 2s infinite;
}
.loader:after {
  animation-delay: -1s;
}
@keyframes l6 {
  0% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(60px, 0);
  }
  50% {
    transform: translate(60px, 60px);
  }
  75% {
    transform: translate(0, 60px);
  }
  100% {
    transform: translate(0, 0);
  }
}

`;

export default GlobalStyles;
