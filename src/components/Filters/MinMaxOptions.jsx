import {Button, Col, Flex, Form, InputNumber, Row, Space, Tooltip} from "antd";
import {
    AppstoreOutlined,
    ControlOutlined,
    PayCircleOutlined,
    RightOutlined,
    ShoppingCartOutlined,
    TagOutlined,
    FileImageOutlined
} from "@ant-design/icons";
import styles from "../../pages/Extension_competitor_research/styles/index.module.scss";
import React from "react";

const formatter = (value) => {
    if (!value) {
        return ''
    }
    return ` ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
const parser = (value) => value?.replace(/\ \s?|(,*)/g, '')

const options = [
    {name: 'price', placeholder: 'Price', label: 'The price products are sold for in USD', icon: TagOutlined},
    {
        name: 'sales',
        placeholder: 'Monthly Sales',
        label: 'Monthly sales amount per product',
        icon: ShoppingCartOutlined
    },
    {
        name: 'revenue',
        placeholder: 'Monthly Revenue',
        label: 'Monthly revenue generated per product',
        icon: PayCircleOutlined
    },
    {
        name: 'products',
        placeholder: 'Store Products',
        label: 'Amount of product listings in the store',
        icon: AppstoreOutlined
    },
    {
        name: 'images',
        placeholder: 'Product Images',
        label: 'Amount of images the product listing has',
        icon: FileImageOutlined
    },
    {
        name: 'variants',
        placeholder: 'Variants',
        label: 'Amount of variants the product listing has',
        icon: ControlOutlined
    },
]
const MinMaxOptions = ({md, sm}) => {
    return <Row gutter={[24, 12]}>
        {options.map((item, index) => {
            return <Col key={`item_${index}`} md={md} sm={sm}>
                <Flex gap="middle" align='center'>
                    <Tooltip
                        arrow={false}
                        placement='right'
                        title={item.label}>
                        {React.createElement(item.icon, {style: {fontSize: 20, color: '#333'}})}
                    </Tooltip>
                    <Form.Item initialValue={null} noStyle name={[item.name, 'min']}>
                        <InputNumber
                            formatter={formatter}
                            parser={parser}
                            placeholder={item.placeholder}
                            className={styles.inputNumber}
                            prefix='MIN'
                            controls={false}
                            size='large'/>
                    </Form.Item>
                    <RightOutlined style={{fontSize: 18, color: '#ccc'}}/>
                    <Form.Item initialValue={null} noStyle name={[item.name, 'max']}>
                        <InputNumber
                            formatter={formatter}
                            parser={parser}
                            placeholder={item.placeholder}
                            className={styles.inputNumber}
                            prefix='MAX'
                            controls={false}
                            size='large'/>
                    </Form.Item>
                </Flex>
            </Col>
        })}
    </Row>
}
export default MinMaxOptions;
