import { Result } from 'antd';
import React from 'react';
import { history } from 'umi';

const NoFoundPage: React.FC<{}> = () => (
  <Result
    status="404"
    title="404"
    style={{ width: '100%' }}
    subTitle="此页面未找到"
    extra={<div onClick={() => history.push('/')}>返回主页</div>}
  />
);

export default NoFoundPage;
