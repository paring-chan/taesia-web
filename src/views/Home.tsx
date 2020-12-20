import React, {Component} from 'react';
import {gsap} from "gsap";
import img1 from '../assets/img/home__img1.webp'
import ScrollTrigger from "gsap/ScrollTrigger";
import Button from "../components/Button";

class Home extends Component {
    state = {
        count: 0
    }

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

    trigger(elem: Element, position='left') {
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

    counter(elem: Element, max: number) {
        const Data = {val: 0}
        gsap.to(Data, 3, {
            val: max,
            onUpdate: () => {
                this.setState({
                    count: Data.val
                })
            }
        })
    }

    componentDidMount() {
        this.trigger(this.ref.sec1.current!)
        this.trigger(this.ref.sec2.current!, 'right')
        this.trigger(this.ref.sec3.current!, 'right')
        this.trigger(this.ref.sec4.current!)
        this.trigger(this.ref.sec5.current!, 'bottom')
        const servers = 160
        ScrollTrigger.create({
            trigger: this.ref.sec4.current!,
            onEnter: () => {
                this.counter(this.ref.sec4.current!, servers)
            },
            onLeave: () => {
                this.setState({count: 0})
            },
            onEnterBack: () => {
                this.counter(this.ref.sec4.current!, servers)
            },
            onLeaveBack: () => {
                this.setState({count: 0})
            }
        })
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
                    태시아봇은 (주)테일즈샵의 마스코트 '태시아'를 모티브로 하여 탄생하였습니다.
                </div>
                <div ref={this.ref.sec2} style={{
                    fontSize: 30,
                    marginTop: 100,
                    width: '50%',
                    marginLeft: '50%'
                }}>
                    본래 태시아봇은 공지용 봇이었습니다. 그러다 하나하나 기능이 추가되어 지금의 태시아봇이 되었습니다.
                </div>
                <div ref={this.ref.sec3} style={{
                    marginTop: 20,
                    width: '50%',
                    marginLeft: '50%'
                }}>
                    <img src={img1} alt="Img"/>
                </div>
                <div style={{
                    fontSize: 30,
                    marginTop: 100,
                    width: '50%',
                }} ref={this.ref.sec4}>
                    현재 태시아봇은 약 {Math.floor(this.state.count)}개의 서버에서 사용되고 있습니다.
                </div>
                <div style={{
                    fontSize: 30,
                    marginTop: 100,
                    width: '100%',
                    textAlign: 'center',
                    marginBottom: 100,
                }} ref={this.ref.sec5}>
                    <p>다재다능한 태시아봇, 지금바로 초대하셔서 사용해보세요.</p>
                    <Button className="purple" target="_blank" href="https://koreanbots.dev/bots/728820788278329424">초대하기</Button>
                </div>
            </div>
        );
    }
}

export default Home;
