import {DatePicker, Button, Input, Flex, Space, Dropdown} from "antd";
import style from './style.module.scss';
import React, {useMemo, useState} from "react";
import dayjs from "dayjs";

const DateRangePicker = ({id, suffixIcon, onChange}) => {
    const {RangePicker} = DatePicker;
    const [open, setOpen] = useState(false);
    const [date, setDate] = useState();
    const randomIdentifier = Math.random().toString(36).substring(2, 5);
    const randId = `date_range_picker_${randomIdentifier}`

    const rangePresets = [
        {
            label: 'Last 7 Days',
            value: [dayjs().add(-7, 'd'), dayjs()],
        },
        {
            label: 'Last 14 Days',
            value: [dayjs().add(-14, 'd'), dayjs()],
        },
        {
            label: 'Last 30 Days',
            value: [dayjs().add(-30, 'd'), dayjs()],
        },
        {
            label: 'Last 90 Days',
            value: [dayjs().add(-90, 'd'), dayjs()],
        },
    ];

    const dateLabel = useMemo(() => {
        if (!date) {
            return 'ALL';
        }
        const first = dayjs(date[0]).format('MMM D');
        const last = dayjs(date[1]).format('MMM D');
        return `${first} - ${last ?? first}`
    }, [date]);

    return <>
        <div className={style.popupContent}>
            <DatePicker.RangePicker
                onChange={onChange}
                suffixIcon={suffixIcon}
                format={{
                    format: 'MMM D',
                    type: 'mask',
                }}
                presets={[
                    {
                        label: <span aria-label="Current Time to End of Day">Now ~ EOD</span>,
                        value: () => [dayjs(), dayjs().endOf('day')],
                    },
                    ...rangePresets,
                ]}
                getPopupContainer={() => document.getElementById(id || randId)}
                dropdownClassName={style.popupPicker}
                popupClassName={style.popupPicker}
                // open={true}
                size={'large'}
                // renderExtraFooter={() => {
                //     return <Flex style={{padding: 10, width: '100%'}} justify='end' gap="middle">
                //         <Button onClick={() => setOpen(false)}>Cancel</Button>
                //         <Button type='primary'>Apply</Button>
                //     </Flex>
                // }}
            />
        </div>

        {/*<Dropdown*/}
        {/*    trigger='click'*/}
        {/*    items={[]}*/}
        {/*    arrow={false}*/}
        {/*    dropdownRender={() => {*/}
        {/*        return <div className={style.popupContent}>*/}
        {/*            <DatePicker.RangePicker*/}
        {/*                format={{*/}
        {/*                    format: 'MMM D',*/}
        {/*                    type: 'mask',*/}
        {/*                }}*/}
        {/*                presets={[*/}
        {/*                    {*/}
        {/*                        label: <span aria-label="Current Time to End of Day">Now ~ EOD</span>,*/}
        {/*                        value: () => [dayjs(), dayjs().endOf('day')],*/}
        {/*                    },*/}
        {/*                    ...rangePresets,*/}
        {/*                ]}*/}
        {/*                getPopupContainer={() => document.getElementById(id || randId)}*/}
        {/*                inputReadOnly*/}
        {/*                onChange={(date) => {*/}
        {/*                    setDate(date);*/}
        {/*                }}*/}
        {/*                popupClassName={style.popupPicker}*/}
        {/*                open={open}*/}
        {/*                size={'large'}*/}
        {/*                placement='topLeft'*/}
        {/*                renderExtraFooter={() => {*/}
        {/*                    return <Flex style={{padding: 10, width: '100%'}} justify='end' gap="middle">*/}
        {/*                        <Button onClick={() => setOpen(false)}>Cancel</Button>*/}
        {/*                        <Button type='primary'>Apply</Button>*/}
        {/*                    </Flex>*/}
        {/*                }}*/}
        {/*            />*/}
        {/*        </div>*/}
        {/*    }}*/}
        {/*>*/}
        {/*    <div className={style.dropDownBtn}>*/}
        {/*        <Space>*/}
        {/*            <CalendarFilled/>*/}
        {/*            ALL*/}
        {/*        </Space>*/}
        {/*        {open ? <ArrowUpOutlined/> : <ArrowDownOutlined/>}*/}
        {/*    </div>*/}
        {/*</Dropdown>*/}
    </>
}
export default DateRangePicker;
