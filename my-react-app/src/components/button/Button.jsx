
import PropTypes from 'prop-types';
import { BUTTON_TYPES } from '../../helpers/buttonsTypes';

function Button({ type, onClick, disabled, className, children}) {

    switch (type) {
        case BUTTON_TYPES.DEFAULT:
            return (
                <button
                type='button'
                disabled={disabled}
                className={className}
                onClick={onClick}
                >
                    {children}
                </button>
            );
        case BUTTON_TYPES.SUBMIT:
            return (
                <input 
                type='submit'
                className={className}
                disabled={disabled}
                value={children}
                onClick={onClick}
                />
            )
        default:
            return (
                <button
                type='button'
                disabled={disabled}
                className={className}
                onClick={onClick}
                >
                    {children}
                </button>
            );
    };
};

Button.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.number,
    disabled: PropTypes.bool,
    children: PropTypes.node,
};
Button.defaultProps = {
    disabled: false,
    onClick: () => null,
    type: BUTTON_TYPES.DEFAULT,
    className: "",
    children: null
};
export default Button