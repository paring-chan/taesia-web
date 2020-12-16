import React, {Component} from 'react';
import {gsap} from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styled from "styled-components";

const PricingContainer = styled.div`
  display: flex;
  flex-direction: row;

  div {
    flex-grow: 1;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    p {
      text-align: center;
      margin: 0;
    }
  }
`

class Premium extends Component {
    ref = {
        sec1: React.createRef<HTMLDivElement>(),
        sec2: React.createRef<HTMLDivElement>(),
        sec3: React.createRef<HTMLDivElement>(),
        sec4: React.createRef<HTMLDivElement>(),
        sec5: React.createRef<HTMLDivElement>(),
        container: React.createRef<HTMLDivElement>()
    }

    enter(elem: Element, position: string) {
        gsap.fromTo(elem, {
            ...(
                position === 'left' || position === 'right' ? {
                    x: 200 * (position === 'right' ? -1 : 1)
                } : {
                    y: -100
                }
            ),
            opacity: 0,
        }, {
            x: 0,
            y: 0,
            opacity: 1,
            duration: 1
        })
    }

    leave(elem: Element, position: string) {
        gsap.fromTo(elem, {
            x: 0,
            y: 0,
            opacity: 1,
        }, {
            ...(
                position === 'left' || position === 'right' ? {
                    x: 200 * (position === 'right' ? -1 : 1)
                } : position === 'bottom' ? {
                    y: -100
                } : {}
            ),
            opacity: 0,
            duration: 1
        })
    }

    trigger(elem: Element, position = 'left') {
        ScrollTrigger.create({
            trigger: elem,
            onEnter: () => {
                this.enter(elem, position)
            },
            onLeave: () => {
                this.leave(elem, position)
            },
            onEnterBack: () => {
                this.enter(elem, position)
            },
            onLeaveBack: () => {
                this.leave(elem, position)
            }
        })
    }

    componentDidMount() {
        this.trigger(this.ref.sec1.current!)
        this.trigger(this.ref.sec2.current!, 'right')
        this.trigger(this.ref.sec3.current!, 'bottom')
    }

    render() {
        return (
            <div ref={this.ref.container} style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <div ref={this.ref.sec1} style={{
                    fontSize: 30,
                    marginTop: 100,
                    width: '50%'
                }}>
                    프리미엄 서비스에 가입하시면 쿨타임 무시, 광고 제거, 펫 길들이기 호감도 2~5랜덤 상승의 혜택이 주어집니다.
                </div>
                <div ref={this.ref.sec2} style={{
                    fontSize: 30,
                    marginTop: 100,
                    width: '100%',
                }}>
                    <h2 style={{
                        textAlign: 'center'
                    }}>가격</h2>
                    <PricingContainer>
                        <div>
                            <p>3개월권</p>
                            <p>0.5만원</p>
                        </div>
                        <div>
                            <p>6개월권</p>
                            <p>1.0만원</p>
                        </div>
                        <div>
                            <p>12개월권</p>
                            <p>2.0만원</p>
                        </div>
                    </PricingContainer>
                </div>
                <div ref={this.ref.sec3} style={{
                    fontSize: 30,
                    marginTop: 100,
                    width: '50%',
                    marginLeft: '50%'
                }}>
                    <p>모든 금액은 봇운영에 사용될예정이며, 이와 개별적으로 후원도 받고있습니다.</p>
                    <p>이 또한 <span>가위#1111</span>로 DM부탁드립니다.</p>
                </div>
            </div>
        );
    }
}

export default Premium;