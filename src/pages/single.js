import React from 'react';
import {Table} from "antd";
import {columns, dataSource, rowSelection} from "../utils";
import Dashboard from "../layout/Dashboard";

function Single() {
    return (<Dashboard>

            <div className="row gap-30">

                <img className="item-image"
                     alt={"item-image"}
                     src="https://s3-alpha-sig.figma.com/img/1579/10e8/f05cf1186d08b0df8d76323b7d394d83?Expires=1698624000&Signature=AciPW9tvjZsMV-bdWugBFFf98k7ynVrBevSbk0Z3m3tVK4~V3rm67qewIluDHeyu7HSxakxbTbMBl~spqftWxpRr6bF2PlxsuGHsWePzJXIifZzjtAXAFeBEEwT7uf1uAiMIx9lMnR0YxVjRuuifWsDKD2w4Km3AwyRtEelTTuDSkuuqodaxMv0Wc1kPYAlfXYENd1xFPbe1S3gFT9IPLJ3kGOanz0DSUvEua2Wtfsy20~lf5LHeS3cU9jAaZTY9lJKuvqwlvz4zmpQw0hacV2lisuqrS-Oy4VVxQr~h1jLnEACw6HHFX7CQl8PnzPeQI6015oZdFu3rnbBq9T0~og__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                />
                <div className="flex-column gap-10">
                    <h4 className="cover-title">Shank Comics</h4>
                    <article>Gender: Female</article>
                    <article>Year of birth: January 24, 1922.</article>
                    <article>Skin Color: Brown</article>
                    <article>Height: 150CM</article>
                </div>

            </div>

        </Dashboard>);
}


export default Single;