import React from 'react';
import { Layout } from 'antd';
import styles from './index.module.scss';
import { useLocation } from 'umi';

const { Content } = Layout;

export default (props: any) => {
  const location = useLocation();
  return (
    <Layout className={styles.container}>
      <Layout style={{ padding: 0, marginTop: '4px' }}>
        <Content className={styles.content}>{props.children}</Content>
      </Layout>
    </Layout>
  );
};
