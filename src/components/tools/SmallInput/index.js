import React, { Component } from 'react';

import eyeOn from 'Root/images/eye-on.svg';
import eyeOff from 'Root/images/eye-off.svg';
import Error from 'Root/components/tools/TextField/Error';

import styles from './styles.less';

class SmallInput extends Component {
  state = {
    eye: true,
    eyeImg: eyeOn,
    type: this.props.type,
  }

  handleClick = () => {
    this.setState(state => ({
      eye: !state.eye,
      eyeImg: state.eye ? eyeOff : eyeOn,
      type: state.type === 'password' ? 'text' : 'password',
    }));
  }

  handleChange = () => {
    if (this.props.inputRef) {
      this.props.inputRef(this.textField.value);
    }

    if (this.props.onChange) {
      this.props.onChange();
    }
  }

  render() {
    return (
      <div className={styles.father}>
        <div className={styles.inputContainer}>
          <input
            step={this.props.step}
            type={this.state.type}
            className={styles.input}
            onChange={this.handleChange}
            ref={(r) => { this.textField = r; }}
            placeholder={this.props.placeholder}
          />

          {this.props.type === 'password'
          && (
            <span className={styles.invisible}>
              <img
                alt="Eye"
                src={this.state.eyeImg}
                onClick={this.handleClick}
              />
            </span>
          )}
        </div>

        <Error text={this.props.error} />
      </div>
    );
  }
}

export default SmallInput;
