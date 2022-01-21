import logoLarge from "../images/astra_logo_lg.svg";
import logoSmall from "../images/astra_logo_sm.svg";
import { Disclosure } from "@headlessui/react";

const Header = () => {
  return (
    <div className="min-h-full bg-white">
      <Disclosure as="nav" className="bg-white ">
        <div className="max-w-8xl mx-auto px-4 py-2 sm:px-6 lg:px-8">
          <div className="border-b border-mainGrey">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-10 w-auto"
                    src={logoSmall}
                    alt="ninmu"
                  />
                  <img
                    className="hidden lg:block h-10 w-auto"
                    src={logoLarge}
                    alt="ninmu"
                  />
                </div>
              </div>

              <div className="-mr-2 flex items-center sm:hidden"></div>
            </div>
          </div>
        </div>
      </Disclosure>
    </div>
  );
};

export default Header;
