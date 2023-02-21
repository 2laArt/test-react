export const Loader = ({ size }) => (
  <svg
    xmlnssvg="http://www.w3.org/2000/svg"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    version="1.0"
    width={size}
    height={size}
    viewBox="0 0 128 128"
    xmlSpace="preserve"
  >
    <rect x="0" y="0" width="100%" height="100%" fill="rgba(0,0,0,0)" />
    <g>
      <linearGradient id="linear-gradient">
        <stop offset="0%" stopColor="rgb(150, 150, 150)" />
        <stop offset="100%" stopColor="#0008ff" />
      </linearGradient>
      <path
        d="M63.85 0A63.85 63.85 0 1 1 0 63.85 63.85 63.85 0 0 1 63.85 0zm.65 19.5a44 44 0 1 1-44 44 44 44 0 0 1 44-44z"
        fill="url(#linear-gradient)"
        fillRule="evenodd"
      />
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 64 64"
        to="360 64 64"
        dur="1080ms"
        repeatCount="indefinite"
      ></animateTransform>
    </g>
  </svg>
);
