import useCurrentUser from "@/src/hooks/useCurrentUser";
import useLoginModal from "@/src/hooks/useLoginModal";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { IconType } from "react-icons";

interface SidebarItemProps {
	label: string;
	href?: string;
	icon: IconType;
	onClick?: () => void;
	auth?: boolean
}

const SidebarItem: React.FC<SidebarItemProps> = ({
	label,
	href,
	icon: Icon,
	onClick,
	auth,
}) => {
	const loginModal = useLoginModal();
	const { data: currentUser } = useCurrentUser();
	const router = useRouter();

	const handleClick = useCallback(() => {
		if (onClick) {
			return onClick()
		}

		if (auth && !currentUser) {
			loginModal.onOpen()
		} else if (href) {
			router.push(href)
		}
	}, [router, onClick, href, currentUser, auth, loginModal])

	return (
		<div onClick={handleClick} className="flex flex-row items-center">
			{/* Mobile */}
			<div
				className="
					lg:hidden
					realtive
					rounded-full
					h-14
					w-14
					flex items-center
					justify-center
					p-4
					hover:bg-slate-300
					hover:bg-opacity-10
					cursor-pointer
				"
			>
				<Icon size={28} color="white" />
			</div>

			{/* Desktop */}
			<div
				className="
					hidden
					lg:flex
					realtive
					rounded-full
					items-center
					gap-4
					justify-center
					p-4
					hover:bg-slate-300
					hover:bg-opacity-10
					cursor-pointer
				"
			>
				<Icon size={24} color="white" />
				<p className="hidden lg:block text-white text-xl">
					{label}
				</p>
			</div>
		</div>
	);
}
 
export default SidebarItem;