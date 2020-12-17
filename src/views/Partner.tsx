import React, {Component} from 'react';
import {gsap} from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

class Partner extends Component {
    ref = {
        sec1: React.createRef<HTMLDivElement>(),
        sec2: React.createRef<HTMLDivElement>(),
        sec3: React.createRef<HTMLDivElement>(),
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
                <div style={{
                    fontSize: 30,
                    marginTop: 100,
                    textAlign: 'center'
                }} ref={this.ref.sec1}>
                    {
                        `<파트너>
                    팀 꼬리가게 연구소와 함께할 파트너를 찾고있습니다.
                    파트너 혜택 및 자격은 아래를 참고해주세요.
                    <혜택>
                    - 프리미엄 무제한 제공
                    - 배너 등록 권한제공
                    - 기술지원
                    <지원자격>
                    - 소유한 봇의 서버가 50개 이상
                    - 인증된 개발자 베지를 소유한 자(필수X)`.split('    ').join('').split('\n').map((it, key) => (
                            <p key={key}>{it}</p>
                        ))
                    }
                </div>
                <div style={{
                    fontSize: 30,
                    marginTop: 100,
                    textAlign: 'center'
                }} ref={this.ref.sec2}>
                    {
                        `<채용>
                        팀 꼬리가게 연구소에서 함께 서버와 봇을 관리하고 제작해나갈 팀원을 구하고있습니다.
                        지원자격은 아래를 참고해주세요.
                        <지원자격>
                        공통- 3일에 한번이상 접속가능한 자
                        <봇 개발분야>
                        1.만13세 이상
                        2.파이썬을 사용해 봇을 제작한 경험이 있는 자
                        <서버관리분야>
                        1.최소 30인 이상의 유저가 접속한 서버를 소유하고 있는 자`.split('    ').join('').split('\n').map((it, key) => (
                            <p key={key}>{it}</p>
                        ))
                    }
                </div>
                <div style={{
                    fontSize: 30,
                    marginTop: 100,
                    textAlign: 'center'
                }} ref={this.ref.sec2}>
                    {'<지원문의>'}
                    <p>가위#1111로 DM바랍니다</p>
                </div>
            </div>
        );
    }
}

export default Partner;
