// -- model
import cryptoCurrenciesModel from "@models/cryptoCurrencies";

// -- hooks
import useFirstLoad from "@hooks/useFirstLoad";

// -- organisms
import CryptoCurrencies from "@organisms/CryptoCurrencies";

const CryptoCurrenciesWidget = () => {
	const { ready, data, error } = useFirstLoad(cryptoCurrenciesModel.list());

	return <CryptoCurrencies ready={ready} data={data?.data} error={error} />;
};

export default CryptoCurrenciesWidget;
