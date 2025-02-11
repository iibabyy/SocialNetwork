import { useCallback } from "react";

interface ModelProps {
	isOpen?: boolean;
	disabled?: boolean;
	onClose: () => void;
	onSubmit: () => void;
	title?: string;
	body?: React.ReactElement;
	footer?: React.ReactElement;
	actionLabel: string;
}

const Model: React.FC<ModelProps> = ({
	isOpen,
	disabled,
	onClose,
	onSubmit,
	title,
	body,
	footer,
	actionLabel,
}) => {
	const handleClose = useCallback(() => {
		if (disabled) {
			return ;
		}

		onClose();
	}, [disabled, onClose]);

	const handleSubmit = useCallback(() => {
		if (disabled) {
			return ;
		}

		onSubmit();
	}, [disabled, onSubmit]);

	if (!isOpen) {
		return null;
	}

	return (
		<>
			<div
				className="
					justify-center
					items-center
					flex
					overflow-x-hidden
					overflow-y-auto
					fixed
					inset-0
					z=60 
				"
			>

			</div>
		</>
	);
}
 
export default Model;