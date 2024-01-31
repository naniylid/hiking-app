import React from 'react';
import { Button, Flex } from 'antd';
import styles from './Button.module.scss';

const MainButton: React.FC = () => (
  <Flex gap="large" wrap="wrap">
    <Button className={styles.Mainbutton}>Plan vacation</Button>
  </Flex>
);

export default MainButton;
