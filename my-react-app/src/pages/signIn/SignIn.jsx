import { useDispatch } from "react-redux";
import { useGetUserMutation } from "../../redux/services/userDataApi";
import { setUser } from "../../redux/slices/userDataSlice";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Form from "../../containers/form/Form";
import Button from "../../components/button/Button";
import Field from "../../components/field/Field";
import { BUTTON_TYPES } from "../../utils/buttonsTypes";
import { FIELD_TYPES } from "../../utils/fieldTypes";

function SignIn() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [getUserData, { data }] = useGetUserMutation();
	const [token, setToken] = useState(null);
	const [loginError, setLoginError] = useState(false);

	useEffect(() => {
		if (token) {
			sessionStorage.setItem("token", token);
			getUserData();
		}
	}, [token, getUserData]);

	useEffect(() => {
		if (data) {
			const { firstName, lastName, userName } = data.body;
			const filteredUser = {
				firstName,
				lastName,
				userName,
			};
			dispatch(setUser(filteredUser));
			navigate("/user");
		}
	}, [data, dispatch, navigate]);

	const onSubmit = async (e) => {
		e.preventDefault();
		const logs = {
			email: e.target.username.value,
			password: e.target.password.value,
		};

		try {
			const response = await fetch(
				`${import.meta.env.VITE_DATABASE_URL}/user/login`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(logs),
				}
			);
			if (!response.ok) {
				setLoginError(true);
				throw new Error("Identifiants incorrects");
			} else {
				const data = await response.json();
				setToken(data.body.token);
			}
		} catch (error) {
			console.error("Erreur de connexion :", error.message);
		}
	};

	return (
		<main className='main bg-dark'>
			<section className='sign-in-content'>
				<i className='fa fa-user-circle sign-in-icon'></i>
				<h2>Sign In</h2>
				<Form onSubmit={(e) => onSubmit(e)}>
					<Field
						type={FIELD_TYPES.INPUT_TEXT}
						label='Username'
						id='username'
						name='username'
						className='input-wrapper'
						required
					/>
					<Field
						type={FIELD_TYPES.INPUT_PASSWORD}
						label='Password'
						id='password'
						name='password'
						className='input-wrapper'
						required
					/>
					<Field
						type={FIELD_TYPES.INPUT_CHECKBOX}
						label='Remember me'
						id='remember-me'
						name='remember-me'
						className='input-remember'
					/>
					<Button
						type={BUTTON_TYPES.SUBMIT}
						className='sign-in-button'
						children='Sign In'
					/>
					{loginError ? (
						<p className='login-error'>Identifiant ou mot de passe érroné.</p>
					) : null}
				</Form>
			</section>
		</main>
	);
}

export default SignIn;
