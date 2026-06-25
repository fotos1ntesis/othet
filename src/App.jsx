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
            <span class="bg-gradient-to-r from-[#a5b4fc] to-[#60a5fa] bg-clip-text text-transparent">
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
                className="w-full p-3 bg-gray-50 border-[#E5E7EB] rounded-2xl focus:border-[#4f46e5] focus:ring-2 focus:ring-[#4f46e5]/75 outline-none transition-al duration-300"
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

              <select className="w-full p-3 bg-gray-50 border-[#E5E7EB]rounded-2xl text-gray-500 outline-none">
                <option>Выберите услугу...</option>
                <option>IT-инфраструктура</option>
                <option>Информационная безопастность</option>
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

            <button className="w-full bg-[#4f46e5] text-white py-4 rounded-2xl font-bold hover:bg-blue-700 cursor-pointer transition-all duration-300 active:scale-95">
              Получить бесплатный аудит →
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
