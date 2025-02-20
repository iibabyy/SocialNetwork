import useLoginModal from "@/hooks/useLoginModal";
import { useCallback, useState } from "react";
import Input from "../Input";
import Modal from "../Modal";
import { register } from "module";
import useRegisterModal from "@/hooks/useRegisterModal";
import { signIn } from "next-auth/react";
import { SubmitHandler, useForm } from 'react-hook-form'

type LoginFields = {
	email: string,
	password: string,
};

const LoginModal = () => {
	const loginModal = useLoginModal();
	const registerModal = useRegisterModal();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const { register, handleSubmit } = useForm<LoginFields>();

	const onToggle = useCallback(async () => {
		if (isLoading) {
			return ;
		}

		loginModal.onClose();
		registerModal.onOpen();
	}, [isLoading, registerModal, loginModal])

	// const onSubmit: SubmitHandler<LoginFields> = useCallback(async (data) => {
	// 	console.log(data)

	// }, [loginModal, email, password])
	
	const onSubmit: SubmitHandler<LoginFields> = (data) => {
		console.log("DATA: ", data)
	};

	const bodyContent = (
		<div className="flex flex-col gap-4">
			<Input
				{...register("email")}
				placeholder="Email"
				type="text"
				// onChange={(e) => setEmail(e.target.value)}
				// value={email}
				disabled={isLoading}
			/>
			<p></p>
			<Input
				{...register("password")}
				placeholder="Password"
				// onChange={(e) => setPassword(e.target.value)}
				// value={password}
				type="password"
				disabled={isLoading}
			/>
		</div>
	);

	const footerContent = (
		<div className="text-neutral-400 text-center mt-4">
			<p>First time here ?
				<span
					onClick={onToggle}
					className="
						text-white
						cursor-pointer
						hover:underline
					"
				> Register </span>
			</p>
		</div>
	);

	return (
		<Modal
			disabled={isLoading}
			isOpen={loginModal.isOpen}
			title="Login"
			actionLabel="Sign in"
			onClose={loginModal.onClose}
			onSubmit={handleSubmit(onSubmit)}
			body={bodyContent}
			footer={footerContent}
		/>
	);
}
 
export default LoginModal;