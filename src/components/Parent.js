import React, { useState } from 'react';
import Generator from './Generator';
import DisplayTable from './DisplayTable';
import { Divider, Layout } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import { generateNRIC } from '../lib/nricFunc';



function Parent() {
    /**
     * TODO: Create states for NRIC storage
     * TODO: Pass said states to displayTable
     */

    const [nricList, setNricList] = useState([])
    const { Header, Footer , Content } = Layout;

    const pushToList = async () => {
        await generateNRIC(nricList, setNricList)
    }

    return (
        <div style={{ textAlign:"center" }} >

            <Header style={{ padding: "10px", backgroundColor: "#EC9192", color: "#fff", fontSize: "25px" }} > Random NRIC Generator </Header>
            <Content style={{ textAlign:"center", height: "80vh" }} >
                <Divider plain style={{ color: "#fff" }} >Click on button below to generate NRIC</Divider>
                    <Generator pushToList={pushToList} />
                <Divider plain style={{ color: "#fff" }} >Generated NRIC Display</Divider>
                    <DisplayTable nricList={nricList} />
            </Content>
            <Footer style={{ backgroundColor: "#EC9192", padding: "5px" }}>
                <div>
                    <span style={{ color: "#fff", padding: "10px" }} >
                        Done by Josiah
                    </span>
                    <a style={{ color: "#fff" }} href="https://github.com/josiahphua/random_nric_gen"><GithubOutlined /></a>
                </div>
            </Footer>
        </div>
    )
}

export default Parent
