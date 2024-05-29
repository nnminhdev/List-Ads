import React, {useRef, useState} from 'react'
import style from './style.module.scss';
import {Form, Input, Tag} from "antd";

const TagInput = ({value, onChange, placeholder = ''}) => {
    const form = Form.useFormInstance();
    const refInput = useRef();
    const [isFocus, setFocus] = useState(false);

    const onSubmit = (event) => {
        const text = event.target.value;
        const tags = value ? value.split(',') : [];
        if (tags.includes(text)) {
            refInput.current.value = null;
            return;
        }
        tags.push(text)
        onChange(tags.join(','));
        refInput.current.value = null;
    }
    const onRemove = () => {
        const tags = value ? value.split(',') : [];
        tags.pop();
        onChange(tags.join(','))
    }
    return <div
        className={`${style.tagInputWrap} ${isFocus ? style.active : ''}`}
        onClick={() => {
            refInput.current?.focus();
            setFocus(true);
        }}>
        {value && value.split(',').map((tag) => {
            return <Tag
                color='volcano'
                className={style.tagName}
                onClose={() => {
                    const tags = value ? value.split(',') : [];
                    const tagRemoved = tags.filter(item => item !== tag);
                    onChange(tagRemoved.join(','));
                }}
                closable>{tag}</Tag>
        })}
        <input
            placeholder={!value ? placeholder : ''}
            className={style.tagInput}
            ref={refInput}
            onBlur={() => {
                refInput.current.value = null;
                setFocus(false)
            }}
            onKeyDown={(event) => {
                if (event.key === 'Backspace' && !refInput.current?.value) {
                    onRemove();
                }
                if (event.key === 'Enter' || event.key === ',' || event.key === 'Tab') {
                    onSubmit(event);
                }
            }}
        />
    </div>
}
export default TagInput;
