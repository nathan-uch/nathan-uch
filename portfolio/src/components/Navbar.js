export default function Navbar() {

    return (
      <nav id="navbar" class="fixed top-0 flex flex-row flex-nowrap w-full primary-shadow bg-white p-1 z-10">
        <div class="w-1/5 pl-4">
          <button type="button">
            Nathan H.
          </button>
        </div>
        <div class="w-4/5">
          <ul class="flex flex-row flex-nowrap">
            <li>
              <a href="#about" class="flex flex-row items-center">
                <svg fill="#000000" width="50px" height="50px" viewBox="0 -2 16 16" id="id-16px" xmlns="http://www.w3.org/2000/svg">
                  <defs></defs>
                  <path id="Path_86" data-name="Path 86" d="M -9 2.043 L -24.999 2.035 C -25 2.109 -24.999 2.193 -24.999 2.138 C -25 1.977 -25 2.327 -25 2.5 L -25 13.5 C -25 13.776 -24.999 13.853 -24.998 14 L -8.996 14 C -8.996 13.809 -9 13.776 -9 13.5 L -9 2.5 C -9 2.157 -9.003 2.279 -9 2.043 Z M -10 13 L -24 13 L -24 3 L -10 3 L -10 13 Z M -17 5.5 C -17 5.224 -16.776 5 -16.5 5 L -11.5 5 C -11.224 5 -11 5.224 -11 5.5 C -11 5.776 -11.224 6 -11.5 6 L -16.5 6 C -16.776 6 -17 5.776 -17 5.5 Z M -11 8.5 C -11 8.776 -11.224 9 -11.5 9 L -15.5 9 C -15.776 9 -16 8.776 -16 8.5 C -16 8.224 -15.776 8 -15.5 8 L -11.5 8 C -11.224 8 -11 8.224 -11 8.5 Z M -11 11.5 C -11 11.776 -11.224 12 -11.5 12 L -14.5 12 C -14.776 12 -15 11.776 -15 11.5 C -15 11.224 -14.776 11 -14.5 11 L -11.5 11 C -11.224 11 -11 11.224 -11 11.5 Z M -22.5 12 L -17.5 12 C -17.224 12 -17 11.776 -17 11.5 L -17 11 C -17.004 9.908 -17.603 8.905 -18.562 8.384 C -18.202 8.013 -18.001 7.517 -18 7 C -18 5.895 -18.895 5 -20 5 C -21.105 5 -22 5.895 -22 7 C -21.999 7.517 -21.798 8.013 -21.438 8.384 C -22.397 8.905 -22.996 9.908 -23 11 L -23 11.5 C -23 11.776 -22.776 12 -22.5 12 Z M -21 7 C -21 6.448 -20.552 6 -20 6 C -19.448 6 -19 6.448 -19 7 C -19 7.552 -19.448 8 -20 8 C -20.552 8 -21 7.552 -21 7 Z M -20 9 C -18.895 9 -18 9.895 -18 11 L -22 11 C -22 9.895 -21.105 9 -20 9 Z" transform="translate(25 -2)"></path>
                </svg>
                <span>About</span>
              </a>
            </li>
            <li>
              <a href="#tech" class="flex flex-row items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="50px" height="50px" viewBox="0 0 36 36" version="1.1" preserveAspectRatio="xMidYMid meet">
                    <path d="M32,5H4A2,2,0,0,0,2,7V29a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V7A2,2,0,0,0,32,5ZM4,7H32V9.2H4ZM4,29V10.8H32V29Z" class="clr-i-outline clr-i-outline-path-1"/><rect x="17" y="23" width="6" height="2" class="clr-i-outline clr-i-outline-path-2"/><polygon points="7 15.68 13.79 18.8 7 21.91 7 24.11 16.6 19.7 16.6 17.89 7 13.48 7 15.68" class="clr-i-outline clr-i-outline-path-3"/>
                    <rect x="0" y="0" width="36" height="36" fill-opacity="0"/>
                </svg>
                <span>Technologies</span>
              </a>
            </li>
            <li>
              <a href="#projects" class="flex flex-row items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24">
                  <path d="M20.017 14.669L23 13.564l-.012-3.208-2.996-1.085a8.455 8.455 0 0 0-.437-1.05l1.329-2.893-2.277-2.26-2.886 1.351a8.396 8.396 0 0 0-1.052-.436L13.564 1l-3.208.012-1.085 2.996a8.485 8.485 0 0 0-1.05.437L5.328 3.116l-2.26 2.276L4.419 8.28a8.378 8.378 0 0 0-.436 1.052L1 10.436l.012 3.208 2.996 1.085a8.46 8.46 0 0 0 .437 1.05l-1.329 2.893 2.276 2.26 2.887-1.351a8.383 8.383 0 0 0 1.052.436L10.436 23l3.208-.012 1.085-2.996a8.478 8.478 0 0 0 1.05-.437l2.893 1.329 2.26-2.276-1.351-2.887a8.382 8.382 0 0 0 .436-1.052zm-.287 3.73l-1.275 1.285-2.694-1.238-.429.215a7.612 7.612 0 0 1-.928.385l-.452.156-1.01 2.789-1.81.007-1.03-2.779-.456-.151a7.394 7.394 0 0 1-.926-.385l-.43-.21-2.688 1.257-1.286-1.275 1.239-2.695-.216-.43a7.551 7.551 0 0 1-.386-.926l-.155-.452-2.79-1.01-.005-1.81 2.777-1.03.152-.456a7.46 7.46 0 0 1 .384-.927l.212-.43L4.27 5.601l1.275-1.285 2.694 1.238.429-.215a7.612 7.612 0 0 1 .928-.385l.452-.156 1.01-2.789 1.81-.007 1.03 2.779.456.151a7.35 7.35 0 0 1 .925.385l.43.211L18.4 4.27l1.285 1.275-1.239 2.695.216.43a7.551 7.551 0 0 1 .386.926l.155.452 2.79 1.01.005 1.81-2.777 1.03-.152.456a7.46 7.46 0 0 1-.384.927l-.212.43zM12 7.2a4.8 4.8 0 1 0 4.8 4.8A4.8 4.8 0 0 0 12 7.2zm0 8.6a3.8 3.8 0 1 1 3.8-3.8 3.804 3.804 0 0 1-3.8 3.8z"/>
                  <path fill="none" d="M0 0h24v24H0z"/>
                </svg>                
                <span>Projects</span>
              </a>
            </li>
            <li>
              <a href="#experience" class="flex flex-row items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24">
                  <path d="M1 19.894a3.1 3.1 0 0 0 3.098 3.102 3.149 3.149 0 0 0 2.232-.933l10.268-11.938a1.451 1.451 0 0 1 .535-.343.898.898 0 0 1 .088 0 3.932 3.932 0 0 0 3.668-.573 6.235 6.235 0 0 0 2.106-3.958.621.621 0 0 0-.108-.442l-.113-.141-.11-.06a.647.647 0 0 0-.704.06l-2.88 2.239-1.244-.927-.6-1.531 2.889-2.245a.652.652 0 0 0 .237-.644l-.045-.17-.073-.096a.638.638 0 0 0-.42-.241 6.047 6.047 0 0 0-4.32 1.032 4.209 4.209 0 0 0-1.222 4.789 6.976 6.976 0 0 1-.44.593L1.91 17.697A3.085 3.085 0 0 0 1 19.895zm1.588-1.463L14.55 8.168a5.545 5.545 0 0 0 .734-1.037l.099-.204-.09-.208a3.239 3.239 0 0 1 .824-3.844 4.799 4.799 0 0 1 2.632-.87l-2.228 1.732a.84.84 0 0 0-.264.957l.679 1.73a.752.752 0 0 0 .093.163l1.562 1.203a.815.815 0 0 0 .997-.012l2.202-1.712a4.94 4.94 0 0 1-1.516 2.353 2.904 2.904 0 0 1-2.79.396l-.124-.026a2.42 2.42 0 0 0-.28-.006 2.169 2.169 0 0 0-1.194.642L5.597 21.383A2.108 2.108 0 0 1 2 19.894a2.082 2.082 0 0 1 .588-1.463zM4.1 21h.8A1.101 1.101 0 0 0 6 19.9v-.8A1.101 1.101 0 0 0 4.9 18h-.8A1.101 1.101 0 0 0 3 19.1v.8A1.101 1.101 0 0 0 4.1 21zM4 19.1a.1.1 0 0 1 .1-.1h.8a.1.1 0 0 1 .1.1v.8a.1.1 0 0 1-.1.1h-.8a.1.1 0 0 1-.1-.1z"/>
                  <path fill="none" d="M0 0h24v24H0z"/>
                </svg>
                <span>Experience</span>
              </a>
            </li>
            <li>
              <a href="#contact" class="flex flex-row items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" height="50px" width="50px" version="1.1" viewBox="0 0 24 24">
                  <path d="M24,21H0V3h24V21z M2,19h20V8.1l-10,8.2L2,8.1V19z M2,5.5l10,8.2l10-8.2V5H2V5.5z"/>
                </svg>
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }