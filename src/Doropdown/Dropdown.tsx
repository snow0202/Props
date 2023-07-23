import React, { useState } from 'react';
import './Dropdown.scss';

export const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
    <form>
      <ul className={`select ${isOpen ? 'open' : ''}`}>
        <li>
          <input
            className="select_close"
            type="radio"
            name="awesomeness"
            id="awesomeness-close"
            value=""
            checked={!selectedOption}
            onChange={() => handleOptionChange('')}
          />
          <span className="select_label select_label-placeholder">
            素晴らしさのレベル
          </span>
        </li>

        <li className="select_items">
          <input
            className="select_expand"
            type="radio"
            name="awesomeness"
            id="awesomeness-opener"
            checked={isOpen}
            onChange={() => setIsOpen(!isOpen)}
          />
          <label className="select_closeLabel" htmlFor="awesomeness-close"></label>

          <ul className="select_options">
            <li className="select_option">
              <input
                className="select_input"
                type="radio"
                name="awesomeness"
                id="awesomeness-ridiculous"
                checked={selectedOption === 'ridiculous'}
                onChange={() => handleOptionChange('ridiculous')}
              />
              <label className="select_label" htmlFor="awesomeness-ridiculous">
                馬鹿げている
              </label>
            </li>

            <li className="select_option">
              <input
                className="select_input"
                type="radio"
                name="awesomeness"
                id="awesomeness-reasonable"
                checked={selectedOption === 'reasonable'}
                onChange={() => handleOptionChange('reasonable')}
              />
              <label className="select_label" htmlFor="awesomeness-reasonable">
                適切
              </label>
            </li>

            <li className="select_option">
              <input
                className="select_input"
                type="radio"
                name="awesomeness"
                id="awesomeness-lacking"
                checked={selectedOption === 'lacking'}
                onChange={() => handleOptionChange('lacking')}
              />
              <label className="select_label" htmlFor="awesomeness-lacking">
                不足している
              </label>
            </li>

            <li className="select_option">
              <input
                className="select_input"
                type="radio"
                name="awesomeness"
                id="awesomeness-awesomeless"
                checked={selectedOption === 'awesomeless'}
                onChange={() => handleOptionChange('awesomeless')}
              />
              <label className="select_label" htmlFor="awesomeness-awesomeless">
                素晴らしさがない
              </label>
            </li>
          </ul>

          <label className="select_expandLabel" htmlFor="awesomeness-opener"></label>
        </li>
      </ul>
      PostCss
    </form>
  );
};
