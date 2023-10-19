import Dashboard from "../layout/Dashboard";
import {Table} from "antd";
import { rowSelection} from "../utils";
import React, {useEffect, useState} from "react";
import {Request} from "../utils/Request";


const columns = [{title: 'Name', dataIndex: 'name', key: 'name'}, {
  title: 'Model', dataIndex: 'model', key: 'model'
}, {title: 'Class', dataIndex: 'starship_class', key: 'class'}, {
  title: 'Passengers', dataIndex: 'passengers', key: 'passengers'
}, {title: 'Length', dataIndex: 'length', key: 'length'},
  {title: 'Manufacturer', dataIndex: 'manufacturer', key: 'manufacturer'}]


function Starships() {

  const [data, setData] = useState([])
  const [paginator, setPaginator] = useState(null)
  const loadData = async () => {
    try {
      const {data: {count, next, previous, results}} = await Request.get('starships');
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
    <h4 className="dashboard-title">Starships</h4>

    <div className="main">
      <Table
          dataSource={data.map((s) => {
            s.character = s?.characters?.join(", ")
            return s
          })} columns={columns}
          rowSelection={{type: 'checkbox', ...rowSelection}}
      />
    </div>

  </Dashboard>);
}

export default Starships;