import classnames from 'classnames';
import React, { Component } from 'react';

import copyText from 'Root/helpers/copy';
import copyIcon from 'Root/images/copy.png';
import checkIcon from 'Root/images/check.png';

import styles from './styles.less';

class CopyText extends Component {
  state = {
    img: copyIcon,
    className: styles.copied,
  }

  handleCopy = () => {
    copyText(this.props.text);

    this.setState({
      img: checkIcon,
      className: classnames(styles.copied, styles.show),
    });

    setTimeout(() => {
      this.setState({
        img: copyIcon,
        className: styles.copied,
      });
    }, 500);
  }

  render() {
    return (
      <div className={styles.container}>
        <img src={this.state.img} alt="Icon" onClick={this.handleCopy} className={styles.copy} />

        <p className={this.state.className}>Copied!</p>
      </div>
    );
  }
}

export default CopyText;
