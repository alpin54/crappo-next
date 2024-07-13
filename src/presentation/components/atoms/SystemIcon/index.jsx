const SystemIcon = ({ name }) => {
	const classNames = `ci-${name}`;

	return <i className={classNames}></i>;
};

export default SystemIcon;
