import Dashboard from "../layout/Dashboard";
import {Table} from "antd";
import {dataSource, rowSelection} from "../utils";
import React, {useEffect, useState} from "react";
import {Request} from "../utils/Request";


const columns = [{title: 'Name', dataIndex: 'name', key: 'name'}, {
    title: 'Birth Year', dataIndex: 'birth_year', key: 'birth_year'
}, {title: 'Gender', dataIndex: 'gender', key: 'gender'}, {
    title: 'Hair Color', dataIndex: 'hair_color', key: 'hair_color'
}, {title: 'Height', dataIndex: 'height', key: 'height'}, {title: 'Created', dataIndex: 'created', key: 'created'}]

function People() {
    const [data, setData] = useState([])
    const [paginator, setPaginator] = useState(null)
    const loadData = async () => {
        try {
            const {data: {count, next, previous, results}} = await Request.get('people');
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
        <h4 className="dashboard-title">People</h4>

        <div className="main">
            <Table dataSource={data.map(p => {
                p.created = new Date(p.created).toDateString()
                return p
            })}
                   pagination={{
                       size:'small'
                   }}
                   columns={columns} rowSelection={{type: 'checkbox', ...rowSelection}}/>
        </div>

    </Dashboard>);
}

export default People;