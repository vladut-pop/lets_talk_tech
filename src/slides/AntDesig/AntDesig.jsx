import React, { useState } from 'react'

import { Grid } from '@material-ui/core'

import 'antd/dist/antd.css'
import { Button, Radio } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'
import moment from 'moment'
import { DatePicker, Space, Timeline } from 'antd'

const AntDesig = () => {
  const [size, setState] = useState('large')

  const handleSizeChange = (e) => {
    setState({ size: e.target.value })
  }

  const { RangePicker } = DatePicker

  function range(start, end) {
    const result = []
    for (let i = start; i < end; i++) {
      result.push(i)
    }
    return result
  }

  function disabledDate(current) {
    // Can not select days before today and today
    return current && current < moment().endOf('day')
  }

  function disabledDateTime() {
    return {
      disabledHours: () => range(0, 24).splice(4, 20),
      disabledMinutes: () => range(30, 60),
      disabledSeconds: () => [55, 56]
    }
  }

  function disabledRangeTime(_, type) {
    if (type === 'start') {
      return {
        disabledHours: () => range(0, 60).splice(4, 20),
        disabledMinutes: () => range(30, 60),
        disabledSeconds: () => [55, 56]
      }
    }
    return {
      disabledHours: () => range(0, 60).splice(20, 4),
      disabledMinutes: () => range(0, 31),
      disabledSeconds: () => [55, 56]
    }
  }

  return (
    <div className='p-3 bg-light' style={{ minHeight:"100vh" }}>
      <div className='mx-auto w-50 mb-5 pt-5'>
        <Grid container spacing={3} alignItems='center' justify='center'>
          <Grid item xs={12} sm>
            <img
              style={{ maxWidth: '175px', minWidth: '75px' }}
              src='https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'
              alt='...'
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm
            style={{
              color: 'rgb(26 43 59)',
              fontFamily: 'Roboto',
              minWidth: '250px'
            }}
          >
            <h2 style={{ letterSpacing: '.7rem' }}>Ant Design</h2>
            <p>
              Ant Design is a set of high-quality React components out of the
              box for building web applications. It is written entirely in
              Typescript to make coding easier and more convenient, while
              minimizing errors.
            </p>
          </Grid>
        </Grid>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <div>
            <Radio.Group value={size} onChange={handleSizeChange}>
              <Radio.Button value='large'>Large</Radio.Button>
              <Radio.Button value='default'>Default</Radio.Button>
              <Radio.Button value='small'>Small</Radio.Button>
            </Radio.Group>
            <br />
            <br />
            <Button type='primary' size={size}>
              Primary
            </Button>
            <Button size={size}>Default</Button>
            <Button type='dashed' size={size}>
              Dashed
            </Button>
            <br />
            <Button type='link' size={size}>
              Link
            </Button>
            <br />
            <Button type='primary' icon={<DownloadOutlined />} size={size} />
            <Button
              type='primary'
              shape='circle'
              icon={<DownloadOutlined />}
              size={size}
            />
            <Button
              type='primary'
              shape='round'
              icon={<DownloadOutlined />}
              size={size}
            />
            <Button
              type='primary'
              shape='round'
              icon={<DownloadOutlined />}
              size={size}
            >
              Download
            </Button>
            <Button type='primary' icon={<DownloadOutlined />} size={size}>
              Download
            </Button>
          </div>
          <div className='py-5'></div>
          <Button type='primary'>Primary</Button>
          <Button type='primary' disabled>
            Primary(disabled)
          </Button>
          <br />
          <Button>Default</Button>
          <Button disabled>Default(disabled)</Button>
          <br />
          <Button type='dashed'>Dashed</Button>
          <Button type='dashed' disabled>
            Dashed(disabled)
          </Button>
          <br />
          <Button type='text'>Text</Button>
          <Button type='text' disabled>
            Text(disabled)
          </Button>
          <br />
          <Button type='link'>Link</Button>
          <Button type='link' disabled>
            Link(disabled)
          </Button>
          <br />
          <Button danger>Danger Default</Button>
          <Button danger disabled>
            Danger Default(disabled)
          </Button>
          <br />
          <Button danger type='text'>
            Danger Text
          </Button>
          <Button danger type='text' disabled>
            Danger Text(disabled)
          </Button>
          <br />
          <Button type='link' danger>
            Danger Link
          </Button>
          <Button type='link' danger disabled>
            Danger Link(disabled)
          </Button>
          <div className='site-button-ghost-wrapper'>
            <Button ghost>Ghost</Button>
            <Button ghost disabled>
              Ghost(disabled)
            </Button>
          </div>

          <div className='py-5'>
            <div>
              <Space direction='vertical' size={12}>
                <DatePicker
                  format='YYYY-MM-DD HH:mm:ss'
                  disabledDate={disabledDate}
                  disabledTime={disabledDateTime}
                  showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
                />
                <DatePicker picker='month' disabledDate={disabledDate} />
                <RangePicker disabledDate={disabledDate} />
                <RangePicker
                  disabledDate={disabledDate}
                  disabledTime={disabledRangeTime}
                  showTime={{
                    hideDisabledOptions: true,
                    defaultValue: [
                      moment('00:00:00', 'HH:mm:ss'),
                      moment('11:59:59', 'HH:mm:ss')
                    ]
                  }}
                  format='YYYY-MM-DD HH:mm:ss'
                />
                <Timeline>
                  <Timeline.Item color='green'>
                    Create a services site 2015-09-01
                  </Timeline.Item>
                  <Timeline.Item color='green'>
                    Create a services site 2015-09-01
                  </Timeline.Item>
                  <Timeline.Item color='red'>
                    <p>Solve initial network problems 1</p>
                    <p>Solve initial network problems 2</p>
                    <p>Solve initial network problems 3 2015-09-01</p>
                  </Timeline.Item>
                </Timeline>
              </Space>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <iframe
            src='https://ant.design/components/overview/'
            title='material_ui'
            className='w-100'
            style={{ height: '600px' }}
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default AntDesig
