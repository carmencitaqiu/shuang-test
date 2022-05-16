import React, { FC, memo, useState } from 'react';
import styled from 'styled-components';
const DropdownWrapper = styled('div')`
  /* border: 1px solid red; */
  width: 250px;
  padding: 10px;

  background-color: #fff;
  .title {
    color: #333;
    font-size: 20px;
  }
  .inputSearch {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    /* height: 40px; */
    margin-top: 5px;
    padding: 5px 10px;
    border: 1px solid #7a7d84;
    border-radius: 6px;
    .arrow {
      width: 5px;
      height: 5px;
    }
    input {
      max-width: 60%;
      color: #7a7d84;
      font-size: 16px;
      border: none;
      &:focus {
        border: none;
        outline: none;
      }
      &::placeholder {
        color: #ddd;
        font-size: 16px;
      }
    }
  }
`;
const DropdownListStyled = styled('div')`
  box-shadow: 0px 10px 28px -10px rgba(22, 23, 24, 0.35),
    0px 10px 20px -15px rgba(22, 23, 24, 0.2);
  background-color: #fff;
  border-radius: 8px;
  min-height: 200px;
  padding: 10px 0;
  .menuItem {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px;
    padding: 5px;
    /* border: 1px solid red; */
    color: #7a7d84;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      background: #f7f7f7;
    }
    .flag {
      width: 22px;
      height: 14px;
    }
  }
`;

export type CountryItemType = {
  countryName: string;
  countryFlagUrl: string;
  countryId: string;
};
export interface DropdownProps {
  countryList: CountryItemType[];
  handleSearchChange: Function;
}
const CountryDropdown: FC<DropdownProps> = ({
  countryList,
  handleSearchChange,
}) => {
  console.log('********' + JSON.stringify(countryList));
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchCountry, setSearchCountry] = useState<string>('');

  const onItemSelected = (item: CountryItemType) => {
    setSearchCountry(item.countryName);
    setShowDropdown(false);
  };
  return (
    <DropdownWrapper>
      <div className="title">Country</div>
      <div className="inputSearch">
        <input
          placeholder="Select country"
          onChange={event => {
            setSearchCountry(event.target.value);
            handleSearchChange(event.target.value);
          }}
          value={searchCountry}
        />
        <svg
          onClick={() => setShowDropdown(!showDropdown)}
          t="1652656705440"
          className="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1325"
          width="15"
          height="15"
        >
          <path
            d="M859.8528 292.9664H164.1472c-40.1408 0-60.3136 48.5376-31.8464 77.0048L480.1536 717.824c17.6128 17.6128 46.1824 17.6128 63.7952 0l347.8528-347.8528c28.3648-28.4672 8.2944-77.0048-31.9488-77.0048z"
            p-id="1326"
          ></path>
        </svg>
      </div>
      {showDropdown && (
        <DropdownListStyled>
          {countryList.length &&
            countryList.map((item, index) => {
              return (
                <div
                  key={`country${index}`}
                  className="menuItem"
                  onClick={() => onItemSelected(item)}
                >
                  <div>{item.countryName}</div>
                  <img className="flag" src={item.countryFlagUrl} />
                </div>
              );
            })}
        </DropdownListStyled>
      )}
    </DropdownWrapper>
  );
};

export default CountryDropdown;
