import { IconType } from "react-icons";

interface SidebarItemProps {
	label: string;
	href?: string;
	icon: IconType;
	onClick?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
	label,
	href,
	icon: Icon,
	onClick,
}) => {
	return (
		<div className="flex flex-row items-center">
			{/* Mobile (!lg) */}
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

			{/* Large screens (lg) */}
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