import React from 'react'
import Chart from 'react-apexcharts'
import {Link} from 'react-router-dom'

import statusCard from '../assets/JsonData/status-card-data.json'
import Badge from '../components/Badge/Badge'
import StatusCard from '../components/StatusCard/StatusCard'
import Table from '../components/Table/Table'


const chartOptions = {
  series:[{
    name : 'Online Customers',
    data : [40,70,20,90,36,80,30,91,60]
    },
    {
      name: 'Store Customers',
      data : [40,30,70,80,40,16,40,20,55]
    }
  ],
  options : {
    color : ['#6ab01c','#2980b9'],
    chart : {
      background : 'transparent',
    },
    dataLabels : {
      enabled : false
    },
    stroke : {
      curve : 'smooth'
    },
    xaxis : {
      categories : ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep']
    },
    legend:{
      position : 'top'
    },
    grid: {
      show: false
    }
  }

}


const topCustomers = {
  head : [
    'user',
    'total orders',
    'total spending'
  ],
  body : [
    {
      'username': 'Bruce Wayne',
      'order': '120',
      'price': '$40,000',
    },
    {
      'username': 'Clark Kent',
      'order': '49',
      'price': '$35,000',
    },
    {
      'username': 'Diana Prince',
      'order': '52',
      'price': '$26,544'
    },
    {
      'username': 'Hal Jordan',
      'order': '20',
      'price': '$10,397'
    },
    {
      'username': 'Barry Allen',
      'order': '10',
      'price':  '$5,600'
    }
  ]
}

const latestOrders = {
  head: [
      "order id",
      "user",
      "total price",
      "date",
      "status"
  ],
  body: [
      {
          id: "#OD1711",
          user: "john doe",
          date: "17 Jun 2021",
          price: "$900",
          status: "shipping"
      },
      {
          id: "#OD1712",
          user: "frank iva",
          date: "1 Jun 2021",
          price: "$400",
          status: "paid"
      },
      {
          id: "#OD1713",
          user: "anthony baker",
          date: "27 Jun 2021",
          price: "$200",
          status: "pending"
      },
      {
          id: "#OD1712",
          user: "frank iva",
          date: "1 Jun 2021",
          price: "$400",
          status: "paid"
      },
      {
          id: "#OD1713",
          user: "anthony baker",
          date: "27 Jun 2021",
          price: "$200",
          status: "refund"
      }
  ]
}

const orderStatus = {
  'shipping' : 'primary',
  'pending' : 'warning',
  'paid' : 'success',
  'refund' : 'danger'
}


const renderOrderHead = (item, index) => (
  <th key={index}>{item}</th>
)

const renderOrderBody = (item, index) => (
  <tr key={index}>
    <td>{item.id}</td>
    <td>{item.user}</td>
    <td>{item.price}</td>
    <td>{item.date}</td>
    <td>
      <Badge type={orderStatus[item.status]} content={item.status}/>
    </td>
  </tr>

)

const renderCustomerHead = (item, index) => (
  <th key={index}>{item}</th>
)

const renderCustomerBody = (item, index) => (
  <tr key={index}>
    <td>{item.username}</td>
    <td>{item.order}</td>
    <td>{item.price}</td>
  </tr>
)


const Dashboard = () => {
  return (
    <div>
      <h2 className="page-header">Dashboard</h2>
      <div className="row">
        <div className="col-6">
          <div className="row">
            {
              statusCard.map((item, index)=>(
                <div key={index} className="col-6">
                  <StatusCard 
                    icon = {item.icon}
                    count = {item.count}
                    title = {item.title}
                    />
                </div>
              ))
            }
          </div>
        </div>
        
        <div className="col-6">
          <div className="card full-height">
            <Chart 
              options={chartOptions.options}
              series={chartOptions.series}
              type='line'
              height='100%'
              />
          </div>
        </div>

        <div className="col-4">
          <div className="card">
            <div className="card__header">
              <h3>Top Customers</h3>
            </div>
            <div className="card__body">  
              <Table
                headData = {topCustomers.head}
                renderHead = {(item, index)=> renderCustomerHead(item, index)}
                bodyData = {topCustomers.body}
                renderBody = {(item, index)=> renderCustomerBody(item, index)}
              />
            </div>
            <div className="card__footer">
              <Link to='/'>View All</Link>
            </div>
          </div>
        </div>

        <div className="col-8">
          <div className="card">
            <div className="card__header">
              <h3>Latest Orders</h3>
            </div>
            <div className="card__body">
              <Table
                headData = {latestOrders.head}
                renderHead = {(item, index)=> renderOrderHead(item, index)}
                bodyData = {latestOrders.body}
                renderBody = {(item, index)=> renderOrderBody(item, index)}
              />
            </div>
            <div className="card__footer">
              <Link to={'/'}>View All</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard