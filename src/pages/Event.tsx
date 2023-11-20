import { Button, Layout, Modal, Row } from 'antd'
import React, { FC, useEffect, useState } from 'react'
import EventCalendar from '../components/EventCalendar'
import EventForm from '../components/EventForm'
import { useActions } from '../hooks/useActions'
import { useAppSelector } from '../hooks/useAppDispatch'
import { IEvent } from '../models/IEvent'

const Events: FC = () => {
  const { guests, events } = useAppSelector(state => state.event)
  const { user } = useAppSelector(state => state.auth)
  const [modalVisible, setModalVisible] = useState(false)
  const { fetchGuests, createEvent, fetchEvents } = useActions()
  
  useEffect(() => {
    fetchGuests();
    fetchEvents(user.username);
  }, [])

  const addNewEvent = (event: IEvent) => {
    setModalVisible(false);
    createEvent(event)
  }

  return (
    <Layout>
      <EventCalendar events={events} />
      <Row justify="center">
        <Button
          onClick={() => setModalVisible(true)}
        >
          Добавить событие
        </Button>
      </Row>
      <Modal
        title="Добавть событие"
        visible={modalVisible}
        footer={null}
        onCancel={() => setModalVisible(false)}
      >
        <EventForm guests={guests} submit={addNewEvent} />
      </Modal>
    </Layout>
  )
}

export default Events