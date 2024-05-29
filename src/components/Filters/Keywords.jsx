import {Col, Form, Row} from "antd";
import TagInput from "../common/TagInput";
import React from "react";

const keywordsFields = [
    {label: 'Include Title Keywords', name: 'title', key: 'include'},
    {label: 'Exclude Title Keywords', name: 'title', key: 'exclude'},
    {label: 'Include Description Keywords', name: 'description', key: 'include'},
    {label: 'Exclude Description Keywords', name: 'description', key: 'exclude'},
    {label: 'Include Domain Keywords', name: 'domain', key: 'include'},
    {label: 'Exclude Domain Keywords', name: 'domain', key: 'exclude'},
]

const Keywords = () => {
    return <Row gutter={24}>
        {keywordsFields.map(field => {
            return <Col md={12} sm={24} key={`item_${field.name}_${field.key}`}>
                <Form.Item
                    initialValue={null}
                    name={[field.name, field.key]}
                    label={field.label}>
                    <TagInput placeholder='Spreate search query by commas or enter'/>
                </Form.Item>
            </Col>
        })}
    </Row>
}
export default Keywords;
