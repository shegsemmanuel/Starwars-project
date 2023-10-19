export const APP_LOGO = "https://s3-alpha-sig.figma.com/img/e4eb/34f7/771c40c1e2baeb7e0dbe7d6e97a00350?Expires=1698624000&Signature=p64rVTXCrMNRmJtDR734G-oaTkKy4kiw22sx-IraNfvUH-wcZ~8oFbWm4DVZyIsdmcq8iLg6LAw7BuXmY2yfPngUZobdxLUnvzEIli1EjOwVaEz1CDOmYMkm1W9oAkfEb4G5EothwuiJoP33XnrUSG2FzZMP~F4G5ssZ0yRzKAm1CAcbkd~LwZi5kEOO7tysJQYl7a6WFCCIvwYLrTYHjwDzvPAm6LCuyL7IXa7jV4o3rYem5rO7MkWBeAw9339WTR7Bgs0EYcdz2CjGzT0HVzAESIAFIqIVx8qVRFMVAvyQIyrwpixQgs7-r0vPuNBKpIrhOg-IExz-c3tG5cUm1w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
export const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        

        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    }, getCheckboxProps: (record) => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
    }),
};

export const dataSource = [{key: '1', name: 'Mike', age: 32, address: '10 Downing Street',}, {
    key: '2', name: 'John', age: 42, address: '10 Downing Street',
}];
export const columns = [{title: '', dataIndex: '', key: '',}, {
    title: 'Film Title', dataIndex: 'title', key: 'title',
}, {title: 'Release Date', dataIndex: 'date', key: 'date',}, {
    title: 'Director', dataIndex: 'director', key: 'director',
}, {title: 'Producer', dataIndex: 'producer', key: 'producer'}, {
    title: 'Episode ID', dataIndex: 'episode_id', key: 'episode_id'
}, {title: 'Character', dataIndex: 'character', key: 'character',}];

