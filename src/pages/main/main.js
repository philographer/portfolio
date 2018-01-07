/**
 * Copyright (c) 2017 Yuhogyun - portfolio
 * All rights reserved
 *
 * @flow
 * @author Yuhogyun
 */

/** External dependencies **/
import React, {Component} from 'react'
import Title from "../../common/components/Title";
import Div from "../../common/components/Div";
import {Video} from "../../common/components/Video";
import {FirstPageDiv} from "../../common/components/FirstPageDiv";
import HeightLineDiv from "../../common/components/HeightLineDiv";
import IntroduceDiv from "../../common/components/IntroduceDiv";
import {DivHeight} from "../../common/components/DivHeight";
import IntroduceInnerDiv from "../../common/components/IntroduceInnerDiv";
import SkewDiv from "../../common/components/SkewDiv";
import SkewText from "../../common/components/SkewText";
import NormalDiv from "../../common/components/NormalDiv";
import BlurBackgroundTitle from "../../common/components/BlurBackgroundTitle";
import StrongTitle from "../../common/components/StrongTitle";

/** Internal dependencies **/

export default class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount() {
      console.log(this.props)
    }

    render() {
        const { t } = this.props;
        return(
          <Div backgroundColor={'red'}>
            {/*<Video autoPlay muted loop>*/}
              {/*<source src="https://s3-ap-northeast-1.amazonaws.com/inha-tastingparty/497632384.mp4" type="video/mp4"/>*/}
            {/*</Video>*/}
            <FirstPageDiv>
              {/*<div style={'ss'}>*/}
              <HeightLineDiv/>
              <IntroduceDiv>
                <DivHeight/>
                <IntroduceInnerDiv>
                  <SkewDiv>
                    <SkewText>
                      ello
                    </SkewText>
                  </SkewDiv>
                  <NormalDiv>
                    <Title delay={"0.9s"}>{t('firstAgeDesc')} <StrongTitle size={'5em'} color={'lightgray'}>25</StrongTitle><StrongTitle size={'0.5em'}>YEARS OLD</StrongTitle></Title>
                    <Title delay={"1.2s"}>{t('hobbyDesc')}</Title>
                    <Title delay={"1.4s"}>{t('whereDesc')}</Title>
                    <Title delay={"1.5s"}>{t('studiedAtDesc')}</Title>
                  </NormalDiv>
                  <BlurBackgroundTitle delay={"2s"}>{'Javascript'} {t('whoAmIDesc')}</BlurBackgroundTitle>
                </IntroduceInnerDiv>
              </IntroduceDiv>
            </FirstPageDiv>
          </Div>
        );
    }
}