import { DownArrowIcon, GuanellaIcon } from "../atoms/Icons.jsx";
import { DropdownButton } from "../molecules/DropdownButton.jsx";

export const Header = () => {
  const optionsRecanto = [
    {
      name: "help",
      value: <h2>Como ajudar</h2>,
      optionStyle:
        "cursor-pointer pl-4 py-2 rounded-t-md transition duration-300 hover:text-rose-500 hover:bg-blue-500/20",
    },
    {
      name: "historical",
      value: <h2>Historico</h2>,
      optionStyle:
        "cursor-pointer pl-4 py-2 transition duration-300 hover:text-rose-500 hover:bg-blue-500/20",
    },
    {
      name: "beFriend",
      value: <h2>Seja amigo do Recanto</h2>,
      optionStyle:
        "cursor-pointer pl-4 py-2 transition duration-300 hover:text-rose-500 hover:bg-blue-500/20",
    },
  ];

  const optionsGuanelianos = [
    {
      name: "saoLuisGuanella",
      value: <h2>São Luis Guanela</h2>,
      optionStyle:
        "cursor-pointer pl-4 py-2 rounded-t-md transition duration-300 hover:text-rose-500 hover:bg-blue-500/20",
    },
    {
      name: "servosDaCaridade",
      value: <h2>Servos da Caridade</h2>,
      optionStyle:
        "cursor-pointer pl-4 py-2 transition duration-300 hover:text-rose-500 hover:bg-blue-500/20",
    },
  ];

  const optionsNews = [
    {
      name: "artigos",
      value: <h2>Artigos</h2>,
      optionStyle:
        "cursor-pointer pl-4 py-2 rounded-t-md transition duration-300 hover:text-rose-500 hover:bg-blue-500/20",
    },
    {
      name: "igreja",
      value: <h2>Igreja</h2>,
      optionStyle:
        "cursor-pointer pl-4 py-2 transition duration-300 hover:text-rose-500 hover:bg-blue-500/20",
    },
  ];
  return (
    <header className="h-[10dvh] top-0 w-full flex justify-center bg-white shadow-xl">
      <div className="w-8/10 flex items-center">
        <GuanellaIcon className="w-12 h-12" />
        <nav className="flex w-full px-10 h-full items-center justify-center">
          <ul className="flex gap-8 font-extrabold text-blue-900">
            <li className="flex">
              <DropdownButton
                buttonStyle="flex font-extrabold cursor-pointer transition duration-300 hover:text-rose-500"
                buttonLabel="Recanto"
                icon={<DownArrowIcon />}
                dropdownOptions={optionsRecanto}
                dropdownStyle={
                  "w-50 bg-white shadow-lg rounded-md border-2 border-rose-500/60 divide-y-2 divide-blue-900/20"
                }
              />
            </li>
            <li className="flex">
              <DropdownButton
                buttonStyle="flex font-extrabold cursor-pointer transition duration-300 hover:text-rose-500"
                buttonLabel="Guanelianos"
                icon={<DownArrowIcon />}
                dropdownOptions={optionsGuanelianos}
                dropdownStyle={
                  "w-50 bg-white shadow-lg rounded-md border-2 border-rose-500/60 divide-y-2 divide-blue-900/20"
                }
              />
            </li>
            <li className="flex">
              <DropdownButton
                buttonStyle="flex font-extrabold cursor-pointer transition duration-300 hover:text-rose-500"
                buttonLabel="Notícias"
                icon={<DownArrowIcon />}
                dropdownOptions={optionsNews}
                dropdownStyle={
                  "w-50 bg-white shadow-lg rounded-md border-2 border-rose-500/60 divide-y-2 divide-blue-900/20"
                }
              />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
