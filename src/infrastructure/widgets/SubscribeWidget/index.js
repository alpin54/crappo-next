import { useState } from "react";

// -- model
import subscribeModel from "@models/subscribe";

// -- organisms
import Subscribe from "@organisms/Subscribe";

// -- state
import useStateSubscribe from "@states/subscribe";

const SubsribeWidget = () => {
	const [subscribeMessage, setsubscribeMessage] = useState("");
	const [subscribeLoading, setSubscribeLoading] = useState(false);
	const [subscribeSubmited, setsubscribeSubmited] = useState(false);
	const [subscribeSuccess, setsubscribeSuccess] = useState(false);
	const { setTotal } = useStateSubscribe();

	const handleSubmit = async (email) => {
		setSubscribeLoading(true);

		const formData = {
			email,
		};

		const { data, error } = await subscribeModel.submit(formData);

		setsubscribeSubmited(true);
		setSubscribeLoading(true);

		if (error) {
			setsubscribeMessage(error.message);
			setsubscribeSuccess(false);
		} else {
			setsubscribeMessage(data.message);
			setsubscribeSuccess(true);
		}

		setTimeout(() => {
			setsubscribeSubmited(false);
		}, 3000);

		setTotal(3);
	};
	return (
		<>
			<p
				className={
					subscribeSubmited && subscribeSuccess
						? "msg-success show"
						: "msg-success"
				}
			>
				{subscribeMessage}
			</p>
			<p
				className={
					subscribeSubmited && !subscribeSuccess
						? "msg-error show"
						: "msg-error"
				}
			>
				{subscribeMessage}
			</p>

			<Subscribe onSubmit={handleSubmit} loading={subscribeLoading} />
		</>
	);
};

export default SubsribeWidget;
