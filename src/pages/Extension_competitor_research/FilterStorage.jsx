import {Button, Card, Dropdown, Flex, Form, Input, List, Modal, Space} from "antd";
import {useEffect, useState} from "react";
import {CheckOutlined, CloseOutlined, DeleteOutlined, EditOutlined, MoreOutlined} from "@ant-design/icons";
import style from './styles/index.module.scss'
import {chromeStorage} from "../../utilities/extension/storage";

const FilterStorage = ({keyName, onLoad, showDropFilter = false}) => {
    const [showPreset, setShowPreset] = useState(false);
    const [filters, setFilters] = useState([
        {id: 1, name: 'Preset filter 1', options: {}},
        {id: 2, name: 'Preset filter 2', options: {}},
        {id: 3, name: 'Preset filter 3', options: {}},
        {id: 4, name: 'Preset filter 4', options: {}},
        {id: 5, name: 'Preset filter 5', options: {}},
    ])
    const [dropShopFilters, setDropShipFilters] = useState([
        {id: 10, name: 'New Best Performing Products', options: {}},
        {id: 6, name: 'Best Performing One Product Stores', options: {}},
        {id: 7, name: 'Best Performing One Product Stores', options: {}},
        {id: 8, name: 'Mid Ticket With High Demand', options: {}},
        {id: 9, name: 'Mid Ticket With High Demand', options: {}},
    ])
    const [selected, setSelected] = useState(null);
    const [isEdit, setIsEdit] = useState(false);

    useEffect(() => {
        if (keyName) {
            chromeStorage.get(keyName)
                .then((data) => {
                    setFilters(data || []);
                });
        }
    }, [keyName]);

    return <>
        <Button
            type='link'
            onClick={() => {
                setShowPreset(true)
            }}>
            Load Filter Preset
        </Button>
        <Modal
            width={720}
            title='Load Filter Preset'
            open={showPreset}
            onCancel={() => setShowPreset(false)}
            footer={<Space>
                <Button onClick={() => setShowPreset(false)}>
                    Cancel
                </Button>
                <Button
                    onClick={() => {
                        onLoad && onLoad(selected);
                        setShowPreset(false);
                    }}
                    type='primary'>Load Preset</Button>
            </Space>}
        >
            <Flex gap="middle" vertical>
                <p>Save your favorite Competitor Research filters for quicker searching.</p>
                <Card styles={{
                    header: {background: '#f2f6ff', color: '#707ba0'}
                }} size='small' title='Your Presets'>
                    <Flex gap="middle" vertical>
                        {filters.map((item, index) => {
                            const isActive = item.id === selected?.id;
                            const isEditItem = isEdit && selected.id === item.id;
                            return <div
                                key={item.id}
                                role='button'
                                className={`${style.filterItem} ${isActive && !isEditItem ? style.active : ''}`}
                                onClick={() => {
                                    setSelected(item);
                                }}>
                                <Flex style={{padding: `5px 10px`}} flex={1} justify='space-between' align='center'>
                                    {isEditItem ?
                                        <Form onValuesChange={(changedValues) => {
                                            setSelected((prev) => ({...prev, ...changedValues}));
                                        }} style={{width: '100%'}}>
                                            <Form.Item initialValue={selected?.name} noStyle name='name'>
                                                <Input
                                                    rootClassName={style.inputEdit}
                                                    variant='borderless'
                                                />
                                            </Form.Item>
                                        </Form> :
                                        item.name}
                                    {isEditItem ? <Space>
                                        <Button onClick={() => {
                                            const newFilters = filters;
                                            newFilters[index] = selected;
                                            setFilters(newFilters);
                                            setIsEdit(false);
                                        }} type='text' danger>
                                            <CheckOutlined/>
                                        </Button>
                                        <Button
                                            onClick={() => {
                                                setSelected(null);
                                                setIsEdit(false);
                                            }}
                                            type='text' danger>
                                            <CloseOutlined/>
                                        </Button>
                                    </Space> : <Dropdown
                                        menu={{
                                            items: [
                                                {label: 'Rename', icon: <EditOutlined/>, key: 'rename'},
                                                {label: 'Remove', icon: <DeleteOutlined/>, key: 'remove'},
                                            ],
                                            onClick: ({key}) => {
                                                if (key === 'remove') {
                                                    Modal.confirm({
                                                        title: 'Are you sure?',
                                                        content: `Are you sure you want to remove ${selected.name} filter preset from your presets?`,
                                                        okText: 'Remove',
                                                        onOk: async () => {
                                                            await chromeStorage.remove(keyName);
                                                            const removed = filters.filter(filter => filter.id !== item.id);
                                                            setFilters(filters.filter(filter => filter.id !== item.id));
                                                            await chromeStorage.set(keyName, removed)
                                                        }
                                                    });
                                                }
                                                if (key === 'rename') {
                                                    setIsEdit(true);
                                                    setSelected(item);
                                                }
                                            }
                                        }} trigger={['click']}>
                                        <Button
                                            type='link'
                                            icon={<MoreOutlined/>}/>
                                    </Dropdown>}

                                </Flex>
                            </div>
                        })}
                    </Flex>
                </Card>
                {showDropFilter && <Card styles={{
                    header: {background: '#f2f6ff', color: '#707ba0'}
                }} size='small' title='Dropship Presets'>
                    <Flex gap="middle" vertical>
                        {dropShopFilters.map((item, index) => {
                            const isActive = item.id === selected?.id;
                            const isEditItem = isEdit && selected.id === item.id;
                            return <div
                                key={item.id}
                                role='button'
                                className={`${style.filterItem} ${isActive && !isEditItem ? style.active : ''}`}
                                onClick={() => {
                                    setSelected(item);
                                }}>
                                <Flex style={{padding: `5px 10px`}} flex={1} justify='space-between' align='center'>
                                    {item.name}
                                </Flex>
                            </div>
                        })}
                    </Flex>
                </Card>}
            </Flex>
        </Modal>
    </>
}

export default FilterStorage;
