import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import ContentHeader from '../src/common/template/contentHeader'
import Content from '../src/common/template/content'
import Tabs from "../src/common/tab/tabs"
import TabsHeader from "../src/common/tab/tabsHeader"
import TabsContent from "../src/common/tab/tabsContent"
import { selectTab } from "../src/common/tab/tabActions"
import TabHeader from "../src/common/tab/tabHeader"
import TabContent from "../src/common/tab/tabContent"
import { showTabs } from "../src/common/tab/tabActions"
class BillingCycle extends Component {

    componentWillMount(){
        this.props.selectTab('tabList')
        this.props.showTabs('tabList', 'tabCreate')
    }

    render() {
        return (
            <div>
                <ContentHeader title="Ciclos de Pagamentos" small='cadastro' />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Listar' icon='bars' target='tabList' />
                            <TabHeader label='Incluir' icon='plus' target='tabCreate' />
                            <TabHeader label='Alterar' icon='pencil' target='tabUpdate' />
                            <TabHeader label='Excluir' icon='trash-o' target='tabDelete' />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tabList'><h1>Listar</h1></TabContent>
                            <TabContent id='tabCreate'><h1>Incluir</h1></TabContent>
                            <TabContent id='tabUpdate'><h1>Alterar</h1></TabContent>
                            <TabContent id='tabDelete'><h1>Excluir</h1></TabContent>
                        </TabsContent>    
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({selectTab, showTabs}, dispatch)

export default connect(null, mapDispatchToProps)(BillingCycle)