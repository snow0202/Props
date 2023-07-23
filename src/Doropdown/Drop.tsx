import React, { useState, useRef, MouseEvent } from "react";
import "./Drop.scss";

interface IDropProps {
  optionList: Array<{ value: string; name: string }>;
  placeholder?: string;

}

export const Drop: React.FC<IDropProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(props.placeholder);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value: string) => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent<HTMLDivElement>) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button className="dropdown__btn" onClick={toggleDropdown}>
        {selectedOption}
      </button>
      <div className={`dropdown__menuLayer ${isOpen ? "dropdown__opened" : ""}`} onClick={handleClickOutside}>
        <ul className="dropdown__menu">
          {props.optionList.map((item) => (
            <li
              className="dropdown__item"
              key={item.value}
              data-value={item.value}
              onClick={() => handleOptionClick(item.name)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
