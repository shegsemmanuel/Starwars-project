import React, {useEffect, useState} from 'react';
import Dashboard from "../layout/Dashboard";
import {Table} from "antd";
import {rowSelection, } from "../utils";
import {Request} from "../utils/Request";

const columns =[{title: '', dataIndex: '', key: '',}, {
    title: 'Film Title', dataIndex: 'title', key: 'title',
}, {title: 'Release Date', dataIndex: 'date', key: 'date',}, {
    title: 'Director', dataIndex: 'director', key: 'director',
}, {title: 'Producer', dataIndex: 'producer', key: 'producer'}, {
    title: 'Episode ID', dataIndex: 'episode_id', key: 'episode_id'
}, {title: 'Character', dataIndex: 'character', key: 'character',}]

const TombStone = ({title, value, text}) => {
    return (<div className="tomb-stone">
        <div className="tomb-stone-title-row">
            <p className="tomb-stone-title">{title}</p>
            <div/>
        </div>
        <h6 className="tomb-stone-value">{value}</h6>
        <p className="tomb-stone-text">{text}</p>
    </div>)
}

function Overview() {
    const [data, setData] = useState([])
    const [paginator, setPaginator] = useState(null)
    const [counts, setCounts] = useState({filmCount: 0, peopleCount: 0, speciesCount: 0, starshipCount: 0})
    const loadData = async () => {
        try {

            const [films, people, species, starship] = await Promise.all([Request.get('films'), Request.get('people'), Request.get('species'), Request.get('starships')]);
            const {data: {count: filmCount, next, previous, results}} = films;
            setData(results);
            if (!!next) setPaginator(true);
            const {data: {count: peopleCount}} = people;
            const {data: {count: speciesCount}} = species;
            const {data: {count: starshipCount}} = starship;
            setCounts({filmCount, peopleCount, speciesCount, starshipCount})
        } catch (e) {
            alert(e)
        }
    }
    useEffect(() => {
        (loadData)()
    }, []);


    return (<Dashboard hideBack>
        <div className="tomb-stone-row">
            <TombStone title={'Films'} value={counts.filmCount} text={'20 More than than yesterday'}/>
            <TombStone title={'Starship'} value={counts.speciesCount} text={'20 More than than yesterday'}/>
            <TombStone title={'People'} value={counts.peopleCount} text={'20 More than than yesterday'}/>
            <TombStone title={'Species'} value={counts.starshipCount} text={'20 More than than yesterday'}/>
        </div>

        <h4 className="dashboard-title">Films</h4>
        <div className="main">
            <Table
                dataSource={data.map((film) => {
                    film.date = film?.release_date
                    film.character = film?.characters?.join(", ")
                    return film
                })} columns={columns}
                pagination={!!paginator}
                rowSelection={{type: 'checkbox', ...rowSelection}}
            />
        </div>


    </Dashboard>);
}

export default Overview;