import React, { FC } from 'react';
import { connect, Dispatch, history, useLocation } from 'umi';
// import UserSetting from './userSetting';
import {
  LoginModelState,
  GlobalModelState,
  QueryTableState,
} from '@/models/connect';

export interface HeaderLayoutProps {
  dispatch: Dispatch;
  global: GlobalModelState;
  queryTable: QueryTableState;
  login: LoginModelState;
}

const HeaderContent: FC<HeaderLayoutProps> = ({
  dispatch,
  global,
  queryTable,
  login,
}) => {
  const location = useLocation();
  const handleSubmit = () => {
    dispatch({
      type: 'login/logout',
    });
  };
  const goBack = () => {
    history.goBack();
  };

  // const { userInfo } = global;
  const userInfoStr = localStorage.getItem('userInfo');
  const userInfo: any = userInfoStr ? JSON.parse(userInfoStr) : {};
  const { currentPost = {} } = queryTable;
  return (
    <>
      {location.pathname === '/' ? (
        <div>{userInfo.name}</div>
      ) : location.pathname !== '/login' &&
        location.pathname !== '/register' ? (
        <div>
          <a onClick={goBack}>返回</a>
        </div>
      ) : null}
      {location.pathname === '/' ? (
        <div>我的日记</div>
      ) : location.pathname === '/add' ? (
        <div>新日记条目</div>
      ) : location.pathname === '/detail' ? (
        <div>{currentPost?.title}</div>
      ) : location.pathname === '/login' ? (
        <div>登录</div>
      ) : location.pathname === '/register' ? (
        <div>注册</div>
      ) : null}
      {location.pathname !== '/login' && location.pathname !== '/register' ? (
        <a onClick={handleSubmit}>退出</a>
      ) : null}
    </>
  );
};

export default connect(
  ({
    global,
    queryTable,
    login,
  }: {
    global: GlobalModelState;
    queryTable: QueryTableState;
    login: LoginModelState;
  }) => ({ global, queryTable, login }),
)(HeaderContent);
