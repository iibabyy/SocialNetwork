import { format } from 'date-fns'
import useCurrentUser from "@/src/hooks/useCurrentUser";
import useUser from "@/src/hooks/useUser";
import React, { useCallback, useMemo } from "react";
import Button from '../Button';
import { BiCalendar } from 'react-icons/bi';
import useEditModal from '@/src/hooks/useEditModal';
import useLoginModal from '@/src/hooks/useLoginModal';
import useFollow from '@/src/hooks/useFollow';

interface UserBioProps {
	username: string
}

const UserBio: React.FC<UserBioProps> = ({ username }) => {
	const {data: currentUser } = useCurrentUser();
	const {data: fetchedUser } = useUser(username);

	const loginModal = useLoginModal();
	const editModal = useEditModal();

	const { isFollowing, toggleFollow } = useFollow(username);

	const createdAt = useMemo(() => {
		if (!fetchedUser?.createdAt) {
			return null;
		}

		return format(new Date(fetchedUser.createdAt), 'MMMM yyyy');
	}, [fetchedUser?.createdAt]);

	return (
		<div className='border-b-[1px] border-neutral-800 pb-4'>
			<div className='flex justify-end p-2'>
				{currentUser?.username === username ? (
					// Edit Button
					<Button
						secondary
						label='Edit'
						onClick={editModal.onOpen}
					/>
				) : (
					// Follow Button
					<Button
						onClick={toggleFollow}
						label={isFollowing ? 'Unfollow' : 'Follow'}
						secondary={!isFollowing}
						outline={isFollowing}
					/>
				)}
			</div>
			<div className='mt-8 px-4'>
				{/* Name & Username */}
				<div className='flex flex-col'>
					<p className='text-white text-2xl font-semibold'>
						{fetchedUser?.name}
					</p>
					<p className='text-md text-neutral-500'>
						@{fetchedUser?.username}
					</p>
				</div>
				{/* Bio */}
				<div className='flex flex-col mt-4'>
					{fetchedUser?.bio && (
						<p className='text-white'>{fetchedUser?.bio}</p>
					)}
					{/* Date */}
					<div className='
						flex
						flex-row
						items-center
						gap-2
						mt-4
						text-neutral-500
						'>
						<BiCalendar size={24} />
						<p>Joined {createdAt}</p>
					</div>
				</div>
				<div className='flex flex-row items-center mt-4 gap-6'>
					<div className='flex flex-row items-center gap-1'>
						<p className='text-white'> {fetchedUser?.followingCount || 0} </p>
						<p className='text-neutral-500'> Following </p>
					</div>
					<div className='flex flex-row items-center gap-1'>
						<p className='text-white'> {fetchedUser?.followersCount || 0} </p>
						<p className='text-neutral-500'> Followers </p>
					</div>
				</div>
			</div>
		</div>
	);
}
 
export default UserBio;