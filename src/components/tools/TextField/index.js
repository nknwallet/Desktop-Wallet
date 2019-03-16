import classnames from 'classnames';
import { connect } from 'react-redux';
import React, { Fragment, Component } from 'react';

import eyeOn from 'Root/images/eye-on.svg';
import eyeOff from 'Root/images/eye-off.svg';
import language from 'Root/helpers/language';
import uploadIcon from 'Root/images/upload.png';

import Error from './Error';
import styles from './styles.less';

class TextField extends Component {
  state = {
    fileName: '',
    eyeImg: eyeOn,
    type: this.props.type,
    eye: this.props.type === 'password',
    openInputStyles: styles.openInputContainer,
  };

  handleClick = () => {
    this.setState(state => ({
      eye: !state.eye,
      eyeImg: state.eye ? eyeOff : eyeOn,
      type: state.type === 'password' ? 'text' : 'password',
    }));
  }

  openInput = () => {
    this.inputFile.click();
  }

  inputWallet = () => {
    const { inputRef } = this.props;
    const file = this.inputFile.files[0];
    const reader = new global.FileReader();

    if (!inputRef) {
      return;
    }

    if (!file) {
      inputRef({
        error: language.noFileSelected[this.props.language],
      });

      return;
    }

    this.setState({
      openInputStyles: classnames(styles.openInputContainer, styles.inputFilledContainer),
    });

    reader.addEventListener('loadend', () => {
      inputRef({
        data: reader.result,
      });

      this.setState({
        fileName: file.name,
      });
    });

    reader.readAsText(file, 'utf8');
  }

  handleChange = () => {
    if (this.props.inputRef) {
      this.props.inputRef(this.textField.value);
    }
  }

  render() {
    return (
      <Fragment>
        <div className={styles.container}>
          {this.props.type !== 'upload'
          && (
            <input
              type={this.state.type}
              className={styles.input}
              onChange={this.handleChange}
              ref={(r) => { this.textField = r; }}
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
                  accept=".dat,.json"
                  onChange={this.inputWallet}
                  className={styles.inputWallet}
                  ref={(c) => { this.inputFile = c; }}
                />

                <div
                  role="presentation"
                  onClick={this.openInput}
                  className={this.state.openInputStyles}
                >
                  <input
                    type="text"
                    value={this.state.fileName}
                    onChange={this.inputWallet}
                    className={styles.openInputField}
                    placeholder={this.props.placeholder}
                  />

                  <div className={styles.openInputIconContainer}>
                    <img src={uploadIcon} alt="Upload Icon" />
                  </div>
                </div>
              </Fragment>
            )
          }
        </div>

        <Error text={this.props.error} />
      </Fragment>
    );
  }
}

export default connect(state => ({
  language: state.language,
}))(TextField);
