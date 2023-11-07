import React, { Component } from 'react'

import ContentHeader from '../src/common/template/contentHeader'
import Content from '../src/common/template/content'

class Dashboard extends Component {
    render() {

        return(
            <div>
                <ContentHeader title='Dashboard' small='Versão 1.0' />
                <Content>
                    Dashboard
                </Content>
            </div>
        )
    }
}

export default Dashboard