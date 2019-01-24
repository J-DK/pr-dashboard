import * as React from 'react';
import './AddRepoButton.scss';
import {IAddRepoButtonProps} from './index';

class AddRepoButton extends React.Component<IAddRepoButtonProps, {}> {

  constructor(props: IAddRepoButtonProps) {
    super(props);
  }

  render() {
    return (
        <div id="btn-add-repo">
          <div className="btn-icon">
            <div className="btn-add">
              <i className="fa fa-plus"/>
            </div>
          </div>
          <div className="btn-desc">
            <span className="btn-title">{this.props.title}</span>
            <div className="btn-circle" />
            <div className="btn-block" />
          </div>
        </div>
    );
  }
}
export default AddRepoButton;
