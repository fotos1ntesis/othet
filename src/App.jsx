const LandingPage = () => {
  const features = [
    {
      id: 1,
      text: "7+ лет на рынке",
      description: "IT-интегратор для бизнеса и госучреждений",
      icon: (
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="36"
            height="36"
            rx="16"
            fill="#615FFF"
            fill-opacity="0.25"
          />
          <path
            d="M20.3178 18.5933L21.3278 24.2773C21.3391 24.3443 21.3298 24.4131 21.3009 24.4745C21.2721 24.536 21.2252 24.5871 21.1665 24.6212C21.1077 24.6553 21.04 24.6706 20.9724 24.6651C20.9047 24.6597 20.8403 24.6337 20.7878 24.5907L18.4012 22.7993C18.286 22.7133 18.146 22.6668 18.0022 22.6668C17.8583 22.6668 17.7184 22.7133 17.6032 22.7993L15.2125 24.59C15.16 24.633 15.0957 24.6589 15.0282 24.6644C14.9606 24.6698 14.8929 24.6546 14.8343 24.6206C14.7756 24.5866 14.7287 24.5356 14.6998 24.4742C14.6709 24.4129 14.6614 24.3442 14.6725 24.2773L15.6818 18.5933"
            stroke="#A3B3FF"
            stroke-width="1.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M18 19.3333C20.2091 19.3333 22 17.5425 22 15.3333C22 13.1242 20.2091 11.3333 18 11.3333C15.7909 11.3333 14 13.1242 14 15.3333C14 17.5425 15.7909 19.3333 18 19.3333Z"
            stroke="#A3B3FF"
            stroke-width="1.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 2,
      text: "Гос. аккредитация",
      description: "Госстандарты: 152-ФЗ, ФСТЭК, ФСБ",
      icon: (
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="36"
            height="36"
            rx="16"
            fill="#615FFF"
            fill-opacity="0.25"
          />
          <path
            d="M23.3332 18.6667C23.3332 22 20.9998 23.6667 18.2265 24.6333C18.0813 24.6826 17.9235 24.6802 17.7798 24.6267C14.9998 23.6667 12.6665 22 12.6665 18.6667V14C12.6665 13.8232 12.7367 13.6536 12.8618 13.5286C12.9868 13.4036 13.1564 13.3333 13.3332 13.3333C14.6665 13.3333 16.3332 12.5333 17.4932 11.52C17.6344 11.3993 17.8141 11.333 17.9998 11.333C18.1856 11.333 18.3653 11.3993 18.5065 11.52C19.6732 12.54 21.3332 13.3333 22.6665 13.3333C22.8433 13.3333 23.0129 13.4036 23.1379 13.5286C23.2629 13.6536 23.3332 13.8232 23.3332 14V18.6667Z"
            stroke="#A3B3FF"
            stroke-width="1.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 3,
      text: "Поддержка 24/7",
      description: "Круглосуточная помощь с гарантией SLA",
      icon: (
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="36"
            height="36"
            rx="16"
            fill="#615FFF"
            fill-opacity="0.25"
          />
          <path
            d="M18.0002 24.6667C21.6821 24.6667 24.6668 21.6819 24.6668 18C24.6668 14.3181 21.6821 11.3333 18.0002 11.3333C14.3183 11.3333 11.3335 14.3181 11.3335 18C11.3335 21.6819 14.3183 24.6667 18.0002 24.6667Z"
            stroke="#A3B3FF"
            stroke-width="1.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M18 14V18L20.6667 19.3333"
            stroke="#A3B3FF"
            stroke-width="1.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 4,
      text: "Сертифицированная команда",
      description: "Microsoft, Cisco, VMware, 1C и другие вендоры",
      icon: (
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="36"
            height="36"
            rx="16"
            fill="#615FFF"
            fill-opacity="0.25"
          />
          <path
            d="M19.9998 11.3333H13.9998C13.6462 11.3333 13.3071 11.4738 13.057 11.7239C12.807 11.9739 12.6665 12.3131 12.6665 12.6667V23.3333C12.6665 23.687 12.807 24.0261 13.057 24.2762C13.3071 24.5262 13.6462 24.6667 13.9998 24.6667H21.9998C22.3535 24.6667 22.6926 24.5262 22.9426 24.2762C23.1927 24.0261 23.3332 23.687 23.3332 23.3333V14.6667L19.9998 11.3333Z"
            stroke="#A3B3FF"
            stroke-width="1.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M19.3335 11.3333V14C19.3335 14.3536 19.474 14.6928 19.724 14.9428C19.9741 15.1929 20.3132 15.3333 20.6668 15.3333H23.3335"
            stroke="#A3B3FF"
            stroke-width="1.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16 20L17.3333 21.3333L20 18.6667"
            stroke="#A3B3FF"
            stroke-width="1.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
  ];
  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row">
      {/* ЛЕВАЯ ЧАСТЬ */}
      <div className="bg-[linear-gradient(139deg,#0b0f2e_0%,#131963_30%,#2d1b69_65%,#1e3a8a_100%)] text-white p-8 md:p-16 flex flex-col justify-center items-center md:w-1/2">
        <div className="max-w-lg w-full flex flex-col">
          <div className="text-sm border border-[#7C86FF] rounded-full px-4 py-1 inline-block mb-6 text-[#A3B3FF] self-start bg-[#615FFF]/20">
            <span className="animate-pulse">• </span>
            IT-интегратор №1 в регионе
          </div>
          <div className="text-4xl md:text-5xl font-bold mb-6 flex flex-col gap-y-1.5">
            <h1>Ваш надёжный</h1>
            <span className="bg-gradient-to-r from-[#a5b4fc] to-[#60a5fa] bg-clip-text text-transparent">
              IT-партнёр
            </span>
          </div>

          <p className="text-gray-300/55 mb-10 text-lg">
            Цифровая трансформация, IT-инфраструктура и информационная
            безопасность — под ключ для бизнеса и государственных структур.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {features.map((item) => (
              <div
                key={item.id}
                className="bg-white/5 p-4 rounded-xl border border-white/10 flex flex-col items-start gap-3 transition-all duration-300 hover:bg-white/10 hover:scale-105 cursor-pointer"
              >
                {item.icon}
                <p className="font-semibold text-sm leading-tight text-white/90">
                  {item.text}
                </p>
                <span className="font-light text-sm leading-tight text-white/45">
                  {item.description}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-auto pt-8 border-t border-white/10">
            <p className="text-xs uppercase tracking-wider text-white/50 mb-4 font-semibold">
              Партнёры
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-4 text-white/40">
              {["Microsoft", "Cisco", "VMware", "1C", "Kaspersky"].map(
                (brand) => (
                  <span
                    key={brand}
                    className="font-bold cursor-pointer hover:text-white/75 transition-colors duration-300"
                  >
                    {brand}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ПРАВАЯ ЧАСТЬ */}
      <div className="p-8 md:p-16 md:w-1/2 flex flex-col justify-center items-center">
        <div className="max-w-md w-full">
          <h2 className="text-2xl font-bold mb-2 text-center">
            Получить бесплатный аудит
          </h2>
          <p className="text-gray-600 mb-8 text-center">
            Оставьте заявку — проведём анализ вашей IT-инфраструктуры и
            предложим решение.
          </p>

          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-y-2">
                <span className="text-[11px] text-[#6A7282] uppercase font-semibold ">
                  Имя *
                </span>
                <input
                  type="text"
                  placeholder="Иван Иванов"
                  className="w-full p-3 bg-gray-50 border-[#E5E7EB] rounded-2xl focus:border-[#4f46e5] focus:ring-2 focus:ring-[#4f46e5]/75 outline-none transition-all duration-300"
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <span className="text-[11px] text-[#6A7282] uppercase font-semibold ">
                  Компания *
                </span>
                <input
                  type="text"
                  placeholder="ООО «Название»"
                  className="w-full p-3 bg-gray-50 border-[#E5E7EB] rounded-2xl focus:border-[#4f46e5] focus:ring-2 focus:ring-[#4f46e5]/75 outline-none transition-all duration-300"
                />
              </div>
            </div>

            <div className="flex flex-col gap-y-2">
              <span className="text-[11px] text-[#6A7282] uppercase font-semibold ">
                Телефон *
              </span>
              <input
                type="tel"
                placeholder="+7 (___) ___-__-__"
                className="w-full p-3 bg-gray-50 border-[#E5E7EB] rounded-2xl focus:border-[#4f46e5] focus:ring-2 focus:ring-[#4f46e5]/75 outline-none transition-all duration-300"
              />
            </div>

            <div className="flex flex-col gap-y-2">
              <span className="text-[11px] text-[#6A7282] uppercase font-semibold ">
                Email
              </span>

              <input
                type="email"
                placeholder="ivan@company.ru"
                className="w-full p-3 bg-gray-50 border-[#E5E7EB] rounded-2xl focus:border-[#4f46e5] focus:ring-2 focus:ring-[#4f46e5]/75 outline-none transition-all duration-300"
              />
            </div>

            <div className="flex flex-col gap-y-2">
              <span className="text-[11px] text-[#6A7282] uppercase font-semibold ">
                Услуга
              </span>

              <select className="w-full p-3 bg-gray-50 border-[#E5E7EB] rounded-2xl text-gray-500 outline-none">
                <option>Выберите услугу...</option>
                <option>IT-инфраструктура</option>
                <option>Информационная безопасность</option>
                <option>Цифровая трансформация</option>
                <option>On-Site Решения</option>
                <option>Техническая поддержка</option>
              </select>
            </div>

            <div className="flex flex-col gap-y-2">
              <span className="text-[11px] text-[#6A7282] uppercase font-semibold ">
                Задача
              </span>

              <textarea
                placeholder="Опишите вашу задачу или проблему"
                className="w-full max-h-35 p-3 bg-gray-50 border-[#E5E7EB] rounded-2xl focus:border-[#4f46e5] focus:ring-2 focus:ring-[#4f46e5]/75 outline-none transition-all duration-300"
              ></textarea>
            </div>
            <div className="flex flex-col gap-y-2.5">
              <button className="w-full bg-[#4f46e5] text-white py-4 rounded-2xl font-bold hover:bg-blue-700 cursor-pointer transition-all duration-300 active:scale-95">
                Получить бесплатный аудит →
              </button>
              <div className="flex items-center text-[11px] gap-x-1 justify-center md:text-[5px] sm:text-[5px]">
                <span className="text-[#99A1AF] text-[9px] md:text-[11px] ">
                  Нажимая кнопку, вы соглашаетесь с
                </span>
                <a
                  target="_blank"
                  href="https://mircifry.ru/"
                  className="text-[#615FFF] text-[9px] md:text-[11px]"
                >
                  политикой конфиденциальности
                </a>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 space-y-3">
              <a
                href="tel:+74951234567"
                className="flex items-center gap-3 text-gray-600 hover:text-[#4f46e5] transition-colors"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.6667 11.28V13.28C14.6675 13.4657 14.6294 13.6495 14.555 13.8196C14.4807 13.9897 14.3716 14.1424 14.2348 14.2679C14.0979 14.3934 13.9364 14.489 13.7605 14.5485C13.5847 14.608 13.3983 14.6301 13.2134 14.6133C11.1619 14.3904 9.19137 13.6894 7.46004 12.5667C5.84926 11.5431 4.48359 10.1775 3.46004 8.56668C2.33336 6.82748 1.6322 4.84734 1.41337 2.78668C1.39671 2.60233 1.41862 2.41652 1.4777 2.2411C1.53679 2.06567 1.63175 1.90447 1.75655 1.76776C1.88134 1.63105 2.03324 1.52182 2.20256 1.44703C2.37189 1.37224 2.55493 1.33352 2.74004 1.33335H4.74004C5.06357 1.33016 5.37723 1.44473 5.62254 1.6557C5.86786 1.86667 6.02809 2.15964 6.07337 2.48001C6.15779 3.12006 6.31434 3.7485 6.54004 4.35335C6.62973 4.59196 6.64915 4.85129 6.59597 5.1006C6.5428 5.34991 6.41928 5.57875 6.24004 5.76001L5.39337 6.60668C6.34241 8.27571 7.72434 9.65764 9.39337 10.6067L10.24 9.76001C10.4213 9.58077 10.6501 9.45725 10.8994 9.40408C11.1488 9.35091 11.4081 9.37032 11.6467 9.46001C12.2516 9.68571 12.88 9.84227 13.52 9.92668C13.8439 9.97237 14.1396 10.1355 14.3511 10.385C14.5625 10.6345 14.6748 10.9531 14.6667 11.28Z"
                    stroke="#7C86FF"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span className="text-sm">+7 (915) 677-85-88</span>
              </a>
              <a
                href="mailto:info@mir-cifry.ru"
                className="flex items-center gap-3 text-gray-600 hover:text-[#4f46e5] transition-colors"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.3333 2.66669H2.66659C1.93021 2.66669 1.33325 3.26364 1.33325 4.00002V12C1.33325 12.7364 1.93021 13.3334 2.66659 13.3334H13.3333C14.0696 13.3334 14.6666 12.7364 14.6666 12V4.00002C14.6666 3.26364 14.0696 2.66669 13.3333 2.66669Z"
                    stroke="#7C86FF"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14.6666 4.66669L8.68659 8.46669C8.48077 8.59564 8.2428 8.66403 7.99992 8.66403C7.75704 8.66403 7.51907 8.59564 7.31325 8.46669L1.33325 4.66669"
                    stroke="#7C86FF"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span className="text-sm">info@mir-cifry.ru</span>
              </a>
              <div className="flex items-center gap-3 text-gray-600">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.40075 14.5326C9.64075 13.462 13.3334 9.99531 13.3334 6.66665C13.3334 5.25216 12.7715 3.8956 11.7713 2.89541C10.7711 1.89522 9.41457 1.33331 8.00008 1.33331C6.58559 1.33331 5.22904 1.89522 4.22885 2.89541C3.22865 3.8956 2.66675 5.25216 2.66675 6.66665C2.66675 9.99531 6.35941 13.462 7.59941 14.5326C7.71493 14.6195 7.85555 14.6665 8.00008 14.6665C8.14461 14.6665 8.28523 14.6195 8.40075 14.5326Z"
                    stroke="#7C86FF"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 8.66669C9.10457 8.66669 10 7.77126 10 6.66669C10 5.56212 9.10457 4.66669 8 4.66669C6.89543 4.66669 6 5.56212 6 6.66669C6 7.77126 6.89543 8.66669 8 8.66669Z"
                    stroke="#7C86FF"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span className="text-sm">
                  г. Тамбов, ул. Интернациональная, дом №16А
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
