import { listCountry } from "./constant";

const handleSearchSelectCountry = (valueSearch) => {
	const lowerCaseSearch = valueSearch.toLowerCase();

	const dataFilter = listCountry.map((item) => {
		const filteredCountries = item.list_country.filter(
			(country) => country.name.toLowerCase().includes(lowerCaseSearch)
		);

		if (filteredCountries.length === 0) {
			return null;
		}

		return {
			...item,
			list_country: filteredCountries,
		};
	}).filter(Boolean);

	return dataFilter;
};

export { handleSearchSelectCountry };
