export const SearchIcon = ({ className }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.10855 18.2134C11.3088 18.2134 13.3297 17.4263 14.9076 16.123L18.5685 19.784C18.7113 19.9268 18.898 20 19.0847 20C19.2715 20 19.4582 19.9268 19.601 19.784C19.8865 19.4984 19.8865 19.0335 19.601 18.7479L15.9546 15.1016C17.3604 13.4981 18.2134 11.4003 18.2134 9.10855C18.2134 4.08567 14.1278 0 9.10489 0C4.08201 0 0 4.08201 0 9.10489C0 14.1278 4.08567 18.2134 9.10855 18.2134ZM9.10855 1.46074C13.3223 1.46074 16.7527 4.88742 16.7527 9.10489C16.7527 13.3223 13.3223 16.749 9.10855 16.749C4.89475 16.749 1.4644 13.3187 1.4644 9.10489C1.4644 4.89109 4.89475 1.46074 9.10855 1.46074Z"
        fill="#242424"
      />
    </svg>
  );
};

export const MoreIcon = ({ className, onClick }) => {
  return (
    <svg
      onClick={onClick}
      width="19"
      height="14"
      viewBox="0 0 19 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <line y1="1" x2="13" y2="1" stroke="#242424" strokeWidth="2" />
      <line y1="7" x2="19" y2="7" stroke="#242424" strokeWidth="2" />
      <line x1="6" y1="13" x2="19" y2="13" stroke="#242424" strokeWidth="2" />
    </svg>
  );
};

export const ArrowDownIcon = ({ className }) => {
  return (
    <svg
      width="24"
      height="33"
      viewBox="0 0 24 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 2V30.5M12 30.5L22 20.5M12 30.5L2 20.5"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const FireIcon = ({ className }) => {
  return (
    <svg
      width="70"
      height="80"
      viewBox="0 0 70 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter="url(#filter0_d_85_601)">
        <path
          d="M36.2468 31.25C37.0598 32.3881 37.4968 33.7519 37.4968 35.1506V36.5C37.9253 36.5 38.3414 36.3568 38.6791 36.0931C39.0168 35.8294 39.2567 35.4605 39.3606 35.0448L39.4968 34.5L39.8663 34.9434C40.4621 35.6583 40.7854 36.561 40.7789 37.4915C40.7725 38.4221 40.4367 39.3202 39.8311 40.0268C39.6041 40.2915 39.4855 40.6322 39.4988 40.9806C39.5122 41.3291 39.6565 41.6596 39.9031 41.9062C40.0407 42.0439 40.2059 42.151 40.3877 42.2205C40.5696 42.29 40.7641 42.3203 40.9584 42.3096C41.1528 42.2988 41.3427 42.2471 41.5158 42.158C41.6889 42.0688 41.8412 41.9441 41.9628 41.7921L42.9968 40.5L43.9968 43C44.4503 44.5115 44.486 46.1177 44.1002 47.6479C43.7144 49.1781 42.9215 50.5753 41.8056 51.6912L41.6795 51.8173C39.9619 53.535 37.6322 54.5 35.2031 54.5H34.1828C32.6011 54.5 31.0464 54.0904 29.67 53.3111C28.2936 52.5318 27.1425 51.4094 26.3287 50.0531C25.3543 48.4291 24.9073 46.5429 25.0492 44.6542C25.1911 42.7656 25.915 40.9674 27.1213 39.5072L31.169 34.6073C31.5679 34.1244 31.8242 33.5399 31.9093 32.9195C31.9943 32.299 31.9046 31.6671 31.6503 31.0947C31.3276 30.3688 31.2719 29.5521 31.4932 28.789C31.7144 28.026 32.1983 27.3658 32.8593 26.925L34.9968 25.5V27.3494C34.9968 28.7481 35.4339 30.1119 36.2468 31.25Z"
          fill="url(#paint0_linear_85_601)"
        />
        <path
          d="M38.689 51.0882L38.6934 51.0838C39.4711 50.3001 40.026 49.3234 40.3009 48.2541C40.5758 47.1848 40.5608 46.0616 40.2575 45L38.8029 46.4546C38.6657 46.5919 38.5027 46.7008 38.3233 46.7751C38.144 46.8494 37.9517 46.8877 37.7576 46.8877C37.5635 46.8877 37.3712 46.8494 37.1919 46.7751C37.0125 46.7008 36.8495 46.5919 36.7123 46.4546C36.4514 46.1938 36.2974 45.8448 36.2807 45.4763C36.2639 45.1078 36.3855 44.7463 36.6217 44.4629C37.108 43.8794 37.4136 43.1667 37.5012 42.4122C37.5887 41.6577 37.4545 40.8941 37.1148 40.2147L34.7575 35.5L34.395 39.4875C34.3515 39.9657 34.2119 40.4303 33.9845 40.8532C33.7571 41.2762 33.4466 41.6488 33.0717 41.9489L31.0109 43.5976C30.4639 44.0352 30.0223 44.5902 29.7188 45.2216C29.4154 45.853 29.2578 46.5445 29.2578 47.2451V47.8125C29.2578 48.4973 29.4084 49.1736 29.6988 49.7938C29.9892 50.4139 30.4125 50.9626 30.9385 51.4009C31.7902 52.1106 32.8665 52.4943 33.975 52.4834L35.4199 52.4691C36.6488 52.4568 37.8234 51.9606 38.689 51.0882Z"
          fill="#FDD04A"
        />
        <path
          d="M26.5 36C26.3674 36 26.2402 35.9473 26.1464 35.8536C26.0527 35.7598 26 35.6326 26 35.5V34.5C26 34.3674 26.0527 34.2402 26.1464 34.1464C26.2402 34.0527 26.3674 34 26.5 34C26.6326 34 26.7598 34.0527 26.8536 34.1464C26.9473 34.2402 27 34.3674 27 34.5V35.5C27 35.6326 26.9473 35.7598 26.8536 35.8536C26.7598 35.9473 26.6326 36 26.5 36Z"
          fill="#FE691E"
        />
        <path
          d="M28 33.5C27.8674 33.5 27.7402 33.4473 27.6464 33.3536C27.5527 33.2598 27.5 33.1326 27.5 33V32C27.5 31.8674 27.5527 31.7402 27.6464 31.6464C27.7402 31.5527 27.8674 31.5 28 31.5C28.1326 31.5 28.2598 31.5527 28.3536 31.6464C28.4473 31.7402 28.5 31.8674 28.5 32V33C28.5 33.1326 28.4473 33.2598 28.3536 33.3536C28.2598 33.4473 28.1326 33.5 28 33.5Z"
          fill="#FF8D54"
        />
        <path
          d="M26 31.5C25.8674 31.5 25.7402 31.4473 25.6464 31.3536C25.5527 31.2598 25.5 31.1326 25.5 31V30C25.5 29.8674 25.5527 29.7402 25.6464 29.6464C25.7402 29.5527 25.8674 29.5 26 29.5C26.1326 29.5 26.2598 29.5527 26.3536 29.6464C26.4473 29.7402 26.5 29.8674 26.5 30V31C26.5 31.1326 26.4473 31.2598 26.3536 31.3536C26.2598 31.4473 26.1326 31.5 26 31.5Z"
          fill="#FFB895"
        />
        <path
          d="M43.5 37.5C43.3674 37.5 43.2402 37.4473 43.1464 37.3536C43.0527 37.2598 43 37.1326 43 37V36C43 35.8674 43.0527 35.7402 43.1464 35.6464C43.2402 35.5527 43.3674 35.5 43.5 35.5C43.6326 35.5 43.7598 35.5527 43.8536 35.6464C43.9473 35.7402 44 35.8674 44 36V37C44 37.1326 43.9473 37.2598 43.8536 37.3536C43.7598 37.4473 43.6326 37.5 43.5 37.5Z"
          fill="#FE691E"
        />
        <path
          d="M42 34C41.8674 34 41.7402 33.9473 41.6464 33.8536C41.5527 33.7598 41.5 33.6326 41.5 33.5V32.5C41.5 32.3674 41.5527 32.2402 41.6464 32.1464C41.7402 32.0527 41.8674 32 42 32C42.1326 32 42.2598 32.0527 42.3536 32.1464C42.4473 32.2402 42.5 32.3674 42.5 32.5V33.5C42.5 33.6326 42.4473 33.7598 42.3536 33.8536C42.2598 33.9473 42.1326 34 42 34Z"
          fill="#FF8D54"
        />
        <path
          d="M44 32.5C43.8674 32.5 43.7402 32.4473 43.6464 32.3536C43.5527 32.2598 43.5 32.1326 43.5 32V30.5C43.5 30.3674 43.5527 30.2402 43.6464 30.1464C43.7402 30.0527 43.8674 30 44 30C44.1326 30 44.2598 30.0527 44.3536 30.1464C44.4473 30.2402 44.5 30.3674 44.5 30.5V32C44.5 32.1326 44.4473 32.2598 44.3536 32.3536C44.2598 32.4473 44.1326 32.5 44 32.5Z"
          fill="#FFB895"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_85_601"
          x="-6"
          y="-1"
          width="82"
          height="82"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="12.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.929167 0 0 0 0 0.36776 0 0 0 0 0.0851736 0 0 0 0.35 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_85_601"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_85_601"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_85_601"
          x1="34.6944"
          y1="25.5"
          x2="34.6944"
          y2="54.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF9159" />
          <stop offset="0.6875" stopColor="#FF7631" />
          <stop offset="1" stopColor="#FF6A1F" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const ArrowUpIcon = ({ className }) => {
  return (
    <svg
      className={className}
      width="16"
      height="10"
      viewBox="0 0 16 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1.5 8.5L8 2L14.5 8.5" stroke="#242424" strokeWidth="1.5" />
    </svg>
  );
};

export const ArrowDownSideIcon = ({ className }) => {
  return (
    <svg
      className={className}
      width="16"
      height="9"
      viewBox="0 0 16 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1.5 1L8 7.5L14.5 1" stroke="#242424" strokeWidth="1.5" />
    </svg>
  );
};

export const LineIcon = ({ className }) => {
  return (
    <svg
      className={className}
      width="1"
      height="50"
      viewBox="0 0 1 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="0.5" x2="0.5" y2="50" stroke="#B5B5B7" />
    </svg>
  );
};

export const DocIcon = ({ className }) => {
  return (
    <svg
      width="66"
      height="70"
      viewBox="0 0 66 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_85_441)" filter="url(#filter0_d_85_441)">
        <path
          d="M37.0933 29.7723L35.4942 29.531L34.7879 28.1011C34.4611 27.4474 33.7763 27.0427 33 27.0427C32.2237 27.0427 31.5389 27.4474 31.2102 28.105L30.5059 29.531L28.8892 29.7742C28.1616 29.8968 27.5429 30.4259 27.3153 31.1185C27.0702 31.8462 27.2745 32.6555 27.8173 33.1593L28.9612 34.2896L28.6908 35.8713C28.5682 36.6008 28.8796 37.3577 29.4807 37.7934C30.1332 38.2771 30.9977 38.2795 31.5624 37.9569L33 37.2177L34.3949 37.9336C35.0703 38.3261 35.9329 38.2534 36.5136 37.7974C37.1206 37.3577 37.4318 36.6009 37.3092 35.8694L37.0388 34.2897L38.1614 33.1808C38.7255 32.6555 38.9298 31.8462 38.6866 31.1244C38.4571 30.426 37.8384 29.8968 37.0933 29.7723ZM43.8774 14.5941L39.3551 12.602L37.3629 8.07962C37.2434 8.01992 37.1238 8 36.9844 8H23.0391C22.7602 8 22.5211 8.11953 22.3419 8.29876C22.1625 8.47813 22.043 8.71719 22.043 8.99609V21.0156C22.043 21.5517 22.5102 22.0117 23.0391 22.0117H26.4059L28.1191 25.4382C28.3202 25.8003 28.6129 25.9961 29.0156 25.9961H42.9609C43.497 25.9961 43.957 25.5289 43.957 25V14.9727C43.957 14.8332 43.9371 14.7137 43.8774 14.5941Z"
          fill="#FFDCDC"
        />
        <path
          d="M46.9453 24.0039H29.6332L27.9199 20.5772C27.7406 20.2386 27.402 20.0195 27.0234 20.0195H19.0547C18.4968 20.0195 18.0586 20.4577 18.0586 21.0156V39.0117C18.0586 40.6651 19.3933 42 21.0469 42H44.9531C46.6067 42 47.9414 40.6651 47.9414 39.0117V25C47.9414 24.4421 47.5032 24.0039 46.9453 24.0039ZM37.4824 32.4507L35.9684 33.9449L36.327 36.0367C36.3868 36.3953 36.2273 36.7738 35.9285 36.9929C35.6091 37.2414 35.1946 37.2451 34.8926 37.0726L33 36.0964L31.1074 37.0726C30.7887 37.2518 30.3703 37.2121 30.0716 36.9929C29.7727 36.7737 29.6133 36.3952 29.6731 36.0367L30.0317 33.9449L28.5176 32.4507C28.2387 32.1918 28.1391 31.7933 28.2587 31.4347C28.3782 31.0762 28.697 30.8171 29.0556 30.7574L31.1673 30.4386L32.1036 28.5461C32.4422 27.8688 33.5579 27.8688 33.8966 28.5461L34.8329 30.4386L36.9446 30.7574C37.3032 30.8171 37.622 31.0761 37.7415 31.4347C37.8611 31.7933 37.7613 32.1918 37.4824 32.4507ZM38.359 14.5941H43.8774C43.8375 14.4746 43.7579 14.355 43.6582 14.2753L37.6816 8.29873C37.602 8.19912 37.4825 8.1195 37.363 8.07959V13.598C37.3629 14.1481 37.8089 14.5941 38.359 14.5941Z"
          fill="url(#paint0_linear_85_441)"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_85_441"
          x="-2"
          y="0"
          width="70"
          height="70"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="10" />
          <feGaussianBlur stdDeviation="9" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_85_441"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_85_441"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_85_441"
          x1="33"
          y1="42"
          x2="33"
          y2="8.07959"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF6060" />
          <stop offset="1" stopColor="#FF9A9A" />
        </linearGradient>
        <clipPath id="clip0_85_441">
          <rect
            width="34"
            height="34"
            fill="white"
            transform="translate(16 8)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const StarIcon = ({ className }) => {
  return (
    <svg
      width="66"
      height="66"
      viewBox="0 0 66 66"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_85_435)" filter="url(#filter0_d_85_435)">
        <path
          d="M47.9218 19.5077C47.7254 18.9002 47.1866 18.4688 46.5492 18.4113L37.8903 17.6251L34.4664 9.61106C34.2139 9.02374 33.639 8.64355 33.0002 8.64355C32.3613 8.64355 31.7864 9.02374 31.5339 9.61244L28.11 17.6251L19.4498 18.4113C18.8135 18.4702 18.276 18.9002 18.0785 19.5077C17.881 20.1152 18.0634 20.7815 18.5447 21.2015L25.0898 26.9415L23.1598 35.4431C23.0186 36.0682 23.2612 36.7143 23.7799 37.0893C24.0587 37.2907 24.3848 37.3932 24.7137 37.3932C24.9973 37.3932 25.2786 37.3168 25.5311 37.1657L33.0002 32.7017L40.4665 37.1657C41.0128 37.4944 41.7015 37.4644 42.2191 37.0893C42.738 36.7132 42.9803 36.0668 42.8391 35.4431L40.9091 26.9415L47.4542 21.2026C47.9355 20.7815 48.1193 20.1163 47.9218 19.5077V19.5077Z"
          fill="url(#paint0_linear_85_435)"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_85_435"
          x="0"
          y="0"
          width="66"
          height="66"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="10" />
          <feGaussianBlur stdDeviation="9" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_85_435"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_85_435"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_85_435"
          x1="33"
          y1="8.64355"
          x2="33"
          y2="37.3932"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFE38D" />
          <stop offset="1" stopColor="#FFCD38" />
        </linearGradient>
        <clipPath id="clip0_85_435">
          <rect
            width="30"
            height="30"
            fill="white"
            transform="translate(18 8)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const ArrowRightIcon = ({ className }) => {
  return (
    <svg
      width="15"
      height="13"
      viewBox="0 0 15 13"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.75736 11.8033L14.5303 7.03037C14.8232 6.73748 14.8232 6.2626 14.5303 5.96971L9.75736 1.19674C9.46447 0.903845 8.98959 0.903845 8.6967 1.19674C8.40381 1.48963 8.40381 1.96451 8.6967 2.2574L12.1893 5.75004H1C0.585786 5.75004 0.25 6.08583 0.25 6.50004C0.25 6.91425 0.585786 7.25004 1 7.25004H12.1893L8.6967 10.7427C8.40381 11.0356 8.40381 11.5104 8.6967 11.8033C8.98959 12.0962 9.46447 12.0962 9.75736 11.8033Z"
        fill="#152137"
      />
    </svg>
  );
};

export const ArrowLeftIcon = ({ className }) => {
  return (
    <svg
      width="15"
      height="13"
      viewBox="0 0 15 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.24264 11.8033L0.46967 7.03037C0.176777 6.73748 0.176777 6.2626 0.46967 5.96971L5.24264 1.19674C5.53553 0.903845 6.01041 0.903845 6.3033 1.19674C6.59619 1.48963 6.59619 1.96451 6.3033 2.2574L2.81066 5.75004H14C14.4142 5.75004 14.75 6.08583 14.75 6.50004C14.75 6.91425 14.4142 7.25004 14 7.25004H2.81066L6.3033 10.7427C6.59619 11.0356 6.59619 11.5104 6.3033 11.8033C6.01041 12.0962 5.53553 12.0962 5.24264 11.8033Z"
        fill="#152137"
      />
    </svg>
  );
};
