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

export default class Skills extends Component {
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
            <SecondPageDiv backgroundColor={'black'}>
              <Title>Skills</Title>
            </SecondPageDiv>
          </Div>
        );
    }
}