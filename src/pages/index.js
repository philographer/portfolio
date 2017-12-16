/**
 * Copyright (c) 2017 Yuhogyun - portfolio
 * All rights reserved
 *
 * @flow
 * @author Yuhogyun
 */

import React, { Component } from 'react';
import {translate} from 'react-i18next';

// Pages
import Main from './main';
import AboutMe from "./aboutMe";
import Education from "./education";
import Introduce from "./introduce";
import Skills from "./skills";
import Works from "./works";
import Div from "../common/components/Div";
import FixedNavigation from "../common/components/FixedNavigation";


class Pages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      currentPageFloat: 0,
    }

    this.totalPage = 5;
    this.animationDone = [true, false, false, false, false, true]; // total `5` page, but need to `total + 1 + 1` => `6` index
    this.animationScrollPos = [0.3, 1.3, 2.3, 3.3];
  }

  componentDidMount() {
    // console.log('componentDidMount');
    document.addEventListener('scroll', this.handleScroll);
    const height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    // console.log('height is', height);
    this.setState({ height });
    this.handleScroll();
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const nowScrollHeight = document.documentElement.scrollTop;
    // console.log(nowScrollHeight / this.state.height);
    if(this.state.currentPageFloat !== parseFloat(nowScrollHeight / this.state.height).toFixed(1)) {
      this.setState({currentPageFloat: parseFloat(nowScrollHeight / this.state.height).toFixed(1)}, () => {
        this.startAnim();
      });
    }
  }

  startAnim() {
    const currentPage = parseInt(this.state.currentPageFloat);
    const nextPage = currentPage + 1;
    // console.log('this.state.currentPageFloat', this.state.currentPageFloat);
    // console.log('nextPage', nextPage);
    if(!this.animationDone[nextPage] && this.animationScrollPos[currentPage] <= this.state.currentPageFloat) { // 다음 애니메이션이 아직 실행되지 않았고, 스크롤이 현재페이지 특정 지점 x.3 이상,
      Array(nextPage+1).fill(0).forEach((item, idx) => { // 앞부분에서 수행되지 않은 애니메이션 수행
        this.animationDone[idx] = true;
        this._triggerIdxAnime(idx);
      })
    }
  }

  _triggerIdxAnime(idx) {
    // console.log('trigger IDX', idx, this.animationDone);
  }

  render() {
    const { t, i18n } = this.props;
    // console.log(Main);

    return (
      <Div>
        {/*<FixedNavigation>{this.state.currentPageFloat+''}</FixedNavigation>*/}
        <Main t={t} i18n={i18n}/>
        <AboutMe t={t} i18n={i18n}/>
        <Education t={t} i18n={i18n}/>
        <Skills t={t} i18n={i18n}/>
        <Works t={t} i18n={i18n}/>
        <Introduce t={t} i18n={i18n}/>
      </Div>
    );
  }
}

export default translate('translations')(Pages);