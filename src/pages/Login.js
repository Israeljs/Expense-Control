import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { saveLoginInfo as loginAction } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      disabledButton: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.isButtonDisAble = this.isButtonDisAble.bind(this);
  }

  isButtonDisAble() {
    const { email, password } = this.state;
    const PASSWORD_LENGTH = 6;
    const regex = /\S+@\S+\.\S+/; // Fonte: www.horadecodar.com.br
    const isabled = !(regex.test(email) && password.length >= PASSWORD_LENGTH);
    this.setState({
      disabledButton: isabled,
    });
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => this.isButtonDisAble());
  }

  handleClick() {
    const { saveLogin } = this.props;
    const { email } = this.state;
    saveLogin(email);
    const { history } = this.props;
    history.push('./carteira');
  }

  render() {
    const { email, password, disabledButton } = this.state;
    return (
      <form className="Login">
        <h1 className="text-center">Login</h1>
        <section className="login-inputs">
          <input
            type="email"
            onChange={ this.handleChange }
            placeholder="E-mail"
            name="email"
            value={ email }
            data-testid="email-input"
          />
          <input
            type="password"
            onChange={ this.handleChange }
            placeholder="Senha"
            name="password"
            value={ password }
            data-testid="password-input"
          />
        </section>
        <button
          className="button"
          type="button"
          onClick={ this.handleClick }
          disabled={ disabledButton }
        >
          Entrar
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  saveLogin: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  saveLogin: (state) => dispatch(loginAction(state)),
});

export default connect(null, mapDispatchToProps)(Login);
