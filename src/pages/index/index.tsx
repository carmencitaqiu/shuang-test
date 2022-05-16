import React, { FC, Suspense, useEffect, useState } from 'react';
import PageLoading from './components/PageLoading';

const CountryDropdown = React.lazy(() =>
  import('./components/CountryDropdown'),
);
import { CountryItemType } from './components/CountryDropdown';
interface IndexProps {
  dispatch: Dispatch;
  queryTable: QueryTableState;
  loading?: boolean;
}
const COUNT = 18;

const countryList: CountryItemType[] = [
  {
    countryId: '0001',
    countryName: 'United States',
    countryFlagUrl:
      'https://www.sic-info.org/wp-content/uploads/2014/01/us.png',
  },
  {
    countryId: '0002',
    countryName: 'United Kingdom',
    countryFlagUrl:
      'https://www.sic-info.org/wp-content/uploads/2014/01/gb.png',
  },
  {
    countryId: '0003',
    countryName: 'Canada',
    countryFlagUrl:
      'https://www.sic-info.org/wp-content/uploads/2014/01/ca.png',
  },
];

const Index: FC<IndexProps> = ({ queryTable, dispatch, loading }) => {
  const [countries, setCountries] = useState<CountryItemType[]>(countryList);

  const onSearchChange = (val: string) => {
    if (val && val !== '') {
      const countiesAfterFilter = countries.filter(item => {
        return item.countryName.indexOf(val) > -1;
      });
      setCountries(countiesAfterFilter);
    } else {
      setCountries(countryList);
    }
  };
  return (
    <div>
      <Suspense fallback={<PageLoading />}>
        <CountryDropdown
          handleSearchChange={(val: string) => onSearchChange(val)}
          countryList={countries}
        />
      </Suspense>
    </div>
  );
};

export default Index;
