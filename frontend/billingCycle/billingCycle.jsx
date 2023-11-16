import React, { Component } from "react"

import ContentHeader from '../src/common/template/contentHeader'
import Content from '../src/common/template/content'
import Tabs from "../src/common/tab/tabs"
import TabsHeader from "../src/common/tab/tabsHeader"
import TabsContent from "../src/common/tab/tabsContent"

import TabHeader from "../src/common/tab/tabHeader"

class BillingCycle extends Component {
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
                        <TabsContent></TabsContent>    
                    </Tabs>
                </Content>
            </div>
        )
    }
}

export default BillingCycle