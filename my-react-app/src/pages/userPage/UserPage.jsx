import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/button/Button";
import { BUTTON_TYPES } from "../../utils/buttonsTypes";
import AccountContent from "../../containers/accountContent/AccountContent";
import { useState } from "react";
import Form from "../../containers/form/Form";
import Field from "../../components/field/Field";
import { FIELD_TYPES } from "../../utils/fieldTypes";
import { editUserName } from "../../redux/slices/userDataSlice";
import { useEditUserProfileMutation } from "../../redux/services/userDataApi";
import { useEffect } from "react";

function UserPage() {
	const user = useSelector((state) => state.auth.user);
	const dispatch = useDispatch();
	const [editUserProfile, { data }] = useEditUserProfileMutation();
	const [openModale, setOpenModale] = useState(false);
	const [onSuccess, setOnSuccess] = useState(false);
	const accountInfos = [
		{
			id: 1654163,
			type: "Argent Bank Checking (x8349)",
			amount: "$2,082.79",
			amountDesc: "Available Balance",
		},
		{
			id: 56465411,
			type: "Argent Bank Savings (x6712)",
			amount: "$10,928.42",
			amountDesc: "Available Balance",
		},
		{
			id: 6510544,
			type: "Argent Bank Credit Card (x8349)",
			amount: "$184.30",
			amountDesc: "Current Balance",
		},
	];

	useEffect(() => {
		if (data) {
			dispatch(editUserName(data.body.userName));
			setOpenModale(false);
			onSuccessEdit();
		}
	}, [data, dispatch]);

	const onSubmit = async (e) => {
		e.preventDefault();
		const userName = e.target.username.value;
		editUserProfile({ userName });
	};

	const onSuccessEdit = () => {
		setOnSuccess(true);
		setTimeout(() => setOnSuccess(false), 10000);
	};

	return (
		<main className='main bg-dark'>
			<div className='header'>
				{openModale ? (
					<>
						<h1>Edit user info</h1>
						<Form
							onSubmit={(e) => onSubmit(e)}
							className='edit-infos-form'
						>
							<Field
								type={FIELD_TYPES.INPUT_TEXT}
								label='User name'
								id='username'
								name='username'
								className='input-wrapper'
								placeholder={user.userName}
								required
							/>
							<Field
								type={FIELD_TYPES.INPUT_TEXT}
								label='First name'
								id='firstname'
								name='firstname'
								placeholder={user.firstName}
								className='input-wrapper'
								disabled
							/>
							<Field
								type={FIELD_TYPES.INPUT_TEXT}
								label='Last name'
								id='lastname'
								name='lastname'
								placeholder={user.lastName}
								className='input-wrapper'
								disabled
							/>
							<div className='edit-form-buttons'>
								<Button
									type={BUTTON_TYPES.SUBMIT}
									children='Save'
									className='edit-form-button'
								/>
								<Button
									type={BUTTON_TYPES.DEFAULT}
									className='edit-form-button'
									onClick={() => setOpenModale(false)}
								>
									Cancel
								</Button>
							</div>
						</Form>
					</>
				) : (
					<>
						<h1>
							{" "}
							Welcome back <br />
							{user?.firstName} {user?.lastName}!
						</h1>
						{onSuccess ? (
							<p>Votre nom d'utilisateur est désormais : {user.userName}</p>
						) : null}
						<Button
							type={BUTTON_TYPES.DEFAULT}
							className='edit-button'
							onClick={() => setOpenModale(true)}
						>
							Edit Name
						</Button>
					</>
				)}
			</div>
			<h2 className='sr-only'>Accounts</h2>
			{accountInfos.map((item) => (
				<AccountContent
					accountData={item}
					key={item.id}
				/>
			))}
		</main>
	);
}

export default UserPage;
