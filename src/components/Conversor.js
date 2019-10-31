import React, { Component } from 'react';

export default class Conversor extends Component {
     constructor(props){
        super(props);

        this.state = {
            moedaA_valor: "",
            moedaB_valor: 0,
        }

        this.converter = this.converter.bind(this);
     }

     converter(){
        console.log(this.state);
     }


    render() {
        return (
            <div className="conversor">
                <h2>{this.props.moedaA} para {this.props.MoedaB}</h2>
                <input onChange={(event) => { this.setState({moedaA_valor:event.target.value})}} type="text"></input>
                <input type="button" value="Converter" onClick={this.converter}></input>
                <h2>valor convertido</h2>

            </div>
        )
    }
}
