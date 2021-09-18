import React, { useState } from 'react';
import Generator from './Generator';
import DisplayTable from './DisplayTable';
import { Divider, Layout } from 'antd';
import { GithubOutlined } from '@ant-design/icons';

const { Header, Footer , Content } = Layout;


function Parent() {
    /**
     * TODO: Create states for NRIC storage
     * TODO: Pass said states to displayTable
     */

    const [nricList, setNricList] = useState([])

    const pushToList = async (nric) =>{
        // test in function to see if IC repeated itself.
        (nricList.indexOf(nric) > -1) 
        ? 
        alert("IC has already been generated before, Please generate IC again.") 
        : 
        await setNricList(prevState => {
            return [...prevState, nric]
        })
        
        console.log("I'm here",nricList)
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
            <Footer style={{ backgroundColor: "#EC9192" }}>
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
