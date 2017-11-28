import React from 'react'
import { connect } from 'dva'
import { Table, Pagination, Popconfirm } from 'antd'
import { routerRedux } from 'dva/router'

import styles from './Users.css'
import { PAGE_SIZE } from '../../constants'

function Users({ dispatch, list: dataSource, total, page: current, loading }) {
  const deleteHandler = id => console.warn(`TODO: ${id}`)

  const pageChangHanler = page => {
    dispatch(routerRedux.push({
      pathname: '/users',
      query: { page },
    }))
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a href="">{text}</a>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Website',
      dataIndex: 'website',
      key: 'website',
    },
    {
      title: 'Operation',
      key: 'operation',
      render: (text, { id }) => (
        <span className={styles.operation}>
          <a href="">Edit</a>
          <Popconfirm title="Confirm to delete?" onConfirm={deleteHandler.bind(null, id)}>
            <a href="">Delete</a>
          </Popconfirm>
        </span>
      ),
    },
  ]

  return (
    <div className={styles.normal}>
      <div>
        <Table
          columns={columns}
          dataSource={dataSource}
          rowKey={record => record.id}
          pagination={false}
          loading={loading}
        />

        <Pagination
          className="ant-table-pagination"
          total={total}
          current={current}
          pageSize={PAGE_SIZE}
          onChange={pageChangHanler}
        />
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  list: state.users.list,
  total: state.users.total,
  page: state.users.page,
  loading: state.loading.models.users,
})

export default connect(mapStateToProps)(Users)
