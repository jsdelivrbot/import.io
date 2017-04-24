import React, { Component } from 'react';
import UpdateInvoiceModalForm from './UpdateInvoiceModalForm';
import { Popover, Button, ButtonToolbar, OverlayTrigger } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';



class UpdateInvoiceButton extends Component {
  constructor() {
    super();

    this.state = {
      show: false
    };
    this.toggle = this.toggle.bind(this);
  }

  //toggle closes modal's that pop up after hitting submit.
  toggle() {
    if (!this.state.show) {
      this.refs.overlay.show();
      this.setState({
        show: !this.state.show
      });
    } else {
      this.refs.overlay.hide();
      this.setState({
        show: !this.state.show
      });
    }
  }

  render () {
    return (
      <ButtonToolbar >
        <OverlayTrigger
          rootClose={true}
          ref="overlay"
          trigger="manual"
          placement="left"
          overlay={
          <Popover id="popover-positioned-left" className='popover-form-fields'>
            {<UpdateInvoiceModalForm hide={this.toggle} invoice={this.props.invoice} handleUpdating={this.props.handleUpdating}/>}
          </Popover>}>
          <FontAwesome onClick={this.toggle} name='edit' size='lg' className='edit-button'/>
        </OverlayTrigger>
      </ButtonToolbar>
    );
  }
}



export default UpdateInvoiceButton;
