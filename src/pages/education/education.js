/**
 * Copyright (c) 2017 Yuhogyun - portfolio
 * All rights reserved
 *
 * @flow
 * @author Yuhogyun
 */

/** External dependencies **/
import React, {Component} from 'react'

/** Internal dependencies **/
import Div from "../../common/components/Div";
import SecondPageDiv from "../../common/components/SecondPageDiv";
import Title from "../../common/components/Title";

export default class Education extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            
        }
    }
    
    componentDidMount() {
        
    }
    
    render() {
        // const {t, i18n} = this.props;
        return(
          <Div>
            <SecondPageDiv backgroundColor={'blue'}>
              <Title>Education</Title>
              <Title>Work</Title>
            </SecondPageDiv>
          </Div>
        );
    }
}