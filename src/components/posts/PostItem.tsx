import useCurrentUser from "@/src/hooks/useCurrentUser";
import useLoginModal from "@/src/hooks/useLoginModal";
import { formatDistanceToNowStrict } from "date-fns";
import { useRouter } from "next/router";
import React, { useCallback, useMemo } from "react";
import Avatar from "../avatar";
import { AiOutlineHeart, AiOutlineMessage } from "react-icons/ai";

interface PostItemProps {
	username?: string,
	data: Record<string, any>
}

const PostItem: React.FC<PostItemProps> = ({
	data,
	username,
}) => {
	const router = useRouter();
	const loginModal = useLoginModal();

	const { data: currentUser } = useCurrentUser();

	const goToUser = useCallback((event: any) => {
		event.stopPropagation();

		router.push(`/${data.user.username}`);
	}, [router, data.user.username]);

	const goToPost = useCallback(() => {
		router.push(`/posts/${data.id}`)
	}, [router, data.id]);

	const onLike = useCallback((event: any) => {
		event.stopPropagation();

		loginModal.onOpen();
	}, [loginModal]);

	const createdAt = useMemo(() => {
		if (!data.createdAt) {
			return null;
		}

		return formatDistanceToNowStrict(new Date(data.createdAt));
	}, [data.createdAt])

	return (
		<div
			onClick={goToPost}
			className="
				border-b-[1px]
				border-neutral-800
				p-5
				cursor-pointer
				hover:bg-neutral-900
				transition
			"
		>
			<div className="flex flex-row items-start gap-3">
				<Avatar username={data.user.username} />
				<div>
					<div className="flex flex-row items-center gap-2">
						<p
							onClick={goToUser}
							className="text-white font-semibold cursor-pointer hover:underline"
						>
							{data.user.name}
						</p>
						<span
							onClick={goToUser}
							className="text-neutral-500 cursor-pointer hover:underline hidden md:block"
						>
							@{data.user.username}
						</span>
						<span className="text-neutral-500 text-sm">
							{createdAt} ago
						</span>
					</div>
					<div className="text-white mt-1">
						{data.content}
					</div>
					<div className="flex flex-row items-center mt-3 gap-10">
						<div
							className="
								flex
								flex-row
								items-center
								text-neutral-500
								gap-2
								cursor-pointer
								transition
								hover:text-sky-500
							"
						>
							<AiOutlineMessage
								size={20}
							/>
							<p>
								{data.comments?.length || 0}
							</p>
						</div>
						<div
							onClick={onLike}
							className="
								flex
								flex-row
								items-center
								text-neutral-500
								gap-2
								cursor-pointer
								transition
								hover:text-red-500
							"
						>
							<AiOutlineHeart
								size={20}
							/>
							<p>
								{data.comments?.length || 0}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
 
export default PostItem;