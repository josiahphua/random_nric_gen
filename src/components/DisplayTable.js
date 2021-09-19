import React, { Fragment } from 'react';
import { Table } from 'antd';

function DisplayTable({ nricList }) {
    const dataSource = nricList.map((el, id)=>{
        return {
            index: `${id+1}`,
            nric: `${el}`
        }
    })

    const columns = [
        {
            title: "Index",
            dataIndex: "index",
            key: "index"
        },
        {
            title: "NRIC",
            dataIndex: "nric",
            key: "nric"
        }
    ]
    return (
        <div style={{ width: "500px", margin: "auto" }} >
            {nricList.length ? 
                <Fragment>
                    <Table 
                    dataSource={dataSource}
                    columns={columns}
                    pagination={{
                        defaultPageSize: 20
                    }}
                    scroll={{ y:275 }}
                    />
                    
                </Fragment>
                :
                <h3 data-testid="header" style={{ color: "#fff" }} >No data to display. Please generate IC to start</h3>
            }
        </div>
    )
}

export default DisplayTable

