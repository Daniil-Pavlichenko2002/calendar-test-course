import { Button, DatePicker, Form, Input, Row, Select } from 'antd'
import React, { FC, useState } from 'react'
import { rules } from '../utils/rules'
import { IUser } from '../models/IUser'
import { IEvent } from '../models/IEvent'
import { Dayjs } from 'dayjs'
import { formatDate } from '../utils/date'
import { NonNullChain } from 'typescript'
import { useAppSelector } from '../hooks/useAppDispatch'

interface EventFormProps {
  guests: IUser[]
  submit: (event: IEvent) => void
}

const EventForm: FC<EventFormProps> = ({guests, submit}) => {
  const [event, setEvent] = useState<IEvent>({
    author: "",
    date: "",
    description: "",
    guest: "",
  } as IEvent)

  const {user} = useAppSelector(state => state.auth)

  const selectDate = (date: Dayjs | null ) => {
    if (date) {
      setEvent({...event, date: formatDate(date.toDate())})
    }
  }

  const submitForm = () => {
    submit({...event, author: user.username})
    console.log({...event, author: user.username})
  } 

  return (
    <Form onFinish={submitForm} >
      <Form.Item
        label="Название события"
        name="description"
        rules={[rules.required('Обязательное поле')]}
      >
        <Input
          onChange={e => setEvent({...event, description: e.target.value})}
          value={event.description}
        />
      </Form.Item>
      <Form.Item
        label="Дата события"
        name="data"
        rules={[rules.required('Обязательное поле')]}
      >
        <DatePicker 
          onChange={date => selectDate(date)}
        />
      </Form.Item>
      <Form.Item
        label="Выберете гостя"
        name="guest"
      >
        <Select
          onChange={(guest: string) => setEvent({...event, guest})}
          // options={[{ value: 'lucy', label: 'Lucy' }]}
          options={guests.map(g => ({value: g.username, lable: g.username}))}
        />
      </Form.Item>
      <Row justify="end">
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Создать
          </Button>
        </Form.Item>
      </Row>
    </Form>
  )
}

export default EventForm