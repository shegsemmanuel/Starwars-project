import React, {useEffect, useState} from "react";
import Dashboard from "../layout/Dashboard";
import {Table} from "antd";
import {rowSelection, } from "../utils";
import {Request} from "../utils/Request";


const columns = [{title: 'Name', dataIndex: 'name', key: 'name'}, {
    title: 'Classification', dataIndex: 'classification', key: 'classification'
}, {title: 'Eye colors', dataIndex: 'eye_colors', key: 'eye_colors'}, {
    title: 'Hair Color', dataIndex: 'hair_colors', key: 'hair_color'
}, {title: 'Height', dataIndex: 'average_height', key: 'height'}, {title: 'Created', dataIndex: 'created', key: 'created'}]

function Species() {

    const [data, setData] = useState([])
    const [paginator, setPaginator] = useState(null)
    const loadData = async () => {
        try {
            const {data: {count, next, previous, results}} = await Request.get('species');
            setData(results);
            setPaginator(count > 1);
        } catch (e) {
            alert(e)
        }
    }
    useEffect(() => {
        (loadData)()
    }, []);

    return (<Dashboard>
        <h4 className="dashboard-title">Species</h4>
        <div className="main">
            <Table
                dataSource={data}
                columns={columns}
                rowSelection={{type: 'checkbox', ...rowSelection}}
            />
        </div>

    </Dashboard>);
}

export default Species;
