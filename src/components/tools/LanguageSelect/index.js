import Dropdown from 'rc-dropdown';
import classnames from 'classnames';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import Menu, { Item as MenuItem } from 'rc-menu';

import chinaIcon from 'Root/images/china.png';
import englishIcon from 'Root/images/english.png';
import downArrow from 'Root/images/down-arrow.png';
import changeLanguage from 'Root/actions/other/changeLanguage';

import styles from './styles.less';

class LanguageSelect extends Component {
  handleSelect = ({ key }) => {
    changeLanguage(key);
  }

  render() {
    const menu = (
      <Menu
        onSelect={this.handleSelect}
        style={{ width: '120px', cursor: 'pointer' }}
      >
        <MenuItem key="en">
          <div className={styles.language}>
            <img src={englishIcon} alt="English Icon" className={styles.langIcon} />

            <p>&nbsp; English</p>
          </div>
        </MenuItem>

        <MenuItem key="zh">
          <div className={styles.language}>
            <img src={chinaIcon} alt="Chinese Icon" className={styles.langIcon} />

            <p>&nbsp; Chinese</p>
          </div>
        </MenuItem>
      </Menu>
    );

    return (
      <Dropdown
        overlay={menu}
        trigger={['click']}
        animation="slide-up"
      >
        <div className={classnames(styles.container, styles.language)}>
          <img
            alt="Icon"
            className={styles.langIcon}
            src={this.props.language === 'en' ? englishIcon : chinaIcon}
          />

          <p>
            &nbsp;
            {this.props.language === 'en' ? 'English' : 'Chinese'}
          </p>

          <img src={downArrow} alt="Down Arrow" className={styles.downArrow} />
        </div>
      </Dropdown>
    );
  }
}

export default connect(state => ({
  language: state.language,
}))(LanguageSelect);
