import React from "react";
import dataList from "../data.json";
import Opciones from './Opciones';
import Recordatorio from './Recordatorio';

class Layout extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            historial: [],
            contador: 0,
            seleccionPrevia: '',
        }
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.contador !== this.state.contador){
            this.state.historial.push(this.state.seleccionPrevia);
        }
    }

    handleClick = (e) => {
        const id = e.target.id;
        if (this.state.contador >= 7) {
          alert('Fin.');
        } else if (id === 'A' && this.state.seleccionPrevia !== 'A') {
          this.setState({
            contador: this.state.contador + 1,
            seleccionPrevia: 'A',
          });
        } else if (id === 'A' && this.state.seleccionPrevia === 'A') {
          this.setState({
            contador: this.state.contador + 2,
          });
        } else if (id === 'B' && this.state.seleccionPrevia === 'A') {
          this.setState({
            contador: this.state.contador + 3,
            seleccionPrevia: 'B',
          });
        } else if (id === 'B') {
          this.setState({
            contador: this.state.contador + 2,
            seleccionPrevia: 'B',
          });
        }
      };
    
      render() {
        return (
          <div className="layout">
            <h1 className="historia">{dataList[this.state.contador].historia}</h1>
            <Opciones
              handleClick={this.handleClick}
              opcionA={dataList[this.state.contador].opciones.a}
              opcionB={dataList[this.state.contador].opciones.b}
            />
            <Recordatorio
              seleccionPrevia={this.state.seleccionPrevia}
              historial={this.state.historial.map(
                (e, index) => (
                  <li key={index}>{e}</li>
                ),
                dataList[this.state.contador].id
              )}
            />
          </div>
        );
      }
    }

export default Layout;

