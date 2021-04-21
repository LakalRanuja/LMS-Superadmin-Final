import { useEffect, useState } from 'react'
import axios from 'axios'
import { Users, Shield, Archive } from 'react-feather'
import StatsWithAreaChart from '@components/widgets/stats/StatsWithAreaChart'

const SubscribersGained = ({ kFormatter }) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get('/card/card-statistics/subscribers').then(res => setData(res.data))
  }, [])

  return data !== null ? (
    <StatsWithAreaChart
      icon={<Archive size={21} />}
      color='primary'
      stats='15'
      statTitle='Schools'
      series={data.series}
      type='area'
    />
  ) : null
}

export default SubscribersGained
