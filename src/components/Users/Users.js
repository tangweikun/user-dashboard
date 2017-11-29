import React from 'react'
import { connect } from 'dva'
import { Table, Pagination, Popconfirm, Button } from 'antd'
import { routerRedux } from 'dva/router'

import styles from './Users.css'
import { PAGE_SIZE } from '../../constants'
import UserModal from './UserModal'

function Users({ dispatch, list: dataSource, total, page: current, loading }) {
  const deleteHandler = id => {
    dispatch({
      type: 'users/remove',
      payload: id,
    })
  }

  const pageChangHanler = page => {
    dispatch(routerRedux.push({
      pathname: '/users',
      query: { page },
    }))
  }

  const editHandler = (id, values) => {
    dispatch({
      type: 'users/patch',
      payload: { id, values },
    })
  }

  const createHandler = values => {
    dispatch({
      type: 'users/create',
      payload: values,
    })
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
      render: (text, record) => (
        <span className={styles.operation}>
          <UserModal record={record} onOk={() => editHandler(record.id)}>
            <a href="">Edit</a>
          </UserModal>
          <Popconfirm title="Confirm to delete?" onConfirm={() => deleteHandler(record.id)}>
            <a href="">Delete</a>
          </Popconfirm>
        </span>
      ),
    },
  ]

  return (
    <div className={styles.normal}>
      <div>
        <div className={styles.create}>
          <UserModal record={{}} onOk={createHandler}>
            <Button type="primary">Create User</Button>
          </UserModal>
        </div>
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
