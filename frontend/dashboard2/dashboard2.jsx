import React, { Component } from 'react'
import axios from 'axios'

import ContentHeader from '../src/common/template/contentHeader'
import Content from '../src/common/template/content'
import ValueBox from '../src/common/widget/valueBox'


const BASE_URL = 'http://localhost:3003/api'



export default class Dashboard2 extends Component {

    constructor(props){
        super(props)
        this.state = { credit: 0, debt: 0 }
        
    }
    componentWillMount(){
        axios.get(`${BASE_URL}/billingCycles/summary`)
        .them(resp => this.setState(resp.data))
    }

    render() {
        const { credit, debt } = this.state

        return(
            <div>
                <ContentHeader title='Dashboard' small='Versão 1.0' />
                <Content>
                    <ValueBox cols='12 4' color='green' icon='bank' value={`R$ ${credit}`} text="Total de Créditos" />
                    <ValueBox cols='12 4' color='red' icon='credit-card' value={`R$ ${debt}`} text="Total de Débitos" />
                    <ValueBox cols='12 4' color='blue' icon='money' value={`R$ ${credit - debt}`} text="Valor Consolidado" />
                </Content>
            </div>
        )
    }
}

// const mapStateToProps = state => ({summary: state.dashboard.summary})
// const mapDispatchToProps = dispatch => bindActionCreators({getSummary}, dispatch)

// export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)