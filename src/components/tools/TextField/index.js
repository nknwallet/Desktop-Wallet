import React, { Fragment, Component } from 'react';

import eyeOn from 'Root/images/eye-on.svg';
import eyeOff from 'Root/images/eye-off.svg';
import uploadIcon from 'Root/images/upload.png';

import styles from './styles.less';

class TextField extends Component {
  state = {
    eyeImg: eyeOn,
    type: this.props.type,
    eye: this.props.type === 'password',
  };

  handleClick = () => {
    this.setState(state => ({
      eye: !state.eye,
      eyeImg: state.eye ? eyeOff : eyeOn,
      type: state.type === 'password' ? 'text' : 'password',
    }));
  }

  openInput = () => {
    this.input.click();
  }

  inputWallet = () => {
    console.log(this.input.files[0]);
  }

  render() {
    return (
      <div className={styles.container}>
        {this.props.type !== 'upload'
          && (
          <input
            type={this.state.type}
            className={styles.input}
            placeholder={this.props.placeholder}
          />
          )
        }

        {this.props.type === 'password'
          && (
            <span className={styles.invisible}>
              <img
                alt="Eye"
                src={this.state.eyeImg}
                onClick={this.handleClick}
              />
            </span>
          )
        }

        {this.props.type === 'upload'
          && (
            <Fragment>
              <input
                type="file"
                onChange={this.inputWallet}
                className={styles.inputWallet}
                ref={(c) => { this.input = c; }}
              />

              <div
                role="presentation"
                onClick={this.openInput}
                className={styles.openInputContainer}
              >
                <input
                  type="text"
                  placeholder="Upload wallet file"
                  className={styles.openInputField}
                />

                <div
                  className={styles.openInputIconContainer}
                >
                  <img src={uploadIcon} alt="Upload Icon" />
                </div>
              </div>
            </Fragment>
          )
        }
      </div>
    );
  }
}

export default TextField;
