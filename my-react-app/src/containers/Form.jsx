import Button from "../components/Button";
import Field from "../components/Field";
import { BUTTON_TYPES } from "../helpers/buttonsTypes";
import { FIELD_TYPES } from '../helpers/fieldTypes';

function Form() {
  return (
    <form>
        <Field label="Username" id="username" name="username" className="input-wrapper" required/>
        <Field type={FIELD_TYPES.INPUT_PASSWORD} label="Password" id="password" name="password" className="input-wrapper" required/>
        <Field type={FIELD_TYPES.INPUT_CHECKBOX} label="Remember me" id="remember-me" name="password" className="input-remember" required/>
        <Button type={BUTTON_TYPES.SUBMIT} onClick={() => null} className="sign-in-button" children="Sign In"/>
    </form>
  );
};

export default Form