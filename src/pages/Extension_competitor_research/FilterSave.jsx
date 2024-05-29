import {Button, Flex, Form, Input, Modal} from "antd";
import {useCallback, useState} from "react";
import {chromeStorage} from "../../utilities/extension/storage";

function randomId(length = 10) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomId = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomId += characters.charAt(randomIndex);
    }
    return randomId;
}

const FilterSave = ({disabled, form, keyName = 'filter'}) => {
    const [showPreset, setShowPreset] = useState(false);
    const [load, setLoad] = useState(false);
    const [item, setItem] = useState({name: ''});

    const onSaveFilter = useCallback(async () => {
        setLoad(true)
        const existing = await chromeStorage.get(keyName);
        const prev = existing || [];
        const data = [...prev, {id: randomId(), name: item.name, options: form.getFieldsValue()}];
        await chromeStorage.set(keyName, data)
        setLoad(false);
        setShowPreset(false);
    }, [item]);

    return <>
        <Button
            disabled={disabled}
            type='link'
            onClick={() => setShowPreset(true)}>
            Save Filter Preset
        </Button>
        <Modal
            title='Save Filter'
            open={showPreset}
            footer={[]}
            onCancel={() => setShowPreset(false)}
        >
            <Flex gap="middle" vertical>
                <p>Enter the name of your new preset</p>
                <Form layout='horizontal' onValuesChange={(changedValues) => {
                    setItem((prev) => ({...prev, ...changedValues}));
                }} style={{width: '100%'}}>
                    <Flex gap='middle'>
                        <Form.Item noStyle name='name'>
                            <Input
                                placeholder='Enter name'
                                variant='filled'
                            />
                        </Form.Item>
                        <Button
                            loading={load}
                            onClick={onSaveFilter}
                            disabled={!item.name}
                            type='primary'
                            size='large'>Save Preset</Button>
                    </Flex>
                </Form>
            </Flex>
        </Modal>
    </>
}

export default FilterSave;
