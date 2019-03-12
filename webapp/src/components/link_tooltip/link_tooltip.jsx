import React from 'react';
import PropTypes from 'prop-types';

export default class LinkTooltip extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
    };
  }

  static propTypes = {
    href: PropTypes.string.isRequired,
  }

  onClick = () => {
    this.setState({clicked: !this.state.clicked});
  }

  render() {
    return (
      <div
        style={parentDivStyles}
      >
        <i
          style={iconStyles}
          className='icon fa fa-plug'
        />
        <div
          className={'btn btn-primary'}
          style={{marginRight: '5px'}}
          onClick={this.onClick}
        >
          {this.state.clicked ? 'Clicked' : 'Click'}
        </div>
        {'This is a custom tooltip from the Demo Plugin'}
      </div>
    );
  }
}

const parentDivStyles = {
  backgroundColor: '#ffffff',
  borderRadius: '4px',
  boxShadow: 'rgba(61, 60, 64, 0.1) 0px 17px 50px 0px, rgba(61, 60, 64, 0.1) 0px 12px 15px 0px',
  fontSize: '14px',
  marginTop: '10px',
  padding: '10px 15px 15px',
};

const iconStyles = {
  paddingRight: '5px',
};
