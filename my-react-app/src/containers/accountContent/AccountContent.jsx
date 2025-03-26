import React from "react";
import Button from "../../components/button/Button";
import { BUTTON_TYPES } from "../../utils/buttonsTypes";
import PropTypes from "prop-types";

function AccountContent({ accountData }) {
	return (
		<section className='account'>
			<div className='account-content-wrapper'>
				<h3 className='account-title'>{accountData.type}</h3>
				<p className='account-amount'>{accountData.amount}</p>
				<p className='account-amount-description'>{accountData.amountDesc}</p>
			</div>
			<div className='account-content-wrapper cta'>
				<Button
					type={BUTTON_TYPES.DEFAULT}
					className='transaction-button'
					onClick={() => null}
				>
					View Transacions
				</Button>
			</div>
		</section>
	);
}
AccountContent.PropTypes = {
	accountData: PropTypes.shape({
		type: PropTypes.string.isRequired,
		amount: PropTypes.string.isRequired,
		amountdesc: PropTypes.string.isRequired,
	}).isRequired,
};
export default AccountContent;
