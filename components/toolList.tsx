import Link from 'next/link'

const iconSize: string =`width="42" height="42"`


const tools = [
  { 
    name: 
      'TypeScript',
    icon: `
      <svg viewBox="0 0 128 128" ${iconSize}">
        <path fill="currentColor" d="M2 63.91v62.5h125v-125H2zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1A23 23 0 0180 109.19c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73l4.6-2.64 3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H57.16v46.23H45.65V69.26H29.38v-5a49.19 49.19 0 01.14-5.16c.06-.08 10-.12 22-.1h21.81z"></path>
      </svg>`
  },
  {
    name:
      'JavaScript',
    icon: `
      <svg viewBox="0 0 128 128" ${iconSize}>
        <path fill="currentColor" d="M2 1v125h125V1H2zm66.119 106.513c-1.845 3.749-5.367 6.212-9.448 7.401-6.271 1.44-12.269.619-16.731-2.059-2.986-1.832-5.318-4.652-6.901-7.901l9.52-5.83c.083.035.333.487.667 1.071 1.214 2.034 2.261 3.474 4.319 4.485 2.022.69 6.461 1.131 8.175-2.427 1.047-1.81.714-7.628.714-14.065C58.433 78.073 58.48 68 58.48 58h11.709c0 11 .06 21.418 0 32.152.025 6.58.596 12.446-2.07 17.361zm48.574-3.308c-4.07 13.922-26.762 14.374-35.83 5.176-1.916-2.165-3.117-3.296-4.26-5.795 4.819-2.772 4.819-2.772 9.508-5.485 2.547 3.915 4.902 6.068 9.139 6.949 5.748.702 11.531-1.273 10.234-7.378-1.333-4.986-11.77-6.199-18.873-11.531-7.211-4.843-8.901-16.611-2.975-23.335 1.975-2.487 5.343-4.343 8.877-5.235l3.688-.477c7.081-.143 11.507 1.727 14.756 5.355.904.916 1.642 1.904 3.022 4.045-3.772 2.404-3.76 2.381-9.163 5.879-1.154-2.486-3.069-4.046-5.093-4.724-3.142-.952-7.104.083-7.926 3.403-.285 1.023-.226 1.975.227 3.665 1.273 2.903 5.545 4.165 9.377 5.926 11.031 4.474 14.756 9.271 15.672 14.981.882 4.916-.213 8.105-.38 8.581z"></path>
      </svg>`
  },
  {
    name:
      'Github',
    icon: `
      <svg viewBox="0 0 128 128" ${iconSize}>
        <g fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path></g>
      </svg>`
  },
  {
    name:
      'Tailwind',
    icon: `
      <svg viewBox="0 0 128 128" ${iconSize}>
        <path fill="currentColor" d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"></path>
      </svg>`
  },
  {
    name:
      'Sass',
    icon: `
      <svg viewBox="0 0 128 128" ${iconSize}>
        <path fill="currentColor" d="M1.219 56.156c0 .703.207 1.167.323 1.618.756 2.933 2.381 5.45 4.309 7.746 2.746 3.272 6.109 5.906 9.554 8.383 2.988 2.148 6.037 4.248 9.037 6.38.515.366 1.002.787 1.561 1.236-.481.26-.881.489-1.297.7-3.959 2.008-7.768 4.259-11.279 6.986-2.116 1.644-4.162 3.391-5.607 5.674-2.325 3.672-3.148 7.584-1.415 11.761.506 1.22 1.278 2.274 2.367 3.053.353.252.749.502 1.162.6 1.058.249 2.136.412 3.207.609l3.033-.002c3.354-.299 6.407-1.448 9.166-3.352 4.312-2.976 7.217-6.966 8.466-12.087.908-3.722.945-7.448-.125-11.153a11.696 11.696 0 00-.354-1.014c-.13-.333-.283-.657-.463-1.072l6.876-3.954.103.088c-.125.409-.258.817-.371 1.23-.817 2.984-1.36 6.02-1.165 9.117.208 3.3 1.129 6.389 3.061 9.146 1.562 2.23 5.284 2.313 6.944.075.589-.795 1.16-1.626 1.589-2.513 1.121-2.315 2.159-4.671 3.23-7.011l.187-.428c-.077 1.108-.167 2.081-.208 3.055-.064 1.521.025 3.033.545 4.48.445 1.238 1.202 2.163 2.62 2.326.97.111 1.743-.333 2.456-.896a10.384 10.384 0 002.691-3.199c1.901-3.491 3.853-6.961 5.576-10.54 1.864-3.871 3.494-7.855 5.225-11.792l.286-.698c.409 1.607.694 3.181 1.219 4.671.61 1.729 1.365 3.417 2.187 5.058.389.775.344 1.278-.195 1.928-2.256 2.72-4.473 5.473-6.692 8.223-.491.607-.98 1.225-1.389 1.888a3.701 3.701 0 00-.48 1.364 1.737 1.737 0 001.383 1.971 9.661 9.661 0 002.708.193c3.097-.228 5.909-1.315 8.395-3.157 3.221-2.386 4.255-5.642 3.475-9.501-.211-1.047-.584-2.065-.947-3.074-.163-.455-.174-.774.123-1.198 2.575-3.677 4.775-7.578 6.821-11.569.081-.157.164-.314.306-.482.663 3.45 1.661 6.775 3.449 9.792-.912.879-1.815 1.676-2.632 2.554-1.799 1.934-3.359 4.034-4.173 6.595-.35 1.104-.619 2.226-.463 3.405.242 1.831 1.742 3.021 3.543 2.604 3.854-.892 7.181-2.708 9.612-5.925 1.636-2.166 1.785-4.582 1.1-7.113-.188-.688-.411-1.365-.651-2.154.951-.295 1.878-.649 2.837-.868 4.979-1.136 9.904-.938 14.702.86 2.801 1.05 5.064 2.807 6.406 5.571 1.639 3.379.733 6.585-2.452 8.721-.297.199-.637.356-.883.605a.869.869 0 00-.205.67c.021.123.346.277.533.275 1.047-.008 1.896-.557 2.711-1.121 2.042-1.413 3.532-3.314 3.853-5.817l.063-.188-.077-1.63c-.031-.094.023-.187.016-.258-.434-3.645-2.381-6.472-5.213-8.688-3.28-2.565-7.153-3.621-11.249-3.788a25.401 25.401 0 00-9.765 1.503c-.897.325-1.786.71-2.688 1.073-.121-.219-.251-.429-.358-.646-.926-1.896-2.048-3.708-2.296-5.882-.176-1.544-.392-3.086-.025-4.613.353-1.469.813-2.913 1.246-4.362.223-.746.066-1.164-.646-1.5a2.854 2.854 0 00-.786-.258c-1.75-.254-3.476-.109-5.171.384-.6.175-1.036.511-1.169 1.175-.076.381-.231.746-.339 1.122-.443 1.563-.757 3.156-1.473 4.645-1.794 3.735-3.842 7.329-5.938 10.897-.227.385-.466.763-.752 1.23-.736-1.54-1.521-2.922-1.759-4.542-.269-1.832-.481-3.661-.025-5.479.339-1.356.782-2.687 1.19-4.025.193-.636.104-.97-.472-1.305-.291-.169-.62-.319-.948-.368a11.643 11.643 0 00-5.354.438c-.543.176-.828.527-.994 1.087-.488 1.652-.904 3.344-1.589 4.915-2.774 6.36-5.628 12.687-8.479 19.013-.595 1.321-1.292 2.596-1.963 3.882-.17.326-.418.613-.63.919-.17-.201-.236-.339-.235-.477.005-.813-.092-1.65.063-2.436a172.189 172.189 0 011.578-7.099c.47-1.946 1.017-3.874 1.538-5.807.175-.647.178-1.252-.287-1.796-.781-.911-2.413-1.111-3.381-.409l-.428.242.083-.69c.204-1.479.245-2.953-.161-4.41-.506-1.816-1.802-2.861-3.686-2.803-.878.027-1.8.177-2.613.497-3.419 1.34-6.048 3.713-8.286 6.568a2.592 2.592 0 01-.757.654c-2.893 1.604-5.795 3.188-8.696 4.778l-3.229 1.769c-.866-.826-1.653-1.683-2.546-2.41-2.727-2.224-5.498-4.393-8.244-6.592-2.434-1.949-4.792-3.979-6.596-6.56-1.342-1.92-2.207-4.021-2.29-6.395-.105-3.025.753-5.789 2.293-8.362 1.97-3.292 4.657-5.934 7.611-8.327 3.125-2.53 6.505-4.678 10.008-6.639 4.901-2.743 9.942-5.171 15.347-6.774 5.542-1.644 11.165-2.585 16.965-1.929 2.28.258 4.494.78 6.527 1.895 1.557.853 2.834 1.97 3.428 3.716.586 1.718.568 3.459.162 5.204-.825 3.534-2.76 6.447-5.195 9.05-3.994 4.267-8.866 7.172-14.351 9.091a39.478 39.478 0 01-9.765 2.083c-2.729.229-5.401-.013-7.985-.962-1.711-.629-3.201-1.591-4.399-2.987-.214-.25-.488-.521-.887-.287-.391.23-.46.602-.329.979.219.626.421 1.278.762 1.838.857 1.405 2.107 2.424 3.483 3.298 2.643 1.681 5.597 2.246 8.66 2.377 4.648.201 9.183-.493 13.654-1.74 6.383-1.78 11.933-4.924 16.384-9.884 3.706-4.13 6.353-8.791 6.92-14.419.277-2.747-.018-5.438-1.304-7.944-1.395-2.715-3.613-4.734-6.265-6.125C68.756 18.179 64.588 17 60.286 17h-4.31c-5.21 0-10.247 1.493-15.143 3.274-3.706 1.349-7.34 2.941-10.868 4.703-7.683 3.839-14.838 8.468-20.715 14.833-2.928 3.171-5.407 6.67-6.833 10.79a40.494 40.494 0 00-1.111 3.746m27.839 36.013c-.333 4.459-2.354 8.074-5.657 11.002-1.858 1.646-3.989 2.818-6.471 3.23-.9.149-1.821.185-2.694-.188-1.245-.532-1.524-1.637-1.548-2.814-.037-1.876.62-3.572 1.521-5.186 1.176-2.104 2.9-3.708 4.741-5.206 2.9-2.361 6.046-4.359 9.268-6.245l.243-.1c.498 1.84.735 3.657.597 5.507zM54.303 70.98c-.235 1.424-.529 2.849-.945 4.229-1.438 4.777-3.285 9.406-5.282 13.973-.369.845-.906 1.616-1.373 2.417a1.689 1.689 0 01-.283.334c-.578.571-1.126.541-1.418-.206-.34-.868-.549-1.797-.729-2.716-.121-.617-.092-1.265-.13-1.897.039-4.494 1.41-8.578 3.736-12.38.959-1.568 2.003-3.062 3.598-4.054a6.27 6.27 0 011.595-.706c.85-.239 1.372.154 1.231 1.006zm17.164 21.868l6.169-7.203c.257 2.675-4.29 8.015-6.169 7.203zm19.703-4.847c-.436.25-.911.43-1.358.661-.409.212-.544-.002-.556-.354a2.385 2.385 0 01.093-.721c.833-2.938 2.366-5.446 4.647-7.486l.16-.082c1.085 3.035-.169 6.368-2.986 7.982z"></path>
      </svg>`
  },
  {
    name:
      'Next.js',
    icon: `
      <svg viewBox="0 0 128 128"  ${iconSize}>
        <path fill="currentColor" d="M30.2 45.9h24.1v1.9H32.4v14.4H53v1.9H32.4v15.8h22.2v1.9H30.2V45.9zm26.3 0h2.6l11.4 15.8L82 45.9l15.8-20-26 37.5 13.4 18.4h-2.7L70.4 65 58.2 81.8h-2.6l13.5-18.4-12.6-17.5zm29.7 1.9v-1.9h27.5v1.9H101v34h-2.2v-34H86.2zM0 45.9h2.7l38.2 56.8-15.8-20.9L2.3 48.6l-.1 33.2H0zm113.5 33.4c.5 0 .8-.3.8-.8s-.3-.8-.8-.8-.8.3-.8.8.4.8.8.8zm2.2-2.1c0 1.3 1 2.2 2.4 2.2 1.5 0 2.4-.9 2.4-2.5v-5.5h-1.2v5.5c0 .9-.4 1.3-1.2 1.3-.7 0-1.2-.4-1.2-1.1h-1.2zm6.3-.1c.1 1.4 1.2 2.3 3 2.3s3-.9 3-2.4c0-1.2-.7-1.8-2.2-2.2l-.9-.2c-1-.2-1.4-.6-1.4-1.1 0-.7.6-1.2 1.6-1.2.9 0 1.5.4 1.6 1.2h1.2c-.1-1.3-1.2-2.2-2.8-2.2-1.7 0-2.8.9-2.8 2.3 0 1.1.6 1.8 2 2.1l1 .2c1 .2 1.5.6 1.5 1.2 0 .7-.7 1.2-1.7 1.2s-1.8-.5-1.9-1.2H122z"></path>
      </svg>` 
  },
  {
    name:
      'HTML5',
    icon: `
      <svg viewBox="0 0 128 128" ${iconSize}>
        <path fill="currentColor" d="M19.569 27l8.087 89.919 36.289 9.682 36.39-9.499L108.431 27H19.569zM91.61 47.471l-.507 5.834L90.88 56H48.311l1.017 12h40.54l-.271 2.231-2.615 28.909-.192 1.69L64 106.964v-.005l-.027.012-22.777-5.916L39.65 84h11.168l.791 8.46 12.385 3.139.006-.234v.012l12.412-2.649L77.708 79H39.153l-2.734-30.836L36.152 45h55.724l-.266 2.471zM27.956 1.627h5.622v5.556h5.144V1.627h5.623v16.822h-5.623v-5.633h-5.143v5.633h-5.623V1.627zm23.782 5.579h-4.95V1.627h15.525v5.579h-4.952v11.243h-5.623V7.206zm13.039-5.579h5.862l3.607 5.911 3.603-5.911h5.865v16.822h-5.601v-8.338l-3.867 5.981h-.098l-3.87-5.981v8.338h-5.502V1.627zm21.736 0h5.624v11.262h7.907v5.561H86.513V1.627z"></path>
      </svg>`
  },
  {
    name:
      'VS Code',
    icon: `
      <svg viewBox="0 0 128 128" ${iconSize}>
        <path fill="currentColor" d="M95 2.3l30.5 12.3v98.7l-30.7 12.4-49-48.7-31 24.1-12.3-6.2V33.1l12.3-5.9 31 24.3zM14.8 45.7v37.5l18.5-19zm48.1 18.5l31.9 25.1V39z"></path>
      </svg>`
  },
  {
    name:
      'Deno',
    icon: `
      <svg viewBox="0 0 128 128" ${iconSize}>
        <path fill="currentColor" d="M59.016 13.328c-.239.024-1 .113-1.688.176-9.777 1.023-19.406 5.164-27.258 11.738-1.449 1.203-4.75 4.504-5.953 5.953-6.5 7.766-10.3 16.48-11.703 26.793-.312 2.29-.312 10.016 0 12.305 1.402 10.312 5.203 19.027 11.703 26.793 1.203 1.45 4.504 4.75 5.953 5.953 7.766 6.5 16.48 10.3 26.793 11.703 2.29.313 10.016.313 12.305 0 10.312-1.402 19.027-5.203 26.793-11.703 1.45-1.203 4.75-4.504 5.953-5.953 6.5-7.766 10.3-16.48 11.7-26.793.316-2.29.316-10.016 0-12.305-1.4-10.312-5.2-19.027-11.7-26.793-1.203-1.449-4.504-4.75-5.953-5.953-7.738-6.476-16.543-10.324-26.719-11.687-1.101-.153-2.699-.215-5.664-.239-2.262-.027-4.328-.011-4.562.012zm.625 5.402c0 1.461.097 4.637.238 7.653.074 1.472.16 3.586.2 4.687.136 3.903.55 14.14.612 15.055l.063.91-.563-.062c-.312-.024-.601-.098-.652-.137-.035-.05-.125-.914-.176-1.926-.222-4.45-.96-21.719-1.035-24.242l-.078-2.777.352-.047c.187-.028.5-.063.699-.078l.34-.012zm11.964-.3c.012.011.051 3.789.086 8.39.051 4.614.114 8.75.153 9.2.035.464.023.863-.04.89-.05.035-.363.035-.675 0l-.574-.05-.086-3.641a692.868 692.868 0 00-.14-4.961c-.099-2.215-.188-9.727-.11-9.914.047-.14.187-.153.71-.063.364.074.665.137.676.149zm-28.921 4.187c.078.113.664 7.004 1.39 16.016.239 3.066.473 5.867.512 6.215.062.636.05.664-.352.914-.222.136-.449.25-.5.25-.035 0-.109-.325-.148-.727-.176-1.625-.852-9.476-1.324-15.152-.278-3.34-.528-6.328-.563-6.653-.062-.55-.05-.601.274-.773.398-.215.625-.25.71-.09zm34.421 2.516c.352.125.387.187.465.898.125 1.25.086 7.227-.05 7.227-.364 0-1.114-.426-1.176-.664-.04-.149-.074-1.922-.074-3.938 0-4.062-.051-3.824.835-3.523zm-23.093.586c0 .336.09 2.199.187 4.164.102 1.96.215 4.449.266 5.527.086 2.176.11 2.098-.727 2.149-.414.011-.414.011-.437-.614-.024-.347-.086-1.437-.164-2.437-.063-1-.211-3.164-.313-4.813a117.11 117.11 0 00-.261-3.64c-.075-.625-.063-.649.273-.774.203-.074.55-.136.777-.136.399-.012.399-.012.399.574zm34.683 1.715l.426.171.09 1.676c.035.914.062 2.89.035 4.38l-.035 2.722-.527-.262-.524-.25-.039-4.152c-.023-2.285-.012-4.223.012-4.313.05-.187.05-.187.562.028zM65.867 29.07c.074.075.25 6.137.262 9.215l.012 1.852-.586-.09c-.34-.04-.614-.074-.625-.086-.04-.027-.414-9.29-.414-10.191v-.926l.636.074c.364.05.676.113.715.152zm28.793.887c.153.176.176 2.914.215 18.016.035 17.343.035 17.793-.188 17.793a.806.806 0 01-.44-.164c-.188-.137-.212-1.649-.274-16.465-.051-8.977-.114-17.13-.149-18.117l-.078-1.801.363.261c.215.153.454.364.551.477zM83.445 32.52c.063.05.125.761.137 1.578.063 2.761.074 19.703.012 19.754-.024.023-.25-.04-.5-.137l-.45-.188v-21.27l.352.075c.188.05.387.125.45.188zm-34.507.699c.035.34.097 1.101.136 1.726.04.614.125 2.016.2 3.102.152 2.2.124 2.34-.587 2.34-.374 0-.425-.04-.476-.414-.125-.739-.563-6.891-.5-6.989.062-.09.715-.312 1.012-.34.078-.011.175.25.215.575zm-20.68 3.191c.137 1.324.41 4.102.613 6.164.211 2.063.387 3.813.387 3.887 0 .152-.965.625-1.063.527-.062-.062-1.312-11.129-1.312-11.629 0-.3.96-1.562 1.086-1.425.039.023.164 1.136.289 2.476zm49.023 1.313l.364.21.011 2.704c.012 1.472.04 3.125.04 3.66.023 1.125-.114 1.312-.79 1.078l-.386-.14V44.16c0-.597-.04-2.336-.09-3.875l-.075-2.777h.29c.148 0 .437.101.636.215zm-43.535 4.851c.227 2.399.586 6.45.824 9l.426 4.63-.488.483-.473.489-.09-.989c-.05-.55-.3-3.097-.562-5.675a1449.23 1449.23 0 01-.824-8.301l-.352-3.602.488-.449c.438-.414.489-.426.575-.2.05.126.261 2.2.476 4.614zm-9.363 1.512c.273 2.465 1 9.016 1.625 14.555s1.21 10.875 1.324 11.875c.102 1 .273 2.515.375 3.379.176 1.46.176 1.562-.023 1.71-.301.227-.426.2-.426-.062 0-.113-.113-1.063-.25-2.086-.227-1.715-.602-4.617-1.438-11.129a740.832 740.832 0 01-.75-5.812c-.25-1.891-.613-4.703-.816-6.254-.2-1.551-.535-4.2-.75-5.914-.223-1.7-.36-3.211-.324-3.375.09-.336.824-1.512.902-1.438.023.035.273 2.074.55 4.55zm-3.828 5.387c.187 1.504.539 4.242.777 6.101.234 1.852.535 4.164.672 5.13l.238 1.75-.262.226c-.148.125-.3.172-.351.125-.047-.051-.149-.551-.223-1.102a995.27 995.27 0 00-1.039-7.129l-.887-6.125.286-.851c.152-.461.312-.836.351-.836.051 0 .238 1.226.438 2.71zm68.64-1.637c.176.176.203.95.203 6.691v6.489h-.351c-.762 0-.75.187-.8-6.914l-.036-6.465h.398c.211 0 .489.086.586.199zm-27.367 2.238c2.824.426 5.29 1.215 7.727 2.465 1.574.813 2.324 1.375 4.074 3.05 2.601 2.49 4.203 4.665 5.703 7.74 2.188 4.476 3.04 8.437 4.113 19.066.489 4.765 1.125 13.402 1.262 16.94.04 1.028.125 2.716.203 3.75.137 2.204.297 1.903-1.64 2.84-2.688 1.302-5.278 2.2-8.688 3.04-4.176 1.023-6.879 1.347-11.004 1.363l-3 .012.024-1.438c0-.789.074-2.625.152-4.062.375-6.965.297-15.754-.188-20.633-.277-2.8-.812-6.2-1.113-6.95-.062-.163.223-.3 1.461-.726 2.266-.789 4.227-1.777 4.527-2.261.54-.926-.425-2.254-1.652-2.254-.21 0-.848.226-1.437.488-2.801 1.289-8.414 2.8-11.653 3.14-2.238.239-5.715.098-8.125-.34-1.312-.238-3.664-1.124-5.629-2.136-2.261-1.176-3.648-2.738-4.062-4.59-.227-1-.164-3 .125-4.125.312-1.238 1.187-3.039 1.988-4.09 3.563-4.687 10.914-8.75 18.453-10.175 2.403-.45 5.801-.5 8.38-.114zm38.57.387c.45.187.5.238.5.664.028 3.414-.05 11.215-.113 11.54-.012.112-.66.124-.937.026-.172-.062-.2-.738-.2-6.254 0-3.949.051-6.175.125-6.175.063 0 .352.09.625.199zm5.465 6.867l.45.188-.086 10.351c-.102 13.192-.114 13.578-.59 14.715-.774 1.863-.735 2.238-.66-5.937.023-4.09.085-8.227.113-9.192.023-.96.047-3.676.062-6.039 0-2.852.035-4.273.125-4.273.075 0 .336.086.586.187zm-75.191 3.113c.074 1.012.047 1.11-.317 1.91l-.398.852-.148-1.25c-.239-2-.239-2.09.234-2.387.215-.152.441-.25.477-.226.039.023.113.523.152 1.101zm-7.73 7.54c.113 1.023.988 7.824 1.44 11.164.673 5.164.723 5.902.423 5.59-.035-.04-.325-1.778-.625-3.864-1.95-13.48-1.938-13.39-1.774-13.492.336-.227.45-.102.535.601zm9.003 5.726c.075.313.438 3.7.438 4.113 0 .348-.45.676-.649.473-.062-.063-.226-1.125-.351-2.348-.137-1.238-.274-2.527-.313-2.863l-.074-.625.438.5c.25.273.472.61.511.75zm10.09 4.711c.137.125.227.625.336 1.977.188 2.437.215 2.25-.297 2.25-.527 0-.515.039-.687-2.165-.176-2.238-.176-2.21.16-2.21.164 0 .375.074.488.148zm9.903.187c.023.125.085.875.136 1.665.04.789.153 2.562.25 3.937.352 5.05.364 5.691.153 5.691-.239 0-.266-.187-.54-3.753a274.195 274.195 0 00-.414-5.165c-.109-1.359-.187-2.5-.148-2.523.137-.152.5-.039.563.148zm-23.504 2.403c.074.113.546 4.113 1.136 9.578.176 1.648.348 3.238.387 3.535l.063.54-.313-.2c-.238-.164-.324-.324-.324-.613 0-.79-.54-5.977-.95-9.153-.238-1.8-.425-3.386-.425-3.539 0-.261.3-.363.426-.148zm72.152 5.226l-.086 5.227-.313.46c-.714 1.052-.675 1.25-.636-4.6l.023-5.364.461-.477c.25-.25.5-.46.55-.46.04 0 .04 2.351 0 5.214zm-11.563 8.29c.063 7.265.047 7.828-.152 8.05-.125.137-.238.227-.273.188-.09-.098-.215-15.942-.114-16.028.051-.05.176-.074.29-.062.16.035.199.926.25 7.851zm-40.835-4.977c.085.773.398 4.488.523 6.238.074 1.176.074 1.215-.2 1.3-.148.052-.324.04-.374-.022-.086-.09-.364-2.864-.7-7.141l-.09-1.024h.391c.36 0 .387.024.45.649zm-9.829 4.375c.086.09.149.402.149.715 0 .324.152 2.011.312 3.761.477 4.79.516 5.438.301 5.313-.324-.188-.613-.473-.55-.547.027-.05-.024-.676-.126-1.39a65.54 65.54 0 01-.25-2.626c-.047-.722-.16-2.05-.261-2.937-.239-2.188-.223-2.438.05-2.438a.59.59 0 01.375.149zm5.914 8.414c.04.277.114 1.3.164 2.277.086 1.875.047 2.012-.464 1.625-.149-.113-.25-.586-.399-2.011-.261-2.579-.277-2.477.211-2.426.363.035.414.086.488.535zm0 0"></path><path d="M39.809 56.063c-1.301.562-1.399 2.328-.176 2.953.89.449 1.789.234 2.254-.54.875-1.425-.551-3.074-2.078-2.413zm8.476 1.203c-1.2.734-1.2 2.511 0 3.25 1.188.71 2.727-.227 2.727-1.653 0-1.375-1.575-2.3-2.727-1.597zm0 0"></path>
      </svg>`
  }
]

const listItems = tools.map((tool) =>
  <li key={tool.name} className="mb-4 inline-block">                                        
    <span dangerouslySetInnerHTML={{__html: tool.icon }}></span>
  </li>
)

function ArticleList () {
  return (
    <section className="article-list">
      <h2 className="text-base">Tools:</h2>
      <ul>{listItems}</ul>
    </section>
  )
}

export default ArticleList
