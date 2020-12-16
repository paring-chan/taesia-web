import React, {Component} from 'react';
import partner from '../partner.json'
import Button from "../components/Button";

class PartnerServers extends Component {
    render() {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                {
                    partner.map((it, key) => (
                        <div key={key} style={{
                            background: '#202225',
                            padding: 20,
                            borderRadius: 5,
                            marginTop: 10
                        }}>
                            <h2 style={{margin: 0}}>{it.name}</h2>
                            <p>{it.description}</p>
                            <Button href={it.invite} className="green">
                                참가하기
                            </Button>
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default PartnerServers;