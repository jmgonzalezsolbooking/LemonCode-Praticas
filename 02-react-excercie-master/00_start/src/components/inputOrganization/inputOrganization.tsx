import * as React from 'react';
import { MemberEntity } from '../../model/member';

interface Props {
    defaultValue: string;
    onChangeOrganization: any;
}

// We define members as a state (the compoment holding this will be a container
// component)
/*interface State {
  members: Array<MemberEntity>
}*/

// Nice tsx guide: https://github.com/Microsoft/TypeScript/wiki/JSX
export class InputOrganizationComponent extends React.Component<Props> {

  constructor(props: Props) {
    super(props);
    // set initial state    
    this.handleChange = this.handleChange.bind(this);
    this.props.onChangeOrganization(this.props.defaultValue);
  }

  handleChange(e) {
    this.props.onChangeOrganization(e.target.value);
  }
  
  public render() {
    return (
        <input type="textbox" defaultValue={this.props.defaultValue} onChange={this.handleChange}></input>
    );
  }
}