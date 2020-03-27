import React from 'react'

// import Github from "../assets/images/icons/github.svg";
// import Linkedin from "../assets/images/icons/linkedin.svg";
// import Twitter from "../assets/images/icons/twitter.svg";
// import Instagram from "../assets/images/icons/instagram.svg";
// import Menu from "../assets/images/icons/menu.svg";

const Github = () => (
  <div className="icon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
    </svg>
  </div>
)

const Linkedin = () => (
  <div className="icon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M417.2 64H96.8C79.3 64 64 76.6 64 93.9V415c0 17.4 15.3 32.9 32.8 32.9h320.3c17.6 0 30.8-15.6 30.8-32.9V93.9C448 76.6 434.7 64 417.2 64zM183 384h-55V213h55v171zm-25.6-197h-.4c-17.6 0-29-13.1-29-29.5 0-16.7 11.7-29.5 29.7-29.5s29 12.7 29.4 29.5c0 16.4-11.4 29.5-29.7 29.5zM384 384h-55v-93.5c0-22.4-8-37.7-27.9-37.7-15.2 0-24.2 10.3-28.2 20.3-1.5 3.6-1.9 8.5-1.9 13.5V384h-55V213h55v23.8c8-11.4 20.5-27.8 49.6-27.8 36.1 0 63.4 23.8 63.4 75.1V384z" />
    </svg>
  </div>
)

const Twitter = () => (
  <div className="icon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M492 109.5c-17.4 7.7-36 12.9-55.6 15.3 20-12 35.4-31 42.6-53.6-18.7 11.1-39.4 19.2-61.5 23.5C399.8 75.8 374.6 64 346.8 64c-53.5 0-96.8 43.4-96.8 96.9 0 7.6.8 15 2.5 22.1-80.5-4-151.9-42.6-199.6-101.3-8.3 14.3-13.1 31-13.1 48.7 0 33.6 17.2 63.3 43.2 80.7-16-.4-31-4.8-44-12.1v1.2c0 47 33.4 86.1 77.7 95-8.1 2.2-16.7 3.4-25.5 3.4-6.2 0-12.3-.6-18.2-1.8 12.3 38.5 48.1 66.5 90.5 67.3-33.1 26-74.9 41.5-120.3 41.5-7.8 0-15.5-.5-23.1-1.4C62.8 432 113.7 448 168.3 448 346.6 448 444 300.3 444 172.2c0-4.2-.1-8.4-.3-12.5C462.6 146 479 129 492 109.5z" />
    </svg>
  </div>
)

const Instagram = () => (
  <div className="icon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M336 96c21.2 0 41.3 8.4 56.5 23.5S416 154.8 416 176v160c0 21.2-8.4 41.3-23.5 56.5S357.2 416 336 416H176c-21.2 0-41.3-8.4-56.5-23.5S96 357.2 96 336V176c0-21.2 8.4-41.3 23.5-56.5S154.8 96 176 96h160m0-32H176c-61.6 0-112 50.4-112 112v160c0 61.6 50.4 112 112 112h160c61.6 0 112-50.4 112-112V176c0-61.6-50.4-112-112-112z" />
      <path d="M360 176c-13.3 0-24-10.7-24-24s10.7-24 24-24c13.2 0 24 10.7 24 24s-10.8 24-24 24zM256 192c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64m0-32c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96z" />
    </svg>
  </div>
)

const Menu = () => (
  <div className="icon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M296 136c0-22.002-17.998-40-40-40s-40 17.998-40 40 17.998 40 40 40 40-17.998 40-40zm0 240c0-22.002-17.998-40-40-40s-40 17.998-40 40 17.998 40 40 40 40-17.998 40-40zm0-120c0-22.002-17.998-40-40-40s-40 17.998-40 40 17.998 40 40 40 40-17.998 40-40z" />
    </svg>
  </div>
)

const Home = () => (
  <div className="icon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M258.5 104.1c-1.5-1.2-3.5-1.2-5 0l-156 124.8c-.9.8-1.5 1.9-1.5 3.1v230c0 1.1.9 2 2 2h108c1.1 0 2-.9 2-2V322c0-1.1.9-2 2-2h92c1.1 0 2 .9 2 2v140c0 1.1.9 2 2 2h108c1.1 0 2-.9 2-2V232c0-1.2-.6-2.4-1.5-3.1l-156-124.8z" />
      <path d="M458.7 204.2l-189-151.4C265.9 49.7 261 48 256 48s-9.9 1.7-13.7 4.8L160 119.7V77.5c0-1.1-.9-2-2-2H98c-1.1 0-2 .9-2 2v92.2l-42.7 35.1c-3.1 2.5-5.1 6.2-5.3 10.2-.2 4 1.3 7.9 4.1 10.7 2.6 2.6 6.1 4.1 9.9 4.1 3.2 0 6.3-1.1 8.8-3.1l183.9-148c.5-.4.9-.4 1.3-.4s.8.1 1.3.4l183.9 147.4c2.5 2 5.6 3.1 8.8 3.1 3.7 0 7.2-1.4 9.9-4.1 2.9-2.8 4.4-6.7 4.2-10.7-.3-4-2.2-7.7-5.4-10.2z" />
    </svg>
  </div>
)

const About = () => (
  <div className="icon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M296 136c0-22.002-17.998-40-40-40s-40 17.998-40 40 17.998 40 40 40 40-17.998 40-40zm0 240c0-22.002-17.998-40-40-40s-40 17.998-40 40 17.998 40 40 40 40-17.998 40-40zm0-120c0-22.002-17.998-40-40-40s-40 17.998-40 40 17.998 40 40 40 40-17.998 40-40z" />
    </svg>
  </div>
)

const Portfolio = () => (
  <div className="icon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M434.8 137.6L285.4 69.5c-16.2-7.4-42.7-7.4-58.9 0L77.2 137.6c-17.6 8-17.6 21.1 0 29.1l148 67.5c16.9 7.7 44.7 7.7 61.6 0l148-67.5c17.6-8 17.6-21.1 0-29.1zM225.2 375.2l-99.8-45.5c-4.2-1.9-9.1-1.9-13.3 0l-34.9 15.9c-17.6 8-17.6 21.1 0 29.1l148 67.5c16.9 7.7 44.7 7.7 61.6 0l148-67.5c17.6-8 17.6-21.1 0-29.1l-34.9-15.9c-4.2-1.9-9.1-1.9-13.3 0l-99.8 45.5c-16.9 7.7-44.7 7.7-61.6 0z" />
      <path d="M434.8 241.6l-31.7-14.4c-4.2-1.9-9-1.9-13.2 0l-108 48.9c-15.3 5.2-36.6 5.2-51.9 0l-108-48.9c-4.2-1.9-9-1.9-13.2 0l-31.7 14.4c-17.6 8-17.6 21.1 0 29.1l148 67.5c16.9 7.7 44.7 7.7 61.6 0l148-67.5c17.7-8 17.7-21.1.1-29.1z" />
    </svg>
  </div>
)

const Contact = () => (
  <div className="icon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M435.9 64.9l-367.1 160c-6.5 3.1-6.3 12.4.3 15.3l99.3 56.1c5.9 3.3 13.2 2.6 18.3-1.8l195.8-168.8c1.3-1.1 4.4-3.2 5.6-2 1.3 1.3-.7 4.3-1.8 5.6L216.9 320.1c-4.7 5.3-5.4 13.1-1.6 19.1l64.9 104.1c3.2 6.3 12.3 6.2 15.2-.2L447.2 76c3.3-7.2-4.2-14.5-11.3-11.1z" />
    </svg>
  </div>
)
const Spotify = () => (
  <div className="icon">
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <title />
      <g id="Spotify">
        <g data-name="&lt;Group&gt;" id="_Group_">
          <circle
            cx="12"
            cy="12"
            data-name="&lt;Path&gt;"
            id="_Path_"
            r="11.5"
            style={{ fill: 'none', stroke: '#FFFFFF' }}
          />
          <path
            d="M5.5,15.5c3.42-.83,8.34-.72,11.5,1.5"
            data-name="&lt;Path&gt;"
            id="_Path_2"
            style={{ fill: 'none', stroke: '#FFFFFF' }}
          />
          <path
            d="M5,12c5.77-1,10-.53,13.5,2"
            data-name="&lt;Path&gt;"
            id="_Path_3"
            style={{ fill: 'none', stroke: '#FFFFFF' }}
          />
          <path
            d="M4.5,8.5C9.19,6.84,15.81,7.16,20,10"
            data-name="&lt;Path&gt;"
            id="_Path_4"
            style={{ fill: 'none', stroke: '#FFFFFF' }}
          />
        </g>
      </g>
    </svg>
  </div>
)

const SoundCloud = () => (
  <div className="icon">
    <svg
      height="50px"
      version="1.1"
      viewBox="0 0 50 50"
      width="50px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title />
      <defs />
      <g fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="0.1">
        <g fill="#000000" id="SoundCloud">
          <path
            style={{ fill: '#FFFFFF', stroke: '#FFFFFF' }}
            d="M25,0 C11.1928806,0 0,11.1928806 0,25 C0,38.8071194 11.1928806,50 25,50 C38.8071194,50 50,38.8071194 50,25 C50,11.1928806 38.8071194,0 25,0 Z M25,3 C12.8497349,3 3,12.8497349 3,25 C3,37.1502651 12.8497349,47 25,47 C37.1502651,47 47,37.1502651 47,25 C47,12.8497349 37.1502651,3 25,3 Z M11.2046957,26.4994198 L11,28.2899843 L11.2046957,30.0498224 C11.2122973,30.1238678 11.258563,30.1755611 11.3170241,30.1755611 C11.3736257,30.1755611 11.4197274,30.1243715 11.4286961,30.0505779 L11.6713997,28.2899843 L11.4286961,26.4989161 C11.4200555,26.4251226 11.3733523,26.3731145 11.3170241,26.3731145 C11.2586177,26.3731145 11.2122426,26.4251226 11.2046957,26.4994198 Z M12.8503005,25.3946571 C12.8503005,25.3952867 12.5750031,28.2897324 12.5750031,28.2897324 L12.8503005,31.1207736 C12.8580661,31.1967079 12.9071756,31.2514864 12.9668398,31.2514864 C13.0253555,31.2514864 13.0733712,31.1979672 13.0829963,31.1215921 L13.3961375,28.2897324 L13.0833791,25.3946571 C13.0737541,25.3177153 13.0258477,25.2645739 12.9668398,25.2645739 C12.9075037,25.2645739 12.8583943,25.3194783 12.8503005,25.3946571 Z M14.396866,24.761745 L14.1500608,28.2908658 L14.396866,31.7053294 C14.4034832,31.8110456 14.4745771,31.8908837 14.5613116,31.8908837 C14.6470618,31.8908837 14.7178823,31.8109197 14.7254838,31.7053294 L15.0061953,28.2908658 L14.7254838,24.7609894 C14.7179369,24.6552103 14.6471712,24.5753722 14.5613116,24.5753722 C14.4745771,24.5753722 14.403866,24.6552732 14.396866,24.761745 Z M15.9578691,25.0172521 L15.7251733,28.2909287 L15.9578691,31.7335372 C15.9645956,31.8549944 16.0449317,31.9468586 16.1461038,31.9468586 C16.2457993,31.9468586 16.3264635,31.8549314 16.3339557,31.733852 L16.5983703,28.2909287 L16.3339557,25.0157409 C16.3268463,24.8947875 16.2460727,24.8036159 16.1461038,24.8036159 C16.044877,24.8036159 15.9642128,24.8955431 15.9578691,25.0172521 Z M17.5195284,22.9658916 L17.3001764,28.292251 L17.5195284,31.7345446 C17.5252159,31.8690983 17.6326223,31.9751293 17.7456069,31.9751293 C17.85799,31.9751293 17.972123,31.8685946 17.972123,31.7337261 L18.205475,28.292251 L17.950412,22.9658916 C17.9436307,22.8306454 17.8434977,22.7241106 17.7311147,22.7241106 C17.6182395,22.7241106 17.5248877,22.8305824 17.5195284,22.9658916 Z M19.0799298,21.7485496 C19.0799298,21.7489903 18.8752888,28.2933213 18.8752888,28.2933213 L19.0803673,31.7138925 C19.085508,31.8633686 19.1890863,31.9816775 19.3161256,31.9816775 C19.4420165,31.9816775 19.5458683,31.8633686 19.5518839,31.7126332 L19.7832125,28.2933213 L19.5518839,21.7485496 C19.5455948,21.5974994 19.4419618,21.4795682 19.3160709,21.4795682 C19.1890863,21.4795682 19.085508,21.5977513 19.0799298,21.7485496 Z M20.6267141,20.9640207 L20.4502919,28.2940139 L20.6269329,31.6585473 C20.6312532,31.8388756 20.7830113,31.9814257 20.9374491,31.9814257 C21.0916135,31.9814257 21.2481294,31.8388756 21.2481294,31.657477 L21.4195204,28.2942028 L21.2073871,20.9639577 C21.2024652,20.7820553 21.064215,20.6391905 20.9103787,20.6391905 C20.7556128,20.6391905 20.6309251,20.7816146 20.6267141,20.9640207 Z M22.1736078,21.4133933 L22.025459,28.2954621 L22.1736078,31.6071059 C22.1771625,31.8179717 22.3266784,31.9846998 22.5091162,31.9846998 C22.6910072,31.9846998 22.8440778,31.8182235 22.8440778,31.6048392 L23.0066094,28.2958399 L22.8385544,21.4128896 C22.8341794,21.1998201 22.6872885,21.032966 22.5053975,21.032966 C22.3232331,21.032966 22.1771625,21.1997571 22.1736078,21.4133933 Z M23.7558296,19.3647403 L23.6005168,28.2972251 L23.7562671,31.5388532 C23.7590015,31.7759119 23.947455,31.9709107 24.1542288,31.9709107 C24.3605652,31.9709107 24.5521358,31.7757859 24.5521358,31.5353272 L24.7023627,28.2972251 L24.5239717,19.3640477 C24.5209639,19.1245334 24.341862,18.9290938 24.1355257,18.9290938 C23.9286971,18.9290938 23.7589468,19.1245334 23.7558296,19.3647403 Z M34.2236391,24.3767843 C33.9495448,20.8031482 31.3466882,18 28.1717992,18 C27.3948523,18 26.641093,18.1759838 25.9723183,18.4738655 C25.7124428,18.589593 25.6441927,18.7089094 25.6441927,18.9399865 L25.6441927,31.5248122 C25.6441927,31.7674747 25.8069977,31.9696515 26.0125684,31.9933888 C26.0213184,31.9945221 35.4956182,32 35.5570323,32 C37.4589032,32 39,30.2245469 39,28.0346031 C39,25.8446593 37.4574267,24.0688914 35.5556651,24.0688914 C35.0838752,24.0688914 34.6335774,24.1788262 34.2236391,24.3767843 Z M34.2236391,24.3767843"
            id="Oval-1"
          />
        </g>
      </g>
    </svg>
  </div>
)

export {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Menu,
  Home,
  About,
  Portfolio,
  Contact,
  Spotify,
  SoundCloud,
}
