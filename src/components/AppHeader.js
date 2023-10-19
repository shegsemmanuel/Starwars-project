import React from "react";
import Head from "next/head";

const protectedRoutes = ["/overview", "/starships", '/people', '/species'];

const AppHeader = ({}) => {

    return (
        <Head>
            <link rel='icon' href={"/favicon.ico"}/>
            <meta name="msapplication-TileColor" content="#da532c"/>
            <meta name="theme-color" content="#ffffff"/>
        </Head>
    );
};


export const MetaHeader = ({title}) => {

    return (
        <Head>
            <meta charSet="utf-8"/>
            <meta name='viewport' content="width=device-width, initial-scale=1, maximum-scale=1"/>
            <title>{title}</title>
            <meta name="title" content={title}/>
        </Head>
    );
};

const defaultProps = {
    title: "Star Wars | Home For Champs!",
}
MetaHeader.defaultProps = defaultProps
AppHeader.defaultProps = defaultProps


export default AppHeader